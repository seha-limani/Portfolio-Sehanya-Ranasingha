export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  category?: string;
  categoryClass?: string;
  icon?: string;
  iconGradient?: string;
  github?: string;
  live?: string;
  featured?: boolean;
  gradient: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  type: "Internship" | "Full-time" | "Part-time" | "Freelance";
  description: string[];
  techStack: string[];
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
}

export interface AboutHighlight {
  icon: string;
  label: string;
  value: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  availability: string;
}
