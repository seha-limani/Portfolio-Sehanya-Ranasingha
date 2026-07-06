import type { AboutHighlight } from "../types/portfolio";

export const aboutData = {
  bio: "Third-year Computer Science undergraduate at SLIIT and Full Stack Developer with 6 months of professional experience at Zerocode. I build modern, scalable web applications with React, Spring Boot, and AI — turning ideas into clean, impactful software.",

  careerObjective:
    "Become an AI-focused Full Stack Developer, building intelligent applications that solve real-world problems.",

  education: {
    degree: "BSc (Hons) Computer Science",
    institution: "SLIIT",
    status: "3rd Year",
    expectedGraduation: "2027",
  },

  highlights: [
    { icon: "GraduationCap", label: "Education", value: "SLIIT · CS" },
    { icon: "MapPin", label: "Location", value: "Sri Lanka" },
    { icon: "Briefcase", label: "Role", value: "Developer @ Zerocode" },
    { icon: "Clock", label: "Focus", value: "AI & Full Stack" },
  ] satisfies AboutHighlight[],
};
