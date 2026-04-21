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
                Estou em transição de carreira para a área de tecnologia, com foco total em desenvolvimento de software. 
                Mais do que mudar de área, meu objetivo é atingir a excelência técnica. Comecei a estudar programação 
                e logo percebi que não queria apenas entender como os sistemas funcionam, mas sim dominar a arte de 
                criar soluções impecáveis através do código.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Essa mudança tem sido gradual, consciente e extremamente ambiciosa. Construí uma base sólida em lógica 
                e desenvolvimento web, mas não me contento com o básico: busco evolução contínua e superação a cada 
                projeto. Sei que o mercado exige dedicação extrema, e é exatamente isso que entrego.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Atualmente, meu foco é ganhar experiência prática e me inserir no mercado, tratando cada desafio como 
                uma oportunidade para provar minha consistência e minha vontade de ser, a cada dia, um desenvolvedor 
                melhor e mais completo.
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
