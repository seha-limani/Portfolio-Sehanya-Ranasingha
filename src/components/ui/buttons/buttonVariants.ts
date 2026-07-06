import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "font-display inline-flex items-center justify-center gap-2 rounded-2xl font-semibold tracking-tight transition-all duration-350 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "relative overflow-hidden bg-gradient-to-r from-cyan-500 to-sky-500 text-white shadow-[0_4px_24px_rgba(56,189,248,0.35)] hover:shadow-[0_8px_40px_rgba(56,189,248,0.5)] hover:brightness-110",
        secondary:
          "glass-premium text-white hover:border-cyan-400/30 hover:shadow-[0_8px_32px_rgba(56,189,248,0.15)]",
        outline:
          "border border-white/15 bg-transparent text-white hover:border-cyan-400/40 hover:bg-white/[0.05]",
        ghost: "text-slate-300 hover:bg-white/[0.06] hover:text-white",
      },
      size: {
        sm: "px-4 py-2.5 text-sm",
        md: "px-6 py-3.5 text-sm",
        lg: "px-8 py-4 text-base",
        xl: "px-10 py-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
