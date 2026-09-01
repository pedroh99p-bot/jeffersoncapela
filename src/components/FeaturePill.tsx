import { Icon } from "@/components/Icon";

type FeaturePillProps = {
  title: string;
  icon?:
    | "calendar"
    | "check"
    | "clipboard"
    | "file"
    | "globe"
    | "lock"
    | "mapPin"
    | "message"
    | "shield"
    | "user"
    | "whatsapp";
  compact?: boolean;
  tile?: boolean;
};

export function FeaturePill({
  title,
  icon = "check",
  compact = false,
  tile = false,
}: FeaturePillProps) {
  return (
    <div
      className={[
        "flex min-w-0 items-center border border-gold/45 bg-white/[0.04]",
        tile
          ? "min-h-[4.5rem] flex-col justify-center gap-1.5 rounded-xl px-1.5 py-2 text-center"
          : compact
          ? "gap-2 rounded-xl px-2.5 py-2.5"
          : "gap-3 rounded-[16px] px-4 py-4",
      ].join(" ")}
    >
      <span
        className={[
          "flex shrink-0 items-center justify-center rounded-md bg-gold/12 text-gold",
          tile ? "h-7 w-7" : compact ? "h-8 w-8" : "h-10 w-10",
        ].join(" ")}
      >
        <Icon
          name={icon}
          className={tile ? "h-3.5 w-3.5" : compact ? "h-4 w-4" : "h-5 w-5"}
        />
      </span>
      <span
        className={[
          "min-w-0 font-semibold text-white/90",
          tile
            ? "text-[0.66rem] leading-[1.2] sm:text-xs"
            : compact
              ? "text-xs leading-[1.3]"
              : "text-base leading-snug",
        ].join(" ")}
      >
        {title}
      </span>
    </div>
  );
}
