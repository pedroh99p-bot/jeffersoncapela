import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

type GoldButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  target?: string;
  rel?: string;
  icon?: "arrowRight" | "calendar" | "message" | "whatsapp";
  disabled?: boolean;
};

export function GoldButton({
  children,
  className = "",
  href,
  type = "button",
  target,
  rel,
  icon = "arrowRight",
  disabled = false,
}: GoldButtonProps) {
  const classes = [
    "inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl",
    "border border-[#f1d47a]/70 bg-[linear-gradient(135deg,#f5cf64,#c99425)]",
    "px-5 py-4 text-center text-sm font-black uppercase tracking-normal text-black",
    "shadow-[inset_0_1px_0_rgba(255,255,255,0.45)] transition",
    "hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5cf64]",
    "disabled:cursor-not-allowed disabled:border-white/10 disabled:bg-none disabled:bg-white/8 disabled:text-white/35 disabled:shadow-none disabled:hover:brightness-100",
    "sm:w-auto sm:min-w-72",
    className,
  ].join(" ");

  if (href) {
    return (
      <a className={classes} href={href} rel={rel} target={target}>
        <Icon name={icon} className="h-5 w-5 shrink-0" />
        <span>{children}</span>
      </a>
    );
  }

  return (
    <button className={classes} disabled={disabled} type={type}>
      <Icon name={icon} className="h-5 w-5 shrink-0" />
      <span>{children}</span>
    </button>
  );
}
