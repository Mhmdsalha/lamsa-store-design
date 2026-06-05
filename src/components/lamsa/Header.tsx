"use client";

import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import { navItems } from "@/data/lamsa-mock";

export function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerBackground = useTransform(
    scrollY,
    [0, 50],
    ["rgba(255, 248, 240, 0.72)", "rgba(255, 248, 240, 0.94)"],
  );
  const headerShadow = useTransform(
    scrollY,
    [0, 50],
    ["0 0 0 rgba(180,120,140,0)", "0 14px 40px rgba(180,120,140,0.10)"],
  );

  return (
    <>
      <div className="bg-[#2D2D2D] px-4 py-2 text-center text-xs font-medium text-white sm:text-sm">
        شحن مجاني للطلبات فوق 200 ريال
      </div>
      <motion.header
        style={{ background: headerBackground, boxShadow: headerShadow }}
        className="sticky top-0 z-40 border-b border-[#F0D6DE]/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <button
            type="button"
            aria-label="فتح القائمة"
            onClick={() => setDrawerOpen(true)}
            className="grid size-11 place-items-center rounded-full border border-[#E7C9D2] bg-white/70 text-[#2D2D2D] transition hover:border-[#C9748F] hover:text-[#C9748F] lg:hidden"
          >
            <Menu className="size-5" />
          </button>

          <a
            href="#top"
            className="font-[var(--font-doran)] text-3xl font-extrabold text-[#D4AF87] sm:text-4xl"
          >
            لمسة
          </a>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-[#5C4D49] lg:flex">
            {navItems.map((item) => (
              <a
              key={item.label}
                href={item.href}
                className="transition hover:text-[#C9748F]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <IconButton label="بحث" icon={<Search className="size-5" />} />
            <IconButton label="المفضلة" icon={<Heart className="size-5" />} />
            <Link
              href="/cart"
              aria-label="السلة"
              className="relative grid size-11 place-items-center rounded-full border border-[#E7C9D2] bg-white/80 text-[#2D2D2D] transition hover:-translate-y-0.5 hover:border-[#C9748F] hover:text-[#C9748F]"
            >
              <ShoppingBag className="size-5" />
              <span className="absolute -left-1 -top-1 grid size-5 place-items-center rounded-full bg-[#C9748F] text-[11px] font-bold text-white">
                3
              </span>
            </Link>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {drawerOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#2D2D2D]/30 backdrop-blur-sm lg:hidden"
            onClick={() => setDrawerOpen(false)}
          >
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="mr-auto h-full w-80 max-w-[86vw] bg-[#FFF8F0] p-6 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mb-10 flex items-center justify-between">
                <span className="font-[var(--font-doran)] text-3xl font-extrabold text-[#D4AF87]">
                  لمسة
                </span>
                <button
                  type="button"
                  aria-label="إغلاق القائمة"
                  onClick={() => setDrawerOpen(false)}
                  className="grid size-10 place-items-center rounded-full bg-white text-[#2D2D2D]"
                >
                  <X className="size-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-4 text-lg font-semibold text-[#2D2D2D]">
                {navItems.map((item) => (
                  <a
                  key={item.label}
                    href={item.href}
                    onClick={() => setDrawerOpen(false)}
                    className="rounded-2xl bg-white px-5 py-4 transition hover:text-[#C9748F]"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </motion.aside>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}

function IconButton({
  label,
  icon,
}: {
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="hidden size-11 place-items-center rounded-full border border-[#E7C9D2] bg-white/80 text-[#2D2D2D] transition hover:-translate-y-0.5 hover:border-[#C9748F] hover:text-[#C9748F] sm:grid"
    >
      {icon}
    </button>
  );
}
