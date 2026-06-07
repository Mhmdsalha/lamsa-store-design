"use client";

import { motion } from "framer-motion";

interface SectionRevealProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionReveal({ children, className = "", id }: SectionRevealProps) {
  return (
    <motion.section
      id={id}
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
