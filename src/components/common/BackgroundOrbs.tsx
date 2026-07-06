export default function BackgroundOrbs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb animate-float-slow top-[-10%] left-[-10%] h-[600px] w-[600px] bg-sky-500/20" />
      <div
        className="orb animate-float bottom-[-10%] right-[-10%] h-[500px] w-[500px] bg-purple-600/25"
        style={{ animationDelay: "-3s" }}
      />
      <div
        className="orb animate-float-slow top-[40%] left-[50%] h-[350px] w-[350px] bg-pink-500/15"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="orb animate-float top-[10%] right-[20%] h-[250px] w-[250px] bg-cyan-400/10"
        style={{ animationDelay: "-2s" }}
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
}
