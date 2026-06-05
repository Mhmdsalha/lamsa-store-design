"use client";

import Image from "next/image";
import Link from "next/link";
import { ShoppingBag, Star } from "lucide-react";
import { motion } from "framer-motion";

import type { LamsaProduct } from "@/data/lamsa-mock";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCAzMCA0MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMzAnIGhlaWdodD0nNDAnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PScyMScgY3k9JzE0JyByPScxMicgZmlsbD0nI0YzRTVEOCcvPjxjaXJjbGUgY3g9JzExJyBjeT0nMzAnIHI9JzEwJyBmaWxsPScjRjdEOEUzJy8+PC9zdmc+";

interface ProductCardProps {
  product: LamsaProduct;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const productHref = `/products/${product.id}`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ delay: index * 0.05, duration: 0.55 }}
      className="group overflow-hidden rounded-2xl bg-white shadow-[0_4px_24px_rgba(180,120,140,0.10)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_46px_rgba(180,120,140,0.18)]"
    >
      <Link
        href={productHref}
        aria-label={`عرض ${product.name}`}
        className="relative block aspect-[3/4] overflow-hidden bg-[#F3E5D8]"
      >
        <Image
          src="/images/lamsa/beauty-editorial.png"
          alt={product.imageAlt}
          width={600}
          height={800}
          placeholder="blur"
          blurDataURL={blurDataURL}
          style={{ objectPosition: product.objectPosition }}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="pointer-events-none absolute inset-y-[-18%] -right-1/2 w-1/3 rotate-12 bg-gradient-to-l from-transparent via-white/75 to-transparent opacity-0 blur-[2px] transition duration-700 ease-out group-hover:-translate-x-[360%] group-hover:opacity-100" />
        <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/20 opacity-0 transition duration-500 group-hover:opacity-100" />
      </Link>
      <div className="p-4 sm:p-5">
        <p className="text-xs font-semibold uppercase text-[#8A7A75]">
          {product.brand}
        </p>
        <Link href={productHref}>
          <h3 className="mt-2 min-h-12 text-sm font-bold leading-6 text-[#2D2D2D] transition hover:text-[#C9748F] sm:text-base">
            {product.name}
          </h3>
        </Link>
        <div className="mt-3 flex items-center gap-1 text-sm font-semibold text-[#D4AF87]">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <Star key={starIndex} className="size-4 fill-current" />
          ))}
          <span className="mr-1 text-[#8A7A75]">4.5</span>
        </div>
        <div className="mt-3 flex flex-wrap items-baseline gap-2">
          <span className="text-lg font-extrabold text-[#C9748F]">
            {product.price} ر.س
          </span>
          <span className="text-sm text-[#8A7A75] line-through">
            {product.originalPrice} ر.س
          </span>
        </div>
        <div className="mt-4 grid grid-cols-[1fr_auto] gap-2">
          <Link
            href={productHref}
            className="inline-flex items-center justify-center rounded-full border border-[#E7C9D2] px-3 py-3 text-sm font-bold text-[#2D2D2D] transition hover:border-[#C9748F] hover:text-[#C9748F]"
          >
            عرض المنتج
          </Link>
          <motion.button
            whileTap={{ scale: 0.97 }}
            type="button"
            aria-label="أضف للسلة"
            className="grid size-12 place-items-center rounded-full bg-[#2D2D2D] text-white transition hover:bg-[#C9748F]"
          >
            <ShoppingBag className="size-4" />
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
