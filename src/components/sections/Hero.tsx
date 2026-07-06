import { Download, ChevronRight } from "lucide-react";

import heroData from "../../data/hero";
import Container from "../ui/container/Container";
import Tilt3D from "../common/Tilt3D";
import AnimatedText from "../common/AnimatedText";
import SocialLinks from "../common/SocialLinks";
import CubeSpinner from "../common/CubeSpinner";

export default function Hero() {
  return (
    <section
      id="home"
      className="scroll-offset relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36"
    >
      <Container>
        <div className="split-grid split-grid--hero">
          {/* Profile — LEFT (HTML-style 3D: tilt + float shapes + cube) */}
          <div className="order-1 flex justify-center lg:order-none lg:justify-end">
            <div className="hero-profile-wrap relative">
              <div className="float-shape absolute -left-12 -top-12 h-20 w-20 rounded-full bg-cyan-400/20 blur-3xl" />
              <div className="float-shape-2 absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />
              <Tilt3D>
                <div className="relative">
                  <div className="absolute -inset-8 animate-pulse rounded-full bg-cyan-400/15 blur-[100px]" />
                  <div className="absolute -inset-4 rounded-full border border-cyan-400/20 shadow-[0_0_80px_rgba(34,211,238,0.15)]" />
                  <img
                    src={heroData.profile}
                    alt={heroData.name}
                    className="profile-img animate-float relative rounded-full border-[6px] border-cyan-400/30 object-cover shadow-[0_0_80px_rgba(34,211,238,0.2)] transition-all duration-500 hover:scale-[1.02] sm:border-[8px]"
                  />
                  <CubeSpinner />
                  <div className="absolute -bottom-2 -right-2 rounded-xl glass-strong px-3 py-2 sm:-bottom-1 sm:right-0">
                    <p className="text-[10px] font-medium text-cyan-400">6+ Months</p>
                    <p className="text-xs font-semibold text-white">Experience</p>
                  </div>
                </div>
              </Tilt3D>
            </div>
          </div>

          {/* Content — RIGHT */}
          <div className="hero-content order-2 text-center lg:order-none lg:text-left">
            <div className="hero-intro">
              <span className="badge animate-fade-up inline-flex">
                <span className="mr-1.5 inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
                {heroData.title}
              </span>

              <h1 className="hero-title animate-fade-up animate-fade-up-delay-1 gradient-text-2 text-balance">
                {heroData.name}
              </h1>

              <div className="animate-fade-up animate-fade-up-delay-2 min-h-[2.5rem]">
                <AnimatedText />
              </div>

              <p className="hero-tagline animate-fade-up animate-fade-up-delay-3 mx-auto max-w-lg text-slate-300 lg:mx-0">
                {heroData.tagline}
              </p>
            </div>

            <div className="hero-actions animate-fade-up animate-fade-up-delay-4">
              <a href={heroData.resume} download>
                <button type="button" className="btn-primary text-sm sm:text-base">
                  <Download size={18} strokeWidth={2.5} />
                  Download Resume
                </button>
              </a>
              <a href="#projects">
                <button type="button" className="btn-secondary text-sm sm:text-base">
                  <ChevronRight size={18} />
                  View Projects
                </button>
              </a>
            </div>

            <div className="hero-badges animate-fade-up animate-fade-up-delay-4">
              {heroData.techBadges.map((tech) => (
                <span key={tech} className="badge-tech">
                  {tech}
                </span>
              ))}
            </div>

            <div className="hero-social animate-fade-up animate-fade-up-delay-4">
              <SocialLinks className="gap-4" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
