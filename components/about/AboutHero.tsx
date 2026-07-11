import { Button } from "@/components/ui/button"
import type { AboutPageData } from "@/types/about"
import { Breadcrumb } from "../blocks/Breadcrumb"

interface AboutHeroProps {
  hero: AboutPageData["hero"]
  breadcrumb: AboutPageData["breadcrumb"]
}

export function AboutHero({ hero, breadcrumb }: AboutHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-muted-foreground/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-140 w-225 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative py-20 sm:py-24">
        <Breadcrumb items={breadcrumb} />
        <div className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
          <span className="h-px w-8 bg-orange-500" />
          {hero.badge}
        </div>
        <h1 className="text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.description}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button size="lg">{hero.cta.primary}</Button>
          <Button size="lg" variant="outline">
            {hero.cta.secondary}
          </Button>
        </div>
      </div>
    </section>
  )
}
