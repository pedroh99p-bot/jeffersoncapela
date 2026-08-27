import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  as = "h2",
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div
      className={[
        "space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-gold/55 px-4 py-2 text-xs font-black uppercase tracking-normal text-gold">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag className="text-4xl font-black uppercase leading-[0.98] text-white sm:text-5xl lg:text-6xl">
        {title}
      </HeadingTag>
      {description ? (
        <p className="text-lg leading-8 text-white/74 sm:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
