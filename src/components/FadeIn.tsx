"use client";

import { motion, type Variants } from "framer-motion";

interface FadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const baseVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function FadeIn({ children, className, delay }: FadeInProps) {
  const variants: Variants =
    delay !== undefined
      ? {
          hidden: baseVariants.hidden,
          visible: {
            ...baseVariants.visible,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1], delay },
          },
        }
      : baseVariants;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  );
}
