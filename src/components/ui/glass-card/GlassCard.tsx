import { motion } from "framer-motion";
import type { ReactNode } from "react";

import { cn } from "../../../lib/cn";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  glow = false,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={
        hover
          ? { y: -4, transition: { duration: 0.25 } }
          : undefined
      }
      className={cn(
        "group relative overflow-hidden rounded-[var(--card-radius)]",
        "glass-premium",
        hover && "hover:shadow-[0_16px_48px_rgba(56,189,248,0.1)]",
        glow && "glow-animation",
        className
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-purple-500/[0.04]" />
      </div>
      <div className="relative">{children}</div>
    </motion.div>
  );
}
