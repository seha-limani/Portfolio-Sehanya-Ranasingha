import { motion } from "framer-motion";
import GradientText from "../common/GradientText";

export default function Logo() {
  return (
    <a href="#home" className="group flex items-center gap-3">
      <motion.div
        whileHover={{ rotate: 6, scale: 1.08 }}
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
        className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 font-display text-lg font-bold text-white shadow-[0_4px_20px_rgba(56,189,248,0.35)] sm:h-11 sm:w-11 sm:rounded-2xl"
      >
        <span className="relative z-10">S</span>
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 transition group-hover:opacity-100" />
      </motion.div>

      <div className="hidden sm:block">
        <h2 className="font-display text-base font-bold leading-tight">
          <GradientText>Sehanya</GradientText>
        </h2>
        <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
          AI & Full Stack Dev
        </p>
      </div>
    </a>
  );
}
