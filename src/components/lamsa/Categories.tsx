"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { categories } from "@/data/lamsa-mock";
import { SectionReveal } from "./SectionReveal";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIHZpZXdCb3g9JzAgMCAzMCAzMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMzAnIGhlaWdodD0nMzAnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PScxNScgY3k9JzE1JyByPScxMicgZmlsbD0nI0YzRTVEOCcvPjwvc3ZnPg==";

export function Categories() {
  return (
    <SectionReveal className="bg-[#FFF8F0] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:gap-8">
          {categories.map((category, index) => (
            <motion.a
              key={category.label}
              href={`#${category.id}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.1, duration: 0.55 }}
              className="group text-center"
            >
              <div
                className={`mx-auto grid aspect-square w-full max-w-[190px] place-items-center overflow-hidden rounded-full bg-gradient-to-br ${category.tone} p-3 shadow-[0_4px_24px_rgba(180,120,140,0.10)] transition duration-300 group-hover:scale-105 group-hover:shadow-[0_20px_40px_rgba(180,120,140,0.16)]`}
              >
                <div className="size-full overflow-hidden rounded-full bg-white">
                  <Image
                    src="/images/lamsa/beauty-editorial.png"
                    alt={category.imageAlt}
                    width={300}
                    height={300}
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <span className="mt-4 block text-base font-bold text-[#2D2D2D]">
                {category.label}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}

