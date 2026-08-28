"use client";

import Image from "next/image";
import { useState } from "react";
import { business, internalLinks, links } from "@/data/business";
import { Icon } from "@/components/Icon";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#050505]/92 backdrop-blur">
      <div className="mx-auto flex h-18 w-full max-w-6xl items-center justify-between px-4 sm:h-20 sm:px-8">
        <a
          aria-label="Ir para o início"
          className="relative h-10 w-36 sm:h-13 sm:w-48"
          href="#hero"
          onClick={closeMenu}
        >
          <Image
            alt={`Logo ${business.name}`}
            className="object-contain object-left"
            fill
            priority
            sizes="(max-width: 640px) 144px, 192px"
            src={business.assets.logo}
          />
        </a>

        <nav aria-label="Seções principais" className="hidden items-center gap-1 lg:flex">
          {internalLinks.slice(0, 7).map((item) => (
            <a
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/8 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="hidden min-h-11 items-center justify-center rounded-full border border-gold/60 px-5 text-sm font-black uppercase text-gold transition hover:bg-gold/10 lg:inline-flex"
          href={links.whatsapp}
          rel="noopener noreferrer"
          target="_blank"
        >
          WhatsApp
        </a>

        <div className="relative lg:hidden">
          <button
            aria-expanded={isOpen}
            aria-label="Abrir menu"
            className="flex h-12 w-12 items-center justify-center rounded-[14px] border border-gold/70 text-gold"
            onClick={() => setIsOpen((current) => !current)}
            type="button"
          >
            <Icon name="menu" className="h-6 w-6" />
          </button>

          {isOpen ? (
            <div className="absolute right-0 top-14 w-[min(20rem,calc(100vw-2rem))] rounded-[18px] border border-gold/45 bg-[#111]/98 p-3 shadow-2xl">
              <nav aria-label="Menu mobile" className="grid gap-1">
                {internalLinks.map((item) => (
                  <a
                    className="rounded-2xl px-4 py-3 text-sm font-semibold text-white/80 hover:bg-gold/10 hover:text-white"
                    href={item.href}
                    key={item.href}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <a
                className="mt-3 flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#f5cf64,#c99425)] px-4 text-sm font-black uppercase text-black"
                href={links.whatsapp}
                onClick={closeMenu}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Icon name="whatsapp" className="h-5 w-5" />
                Falar no WhatsApp
              </a>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
