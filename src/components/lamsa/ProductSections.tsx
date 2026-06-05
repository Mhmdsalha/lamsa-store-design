import Image from "next/image";
import { ArrowLeft, Package } from "lucide-react";

import { products, sections } from "@/data/lamsa-mock";
import { ProductCard } from "./ProductCard";
import { SectionReveal } from "./SectionReveal";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAnIGhlaWdodD0nMTcnIHZpZXdCb3g9JzAgMCA0MCAxNycgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nNDAnIGhlaWdodD0nMTcnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PSczMicgY3k9JzgnIHI9JzEyJyBmaWxsPScjRjNFNUQ4Jy8+PGNpcmNsZSBjeD0nMTInIGN5PScxMCcgcj0nMTAnIGZpbGw9JyNGN0Q4RTMnLz48L3N2Zz4=";

export function ProductSections() {
  return (
    <div className="bg-[#FFF8F0]">
      {sections.map((section) => {
        const sectionProducts = products.filter(
          (product) => product.sectionId === section.id,
        );
        const showCount = section.id === "perfume" || section.id === "hair";

        return (
          <SectionReveal
            key={section.id}
            id={section.id}
            className="bg-[#FFF8F0] px-4 py-16 sm:px-6 lg:px-8"
          >
            <div className="mx-auto max-w-7xl">
              <div className="relative overflow-hidden rounded-[28px] bg-[#2D2D2D] shadow-[0_24px_54px_rgba(180,120,140,0.16)]">
                <Image
                  src={section.bannerImage}
                  alt={section.imageAlt}
                  width={1600}
                  height={700}
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  className="h-[360px] w-full object-cover opacity-75 sm:h-[420px] lg:h-[390px]"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-[#2D2D2D]/78 via-[#2D2D2D]/34 to-transparent" />
                <div className="absolute inset-0 flex items-center">
                  <div className="max-w-xl px-6 text-white sm:px-10 lg:px-14">
                    <p className="mb-3 text-sm font-bold text-[#F3E5D8]">
                      {section.eyebrow}
                    </p>
                    <h2 className="text-4xl font-extrabold leading-tight sm:text-6xl">
                      {section.title}
                    </h2>
                    {showCount ? (
                      <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/16 px-4 py-2 text-sm font-bold text-white backdrop-blur">
                        <Package className="size-4" />
                        {sectionProducts.length} منتجات
                      </span>
                    ) : null}
                    <p className="mt-5 max-w-lg text-base leading-8 text-white/82">
                      {section.description}
                    </p>
                    <a
                      href={`#${section.id}-products`}
                      className="mt-7 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#2D2D2D] transition hover:-translate-y-0.5 hover:text-[#C9748F]"
                    >
                      {section.cta}
                      <ArrowLeft className="size-4" />
                    </a>
                  </div>
                </div>
              </div>

              <div
                id={`${section.id}-products`}
                className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-7"
              >
                {sectionProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </SectionReveal>
        );
      })}
    </div>
  );
}
