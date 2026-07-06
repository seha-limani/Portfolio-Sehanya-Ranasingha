import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { Certificate } from "../../types/portfolio";
import Reveal from "./Reveal";

const emojiMap: Record<number, string> = {
  1: "📜",
  2: "🤖",
  3: "⚛️",
  4: "📜",
  5: "🧠",
  6: "🔧",
};

interface CertificateCarouselProps {
  items: Certificate[];
}

export default function CertificateCarousel({ items }: CertificateCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = items.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    if (total <= 1) return;
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [current, next, total]);

  if (total === 0) return null;

  return (
    <Reveal>
      <div className="relative mx-auto max-w-3xl">
        <div className="carousel-viewport premium-card glass-strong relative border border-white/10">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {items.map((cert) => (
              <a
                key={cert.id}
                href={cert.url}
                target="_blank"
                rel="noreferrer"
                className="carousel-slide flex flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12"
              >
                <div className="mb-4 text-5xl sm:text-6xl">
                  {emojiMap[cert.id] ?? "📜"}
                </div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">{cert.title}</h3>
                <p className="mt-2 text-sm text-cyan-400 sm:text-base">{cert.issuer}</p>
                <p className="mt-3 text-xs text-slate-500">{cert.date}</p>
              </a>
            ))}
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="carousel-btn absolute left-3 top-1/2 -translate-y-1/2"
                aria-label="Previous certificate"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                className="carousel-btn absolute right-3 top-1/2 -translate-y-1/2"
                aria-label="Next certificate"
              >
                <ChevronRight size={18} />
              </button>

              <div className="flex justify-center gap-2 pb-5">
                {items.map((cert, i) => (
                  <button
                    key={cert.id}
                    type="button"
                    aria-label={`Go to certificate ${i + 1}`}
                    className={`carousel-dot ${i === current ? "active" : ""}`}
                    onClick={() => setCurrent(i)}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Reveal>
  );
}
