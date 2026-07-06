import { motion } from "framer-motion";

interface GlowEffectProps {
  className?: string;
}

export default function GlowEffect({
  className = "",
}: GlowEffectProps) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.15, 1],
        opacity: [0.25, 0.45, 0.25],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`
      absolute
      rounded-full
      blur-[120px]
      bg-sky-500/30
      ${className}
      `}
    />
  );
}