"use client";

import Image from "next/image";
import { ArrowLeft, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import { badgeItems } from "@/data/lamsa-mock";

const blurDataURL =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMzInIGhlaWdodD0nNDAnIHZpZXdCb3g9JzAgMCAzMiA0MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMzInIGhlaWdodD0nNDAnIGZpbGw9JyNGRkY4RjAnLz48Y2lyY2xlIGN4PScyNCcgY3k9JzEyJyByPScxMicgZmlsbD0nI0YzRTVEOCcvPjxjaXJjbGUgY3g9JzEwJyBjeT0nMjgnIHI9JzEyJyBmaWxsPScjRjdEOEUzJy8+PC9zdmc+";

const heroSlides = [
  {
    src: "/images/lamsa/beauty-editorial.png",
    alt: "منتجات تجميل فاخرة لمتجر لمسة",
    position: "50% 50%",
  },
  {
    src: "/images/lamsa/perfume-banner.png",
    alt: "عطور فاخرة بدرجات وردية وذهبية",
    position: "18% 50%",
  },
  {
    src: "/images/lamsa/skincare-makeup-banner.png",
    alt: "منتجات عناية ومكياج فاخرة",
    position: "22% 50%",
  },
];

export function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-[#FFF8F0] px-4 pb-8 pt-5 sm:px-6 sm:pt-7 lg:px-8 lg:pb-8 lg:pt-5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(212,175,135,0.22),transparent_30%),radial-gradient(circle_at_86%_12%,rgba(201,116,143,0.18),transparent_28%)]" />
      <div className="relative mx-auto grid w-full max-w-7xl min-w-0 justify-items-center gap-6 lg:grid-cols-[1fr_0.9fr] lg:items-start">
        <motion.div
          initial={false}
          className="w-full min-w-0 max-w-sm justify-self-center text-center sm:max-w-2xl lg:mt-16 lg:max-w-2xl lg:justify-self-start lg:text-right xl:mt-20"
        >
          <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-[#E4C4CC] bg-white/70 px-4 py-2 text-sm font-semibold text-[#8A7A75] shadow-[0_4px_24px_rgba(180,120,140,0.10)]">
            <Sparkles className="size-4 text-[#C9748F]" />
            <span className="truncate">عناية مختارة بروح عربية فاخرة</span>
          </div>
          <h1 className="mx-auto max-w-[11ch] font-[var(--font-doran)] text-[2.65rem] font-extrabold leading-[1.25] text-[#2D2D2D] sm:text-5xl lg:mx-0 lg:max-w-none lg:text-[3.65rem] xl:text-[4.25rem]">
            اكتشفي جمالك الطبيعي
          </h1>
          <p className="mx-auto mt-7 max-w-[19rem] text-base leading-7 text-[#8A7A75] [overflow-wrap:anywhere] sm:mt-8 sm:max-w-xl sm:text-xl lg:mx-0">
            تشكيلة فاخرة من أفضل ماركات التجميل العالمية، مصممة كتجربة بورتفوليو
            راقية تعرض متجرًا عربيًا عصريًا بنَفَس بوتيكي هادئ.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center lg:justify-start">
            <motion.a
              whileTap={{ scale: 0.97 }}
              href="#products"
              className="inline-flex w-full max-w-[18rem] items-center justify-center gap-3 rounded-full bg-gradient-to-l from-[#C9748F] to-[#D4AF87] px-8 py-4 text-base font-bold text-white shadow-[0_16px_32px_rgba(201,116,143,0.24)] transition hover:-translate-y-1 sm:w-auto sm:max-w-xs"
            >
              تسوقي الآن
              <ArrowLeft className="size-5" />
            </motion.a>
            <div className="flex max-w-full flex-wrap justify-center gap-2 lg:justify-start">
              {badgeItems.map((item) => {
                const Icon = item.icon;
                return (
                  <span
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#5C4D49]"
                  >
                    <Icon className="size-4 text-[#D4AF87]" />
                    {item.label}
                  </span>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          className="relative mx-auto w-full max-w-sm min-w-0 justify-self-center sm:max-w-[410px] lg:w-full lg:max-w-[400px] lg:justify-self-end xl:max-w-[420px]"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[32px] bg-white shadow-[0_4px_24px_rgba(180,120,140,0.10)]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={currentSlide.src}
                initial={{ opacity: 0, scale: 1.03, x: -24 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.98, x: 24 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={currentSlide.src}
                  alt={currentSlide.alt}
                  width={960}
                  height={1200}
                  priority
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  style={{ objectPosition: currentSlide.position }}
                  className="h-full w-full object-cover"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#FFF8F0]/10 via-transparent to-white/18" />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-5 right-1/2 flex translate-x-1/2 items-center gap-2 rounded-full border border-white/55 bg-white/70 px-3 py-2 shadow-[0_10px_28px_rgba(180,120,140,0.16)] backdrop-blur">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.src}
                  type="button"
                  aria-label={`عرض الصورة ${index + 1}`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeSlide === index
                      ? "w-8 bg-[#C9748F]"
                      : "w-2.5 bg-[#D4AF87]/55 hover:bg-[#D4AF87]"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}








