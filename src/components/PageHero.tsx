import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

/** Reusable hero banner used by interior pages (About, Products, Services, etc.). */
export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative overflow-hidden border-b border-ink/5 bg-gradient-to-b from-brand-50/70 to-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 [background:radial-gradient(55%_50%_at_80%_10%,rgba(42,110,68,0.12),transparent_60%)]"
      />
      <div className="container relative py-16 sm:py-20 lg:py-24">
        <Reveal className="max-w-3xl">
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="heading-xl mt-5">{title}</h1>
          {subtitle && <p className="lead mt-5">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
