import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const projects = [
  {
    title: "Projeto Bezerra",
    tag: "Acadêmico · Front-end",
    desc: "Projeto acadêmico de interface web focado em estruturação e estilização moderna.",
    stack: ["HTML", "CSS", "JavaScript"],
    year: "2025",
    link: "https://github.com/WesleySilva373/bezerra",
    image: "./img/Captura de tela 2025-12-26 224052.png",
  },
  {
    title: "Restaurante Silva",
    tag: "UI/UX · Responsivo",
    desc: "Desenvolvimento de interface para sistema de restaurante, focado em design responsivo e UX/UI.",
    stack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    year: "2024",
    link: "https://github.com/WesleySilva373/Restaurante-Silva",
    image: "./img/Captura de tela 2025-12-26 223328.png",
  },
  {
    title: "Personal Portfolio",
    tag: "Landing Page · Animações",
    desc: "Landing page acadêmica desenvolvida para consolidar conhecimentos em animações avançadas e performance.",
    stack: ["React", "Tailwind", "Framer Motion"],
    year: "2026",
    image: "./img/Captura de tela 2026-04-20 171400.png",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

export function Projects() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--neon)]">
            01 — Trabalhos selecionados
          </p>
          <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Projetos com foco em{" "}
            <span className="font-serif italic text-muted-foreground">detalhe</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((p) => (
            <motion.div key={p.title} variants={item}>
              <SpotlightCard className="hover-lift glass group h-full overflow-hidden rounded-2xl p-0">
                <div className="aspect-video w-full overflow-hidden border-b border-border">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                        {p.tag}
                      </p>
                      <h3 className="mt-2 text-2xl font-medium tracking-tight">{p.title}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                  </div>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {p.desc}
                  </p>

                  <div className="mt-8 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-1.5">
                      {p.stack.map((s) => (
                        <li
                          key={s}
                          className="rounded-full border border-border px-2.5 py-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:border-[var(--neon)]/40 group-hover:text-foreground"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                    {p.link && (
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all group-hover:scale-110 group-hover:border-[var(--neon)] group-hover:bg-[var(--neon)]/10 group-hover:text-[var(--neon)]"
                      >
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-12" />
                      </a>
                    )}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
