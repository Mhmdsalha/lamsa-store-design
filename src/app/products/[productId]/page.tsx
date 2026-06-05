import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Star,
  Truck,
} from "lucide-react";

import { Footer } from "@/components/lamsa/Footer";
import { Header } from "@/components/lamsa/Header";
import { ProductCard } from "@/components/lamsa/ProductCard";
import { products, sections } from "@/data/lamsa-mock";

interface ProductPageProps {
  params: Promise<{
    productId: string;
  }>;
}

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCAzMCA0MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMzAnIGhlaWdodD0nNDAnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PScyMScgY3k9JzE0JyByPScxMicgZmlsbD0nI0YzRTVEOCcvPjxjaXJjbGUgY3g9JzExJyBjeT0nMzAnIHI9JzEwJyBmaWxsPScjRjdEOEUzJy8+PC9zdmc+";

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { productId } = await params;
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    return {
      title: "منتج غير موجود",
    };
  }

  return {
    title: product.name,
    description: `${product.name} من ${product.brand} في متجر لمسة التجريبي.`,
  };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = products.find((item) => item.id === Number(productId));

  if (!product) {
    notFound();
  }

  const section = sections.find((item) => item.id === product.sectionId);
  const relatedProducts = products
    .filter((item) => item.sectionId === product.sectionId && item.id !== product.id)
    .slice(0, 4);

  return (
    <main className="min-h-[100svh] overflow-x-hidden bg-[#FFF8F0] font-cairo text-[#2D2D2D]">
      <Header />
      <section className="px-4 py-7 sm:px-6 lg:px-8 lg:py-9">
        <div className="mx-auto max-w-6xl">
          <Link
            href={`/#${product.sectionId}`}
            className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#8A7A75] shadow-[0_4px_24px_rgba(180,120,140,0.10)] transition hover:text-[#C9748F]"
          >
            <ArrowRight className="size-4" />
            العودة إلى {section?.title ?? "المتجر"}
          </Link>

          <div className="grid gap-7 lg:grid-cols-[0.78fr_1fr] lg:items-start">
            <div className="mx-auto w-full max-w-[430px]">
              <div
                data-product-main-image
                className="relative aspect-[5/6] overflow-hidden rounded-[28px] bg-white shadow-[0_18px_42px_rgba(180,120,140,0.14)]"
              >
                <Image
                  src="/images/lamsa/beauty-editorial.png"
                  alt={product.imageAlt}
                  width={760}
                  height={950}
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  style={{ objectPosition: product.objectPosition }}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-3">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="aspect-square overflow-hidden rounded-2xl border border-[#E7C9D2] bg-white"
                  >
                    <Image
                      src="/images/lamsa/beauty-editorial.png"
                      alt={product.imageAlt}
                      width={180}
                      height={180}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      style={{ objectPosition: product.objectPosition }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[28px] bg-white p-5 shadow-[0_4px_24px_rgba(180,120,140,0.10)] sm:p-7 lg:p-8">
              <p className="text-sm font-bold uppercase text-[#C9748F]">
                {product.brand}
              </p>
              <h1
                data-product-title
                className="mt-3 text-4xl font-extrabold leading-tight text-[#2D2D2D] sm:text-5xl"
              >
                {product.name}
              </h1>
              <div className="mt-4 flex flex-wrap items-center gap-2 text-[#D4AF87]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="size-5 fill-current" />
                ))}
                <span className="mr-2 text-sm font-bold text-[#8A7A75]">
                  4.5 تقييم تجريبي
                </span>
              </div>

              <p className="mt-5 max-w-2xl text-base leading-8 text-[#8A7A75]">
                تركيبة مختارة بعناية تمنحك لمسة فاخرة في روتينك اليومي، مع
                تغليف أنيق وتجربة عرض مصممة لواجهة متجر تجميل عربية راقية.
              </p>

              <div className="mt-6 flex flex-wrap items-end gap-3">
                <span className="text-3xl font-extrabold text-[#C9748F]">
                  {product.price} ر.س
                </span>
                <span className="text-lg font-bold text-[#8A7A75] line-through">
                  {product.originalPrice} ر.س
                </span>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <div className="inline-flex items-center rounded-full border border-[#E7C9D2] bg-[#FFF8F0] p-1">
                  <button
                    type="button"
                    aria-label="زيادة الكمية"
                    className="grid size-10 place-items-center rounded-full bg-white text-[#C9748F]"
                  >
                    <Plus className="size-4" />
                  </button>
                  <span className="min-w-12 text-center text-sm font-extrabold">
                    1
                  </span>
                  <button
                    type="button"
                    aria-label="تقليل الكمية"
                    className="grid size-10 place-items-center rounded-full bg-white text-[#C9748F]"
                  >
                    <Minus className="size-4" />
                  </button>
                </div>
                <button
                  type="button"
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#C9748F] to-[#D4AF87] px-7 text-base font-extrabold text-white shadow-[0_16px_32px_rgba(201,116,143,0.24)] sm:flex-none"
                >
                  <ShoppingBag className="size-5" />
                  أضف للسلة
                </button>
                <button
                  type="button"
                  aria-label="إضافة للمفضلة"
                  className="grid size-12 place-items-center rounded-full border border-[#E7C9D2] text-[#C9748F]"
                >
                  <Heart className="size-5" />
                </button>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#FFF8F0] p-4">
                  <Truck className="mb-3 size-5 text-[#C9748F]" />
                  <p className="text-sm font-extrabold text-[#2D2D2D]">
                    شحن سريع خلال 24 ساعة
                  </p>
                </div>
                <div className="rounded-2xl bg-[#FFF8F0] p-4">
                  <ShieldCheck className="mb-3 size-5 text-[#C9748F]" />
                  <p className="text-sm font-extrabold text-[#2D2D2D]">
                    دفع آمن وتجربة تجريبية
                  </p>
                </div>
              </div>
            </div>
          </div>

          {relatedProducts.length ? (
            <section className="mt-14">
              <div className="mb-8">
                <p className="text-sm font-bold text-[#C9748F]">
                  من نفس القسم
                </p>
                <h2 className="mt-2 text-4xl font-extrabold text-[#2D2D2D]">
                  قد يعجبك أيضًا
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
                {relatedProducts.map((item, index) => (
                  <ProductCard key={item.id} product={item} index={index} />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </section>
      <Footer />
    </main>
  );
}
