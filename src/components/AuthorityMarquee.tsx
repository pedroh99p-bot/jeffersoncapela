type AuthorityMarqueeProps = {
  items: readonly string[];
};

export function AuthorityMarquee({ items }: AuthorityMarqueeProps) {
  const repeatedItems = [...items, ...items, ...items];

  return (
    <div
      aria-label={items.join(", ")}
      className="marquee-shell"
      role="region"
    >
      <div className="marquee-track">
        {repeatedItems.map((item, index) => (
          <span className="marquee-item" key={`${item}-${index}`}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
