import Image from "next/image";
import { business } from "@/data/business";
import { GoldButton } from "@/components/GoldButton";
import { Icon } from "@/components/Icon";

type ServiceCardProps = {
  title: string;
  description: string;
  featured?: boolean;
  price?: string;
  installments?: string;
  href?: string;
  icon?: "file" | "shield" | "message" | "clipboard" | "swap" | "check";
};

export function ServiceCard({
  title,
  description,
  featured = false,
  price,
  installments,
  href,
  icon = "file",
}: ServiceCardProps) {
  if (featured) {
    return (
      <article className="relative overflow-hidden rounded-[20px] border border-gold/60 bg-[radial-gradient(circle_at_85%_25%,rgba(216,170,60,0.18),transparent_34%),linear-gradient(145deg,#1b1b1b,#0b0b0b)] p-4 sm:p-7">
        <div className="relative z-10 max-w-[72%] space-y-3 sm:max-w-lg sm:space-y-4">
          <span className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(135deg,#f5d370,#bf8c26)] px-3 py-2 text-xs font-black uppercase text-black">
            <Icon name="check" className="h-4 w-4" />
            Mais procurado
          </span>
          <div>
            <h3 className="text-[1.75rem] font-black uppercase leading-none text-gold sm:text-5xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-white/78 sm:mt-3 sm:text-lg sm:leading-7">
              {description}
            </p>
          </div>
          <div className="border-y border-white/16 py-2 text-xs leading-5 text-white/76 sm:py-3 sm:text-sm">
            Orientação documental • conferência • acompanhamento
          </div>
          {price && installments ? (
            <div>
              <p className="text-4xl font-black leading-none text-white sm:text-6xl">
                {price}
              </p>
              <p className="mt-1 text-lg font-semibold text-gold sm:text-xl">
                {installments}
              </p>
            </div>
          ) : null}
        </div>

        <div className="service-portrait-fade absolute bottom-0 right-[-44px] top-14 w-[58%] opacity-80 sm:right-0 sm:w-[42%] sm:opacity-95">
          <Image
            alt={business.name}
            className="object-contain object-bottom"
            fill
            sizes="(max-width: 640px) 58vw, 42vw"
            src={business.assets.specialistPhoto}
          />
        </div>

        {href ? (
          <div className="relative z-10 mt-6 sm:mt-8">
            <GoldButton href={href} icon="arrowRight">
              Iniciar meu processo
            </GoldButton>
          </div>
        ) : null}
      </article>
    );
  }

  return (
    <a
      className="group flex min-h-18 items-center gap-3 rounded-[14px] border border-gold/35 bg-white/[0.035] p-3.5 transition hover:border-gold/75 hover:bg-gold/8 sm:min-h-20 sm:gap-4 sm:p-4"
      href={href}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-white/80 group-hover:text-gold sm:h-12 sm:w-12">
        <Icon name={icon} className="h-5 w-5 sm:h-6 sm:w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-base font-semibold text-white sm:text-lg">{title}</span>
        <span className="mt-1 block text-xs leading-5 text-white/60 sm:text-sm">
          {description}
        </span>
      </span>
      <Icon name="chevron" className="h-6 w-6 shrink-0 text-gold" />
    </a>
  );
}
