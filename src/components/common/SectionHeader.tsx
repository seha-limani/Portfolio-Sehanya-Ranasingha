import Reveal from "./Reveal";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  variant?: "default" | "alt";
}

export default function SectionHeader({
  badge,
  title,
  description,
  variant = "default",
}: SectionHeaderProps) {
  return (
    <Reveal className="section-header">
      <span className="badge">{badge}</span>
      <h2
        className={`text-section-title mt-4 ${
          variant === "alt" ? "gradient-text-2" : "gradient-text"
        }`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500" />
      {description && <p className="section-desc mt-4">{description}</p>}
    </Reveal>
  );
}
