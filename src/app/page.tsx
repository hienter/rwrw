import { Layout } from "@/components/layout"
import { BrandTabs } from "@/components/brand-tabs"

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">가전제품 견적</h2>
          <p className="mt-2 text-gray-600">원하는 브랜드의 가전제품을 선택하여 견적을 확인하세요.</p>
        </div>
        
        <BrandTabs />
      </div>
    </Layout>
  );
}
