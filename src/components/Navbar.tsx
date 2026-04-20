import { Code2 } from "lucide-react";

const links = [
  { href: "#projects", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#about", label: "Sobre" },
  { href: "#contact", label: "Contato" },
];

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <nav className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-4 py-2.5 sm:px-6">
        <a href="#top" className="flex items-center gap-2 text-sm font-medium tracking-tight">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-[var(--neon)] to-[var(--violet)]">
            <Code2 className="h-3.5 w-3.5 text-background" />
          </span>
          <span className="hidden sm:inline">dev.portfolio</span>
        </a>
        <ul className="flex items-center gap-1 text-sm text-muted-foreground">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:bg-accent hover:text-foreground"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
