import { Reveal } from "./Reveal";

const items = [
  {
    year: "2025 - 2027",
    title: "CST em Análise e Desenvolvimento de Sistemas",
    org: "Faculdade Impacta",
    desc: "Formação focada em engenharia de software, desenvolvimento full-stack e arquitetura de sistemas.",
  },
  {
    year: "2024",
    title: "Formação em Programação Java e Python",
    org: "Cursos de Especialização",
    desc: "Aprofundamento em lógica, POO e desenvolvimento de aplicações backend robustas.",
  },
  {
    year: "2024",
    title: "Formação em Desenvolvimento Front-end",
    org: "Cursos de Especialização",
    desc: "Foco em interfaces modernas, responsividade e experiência do usuário (UX/UI).",
  },
  {
    year: "2023",
    title: "Certificações Google Cloud",
    org: "Google Cloud Foundations",
    desc: "Cloud Computing Foundations & Manage Cloud Resources — Fundamentos e gestão de infraestrutura em nuvem.",
  },
];

export function Timeline() {
  return (
    <section id="trajectory" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="mb-16">
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--neon)]">
              03 — Trajetória
            </p>
            <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              Uma linha do tempo de{" "}
              <span className="font-serif italic text-muted-foreground">curiosidade</span>.
            </h2>
          </div>
        </Reveal>

        <ol className="relative border-l border-border pl-8">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 0.08} y={16}>
              <li className="relative pb-12 last:pb-0">
                <span className="absolute -left-[37px] top-1.5 flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-3 w-3 animate-ping rounded-full bg-[var(--neon)]/40" />
                  <span className="relative h-2 w-2 rounded-full bg-[var(--neon)]" />
                </span>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {it.year} · {it.org}
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{it.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  {it.desc}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
