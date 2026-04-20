import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="relative py-32">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <div className="glass relative overflow-hidden rounded-3xl p-10 text-center sm:p-16">
            <div
              aria-hidden
              className="absolute inset-x-0 -top-24 mx-auto h-48 w-[60%] rounded-full bg-[var(--neon)]/20 blur-3xl"
            />
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--violet)]">
              04 — Vamos conversar
            </p>
            <h2 className="mt-4 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
              Tem uma ideia em mente?{" "}
              <span className="font-serif italic text-gradient-accent">Construímos juntos.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground">
              Aberto a freelances, colaborações e oportunidades full-time. Respondo em até 24h.
            </p>

            <a href="mailto:wesleytenorio526@gmail.com" className="btn-primary group mt-8">
              <Mail className="h-4 w-4" />
              wesleytenorio526@gmail.com
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <div className="mt-10 flex items-center justify-center gap-3">
              {[
                { icon: Github, href: "https://github.com/WesleySilva373", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/wesley-tenorio-4906312aa/", label: "LinkedIn" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <footer className="mt-16 flex flex-col items-center justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p className="font-mono">© {new Date().getFullYear()} Wesley Tenorio</p>
          <p className="font-mono">Desenvolvido com Foco em Performance e Elegância</p>
        </footer>
      </div>
    </section>
  );
}
