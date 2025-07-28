import { Layout } from "@/components/layout"
import { BrandTabs } from "@/components/brand-tabs"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* 중립성 안내 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <div className="text-sm text-blue-700">
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

        <div>
          <h2 className="text-3xl font-bold text-gray-900">행사매장 모아보기</h2>
          <p className="mt-2 text-gray-600">현재 진행 중인 가전제품 행사 매장을 한눈에 확인하세요.</p>
        </div>

        {/* 최저가 견적 받는 방법 가이드 */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            💡 최저가 견적 받는 방법 가이드
          </h3>
          
          <div className="space-y-6">
            {/* 1단계 */}
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">
                1️⃣ 필요한 제품 선택하기
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                필요한 가전을 먼저 추리고 견적을 받으시면 훨씬 빠르게 일이 진행됩니다. 모델명은 굳이 정하지 않아도 됩니다. 오히려 모델을 정하면 특가 이벤트를 놓칠수 있어서 모델은 정하지 않고 매니저와 상담해서 모델을 정하는걸 추천합니다.
              </p>
              <p className="text-xs text-gray-400 mt-2">
                💡 어려우시다면 TV, 냉장고, 세탁기, 건조기, 에어컨, 시스템에어컨, 청소기, 로봇청소기, 공기청정기, 식기세척기, 전기레인지(인덕션), 정수기 중에서 골라보세요.
              </p>
            </div>

            {/* 2단계 */}
            <div>
              <h4 className="text-md font-medium text-gray-700 mb-3">
                2️⃣ 최소 3개 이상 업체에서 견적받기
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                대리점, 직영점, 백화점이 가격 구조가 다르니 최소 이 3개에 견적을 받는걸 추천합니다.
              </p>
            </div>

          </div>
        </div>
        
        <BrandTabs />
      </div>
    </Layout>
  );
}
