import type { ReactNode } from "react";

type SectionHeadingProps = {
  as?: "h1" | "h2";
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  as = "h2",
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}: SectionHeadingProps) {
  const HeadingTag = as;

  return (
    <div
      className={[
        "space-y-3 sm:space-y-4",
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className,
      ].join(" ")}
    >
      {eyebrow ? (
        <p className="inline-flex rounded-full border border-gold/55 px-4 py-2 text-xs font-black uppercase tracking-normal text-gold">
          {eyebrow}
        </p>
      ) : null}
      <HeadingTag
        className={[
          "text-[2.1rem] font-black uppercase leading-[1.02] text-white sm:text-5xl lg:text-6xl",
          titleClassName,
        ].join(" ")}
      >
        {title}
      </HeadingTag>
      {description ? (
        <p
          className={[
            "text-base leading-7 text-white/74 sm:text-xl sm:leading-8",
            descriptionClassName,
          ].join(" ")}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
