import { certificates } from "../../data/certificates";
import Section from "../common/Section";
import SectionHeader from "../common/SectionHeader";
import Reveal from "../common/Reveal";
import Card3D from "../common/Card3D";

const emojiMap: Record<number, string> = {
  1: "📜",
  2: "🤖",
  3: "⚛️",
  4: "📜",
  5: "🧠",
  6: "🔧",
};

export default function Certificates() {
  return (
    <Section id="certificates">
      <SectionHeader
        badge="Achievements"
        title="Certificates"
        description="Professional certifications and courses that strengthen my technical foundation."
        variant="alt"
      />

      <div className="card-grid card-grid-3">
        {certificates.slice(0, 6).map((cert) => (
          <Reveal key={cert.id}>
            <Card3D className="h-full">
              <a
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="premium-card card-inner flex h-full flex-col items-center justify-center text-center"
              >
                <div className="mb-3 text-3xl">{emojiMap[cert.id] ?? "📜"}</div>
                <h4 className="text-card-title leading-snug text-white">{cert.title}</h4>
                <p className="mt-2 text-sm text-cyan-400">{cert.issuer}</p>
                <p className="mt-3 text-xs text-slate-500">{cert.date}</p>
              </a>
            </Card3D>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
