import type { Metadata } from "next";

import { BestSellers } from "@/components/lamsa/BestSellers";
import { Categories } from "@/components/lamsa/Categories";
import { Footer } from "@/components/lamsa/Footer";
import { Header } from "@/components/lamsa/Header";
import { HeroBanner } from "@/components/lamsa/HeroBanner";
import { ProductSections } from "@/components/lamsa/ProductSections";
import { PromoBanner } from "@/components/lamsa/PromoBanner";
import { TrustBar } from "@/components/lamsa/TrustBar";

export const metadata: Metadata = {
  title: "لمسة | متجر تجميل فاخر",
  description:
    "صفحة بورتفوليو عربية لمتجر تجميل فاخر مستوحاة من تصميم Google Stitch.",
};

export default function LamsaPage() {
  return (
    <main className="min-h-[100svh] overflow-x-hidden bg-[#FFF8F0] font-cairo text-[#2D2D2D]">
      <Header />
      <HeroBanner />
      <Categories />
      <BestSellers />
      <ProductSections />
      <PromoBanner />
      <TrustBar />
      <Footer />
      <div className="fixed bottom-4 left-4 z-30 hidden rounded-full border border-[#E7C9D2] bg-white/90 px-4 py-2 text-xs font-bold text-[#8A7A75] shadow-[0_4px_24px_rgba(180,120,140,0.10)] backdrop-blur sm:block">
        معرض أعمال — تصميم تجريبي
      </div>
    </main>
  );
}
