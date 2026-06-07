"use client";

import { motion } from "framer-motion";

import { SectionReveal } from "./SectionReveal";

const timer = [
  { value: "02", label: "يوم" },
  { value: "14", label: "ساعة" },
  { value: "36", label: "دقيقة" },
  { value: "09", label: "ثانية" },
];

export function PromoBanner() {
  return (
    <SectionReveal id="offers" className="bg-[#FFF8F0] px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[28px] bg-gradient-to-l from-[#C9748F] via-[#D4AF87] to-[#B98573] px-6 py-10 text-white shadow-[0_24px_54px_rgba(201,116,143,0.25)] sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div>
          <p className="text-sm font-bold opacity-85">عرض محدود</p>
          <h2 className="mt-3 font-[var(--font-doran)] text-3xl font-extrabold leading-tight sm:text-5xl">
            خصم 20% على منتجات العناية
          </h2>
        </div>
        <div className="mt-8 flex flex-col gap-6 lg:mt-0 lg:items-end">
          <div className="grid grid-cols-4 gap-3">
            {timer.map((item) => (
              <div
                key={item.label}
                className="min-w-16 rounded-2xl border border-white/30 bg-white/16 px-3 py-3 text-center backdrop-blur"
              >
                <motion.span
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="block text-2xl font-extrabold"
                >
                  {item.value}
                </motion.span>
                <span className="text-xs font-semibold opacity-80">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <motion.a
            whileTap={{ scale: 0.97 }}
            href="#products"
            className="inline-flex justify-center rounded-full border border-white px-7 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-[#C9748F]"
          >
            اكتشفي العرض
          </motion.a>
        </div>
      </div>
    </SectionReveal>
  );
}

