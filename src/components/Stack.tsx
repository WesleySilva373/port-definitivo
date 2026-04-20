import { motion } from "framer-motion";

const stack = [
  "HTML", "CSS", "JavaScript", "Java", "Python", "Bootstrap", "MySQL",
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 14, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.2, 0.8, 0.2, 1] as const },
  },
};

export function Stack() {
  return (
    <section id="stack" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-16 max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--violet)]">
            02 — Tech stack
          </p>
          <h2 className="mt-3 text-balance text-4xl font-medium tracking-tight sm:text-5xl">
            Ferramentas que uso{" "}
            <span className="font-serif italic text-muted-foreground">todos os dias</span>.
          </h2>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="flex flex-wrap gap-2"
        >
          {stack.map((tech) => (
            <motion.span
              key={tech}
              variants={item}
              whileHover={{ scale: 1.05, y: -2 }}
              className="glass inline-flex cursor-default items-center rounded-full px-4 py-2 font-mono text-sm text-foreground/90 transition-colors hover:border-[var(--neon)]/50 hover:text-[var(--neon)]"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
