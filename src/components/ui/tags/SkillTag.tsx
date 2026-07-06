import type { ReactNode } from "react";

type SkillTagVariant = "default" | "learning" | "interest" | "strength";

interface SkillTagProps {
  children: ReactNode;
  variant?: SkillTagVariant;
}

const variantClass: Record<SkillTagVariant, string> = {
  default: "skill-tag",
  learning: "skill-tag skill-tag--learning",
  interest: "skill-tag skill-tag--interest",
  strength: "skill-tag skill-tag--strength",
};

export function SkillTag({ children, variant = "default" }: SkillTagProps) {
  return <span className={variantClass[variant]}>{children}</span>;
}

interface TagGroupProps {
  children: ReactNode;
  className?: string;
}

export function TagGroup({ children, className = "" }: TagGroupProps) {
  return <div className={`tag-group ${className}`}>{children}</div>;
}

export function ProjectTag({ children }: { children: ReactNode }) {
  return <span className="project-tag">{children}</span>;
}
