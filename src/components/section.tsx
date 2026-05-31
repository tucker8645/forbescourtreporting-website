export function PageHero({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[center_20%] scale-110"
        src="/court-moving.mp4"
      />
      <div className="absolute inset-0 bg-[var(--primary)]/60" />
      <div className="relative px-4 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-20">
        <div className="mx-auto max-w-7xl">{children}</div>
      </div>
    </section>
  );
}

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
    <section id={id} className={`px-4 py-10 sm:px-8 sm:py-16 lg:px-16 lg:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  children,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-3 text-balance font-display text-3xl font-semibold uppercase leading-tight tracking-[0.03em] text-[var(--primary)] sm:text-4xl">
        {title}
      </h2>
      {children ? <div className="mt-5 text-lg leading-8 text-[var(--slate)]">{children}</div> : null}
    </div>
  );
}
