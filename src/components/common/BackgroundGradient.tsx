import GlowEffect from "./GlowEffect";

export default function BackgroundGradient() {
  return (
    <>
      <GlowEffect className="top-0 left-0 h-[500px] w-[500px]" />

      <GlowEffect className="bottom-0 right-0 h-[450px] w-[450px] bg-purple-600/30" />

      <GlowEffect className="top-1/2 left-1/2 h-[300px] w-[300px] bg-pink-500/20" />
    </>
  );
}