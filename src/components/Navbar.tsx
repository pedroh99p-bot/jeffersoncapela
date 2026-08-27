import Image from "next/image";
import { business, sectionMap } from "@/data/business";
import { Icon } from "@/components/Icon";

const navSections = sectionMap.slice(0, 5);

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-[#050505]/92 backdrop-blur">
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:h-24 sm:px-8">
        <a aria-label="Ir para o inicio" className="relative h-12 w-40 sm:h-14 sm:w-52" href="#hero">
          <Image
            alt={`Logo ${business.name}`}
            className="object-contain object-left"
            fill
            priority
            sizes="(max-width: 640px) 160px, 208px"
            src={business.assets.logo}
          />
        </a>

        <nav aria-label="Seções principais" className="hidden items-center gap-2 lg:flex">
          {navSections.map((section) => (
            <a
              className="rounded-full px-3 py-2 text-sm font-semibold text-white/72 transition hover:bg-white/8 hover:text-white"
              href={`#${section.id}`}
              key={section.id}
            >
              {section.label}
            </a>
          ))}
        </nav>

        <details className="relative lg:hidden">
          <summary className="flex h-14 w-14 cursor-pointer list-none items-center justify-center rounded-2xl border border-gold/70 text-gold [&::-webkit-details-marker]:hidden">
            <Icon name="menu" className="h-7 w-7" />
          </summary>
          <nav className="absolute right-0 top-16 w-64 rounded-lg border border-gold/45 bg-[#111]/98 p-2 shadow-2xl">
            {navSections.map((section) => (
              <a
                className="block rounded-md px-4 py-3 text-sm font-semibold text-white/80 hover:bg-gold/10 hover:text-white"
                href={`#${section.id}`}
                key={section.id}
              >
                {section.order}. {section.label}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
