"use client";

import { useState } from "react";
import { faq, links } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-4">
      <div className="grid gap-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <article
              className={[
                "rounded-[18px] border bg-white/[0.035] transition",
                isOpen ? "border-gold/70" : "border-white/14",
              ].join(" ")}
              key={item.question}
            >
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-lg font-bold text-white"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>{item.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <Icon name={isOpen ? "minus" : "plus"} className="h-5 w-5" />
                </span>
              </button>
              <div
                className={isOpen ? "block px-5 pb-5" : "hidden"}
                id={panelId}
              >
                <p className="text-base leading-7 text-white/72">{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="rounded-[24px] border border-gold/45 bg-white/[0.04] p-6 text-center sm:p-8">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gold/12 text-gold">
          <Icon name="question" className="h-8 w-8" />
        </span>
        <h3 className="mt-5 text-2xl font-black uppercase text-gold">
          Ainda ficou com alguma dúvida?
        </h3>
        <p className="mx-auto mt-3 max-w-xl text-base leading-7 text-white/72">
          Fale diretamente com Jefferson e receba orientação personalizada para
          o seu caso.
        </p>
        <div className="mt-6">
          <GoldButton
            href={links.faqWhatsApp}
            icon="message"
            rel="noopener noreferrer"
            target="_blank"
          >
            Falar com Jefferson
          </GoldButton>
        </div>
      </div>
    </div>
  );
}
