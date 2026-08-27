import Image from "next/image";
import { business, internalLinks, links } from "@/data/business";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-10 pt-16" id="contato">
      <div className="rounded-[24px] border border-gold/45 bg-white/[0.035] p-6 sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto h-32 w-72 max-w-full sm:h-40 sm:w-[26rem]">
            <Image
              alt={`Logo ${business.name}`}
              className="object-contain"
              fill
              sizes="(max-width: 640px) 288px, 416px"
              src={business.assets.logo}
            />
          </div>
          <p className="mt-5 text-lg leading-8 text-white/78">
            Assessoria documental especializada para processos de CR/CAC,
            aquisição, posse, porte, renovação e regularização.
          </p>
        </div>

        <div className="mt-8 grid gap-3 rounded-[18px] border border-white/10 bg-black/24 p-4">
          <a className="footer-contact-link" href={links.whatsapp} rel="noopener noreferrer" target="_blank">
            <Icon name="whatsapp" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">WhatsApp</span>
              <span className="text-xl font-bold text-white">
                {business.whatsapp.display}
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
          <a className="footer-contact-link" href={links.instagram} rel="noopener noreferrer" target="_blank">
            <Icon name="instagram" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">Instagram</span>
              <span className="text-xl font-bold text-white">
                {business.instagram.handle}
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
          <a className="footer-contact-link" href="#localizacao">
            <Icon name="calendar" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">Atendimento</span>
              <span className="text-xl font-bold text-white">
                Atendimento com agendamento
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
        </div>

        <nav
          aria-label="Links internos"
          className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {internalLinks
            .filter((item) =>
              ["Início", "Consulta", "Especialista", "Serviços", "Dúvidas", "Localização"].includes(
                item.label,
              ),
            )
            .map((item, index) => (
              <a
                className="grid min-h-24 place-items-center rounded-[18px] border border-gold/35 bg-black/24 p-4 text-center text-white/82 transition hover:border-gold/70 hover:text-white"
                href={item.href}
                key={item.href}
              >
                <Icon
                  name={
                    index === 0
                      ? "home"
                      : index === 1
                        ? "search"
                        : index === 2
                          ? "user"
                          : index === 3
                            ? "folder"
                            : index === 4
                              ? "question"
                              : "mapPin"
                  }
                  className="h-8 w-8 text-gold"
                />
                <span className="text-sm font-semibold">{item.label}</span>
              </a>
            ))}
        </nav>

        <div className="mt-8 flex justify-center gap-4">
          <a className="social-round" href={links.whatsapp} rel="noopener noreferrer" target="_blank">
            <Icon name="whatsapp" className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a className="social-round" href={links.instagram} rel="noopener noreferrer" target="_blank">
            <Icon name="instagram" className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <div className="mt-8 border-t border-gold/35 pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gold">
            <a href="/privacidade/">Política de Privacidade</a>
            <span aria-hidden="true">|</span>
            <a href="/termos/">Termos de Uso</a>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/58">
            {business.legal.deferment}
          </p>
          <p className="mt-6 text-sm text-white/70">
            © {year} {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
