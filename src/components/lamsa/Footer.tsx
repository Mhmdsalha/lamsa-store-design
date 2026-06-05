"use client";

import { Instagram, Music2, Send, Twitter } from "lucide-react";
import { motion } from "framer-motion";

import { footerColumns } from "@/data/lamsa-mock";

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.1fr_1fr_1fr]">
        <div>
          <h2 className="font-[var(--font-doran)] text-4xl font-extrabold text-[#D4AF87]">
            لمسة
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
            جمالك، لمستنا. تجربة بورتفوليو عربية لمتجر تجميل فاخر بتفاصيل
            هادئة ومساحات مدروسة.
          </p>
          <div className="mt-6 flex gap-3">
            {[Instagram, Music2, Send, Twitter].map((Icon, index) => (
              <button
                key={index}
                type="button"
                aria-label="حساب اجتماعي"
                className="grid size-11 place-items-center rounded-full bg-white/10 text-white transition hover:bg-[#C9748F]"
              >
                <Icon className="size-5" />
              </button>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <div key={column.title}>
            <h3 className="text-lg font-bold text-white">{column.title}</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {column.links.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-[#D4AF87]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="text-lg font-bold text-white">النشرة البريدية</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">
            اختيارات جمال شهرية، عروض محدودة، وروتين عناية يلائم ذوقك.
          </p>
          <form className="mt-5 flex overflow-hidden rounded-full bg-white p-1">
            <input
              type="email"
              aria-label="البريد الإلكتروني"
              placeholder="بريدك الإلكتروني"
              className="min-w-0 flex-1 border-0 bg-transparent px-4 text-sm text-[#2D2D2D] outline-none placeholder:text-[#8A7A75] focus:ring-0"
            />
            <motion.button
              whileTap={{ scale: 0.97 }}
              type="button"
              className="rounded-full bg-[#C9748F] px-5 py-3 text-sm font-bold text-white"
            >
              اشتركي
            </motion.button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-white/55">
        حقوق النشر © 2026 لمسة
      </div>
    </footer>
  );
}
