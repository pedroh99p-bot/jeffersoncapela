type SectionProgressProps = {
  current: number;
  label: string;
  total?: number;
};

export function SectionProgress({
  current,
  label,
  total = 10,
}: SectionProgressProps) {
  return (
    <div className="space-y-4 border-b border-gold/20 pb-6">
      <div className="flex items-end justify-between gap-4">
        <p className="text-base text-white/68">
          Você está em{" "}
          <span className="font-black uppercase text-gold">{label}</span>
        </p>
        <p className="shrink-0 text-lg font-black">
          <span className="text-gold">{current}</span>{" "}
          <span className="text-white/75">de {total}</span>
        </p>
      </div>
      <div
        aria-label={`Seção ${current} de ${total}`}
        className="grid grid-cols-10 gap-1.5"
        role="img"
      >
        {Array.from({ length: total }, (_, index) => (
          <span
            className={[
              "h-2 rounded-full border border-white/10",
              index < current
                ? "border-[#f1d47a]/40 bg-[linear-gradient(90deg,#f9d76a,#bd861f)]"
                : "bg-white/14",
            ].join(" ")}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
