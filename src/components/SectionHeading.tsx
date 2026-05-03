type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, description, tone = "light" }: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={isDark ? "mb-3 text-sm font-semibold uppercase text-zinc-300" : "section-kicker mb-3"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={isDark ? "text-balance text-3xl font-semibold leading-[1.08] text-white sm:text-4xl" : "text-balance text-3xl font-semibold leading-[1.08] text-[color:var(--ink)] sm:text-4xl"}>
        {title}
      </h2>
      {description ? (
        <p className={isDark ? "mt-4 max-w-2xl text-base leading-7 text-zinc-300" : "mt-4 max-w-2xl text-base leading-7 text-[color:var(--muted)]"}>{description}</p>
      ) : null}
    </div>
  );
}
