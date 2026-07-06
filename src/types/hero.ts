export interface HeroStat {
  value: string;
  label: string;
}

export interface HeroData {
  name: string;
  title: string;
  subtitle: string;
  professionalTitle: string;
  resume: string;
  tagline: string;
  profile: string;
  techBadges: string[];
  stats: HeroStat[];
}
