import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";


export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax: title moves slower, subtitle faster, badge slowest
  const yBadge = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const yTitle = useTransform(scrollYProgress, [0, 1], [0, -120]);
  const ySubtitle = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const yCta = useTransform(scrollYProgress, [0, 1], [0, -220]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate overflow-hidden pt-40 pb-32 sm:pt-48 sm:pb-40"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />


      <motion.div
        style={{ opacity }}
        className="relative mx-auto flex max-w-4xl flex-col items-center px-6 text-center"
      >
        <motion.div
          style={{ y: yBadge }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-white"
        >
          <Sparkles className="h-3.5 w-3.5 text-[var(--neon)]" />
          Disponível para novos projetos
        </motion.div>

        <motion.h1
          style={{ y: yTitle }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
          className="text-balance text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Wesley Tenorio
        </motion.h1>

        <motion.p
          style={{ y: ySubtitle }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-6 max-w-2xl text-balance text-base leading-relaxed text-white sm:text-lg"
        >
          Transformando complexidade em elegância digital. Performance, cuidado e propósito em cada
          linha de código.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 font-mono text-xs uppercase tracking-widest text-white/60"
        >
          Design com propósito e código limpo.
        </motion.p>

        <motion.div
          style={{ y: yCta }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a href="#projects" className="btn-primary group">
            Ver projetos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a href="#contact" className="btn-ghost">
            Entrar em contato
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-20 grid w-full max-w-2xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-border bg-border/30"
        >
          {[
            { k: "14", v: "Projetos Entregues" },
            { k: "1.5", v: "Anos de Experiência" },
            { k: "ADS", v: "Em formação" },
          ].map((s) => (
            <div key={s.v} className="bg-background/60 px-4 py-5 text-center backdrop-blur">
              <div className="font-mono text-xl font-medium text-white">{s.k}</div>
              <div className="mt-1 text-xs text-white/70">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
