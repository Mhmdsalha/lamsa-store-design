import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BadgePercent, Minus, Plus, ShieldCheck, Trash2 } from "lucide-react";

import { Footer } from "@/components/lamsa/Footer";
import { Header } from "@/components/lamsa/Header";
import { cartItems, products } from "@/data/lamsa-mock";

export const metadata: Metadata = {
  title: "السلة | لمسة",
  description: "سلة شراء تجريبية لمتجر لمسة الفاخر.",
};

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PScxNScgY3k9JzE1JyByPScxMicgZmlsbD0nI0YzRTVEOCcvPjwvc3ZnPg==";

export default function LamsaCartPage() {
  const items = cartItems
    .map((item) => {
      const product = products.find((candidate) => candidate.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean);

  const subtotal = items.reduce(
    (total, item) => total + item!.product.price * item!.quantity,
    0,
  );
  const discount = 46;
  const shipping = subtotal >= 200 ? 0 : 25;
  const total = subtotal - discount + shipping;

  return (
    <main className="min-h-[100svh] overflow-x-hidden bg-[#FFF8F0] font-cairo text-[#2D2D2D]">
      <Header />
      <section className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-[#8A7A75] shadow-[0_4px_24px_rgba(180,120,140,0.10)] transition hover:text-[#C9748F]"
          >
            <ArrowRight className="size-4" />
            العودة للمتجر
          </Link>

          <div className="mb-10">
            <p className="text-sm font-bold text-[#C9748F]">سلة تجريبية</p>
            <h1 className="mt-3 font-[var(--font-doran)] text-5xl font-extrabold leading-tight text-[#2D2D2D] sm:text-6xl">
              سلة مشترياتك
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[#8A7A75]">
              راجعي اختياراتك قبل إتمام الطلب. هذه الصفحة جزء من عرض بورتفوليو
              ولا تنفذ عملية دفع حقيقية.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              {items.map((item) => (
                <article
                  key={item!.product.id}
                  className="grid gap-4 rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(180,120,140,0.10)] sm:grid-cols-[132px_1fr_auto] sm:items-center"
                >
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-[#F3E5D8]">
                    <Image
                      src="/images/lamsa/beauty-editorial.png"
                      alt={item!.product.imageAlt}
                      width={300}
                      height={300}
                      placeholder="blur"
                      blurDataURL={blurDataURL}
                      style={{ objectPosition: item!.product.objectPosition }}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase text-[#8A7A75]">
                      {item!.product.brand}
                    </p>
                    <h2 className="mt-2 text-lg font-extrabold text-[#2D2D2D]">
                      {item!.product.name}
                    </h2>
                    <p className="mt-2 text-sm text-[#8A7A75]">
                      توصيل فاخر بتغليف وردي وعبوة هدية اختيارية.
                    </p>
                    <button
                      type="button"
                      className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-[#C9748F]"
                    >
                      <Trash2 className="size-4" />
                      إزالة
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="inline-flex items-center rounded-full border border-[#E7C9D2] bg-[#FFF8F0] p-1">
                      <button
                        type="button"
                        aria-label="زيادة الكمية"
                        className="grid size-9 place-items-center rounded-full bg-white text-[#C9748F]"
                      >
                        <Plus className="size-4" />
                      </button>
                      <span className="min-w-10 text-center text-sm font-extrabold">
                        {item!.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="تقليل الكمية"
                        className="grid size-9 place-items-center rounded-full bg-white text-[#C9748F]"
                      >
                        <Minus className="size-4" />
                      </button>
                    </div>
                    <p className="text-lg font-extrabold text-[#2D2D2D]">
                      {item!.product.price * item!.quantity} ر.س
                    </p>
                  </div>
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-2xl bg-white p-5 shadow-[0_4px_24px_rgba(180,120,140,0.10)] lg:sticky lg:top-28">
              <h2 className="font-[var(--font-doran)] text-3xl font-extrabold text-[#2D2D2D]">
                ملخص الطلب
              </h2>
              <div className="mt-5 rounded-2xl border border-[#E7C9D2] bg-[#FFF8F0] p-3">
                <label className="mb-2 block text-sm font-bold text-[#8A7A75]">
                  كود الخصم
                </label>
                <div className="flex gap-2">
                  <input
                    defaultValue="LAMSA20"
                    className="min-w-0 flex-1 rounded-full border border-[#E7C9D2] bg-white px-4 py-3 text-sm font-bold text-[#2D2D2D] focus:border-[#C9748F] focus:ring-[#C9748F]"
                  />
                  <button
                    type="button"
                    className="rounded-full bg-[#2D2D2D] px-5 text-sm font-bold text-white"
                  >
                    تطبيق
                  </button>
                </div>
              </div>

              <div className="mt-6 space-y-3 text-sm">
                <SummaryRow label="المجموع الفرعي" value={`${subtotal} ر.س`} />
                <SummaryRow label="الخصم" value={`-${discount} ر.س`} />
                <SummaryRow label="الشحن" value={shipping === 0 ? "مجاني" : `${shipping} ر.س`} />
              </div>
              <div className="mt-6 border-t border-[#E7C9D2] pt-5">
                <SummaryRow label="الإجمالي" value={`${total} ر.س`} strong />
              </div>

              <button
                type="button"
                className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#C9748F] to-[#D4AF87] px-6 py-4 text-base font-extrabold text-white shadow-[0_16px_32px_rgba(201,116,143,0.24)]"
              >
                <ShieldCheck className="size-5" />
                إتمام الطلب
              </button>
              <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-bold text-[#8A7A75]">
                <BadgePercent className="size-4 text-[#C9748F]" />
                الدفع والتوصيل للعرض فقط
              </p>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

function SummaryRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between gap-4 ${
        strong ? "text-xl font-extrabold text-[#2D2D2D]" : "text-[#8A7A75]"
      }`}
    >
      <span>{label}</span>
      <span className={strong ? "text-[#C9748F]" : "font-bold text-[#2D2D2D]"}>
        {value}
      </span>
    </div>
  );
}
