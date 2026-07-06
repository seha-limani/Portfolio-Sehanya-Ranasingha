import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  return (
    <span className="inline-flex items-center rounded-full border border-cyan-400/25 bg-cyan-500/[0.08] px-3 py-1 font-body text-xs font-medium text-cyan-300 sm:text-sm sm:px-3.5 sm:py-1.5">
      {children}
    </span>
  );
}
