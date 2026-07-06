import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { socialLinks } from "../../data/contact";

const socials = [
  { icon: FaGithub, url: socialLinks.github, label: "GitHub" },
  { icon: FaLinkedin, url: socialLinks.linkedin, label: "LinkedIn" },
  { icon: FaEnvelope, url: socialLinks.email, label: "Email" },
];

export default function SocialLinks({ className = "gap-3" }: { className?: string }) {
  return (
    <div className={`flex ${className}`}>
      {socials.map(({ icon: Icon, url, label }) => (
        <a
          key={url}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="social-icon"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
