import { useRef, type ReactNode, type MouseEvent } from "react";

interface Tilt3DProps {
  children: ReactNode;
  className?: string;
}

export default function Tilt3D({ children, className = "" }: Tilt3DProps) {
  const innerRef = useRef<HTMLDivElement>(null);

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const inner = innerRef.current;
    if (!inner) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    inner.style.transform = `rotateX(${y * -14}deg) rotateY(${x * 14}deg) scale(1.02)`;
  };

  const handleLeave = () => {
    if (innerRef.current) {
      innerRef.current.style.transform = "rotateX(0) rotateY(0) scale(1)";
    }
  };

  return (
    <div
      className={`tilt-3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div ref={innerRef} className="tilt-3d-inner">
        {children}
      </div>
    </div>
  );
}
