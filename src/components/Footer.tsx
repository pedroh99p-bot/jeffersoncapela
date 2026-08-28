import Image from "next/image";
import { business, internalLinks, links } from "@/data/business";
import { Icon } from "@/components/Icon";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-shell pb-8 pt-12 sm:pb-10 sm:pt-16" id="contato">
      <div className="rounded-[20px] border border-gold/45 bg-white/[0.035] p-5 sm:p-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative mx-auto h-24 w-60 max-w-full sm:h-36 sm:w-[24rem]">
            <Image
              alt={`Logo ${business.name}`}
              className="object-contain"
              fill
              sizes="(max-width: 640px) 240px, 384px"
              src={business.assets.logo}
            />
          </div>
          <p className="mt-4 text-base leading-7 text-white/78 sm:mt-5 sm:text-lg sm:leading-8">
            Assessoria documental especializada para processos de CR/CAC,
            aquisição, posse, porte, renovação e regularização.
          </p>
        </div>

        <div className="mt-6 grid gap-2 rounded-[16px] border border-white/10 bg-black/24 p-3 sm:mt-8 sm:gap-3 sm:p-4">
          <a className="footer-contact-link" href={links.whatsapp} rel="noopener noreferrer" target="_blank">
            <Icon name="whatsapp" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">WhatsApp</span>
              <span className="text-lg font-bold text-white sm:text-xl">
                {business.whatsapp.display}
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
          <a className="footer-contact-link" href={links.instagram} rel="noopener noreferrer" target="_blank">
            <Icon name="instagram" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">Instagram</span>
              <span className="text-lg font-bold text-white sm:text-xl">
                {business.instagram.handle}
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
          <a className="footer-contact-link" href="#localizacao">
            <Icon name="calendar" className="h-7 w-7" />
            <span>
              <span className="block text-sm text-gold">Atendimento</span>
              <span className="text-lg font-bold text-white sm:text-xl">
                Atendimento com agendamento
              </span>
            </span>
            <Icon name="chevron" className="ml-auto h-6 w-6 text-gold" />
          </a>
        </div>

        <nav
          aria-label="Links internos"
          className="mt-6 grid grid-cols-2 gap-2.5 sm:mt-8 sm:grid-cols-3 sm:gap-3 lg:grid-cols-6"
        >
          {internalLinks
            .filter((item) =>
              ["Início", "Consulta", "Especialista", "Serviços", "Dúvidas", "Localização"].includes(
                item.label,
              ),
            )
            .map((item, index) => (
              <a
                className="grid min-h-20 place-items-center rounded-[14px] border border-gold/35 bg-black/24 p-3 text-center text-white/82 transition hover:border-gold/70 hover:text-white sm:min-h-24 sm:rounded-[18px] sm:p-4"
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
                  className="h-7 w-7 text-gold sm:h-8 sm:w-8"
                />
                <span className="text-sm font-semibold">{item.label}</span>
              </a>
            ))}
        </nav>

        <div className="mt-6 flex justify-center gap-3 sm:mt-8 sm:gap-4">
          <a className="social-round" href={links.whatsapp} rel="noopener noreferrer" target="_blank">
            <Icon name="whatsapp" className="h-6 w-6" />
            <span className="sr-only">WhatsApp</span>
          </a>
          <a className="social-round" href={links.instagram} rel="noopener noreferrer" target="_blank">
            <Icon name="instagram" className="h-6 w-6" />
            <span className="sr-only">Instagram</span>
          </a>
        </div>

        <div className="mt-6 border-t border-gold/35 pt-5 text-center sm:mt-8 sm:pt-6">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-gold">
            <a href="/privacidade/">Política de Privacidade</a>
            <span aria-hidden="true">|</span>
            <a href="/termos/">Termos de Uso</a>
          </div>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-white/58">
            {business.legal.deferment}
          </p>
          <p className="mt-5 text-sm text-white/70 sm:mt-6">
            © {year} {business.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
