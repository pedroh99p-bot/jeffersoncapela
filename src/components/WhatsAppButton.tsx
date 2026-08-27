import { Icon } from "@/components/Icon";

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
        "inline-flex items-center justify-center rounded-full border border-[#f1d47a]/70",
        "bg-[linear-gradient(135deg,#f5cf64,#c99425)] text-black shadow-[0_14px_34px_rgba(0,0,0,0.35)]",
        "transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5cf64]",
        floating
          ? "fixed bottom-4 right-4 z-40 h-14 w-14 sm:bottom-6 sm:right-6"
          : "h-12 w-12",
      ].join(" ")}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon name="whatsapp" className="h-7 w-7" />
    </a>
  );
}
