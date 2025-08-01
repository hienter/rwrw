import { Button } from "@/components/ui/button"

interface Store {
  region: string
  name: string
  eventStart: string
  eventEnd: string
  brand?: string
}

interface StoreListProps {
  stores: Store[]
  className?: string
  onQuoteRequest?: (store: Store) => void
  showBrand?: boolean
}

export function StoreList({ stores, className, onQuoteRequest, showBrand = false }: StoreListProps) {
  return (
    <div className={`w-full ${className || ''}`}>
      {/* Desktop view */}
      <div className="hidden md:block overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead className="bg-gray-50">
            <tr>
              {showBrand && (
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  브랜드
                </th>
              )}
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                지역
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                지점명
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                행사 기간
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                견적 요청
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {stores.map((store, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {showBrand && (
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      store.brand === 'lg' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {store.brand === 'lg' ? 'LG' : '삼성'}
                    </span>
                  </td>
                )}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {store.region}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {store.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {store.eventStart} ~ {store.eventEnd}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <Button 
                    size="sm" 
                    onClick={() => onQuoteRequest?.(store)}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    견적 요청하기
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile view */}
      <div className="md:hidden space-y-3">
        {stores.map((store, index) => (
          <div key={index} className="bg-white rounded-lg shadow border border-gray-200 p-4">
            <div className="flex justify-between items-start mb-3">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-medium text-gray-900">{store.name}</h4>
                  {showBrand && (
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      store.brand === 'lg' 
                        ? 'bg-red-100 text-red-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {store.brand === 'lg' ? 'LG' : '삼성'}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{store.region}</p>
              </div>
            </div>
            <div className="text-sm text-gray-600 mb-3">
              <span className="font-medium">행사 기간:</span> {store.eventStart} ~ {store.eventEnd}
            </div>
            <Button 
              size="sm" 
              onClick={() => onQuoteRequest?.(store)}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              견적 요청하기
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}