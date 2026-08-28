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
};

export function FeaturePill({
  title,
  icon = "check",
  compact = false,
}: FeaturePillProps) {
  return (
    <div
      className={[
        "flex items-center border border-gold/45 bg-white/[0.04]",
        compact
          ? "gap-2 rounded-xl px-2.5 py-2.5"
          : "gap-3 rounded-[16px] px-4 py-4",
      ].join(" ")}
    >
      <span
        className={[
          "flex shrink-0 items-center justify-center rounded-md bg-gold/12 text-gold",
          compact ? "h-8 w-8" : "h-10 w-10",
        ].join(" ")}
      >
        <Icon name={icon} className={compact ? "h-4 w-4" : "h-5 w-5"} />
      </span>
      <span
        className={[
          "font-semibold text-white/90",
          compact ? "text-xs leading-[1.3]" : "text-base leading-snug",
        ].join(" ")}
      >
        {title}
      </span>
    </div>
  );
}
