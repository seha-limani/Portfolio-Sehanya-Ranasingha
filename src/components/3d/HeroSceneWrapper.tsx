import { useEffect, useState, type ReactNode } from "react";
import HeroScene from "./HeroScene";

interface HeroSceneWrapperProps {
  children?: ReactNode;
}

export default function HeroSceneWrapper({ children }: HeroSceneWrapperProps) {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isDesktop = window.innerWidth >= 768;
    setEnabled(isDesktop && !prefersReduced);
  }, []);

  return (
    <>
      {enabled && <HeroScene />}
      {children}
    </>
  );
}
