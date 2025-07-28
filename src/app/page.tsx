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
        
        <BrandTabs />
      </div>
    </Layout>
  );
}
