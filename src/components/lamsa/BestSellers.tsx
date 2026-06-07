import { products } from "@/data/lamsa-mock";
import { ProductCard } from "./ProductCard";
import { SectionReveal } from "./SectionReveal";

export function BestSellers() {
  const bestSellers = products.slice(0, 8);

  return (
    <SectionReveal
      id="products"
      className="bg-[#FFF8F0] px-4 py-12 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="font-[var(--font-doran)] text-4xl font-extrabold text-[#2D2D2D] sm:text-5xl">
            الأكثر مبيعًا
          </h2>
          <span className="mx-auto mt-4 block h-1 w-24 rounded-full bg-gradient-to-l from-[#C9748F] to-[#D4AF87]" />
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
          {bestSellers.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

