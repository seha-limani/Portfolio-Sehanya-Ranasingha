import type { Project } from "../types/portfolio";

export const projects: Project[] = [
  {
    id: 1,
    title: "AI Job Portal",
    description:
      "Intelligent job matching platform using AI algorithms to connect candidates with opportunities.",
    longDescription:
      "Full-stack job portal with AI-powered resume screening and candidate matching.",
    techStack: ["React", "Spring Boot", "PostgreSQL", "AI"],
    category: "Spring Boot · React",
    categoryClass: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    icon: "AI",
    iconGradient: "from-cyan-400 to-purple-500",
    github: "https://github.com",
    featured: true,
    gradient: "from-cyan-500/30 via-sky-500/20 to-purple-600/30",
  },
  {
    id: 2,
    title: "TechZone Store",
    description:
      "Modern e-commerce UI with seamless shopping experience, cart management, and payment flow.",
    techStack: ["React", "TypeScript", "Tailwind", "Framer"],
    category: "E-Commerce · UI",
    categoryClass: "bg-purple-500/10 border-purple-500/20 text-purple-400",
    icon: "🛒",
    iconGradient: "from-purple-400 to-pink-500",
    github: "https://github.com",
    live: "https://example.com",
    featured: true,
    gradient: "from-purple-500/30 via-violet-500/20 to-pink-500/30",
  },
  {
    id: 3,
    title: "TaskFlow Pro",
    description:
      "Collaborative project management tool with real-time updates and progress tracking.",
    techStack: ["Node.js", "React", "MongoDB", "Socket.io"],
    category: "Full Stack",
    categoryClass: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    icon: "✓",
    iconGradient: "from-emerald-400 to-teal-500",
    github: "https://github.com",
    gradient: "from-emerald-500/30 via-teal-500/20 to-cyan-500/30",
  },
  {
    id: 4,
    title: "Smart Chat Assistant",
    description:
      "AI-powered conversational assistant with natural language understanding and contextual responses.",
    techStack: ["Python", "NLP", "React", "FastAPI"],
    category: "AI · NLP",
    categoryClass: "bg-rose-500/10 border-rose-500/20 text-rose-400",
    icon: "🤖",
    iconGradient: "from-rose-400 to-orange-500",
    github: "https://github.com",
    gradient: "from-rose-500/30 via-orange-500/20 to-amber-500/30",
  },
];
