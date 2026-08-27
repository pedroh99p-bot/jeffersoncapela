import { Icon } from "@/components/Icon";

type FeaturePillProps = {
  title: string;
  icon?: "calendar" | "check" | "clipboard" | "file" | "message" | "shield" | "user" | "whatsapp";
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
        "flex items-center gap-3 rounded-lg border border-gold/45 bg-white/[0.04]",
        compact ? "px-3 py-3" : "px-4 py-4",
      ].join(" ")}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-gold/12 text-gold">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-base font-semibold leading-snug text-white/90">
        {title}
      </span>
    </div>
  );
}
