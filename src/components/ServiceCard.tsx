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
      <article className="relative overflow-hidden rounded-lg border border-gold/60 bg-[radial-gradient(circle_at_85%_25%,rgba(216,170,60,0.18),transparent_34%),linear-gradient(145deg,#1b1b1b,#0b0b0b)] p-5 sm:p-7">
        <div className="relative z-10 max-w-[70%] space-y-4 sm:max-w-lg">
          <span className="inline-flex items-center gap-2 rounded-md bg-[linear-gradient(135deg,#f5d370,#bf8c26)] px-3 py-2 text-xs font-black uppercase text-black">
            <Icon name="check" className="h-4 w-4" />
            Mais procurado
          </span>
          <div>
            <h3 className="text-3xl font-black uppercase leading-none text-gold sm:text-5xl">
              {title}
            </h3>
            <p className="mt-3 text-base leading-7 text-white/78 sm:text-lg">
              {description}
            </p>
          </div>
          <div className="border-y border-white/16 py-3 text-sm text-white/76">
            Orientacao documental • conferencia • acompanhamento
          </div>
          {price && installments ? (
            <div>
              <p className="text-5xl font-black leading-none text-white sm:text-6xl">
                {price}
              </p>
              <p className="mt-1 text-xl font-semibold text-gold">
                {installments}
              </p>
            </div>
          ) : null}
        </div>

        <div className="absolute bottom-0 right-[-34px] top-14 w-[58%] opacity-95 sm:right-0 sm:w-[42%]">
          <Image
            alt={business.name}
            className="object-contain object-bottom"
            fill
            sizes="(max-width: 640px) 58vw, 42vw"
            src={business.assets.specialistPhoto}
          />
        </div>

        {href ? (
          <div className="relative z-10 mt-8">
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
      className="group flex min-h-20 items-center gap-4 rounded-lg border border-gold/35 bg-white/[0.035] p-4 transition hover:border-gold/75 hover:bg-gold/8"
      href={href}
    >
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border border-white/12 bg-white/[0.04] text-white/80 group-hover:text-gold">
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-lg font-semibold text-white">{title}</span>
        <span className="mt-1 block text-sm leading-5 text-white/60">
          {description}
        </span>
      </span>
      <Icon name="chevron" className="h-6 w-6 shrink-0 text-gold" />
    </a>
  );
}
