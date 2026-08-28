"use client";

import type { KeyboardEvent } from "react";
import { useEffect, useState } from "react";
import { testimonials } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";

function Stars({ rating }: { rating: number }) {
  return (
    <span aria-label={`${rating} estrelas`} className="text-xl text-gold">
      {"★".repeat(rating)}
    </span>
  );
}

export function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isFocusWithin, setIsFocusWithin] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const isPaused = isHovering || isFocusWithin || reduceMotion;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReduceMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (isPaused || testimonials.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5200);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  function goTo(index: number) {
    const boundedIndex =
      (index + testimonials.length) % testimonials.length;
    setActiveIndex(boundedIndex);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(activeIndex + 1);
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(activeIndex - 1);
    }
  }

  return (
    <div
      aria-label="Depoimentos de clientes"
      aria-roledescription="carrossel"
      className="space-y-4"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsFocusWithin(false);
        }
      }}
      onFocus={() => setIsFocusWithin(true)}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      role="region"
    >
      <article
        aria-live={isPaused ? "polite" : "off"}
        className="rounded-[20px] border border-gold/55 bg-white/[0.045] p-5 sm:p-8"
        key={testimonials[activeIndex].id}
      >
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-5xl font-black leading-none text-gold">“</span>
          <Stars rating={testimonials[activeIndex].rating} />
        </div>
        <p className="testimonial-slide mt-4 min-h-24 text-xl leading-8 text-white sm:min-h-28 sm:text-3xl sm:leading-10">
          {testimonials[activeIndex].quote}
        </p>
        {testimonials[activeIndex].isPlaceholder ? (
          <p className="mt-4 rounded-[14px] border border-white/10 bg-black/30 px-3 py-2 text-xs leading-5 text-white/58 sm:text-sm">
            Placeholder: substituir por depoimento real autorizado.
          </p>
        ) : null}
        <div className="mt-5 border-t border-white/10 pt-4">
          <p className="font-bold text-white">
            {testimonials[activeIndex].author}
          </p>
          <p className="mt-2 inline-flex rounded-xl border border-gold/45 px-3 py-1 text-sm text-gold">
            {testimonials[activeIndex].service}
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
          <button
            aria-label="Depoimento anterior"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/55 text-gold transition hover:bg-gold/10"
            onClick={() => goTo(activeIndex - 1)}
            type="button"
          >
            <Icon name="chevron" className="h-5 w-5 rotate-180" />
          </button>

          <div className="flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                aria-label={`Ir para depoimento ${index + 1}`}
                className={[
                  "h-2.5 rounded-full transition",
                  activeIndex === index ? "w-7 bg-gold" : "w-2.5 bg-white/20",
                ].join(" ")}
                key={testimonial.id}
                onClick={() => goTo(index)}
                type="button"
              />
            ))}
          </div>

          <button
            aria-label="Próximo depoimento"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/55 text-gold transition hover:bg-gold/10"
            onClick={() => goTo(activeIndex + 1)}
            type="button"
          >
            <Icon name="chevron" className="h-5 w-5" />
          </button>
        </div>
      </article>

      <GoldButton href="#consulta-rapida" icon="message">
        Quero receber orientação
      </GoldButton>
    </div>
  );
}
