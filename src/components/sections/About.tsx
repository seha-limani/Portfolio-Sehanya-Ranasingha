import {
  Briefcase,
  Clock,
  GraduationCap,
  MapPin,
  Sparkles,
  Target,
} from "lucide-react";

import { aboutData } from "../../data/about";
import { strengths } from "../../data/skills";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";

const icons = {
  GraduationCap,
  MapPin,
  Briefcase,
  Clock,
} as const;

export default function About() {
  return (
    <Section id="about">
      <SectionHeader
        badge="About Me"
        title="Who I Am"
        description="A quick look at my background, focus, and goals."
      />

      <div className="about-layout">
        {/* Short intro */}
        <Reveal>
          <div className="about-intro premium-card card-inner">
            <div className="flex items-start gap-4">
              <div className="about-intro-icon">
                <Sparkles className="h-5 w-5 text-cyan-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-body leading-relaxed">{aboutData.bio}</p>
                <div className="tag-group mt-5">
                  {strengths.map((item) => (
                    <span key={item} className="badge-tech">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Quick facts */}
        <div className="about-highlights">
          {aboutData.highlights.map(({ icon, label, value }) => {
            const Icon = icons[icon as keyof typeof icons];
            return (
              <Reveal key={label}>
                <div className="about-highlight">
                  <Icon className="h-4 w-4 text-cyan-400" />
                  <div>
                    <p className="about-highlight-label">{label}</p>
                    <p className="about-highlight-value">{value}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Education + objective */}
        <div className="split-grid split-grid--start">
          <Reveal>
            <div className="about-info-card premium-card card-inner">
              <div className="about-info-head">
                <GraduationCap className="h-4 w-4 text-purple-400" />
                <h3 className="text-card-title text-white">Education</h3>
              </div>
              <p className="mt-3 text-sm font-medium text-white">
                {aboutData.education.degree}
              </p>
              <p className="mt-1 text-sm text-cyan-400">
                {aboutData.education.institution}
              </p>
              <p className="text-body-sm mt-2">
                {aboutData.education.status} · {aboutData.education.expectedGraduation}
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="about-info-card premium-card card-inner">
              <div className="about-info-head">
                <Target className="h-4 w-4 text-pink-400" />
                <h3 className="text-card-title text-white">Career Goal</h3>
              </div>
              <p className="text-body-sm mt-3 leading-relaxed">
                {aboutData.careerObjective}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
