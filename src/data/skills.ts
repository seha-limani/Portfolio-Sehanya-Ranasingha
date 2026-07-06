export interface SkillItem {
  name: string;
}

export interface SkillCategory {
  title: string;
  iconColor: string;
  iconBg: string;
  gradient: string;
  skills: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    iconColor: "#38BDF8",
    iconBg: "bg-cyan-500/20",
    gradient: "from-cyan-500/25 via-cyan-400/10 to-transparent",
    skills: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    title: "Backend",
    iconColor: "#8B5CF6",
    iconBg: "bg-purple-500/20",
    gradient: "from-purple-500/25 via-purple-400/10 to-transparent",
    skills: [
      { name: "Spring Boot" },
      { name: "Java" },
      { name: "REST API" },
      { name: "Node.js" },
    ],
  },
  {
    title: "Database",
    iconColor: "#34D399",
    iconBg: "bg-emerald-500/20",
    gradient: "from-emerald-500/25 via-emerald-400/10 to-transparent",
    skills: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
    ],
  },
  {
    title: "Tools",
    iconColor: "#FBBF24",
    iconBg: "bg-amber-500/20",
    gradient: "from-amber-500/25 via-amber-400/10 to-transparent",
    skills: [
      { name: "Git" },
      { name: "Docker" },
      { name: "VS Code" },
      { name: "Postman" },
    ],
  },
  {
    title: "Programming",
    iconColor: "#FB7185",
    iconBg: "bg-rose-500/20",
    gradient: "from-rose-500/25 via-rose-400/10 to-transparent",
    skills: [
      { name: "Java" },
      { name: "Python" },
      { name: "C" },
      { name: "C++" },
    ],
  },
  {
    title: "Other",
    iconColor: "#818CF8",
    iconBg: "bg-indigo-500/20",
    gradient: "from-indigo-500/25 via-indigo-400/10 to-transparent",
    skills: [
      { name: "UI/UX" },
      { name: "Problem Solving" },
      { name: "Agile" },
    ],
  },
];

/** @deprecated Use skillCategories — kept for SkillCategoryIcon type compat */
export type SkillBarCategory = SkillCategory & {
  barColor: string;
  skills: { name: string; level: number }[];
};

export const skillBarCategories: SkillBarCategory[] = skillCategories.map((cat) => ({
  ...cat,
  barColor: "text-cyan-400",
  skills: cat.skills.map((s) => ({ ...s, level: 0 })),
}));

export const strengths = [
  "Problem Solver",
  "AI Enthusiast",
  "Full Stack",
  "Cloud Ready",
];
