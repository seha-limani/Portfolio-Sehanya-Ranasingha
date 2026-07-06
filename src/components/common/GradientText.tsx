import type { ReactNode } from "react";
import { cn } from "../../lib/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export default function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-sky-400 via-purple-500 to-pink-500 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}