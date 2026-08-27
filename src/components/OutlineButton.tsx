import type { ReactNode } from "react";
import { Icon } from "@/components/Icon";

type OutlineButtonProps = {
  children: ReactNode;
  href: string;
  className?: string;
  rel?: string;
  target?: string;
};

export function OutlineButton({
  children,
  href,
  className = "",
  rel,
  target,
}: OutlineButtonProps) {
  return (
    <a
      className={[
        "inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-2xl",
        "border border-gold/70 bg-black/25 px-5 py-4 text-center text-sm font-black",
        "uppercase tracking-normal text-gold transition hover:bg-gold/10",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
        "sm:w-auto sm:min-w-64",
        className,
      ].join(" ")}
      href={href}
      rel={rel}
      target={target}
    >
      <span>{children}</span>
      <Icon name="chevron" className="h-5 w-5 shrink-0" />
    </a>
  );
}
