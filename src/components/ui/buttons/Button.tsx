import { motion, type HTMLMotionProps } from "framer-motion";
import type { VariantProps } from "class-variance-authority";

import { buttonVariants } from "./buttonVariants";
import { cn } from "../../../lib/cn";

interface ButtonProps
  extends HTMLMotionProps<"button">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  className,
  variant,
  size,
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.96 }}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}