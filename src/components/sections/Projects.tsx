import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import { projects } from "../../data/projects";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";

export default function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        badge="Portfolio"
        title="Featured Projects"
        description="A selection of projects showcasing full stack development, AI integration, and modern UI."
        variant="alt"
      />

      <div className="card-grid card-grid-2">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <Card3D className="h-full">
              <div className="project-card premium-card card-inner flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 flex-1">
                    {project.category && (
                      <span
                        className={`badge-tech border text-[11px] ${project.categoryClass}`}
                      >
                        {project.category}
                      </span>
                    )}
                    <h3 className="text-card-title-lg mt-3 text-white">
                      {project.title}
                    </h3>
                    <p className="text-body-sm mt-2">{project.description}</p>
                  </div>
                  {project.icon && (
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-base font-bold text-white shadow-lg ${project.iconGradient}`}
                    >
                      {project.icon}
                    </div>
                  )}
                </div>

                <div className="tag-group mt-5">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="badge-tech text-[10px]">
                      {tech}
                    </span>
                  ))}
                </div>

                {(project.github || project.live) && (
                  <div className="mt-auto flex gap-4 border-t border-white/[0.08] pt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-cyan-400 sm:text-sm"
                      >
                        <FaGithub size={14} />
                        Source Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-cyan-400 sm:text-sm"
                      >
                        <ExternalLink size={14} />
                        Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
