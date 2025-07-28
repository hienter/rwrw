"use client"

import { useState, useEffect, useCallback } from "react"
import { cn } from "@/lib/utils"
import { StoreList } from "./store-list"
import { Filters } from "./filters"
import { getActiveStoresByBrand, getAllActiveStores, getUniqueRegions, incrementClickCount } from "@/lib/stores"
import { Store } from "@/lib/supabase"

type Brand = "all" | "lg" | "samsung"

interface BrandTabsProps {
  className?: string
  onBrandChange?: (brand: Brand) => void
}

interface StoreDisplay {
  region: string
  name: string
  eventStart: string
  eventEnd: string
  brand?: string
}

function formatStoreForDisplay(store: Store): StoreDisplay {
  return {
    region: store.region,
    name: store.name,
    eventStart: store.event_start.replace(/-/g, '.'),
    eventEnd: store.event_end.replace(/-/g, '.'),
    brand: store.brand
  }
}

export function BrandTabs({ className, onBrandChange }: BrandTabsProps) {
  const [activeBrand, setActiveBrand] = useState<Brand>("all")
  const [stores, setStores] = useState<StoreDisplay[]>([])
  const [loading, setLoading] = useState(true)
  const [regions, setRegions] = useState<string[]>([])
  const [selectedRegion, setSelectedRegion] = useState<string>("all")
  const [sortBy, setSortBy] = useState<'click_count' | 'event_end'>('click_count')

  const loadStores = useCallback(async () => {
    setLoading(true)
    
    let storeData: Store[] = []
    if (activeBrand === "all") {
      storeData = await getAllActiveStores(sortBy, selectedRegion)
    } else {
      storeData = await getActiveStoresByBrand(activeBrand, sortBy, selectedRegion)
    }
    
    setStores(storeData.map(formatStoreForDisplay))
    setLoading(false)
  }, [activeBrand, sortBy, selectedRegion])

  const handleBrandChange = async (brand: Brand) => {
    setActiveBrand(brand)
    onBrandChange?.(brand)
    await loadStores()
  }

  useEffect(() => {
    const loadInitialData = async () => {
      // 지역 목록 로드
      const regionData = await getUniqueRegions()
      setRegions(regionData)
    }
    loadInitialData()
  }, [])

  useEffect(() => {
    loadStores()
  }, [loadStores])

  const handleQuoteRequest = async (store: StoreDisplay) => {
    // 클릭 수 증가
    await incrementClickCount(store.name, store.region)
    
    // Google Analytics 이벤트 추적
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'quote_request', {
        brand: store.brand,
        store_name: store.name,
        store_region: store.region,
        event_category: 'engagement'
      })
    }

    if (store.brand === 'samsung') {
      window.open('https://www.samsungstore.com/customer/reserveVisitStore.sesc', '_blank')
    } else if (store.brand === 'lg') {
      window.open('https://bestshop.lge.co.kr/counselReserve/main/MC11420001', '_blank')
    } else {
      alert(`${store.region} ${store.name}에 견적을 요청합니다.`)
    }
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => handleBrandChange("all")}
            className={cn(
              "py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap",
              activeBrand === "all"
                ? "border-purple-500 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            전체보기
          </button>
          <button
            onClick={() => handleBrandChange("lg")}
            className={cn(
              "py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap",
              activeBrand === "lg"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            LG 베스트샵
          </button>
          <button
            onClick={() => handleBrandChange("samsung")}
            className={cn(
              "py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap",
              activeBrand === "samsung"
                ? "border-blue-500 text-blue-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            삼성스토어
          </button>
        </nav>
      </div>

      {/* 필터 및 정렬 */}
      <div className="mt-4">
        <Filters
          regions={regions}
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          sortBy={sortBy}
          onSortChange={setSortBy}
          showSort={true}
        />
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="text-gray-500">로딩 중...</div>
          </div>
        ) : (
          <>
            {activeBrand === "all" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-purple-900 mb-2">전체 매장 목록</h3>
                  <p className="text-purple-700 text-sm mb-4">현재 행사 중인 모든 매장을 확인하세요.</p>
                </div>
                <StoreList stores={stores} onQuoteRequest={handleQuoteRequest} showBrand={true} />
              </div>
            )}
            
            {activeBrand === "lg" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">LG 베스트샵 목록</h3>
                  <p className="text-red-700 text-sm mb-4">행사 기간 중인 LG 베스트샵을 확인하세요.</p>
                </div>
                <StoreList stores={stores} onQuoteRequest={handleQuoteRequest} />
              </div>
            )}
            
            {activeBrand === "samsung" && stores.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">삼성스토어 목록</h3>
                  <p className="text-blue-700 text-sm mb-4">행사 기간 중인 삼성스토어를 확인하세요.</p>
                </div>
                <StoreList stores={stores} onQuoteRequest={handleQuoteRequest} />
              </div>
            )}
            
            {activeBrand === "samsung" && stores.length === 0 && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900">삼성스토어</h3>
                <p className="text-blue-700 mt-2">현재 등록된 삼성스토어가 없습니다.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}