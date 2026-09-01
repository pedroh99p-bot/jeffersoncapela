import Image from "next/image";
import { business } from "@/data/business";

type WhatsAppButtonProps = {
  href: string;
  label?: string;
  floating?: boolean;
};

export function WhatsAppButton({
  href,
  label = "Abrir WhatsApp",
  floating = false,
}: WhatsAppButtonProps) {
  return (
    <a
      aria-label={label}
      className={[
        "inline-flex items-center justify-center rounded-full border border-white/25 bg-[#25d366] text-white",
        "shadow-[0_14px_34px_rgba(0,0,0,0.42)] transition hover:bg-[#20bd5a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25d366]",
        floating
          ? "fixed bottom-2 right-2 z-40 min-h-12 gap-2 px-3 pr-3.5 sm:bottom-6 sm:right-6 sm:min-h-14 sm:px-3.5 sm:pr-4"
          : "h-12 w-12",
      ].join(" ")}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="relative h-6 w-6 shrink-0 sm:h-7 sm:w-7">
        <Image
          alt=""
          className="object-contain"
          fill
          sizes="28px"
          src={business.assets.whatsappGlyph}
        />
      </span>
      {floating ? (
        <span className="text-[0.68rem] font-black uppercase leading-none sm:text-xs">
          {label}
        </span>
      ) : null}
    </a>
  );
}
