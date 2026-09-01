import Image from "next/image";
import { Icon } from "@/components/Icon";
import { authorityProof, business } from "@/data/business";

type AuthorityProofProps = {
  compact?: boolean;
};

export function AuthorityProof({ compact = false }: AuthorityProofProps) {
  const metrics: Array<{
    icon: "calendar" | "check";
    label: string;
    value: string;
  }> = [];

  if (authorityProof.approvedCases !== null) {
    metrics.push({
      icon: "check",
      label: "casos deferidos",
      value: String(authorityProof.approvedCases),
    });
  }

  if (authorityProof.experienceYears !== null) {
    metrics.push({
      icon: "calendar",
      label: "anos de experiência",
      value: String(authorityProof.experienceYears),
    });
  }

  return (
    <div className="flex flex-wrap gap-2" aria-label="Indicadores de confiança">
      {metrics.map((metric) => (
        <div
          className={[
            "inline-flex items-center gap-2 rounded-xl border border-gold/35 bg-black/30",
            compact ? "px-2.5 py-2" : "px-3.5 py-2.5",
          ].join(" ")}
          key={metric.label}
        >
          <Icon className="h-4 w-4 text-gold" name={metric.icon} />
          <span className="text-sm text-white/72">
            <strong className="mr-1 text-white">{metric.value}</strong>
            {metric.label}
          </span>
        </div>
      ))}

      <div
        className={[
          "inline-flex items-center gap-2.5 rounded-xl border border-white/12 bg-white/[0.055]",
          compact ? "px-2.5 py-2" : "px-3.5 py-2.5",
        ].join(" ")}
      >
        <span className="relative flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white">
          <Image
            alt="Google"
            height={18}
            src={business.assets.googleLogo}
            width={18}
          />
        </span>
        <span className="leading-none">
          <span aria-label="5 estrelas" className="block text-[0.65rem] text-gold">
            ★★★★★
          </span>
          <strong className="mt-1 block text-xs text-white sm:text-sm">
            {authorityProof.google.rating.toFixed(1).replace(".", ",")} no Google
          </strong>
        </span>
      </div>
    </div>
  );
}
