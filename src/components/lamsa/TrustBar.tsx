"use client";

import { trustItems } from "@/data/lamsa-mock";
import { SectionReveal } from "./SectionReveal";

export function TrustBar() {
  return (
    <SectionReveal className="bg-[#FFF8F0] px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 lg:grid-cols-4">
        {trustItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.label}
              className="flex min-h-28 items-center gap-4 rounded-2xl bg-white px-4 py-5 shadow-[0_4px_24px_rgba(180,120,140,0.10)]"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-full bg-[#F3E5D8] text-[#C9748F]">
                <Icon className="size-6" />
              </span>
              <p className="text-sm font-bold leading-6 text-[#2D2D2D] sm:text-base">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </SectionReveal>
  );
}

