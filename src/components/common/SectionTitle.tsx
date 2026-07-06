import { motion } from "framer-motion";
import GradientText from "./GradientText";
import { blurIn } from "../../utils/motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "center" | "left";
}

export default function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
}: SectionTitleProps) {
  const isCenter = align === "center";

  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={blurIn}
      className={isCenter ? "text-center" : "text-left"}
    >
      {subtitle && (
        <div
          className={`mb-3 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
        >
          {!isCenter && (
            <span className="h-px w-6 bg-gradient-to-r from-cyan-400 to-transparent" />
          )}
          <p className="section-label">{subtitle}</p>
          {isCenter && (
            <span className="h-px w-6 bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
          )}
        </div>
      )}

      <h2 className="text-section-title">
        <GradientText>{title}</GradientText>
      </h2>

      <div
        className={`mt-4 h-0.5 w-12 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 ${isCenter ? "mx-auto" : ""}`}
      />

      {description && (
        <p className={`section-desc mt-5 ${isCenter ? "" : "!mx-0 !text-left"}`}>
          {description}
        </p>
      )}
    </motion.header>
  );
}
