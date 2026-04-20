import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutMe } from "@/components/AboutMe";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Timeline } from "@/components/Timeline";
import { Contact } from "@/components/Contact";
import { MeteorLayer } from "@/components/MeteorLayer";
import { ParticleField } from "@/components/ParticleField";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Wesley Tenorio · Portfolio" },
      {
        name: "description",
        content:
          "Portfólio de Wesley Tenorio — Transformando complexidade em elegância digital.",
      },
      { property: "og:title", content: "Wesley Tenorio · Portfolio" },
      {
        property: "og:description",
        content: "Projetos, stack e trajetória de Wesley Tenorio.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <AboutMe />
      {/* Dynamic Backgrounds */}
      <div className="pointer-events-none fixed inset-0 -z-20 h-full w-full opacity-40">
        <ParticleField />
      </div>
      <MeteorLayer />
      <Projects />
      <Stack />
      <Timeline />
      <Contact />
    </main>
  );
}
