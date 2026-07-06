import { TypeAnimation } from "react-type-animation";
import heroData from "../../data/hero";

export default function AnimatedText() {
  return (
    <TypeAnimation
      sequence={[
        heroData.professionalTitle,
        2200,
        "Computer Science Undergraduate",
        2000,
        "React Developer",
        2000,
        "Spring Boot Developer",
        2000,
        "Cloud Enthusiast",
        2000,
      ]}
      wrapper="span"
      speed={45}
      repeat={Infinity}
      className="text-xl font-semibold text-sky-400 sm:text-2xl"
    />
  );
}
