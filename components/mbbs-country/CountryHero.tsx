import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { MbbsCountryData } from "@/types/mbbs-country"
import { Breadcrumb } from "../blocks/Breadcrumb"

interface CountryHeroProps {
  data: Pick<MbbsCountryData, "hero" | "countryName" | "breadcrumb">
}

export function CountryHero({ data }: CountryHeroProps) {
  const { hero, countryName, breadcrumb } = data

  return (
    <section className="relative overflow-hidden border-b border-muted-foreground/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-140 w-225 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative px-6 py-20 sm:py-24">
        <Breadcrumb items={breadcrumb} />
        <div className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
          <span className="h-px w-8 bg-orange-500" />
          MBBS Abroad &middot; {countryName}
        </div>

        <h1 className="max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-foreground sm:text-6xl">
          {hero.title}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {hero.subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-2.5">
          {hero.highlights.map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 rounded-full border border-muted-foreground/40 bg-muted px-3 py-1.5 text-xs font-medium text-primary"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-orange-500" />
              {item}
            </span>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Button size="lg">{hero.cta}</Button>
          <Button size="lg" variant="outline">
            Talk to a Counsellor
          </Button>
        </div>
      </div>
    </section>
  )
}
