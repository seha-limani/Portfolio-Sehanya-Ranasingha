import { skillCategories } from "../../data/skills";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";
import SkillCategoryIcon from "../common/SkillCategoryIcon";
import SkillIcon from "../common/SkillIcon";

export default function Skills() {
  return (
    <Section id="skills" variant="muted">
      <SectionHeader
        badge="Expertise"
        title="My Skills"
        description="Technologies, frameworks and tools I use to build modern, scalable applications."
        variant="alt"
      />

      <div className="card-grid card-grid-3">
        {skillCategories.map((category) => (
          <Reveal key={category.title}>
            <Card3D className="h-full">
              <div className="skill-category-card premium-card hover-lift flex h-full flex-col overflow-hidden">
                <div
                  className={`skill-category-visual bg-gradient-to-br ${category.gradient} flex flex-col items-center justify-center px-6 py-10`}
                >
                  <div className={`skill-category-icon-wrap ${category.iconBg}`}>
                    <SkillCategoryIcon category={category} size={40} bare />
                  </div>
                  <h3 className="text-card-title-lg mt-5 text-white">{category.title}</h3>
                </div>

                <div className="skill-items-grid card-inner flex-1">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item-icon">
                        <SkillIcon name={skill.name} size={26} />
                      </div>
                      <span className="skill-item-name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
