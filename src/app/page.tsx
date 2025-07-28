import { Layout } from "@/components/layout"
import { BrandTabs } from "@/components/brand-tabs"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">행사매장 모아보기</h2>
          <p className="mt-2 text-gray-600">현재 진행 중인 가전제품 행사 매장을 한눈에 확인하세요.</p>
        </div>

        {/* 중립성 안내 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                🤝 중립적인 서비스 안내
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <p className="mb-2">
                  저희는 <strong>LG나 삼성 그 어느 업체로부터도 후원이나 광고비를 받지 않습니다.</strong>
                </p>
                <p>
                  순수하게 소비자가 <strong>최저가로 가전제품을 구매</strong>할 수 있도록 돕는 것이 목표입니다. 
                  안심하고 이용하시어 최고의 혜택을 받으세요! 💪
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <BrandTabs />
      </div>
    </Layout>
  );
}
