type AccentTitleProps = {
  title: string;
  /** Sarlavhaning rang bilan ajratiladigan qismi (aynan shu matn). */
  accent: string;
  accentClassName?: string;
};

/** Sarlavhaning bir qismini brend rangi bilan ajratadi — maketdagi kabi. */
export function AccentTitle({
  title,
  accent,
  accentClassName = "text-brand-600",
}: AccentTitleProps) {
  const start = title.indexOf(accent);
  if (start === -1) return title;

  return (
    <>
      {title.slice(0, start)}
      <span className={accentClassName}>{accent}</span>
      {title.slice(start + accent.length)}
    </>
  );
}
