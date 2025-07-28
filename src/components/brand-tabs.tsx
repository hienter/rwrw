"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { StoreList } from "./store-list"
import { getActiveStoresByBrand } from "@/lib/stores"
import { Store } from "@/lib/supabase"

type Brand = "lg" | "samsung"

interface BrandTabsProps {
  className?: string
  onBrandChange?: (brand: Brand) => void
}

interface StoreDisplay {
  region: string
  name: string
  eventStart: string
  eventEnd: string
}

function formatStoreForDisplay(store: Store): StoreDisplay {
  return {
    region: store.region,
    name: store.name,
    eventStart: store.event_start.replace(/-/g, '.'),
    eventEnd: store.event_end.replace(/-/g, '.')
  }
}

export function BrandTabs({ className, onBrandChange }: BrandTabsProps) {
  const [activeBrand, setActiveBrand] = useState<Brand>("lg")
  const [stores, setStores] = useState<StoreDisplay[]>([])
  const [loading, setLoading] = useState(true)

  const handleBrandChange = async (brand: Brand) => {
    setActiveBrand(brand)
    setLoading(true)
    onBrandChange?.(brand)
    
    const storeData = await getActiveStoresByBrand(brand)
    setStores(storeData.map(formatStoreForDisplay))
    setLoading(false)
  }

  useEffect(() => {
    const loadInitialData = async () => {
      setLoading(true)
      const storeData = await getActiveStoresByBrand("lg")
      setStores(storeData.map(formatStoreForDisplay))
      setLoading(false)
    }
    loadInitialData()
  }, [])

  const handleQuoteRequest = (store: StoreDisplay) => {
    alert(`${store.region} ${store.name}에 견적을 요청합니다.`)
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8">
          <button
            onClick={() => handleBrandChange("lg")}
            className={cn(
              "py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap",
              activeBrand === "lg"
                ? "border-red-500 text-red-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            )}
          >
            LG
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
            삼성
          </button>
        </nav>
      </div>

      <div className="mt-6">
        {loading ? (
          <div className="flex justify-center items-center py-8">
            <div className="text-gray-500">로딩 중...</div>
          </div>
        ) : (
          <>
            {activeBrand === "lg" && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-red-900 mb-2">LG 지점 목록</h3>
                  <p className="text-red-700 text-sm mb-4">행사 기간 중인 LG 지점을 확인하세요.</p>
                </div>
                <StoreList stores={stores} onQuoteRequest={handleQuoteRequest} />
              </div>
            )}
            
            {activeBrand === "samsung" && stores.length > 0 && (
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-900 mb-2">삼성 지점 목록</h3>
                  <p className="text-blue-700 text-sm mb-4">행사 기간 중인 삼성 지점을 확인하세요.</p>
                </div>
                <StoreList stores={stores} onQuoteRequest={handleQuoteRequest} />
              </div>
            )}
            
            {activeBrand === "samsung" && stores.length === 0 && (
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-900">삼성 가전제품</h3>
                <p className="text-blue-700 mt-2">현재 등록된 삼성 지점이 없습니다.</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}