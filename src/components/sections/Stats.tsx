import heroData from "../../data/hero";
import Container from "../ui/container/Container";

export default function Stats() {
  return (
    <section className="relative pb-10 pt-2 sm:pb-12">
      <Container>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {heroData.stats.map((stat) => (
            <div
              key={stat.label}
              className="glass hover-lift-sm rounded-2xl border border-white/5 p-5 text-center sm:p-7"
            >
              <div className="stat-number">
                {stat.value}
                {stat.value !== "AI" && "+"}
              </div>
              <p className="mt-2 text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
