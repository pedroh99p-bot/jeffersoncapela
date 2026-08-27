"use client";

import type { KeyboardEvent } from "react";
import { useRef, useState } from "react";
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
  const listRef = useRef<HTMLDivElement>(null);

  function goTo(index: number) {
    const boundedIndex =
      (index + testimonials.length) % testimonials.length;
    setActiveIndex(boundedIndex);
    const list = listRef.current;
    const item = list?.children.item(boundedIndex) as HTMLElement | null;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
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
    <div className="space-y-5">
      <article className="rounded-[24px] border border-gold/55 bg-white/[0.045] p-6 sm:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="text-6xl font-black leading-none text-gold">“</span>
          <Stars rating={testimonials[activeIndex].rating} />
        </div>
        <p className="mt-5 text-2xl leading-9 text-white sm:text-3xl sm:leading-10">
          {testimonials[activeIndex].quote}
        </p>
        {testimonials[activeIndex].isPlaceholder ? (
          <p className="mt-4 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white/58">
            Placeholder: substituir por depoimento real autorizado.
          </p>
        ) : null}
        <div className="mt-6 border-t border-white/10 pt-5">
          <p className="font-bold text-white">
            {testimonials[activeIndex].author}
          </p>
          <p className="mt-2 inline-flex rounded-xl border border-gold/45 px-3 py-1 text-sm text-gold">
            {testimonials[activeIndex].service}
          </p>
        </div>
      </article>

      <div className="relative">
        <button
          aria-label="Depoimento anterior"
          className="absolute -left-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-black text-gold sm:h-12 sm:w-12"
          onClick={() => goTo(activeIndex - 1)}
          type="button"
        >
          <Icon name="chevron" className="h-6 w-6 rotate-180" />
        </button>

        <div
          aria-label="Depoimentos"
          className="no-scrollbar flex snap-x gap-4 overflow-x-auto pb-2 sm:px-14"
          onKeyDown={handleKeyDown}
          ref={listRef}
          role="listbox"
          tabIndex={0}
        >
          {testimonials.map((testimonial, index) => (
            <button
              aria-label={`Ver depoimento ${index + 1}`}
              aria-selected={activeIndex === index}
              className="min-w-[82%] snap-center rounded-[18px] border border-gold/35 bg-white/[0.035] p-5 text-left transition hover:border-gold/70 sm:min-w-[18rem]"
              key={testimonial.id}
              onClick={() => goTo(index)}
              role="option"
              type="button"
            >
              <div className="flex items-center gap-3 text-gold">
                <span className="text-4xl leading-none">“</span>
                <Stars rating={testimonial.rating} />
              </div>
              <p className="mt-4 text-base leading-7 text-white/78">
                {testimonial.quote}
              </p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm font-semibold text-white">
                {testimonial.author}
              </p>
              <p className="mt-1 text-xs text-gold">{testimonial.service}</p>
            </button>
          ))}
        </div>

        <button
          aria-label="Próximo depoimento"
          className="absolute -right-1 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gold/60 bg-black text-gold sm:h-12 sm:w-12"
          onClick={() => goTo(activeIndex + 1)}
          type="button"
        >
          <Icon name="chevron" className="h-6 w-6" />
        </button>
      </div>

      <div className="flex justify-center gap-3">
        {testimonials.map((testimonial, index) => (
          <button
            aria-label={`Ir para depoimento ${index + 1}`}
            className={[
              "h-3 rounded-full transition",
              activeIndex === index ? "w-8 bg-gold" : "w-3 bg-white/20",
            ].join(" ")}
            key={testimonial.id}
            onClick={() => goTo(index)}
            type="button"
          />
        ))}
      </div>

      <GoldButton href="#consulta-rapida" icon="message">
        Quero receber orientação
      </GoldButton>
    </div>
  );
}
