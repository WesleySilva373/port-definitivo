import { motion } from "framer-motion";
import { Reveal } from "./Reveal";

export function AboutMe() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="max-w-xl">
              <p className="font-mono text-xs uppercase tracking-widest text-[var(--neon)]">
                03 — Sobre Mim
              </p>
              <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
                Design com propósito e{" "}
                <span className="font-serif italic text-muted-foreground">código limpo</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Estou em transição de carreira para a área de tecnologia, mais especificamente para o desenvolvimento de software. 
                Antes disso, não tinha contato direto com a área, mas comecei a estudar programação e fui me interessando cada 
                vez mais por como os sistemas funcionam e como é possível criar soluções usando texto.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Essa mudança não foi imediata. Estou passando por um processo de aprendizado, começando do básico e construindo 
                uma base sólida em lógica de programação, desenvolvimento web e outras tecnologias. Sei que é uma área que exige 
                dedicação e prática constante, então tenho me esforçado para evoluir aos poucos. 
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Hoje meu foco é ganhar experiência prática, seja com projetos pessoais ou oportunidades de estágio, para conseguir 
                me desenvolver na área e me inserir no mercado de tecnologia. Estou tratando essa transição como um processo 
                sério de construção de carreira, com paciência e consistência.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="relative flex justify-center md:justify-end">
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl glass p-2 sm:h-80 sm:w-80">
                <img
                  src="./img/perfil.jpg"
                  alt="Wesley Tenorio"
                  className="h-full w-full rounded-xl object-cover brightness-100 contrast-100"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
              <div 
                aria-hidden 
                className="absolute -right-4 -bottom-4 -z-10 h-32 w-32 rounded-full bg-[var(--neon)]/10 blur-3xl" 
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
