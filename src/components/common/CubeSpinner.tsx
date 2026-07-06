const faces = [
  "rotateY(0deg) translateZ(28px)",
  "rotateY(180deg) translateZ(28px)",
  "rotateY(90deg) translateZ(28px)",
  "rotateY(-90deg) translateZ(28px)",
  "rotateX(90deg) translateZ(28px)",
  "rotateX(-90deg) translateZ(28px)",
];

export default function CubeSpinner() {
  return (
    <div
      className="cube-spinner pointer-events-none absolute -bottom-6 -right-6 h-16 w-16 opacity-60"
      aria-hidden
    >
      <div className="relative h-full w-full" style={{ transformStyle: "preserve-3d" }}>
        {faces.map((transform, i) => (
          <div key={i} className="cube-face" style={{ transform }} />
        ))}
      </div>
    </div>
  );
}
