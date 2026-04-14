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
        <p className={isDark ? "mb-4 text-sm font-semibold uppercase text-zinc-300" : "section-kicker mb-4"}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={isDark ? "text-balance text-4xl font-semibold leading-[1.08] text-white sm:text-5xl" : "text-balance text-4xl font-semibold leading-[1.08] text-[color:var(--ink)] sm:text-5xl"}>
        {title}
      </h2>
      {description ? (
        <p className={isDark ? "mt-5 max-w-2xl text-base leading-8 text-zinc-300 sm:text-lg" : "mt-5 max-w-2xl text-base leading-8 text-[color:var(--muted)] sm:text-lg"}>{description}</p>
      ) : null}
    </div>
  );
}
