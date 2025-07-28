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

        {/* 최저가 견적 받는 방법 가이드 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center">
            💡 최저가 견적 받는 방법 가이드
          </h3>
          
          <div className="space-y-6">
            {/* 1단계 */}
            <div>
              <h4 className="text-md font-medium text-green-700 mb-3">
                1️⃣ 필요한 제품 선택하기
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 text-sm text-green-600">
                <span className="bg-green-100 px-2 py-1 rounded">📺 TV</span>
                <span className="bg-green-100 px-2 py-1 rounded">❄️ 냉장고</span>
                <span className="bg-green-100 px-2 py-1 rounded">🧺 세탁기</span>
                <span className="bg-green-100 px-2 py-1 rounded">🌪️ 건조기</span>
                <span className="bg-green-100 px-2 py-1 rounded">❄️ 에어컨</span>
                <span className="bg-green-100 px-2 py-1 rounded">🧹 청소기</span>
                <span className="bg-green-100 px-2 py-1 rounded">🤖 로봇청소기</span>
                <span className="bg-green-100 px-2 py-1 rounded">🌬️ 공기청정기</span>
                <span className="bg-green-100 px-2 py-1 rounded">🍽️ 식기세척기</span>
                <span className="bg-green-100 px-2 py-1 rounded">🔥 전기레인지</span>
                <span className="bg-green-100 px-2 py-1 rounded">📱 스마트폰</span>
                <span className="bg-green-100 px-2 py-1 rounded">💻 PC</span>
                <span className="bg-green-100 px-2 py-1 rounded">📱 태블릿</span>
                <span className="bg-green-100 px-2 py-1 rounded">⌚ 웨어러블</span>
                <span className="bg-green-100 px-2 py-1 rounded">📦 기타</span>
              </div>
            </div>

            {/* 2단계 */}
            <div>
              <h4 className="text-md font-medium text-green-700 mb-3">
                2️⃣ 최소 3개 이상 업체에서 견적 받아 비교하기
              </h4>
              <p className="text-sm text-green-600">
                같은 제품이라도 업체마다 가격과 혜택이 다릅니다. 꼼꼼히 비교해보세요!
              </p>
            </div>

            {/* 3단계 */}
            <div>
              <h4 className="text-md font-medium text-green-700 mb-3">
                3️⃣ 다양한 매장 유형에서 견적 받기 (추천)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div className="bg-green-100 p-3 rounded">
                  <span className="font-medium text-green-800">🏢 백화점</span>
                  <p className="text-green-600 mt-1">정품 보장, A/S 우수</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <span className="font-medium text-green-800">🏪 대리점</span>
                  <p className="text-green-600 mt-1">경쟁력 있는 가격</p>
                </div>
                <div className="bg-green-100 p-3 rounded">
                  <span className="font-medium text-green-800">🏬 직영점</span>
                  <p className="text-green-600 mt-1">브랜드 특별 혜택</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <BrandTabs />
      </div>
    </Layout>
  );
}
