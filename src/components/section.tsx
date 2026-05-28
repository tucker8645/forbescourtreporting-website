export function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-4 py-16 sm:px-8 sm:py-20 lg:px-16 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold uppercase leading-tight tracking-[0.03em] text-[var(--primary)] sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-lg leading-8 text-[var(--slate)]">{children}</div> : null}
    </div>
  );
}
