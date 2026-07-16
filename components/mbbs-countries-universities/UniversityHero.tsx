import Link from "next/link"
import Image from "next/image"
import { MapPin, CalendarClock, Building2, Stamp } from "lucide-react"
import { buttonVariants } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import type { University } from "@/types/university"
import { Breadcrumb } from "../blocks/Breadcrumb"
import { cn } from "@/lib/utils"

export function UniversityHero({ university }: { university: University }) {
  const { breadcrumb, hero } = university

  return (
    <section className="relative overflow-hidden border-b border-muted-foreground/40">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-140 w-225 -translate-x-1/2 rounded-full bg-orange-500/10 blur-[120px]"
      />

      <div className="relative px-6 py-20 max-sm:px-0 sm:py-24">
        <Breadcrumb items={breadcrumb} />
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8">
          {/* Left: copy */}
          <div>
            <div className="mb-5 flex items-center gap-2">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
                {hero.country} · {hero.city}
              </span>
            </div>

            <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {hero.universityName}
            </h1>

            <p className="mt-5 w-full text-lg leading-relaxed text-muted-foreground">
              {hero.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-2.5">
              <Badge isIcon={false} className="rounded-full">
                <Building2 className="size-3 md:size-4" />
                Est. {hero.established} · {hero.type}
              </Badge>
              <Badge isIcon={false} className="rounded-full">
                <CalendarClock className="size-3 md:size-4" />
                Intake: {hero.intake}
              </Badge>
              <Badge
                className="rounded-full bg-emerald-600 text-foreground hover:bg-emerald-600"
                isIcon={false}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-white" />
                {hero.admissionStatus}
              </Badge>
            </div>

            <p className="text-sm mt-4 text-orange-500">
              {hero.applicationDeadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={hero.cta.primary.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "rounded-full px-7"
                )}
              >
                {hero.cta.primary.label}
              </Link>
              <Link
                href={hero.cta.secondary.href}
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "rounded-full px-7"
                )}
              >
                {hero.cta.secondary.label}
              </Link>
            </div>
          </div>

          {/* Right: campus visual + visa-stamp badge */}
          <div className="relative">
            <div className="relative aspect-4/5 w-full overflow-hidden rounded-[28px] border border-border bg-background shadow-xl shadow-orange-950/5 sm:aspect-5/4 lg:aspect-4/5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(234,88,12,0.35),transparent_55%)]" />
              <Image
                src={hero.coverImage}
                alt={hero.universityName}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-x-0 bottom-0 flex items-center gap-3 bg-linear-to-t from-black/85 to-transparent p-5 pt-14">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-foreground p-1.5">
                  <Image
                    src={hero.logo}
                    alt={`${hero.shortName} logo`}
                    width={36}
                    height={36}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="min-w-0 text-white">
                  <p className="truncate text-sm font-semibold">
                    {hero.shortName}
                  </p>
                  <p className="flex items-center gap-1 text-xs text-white">
                    <MapPin className="h-3 w-3" /> {hero.city}, {hero.country}
                  </p>
                </div>
              </div>
            </div>

            {/* visa-stamp accent */}
            <div className="absolute -top-5 -left-5 hidden rotate-[-8deg] items-center gap-2 rounded-full border-2 border-dashed border-orange-400 bg-background/95 px-4 py-2 shadow-md backdrop-blur sm:flex">
              <Stamp className="h-4 w-4 text-orange-600" />
              <span className="text-xs font-bold tracking-wide text-orange-700 uppercase">
                {hero.partnerUniversity
                  ? "Vision Study Partner"
                  : "Verified Listing"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
