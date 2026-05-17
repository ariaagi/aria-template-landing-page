"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

export function MotionFadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn("size-full", className)}
    >
      {children}
    </motion.div>
  );
}
