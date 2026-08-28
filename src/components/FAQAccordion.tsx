"use client";

import { useState } from "react";
import { faq, links } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid gap-2.5 sm:gap-3">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          const panelId = `faq-panel-${index}`;

          return (
            <article
              className={[
                "rounded-[14px] border bg-white/[0.035] transition sm:rounded-[18px]",
                isOpen ? "border-gold/70" : "border-white/14",
              ].join(" ")}
              key={item.question}
            >
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left text-base font-bold text-white sm:gap-4 sm:px-5 sm:py-5 sm:text-lg"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>{item.question}</span>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-gold/60 text-gold">
                  <Icon name={isOpen ? "minus" : "plus"} className="h-5 w-5" />
                </span>
              </button>
              <div
                className={isOpen ? "block px-4 pb-4 sm:px-5 sm:pb-5" : "hidden"}
                id={panelId}
              >
                <p className="text-sm leading-6 text-white/72 sm:text-base sm:leading-7">{item.answer}</p>
              </div>
            </article>
          );
        })}
      </div>

      <div className="rounded-[18px] border border-gold/45 bg-white/[0.04] p-5 text-center sm:p-8">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gold/12 text-gold sm:h-16 sm:w-16">
          <Icon name="question" className="h-7 w-7 sm:h-8 sm:w-8" />
        </span>
        <h3 className="mt-4 text-xl font-black uppercase text-gold sm:mt-5 sm:text-2xl">
          Ainda ficou com alguma dúvida?
        </h3>
        <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/72 sm:mt-3 sm:text-base sm:leading-7">
          Fale diretamente com Jefferson e receba orientação personalizada para
          o seu caso.
        </p>
        <div className="mt-5 sm:mt-6">
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
