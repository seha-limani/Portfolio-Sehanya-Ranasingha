import { useEffect, useRef } from "react";

function SkillBar({
  name,
  level,
  colorClass,
}: {
  name: string;
  level: number;
  colorClass: string;
}) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const fill = fillRef.current;
    if (!wrap || !fill) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = `${level}%`;
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(wrap);
    return () => observer.disconnect();
  }, [level]);

  return (
    <div ref={wrapRef}>
      <div className="flex justify-between text-sm">
        <span>{name}</span>
        <span className={colorClass}>{level}%</span>
      </div>
      <div className="skill-bar-track mt-1">
        <div ref={fillRef} className="skill-bar-fill" style={{ width: 0 }} />
      </div>
    </div>
  );
}

export default SkillBar;
