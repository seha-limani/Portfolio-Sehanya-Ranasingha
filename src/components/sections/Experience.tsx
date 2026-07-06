import { Briefcase, Code2 } from "lucide-react";

import { experiences } from "../../data/experience";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";

export default function Experience() {
  return (
    <Section id="experience" variant="muted">
      <SectionHeader
        badge="Career"
        title="Experience"
        description="Professional journey building real-world applications and delivering scalable solutions."
        variant="alt"
      />

      <div className="split-grid split-grid--start">
        {/* Left — overview */}
        <Reveal>
          <div className="premium-card card-inner lg:sticky lg:top-28">
            <div className="card-header-icon mb-4 bg-cyan-500/15">
              <Briefcase className="h-5 w-5 text-cyan-400" />
            </div>
            <h3 className="text-subsection gradient-text">Career Journey</h3>
            <p className="text-body-sm mt-3">
              Hands-on experience developing full stack applications for real clients,
              from frontend interfaces to backend APIs and database design.
            </p>
            <div className="mt-6 space-y-3">
              <div className="highlight-box flex items-center gap-3">
                <Code2 className="h-4 w-4 shrink-0 text-purple-400" />
                <div>
                  <p className="section-label text-[10px] text-slate-500">Focus</p>
                  <p className="text-sm font-medium text-white">Full Stack Development</p>
                </div>
              </div>
              <div className="highlight-box flex items-center gap-3">
                <Briefcase className="h-4 w-4 shrink-0 text-cyan-400" />
                <div>
                  <p className="section-label text-[10px] text-slate-500">Experience</p>
                  <p className="text-sm font-medium text-white">6+ Months Professional</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right — timeline */}
        <div className="card-stack">
          {experiences.map((exp) => (
            <Reveal key={exp.id}>
              <Card3D className="h-full">
                <div className="premium-card card-inner hover-lift-sm">
                  <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                    <div>
                      <span className="section-label text-cyan-400">{exp.period}</span>
                      <h3 className="text-card-title-lg mt-1 text-white">{exp.role}</h3>
                      <p className="text-body-sm mt-0.5">
                        {exp.company} · {exp.type}
                      </p>
                    </div>
                    <span className="badge-tech w-fit text-xs">{exp.location}</span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300"
                      >
                        <span className="mt-1 shrink-0 text-cyan-400">▸</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="tag-group mt-5">
                    {exp.techStack.map((tech) => (
                      <span key={tech} className="badge-tech text-[10px]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3D>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
