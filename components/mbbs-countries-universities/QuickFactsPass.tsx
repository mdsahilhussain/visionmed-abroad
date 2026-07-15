import Link from "next/link"
import { Plane, ArrowRight } from "lucide-react"
import type { University } from "@/types/university"

export function QuickFactsPass({ university }: { university: University }) {
  const { quickFacts, hero } = university

  const fields: { label: string; value: string }[] = [
    { label: "Duration", value: quickFacts.duration },
    { label: "Degree", value: quickFacts.degree },
    { label: "Medium", value: quickFacts.medium },
    { label: "Annual Tuition", value: quickFacts.annualTuitionFee },
    { label: "Hostel Fee", value: quickFacts.hostelFee },
    { label: "University Type", value: quickFacts.universityType },
    { label: "Int'l Students", value: quickFacts.internationalStudents },
    { label: "Indian Students", value: quickFacts.indianStudents },
  ]

  return (
    <section className="container mx-auto -mt-8 px-4 sm:px-6 lg:px-8">
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-foreground shadow-2xl shadow-orange-500/20 sm:flex-row text-background">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_260px]">
          {/* Main fields */}
          <div className="p-6 sm:p-8">
            <div className="mb-6 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-400">
                University Pass
              </span>
              <span className="font-mono text-[11px] text-muted-foreground">
                {hero.shortName}-{hero.city.slice(0, 3).toUpperCase()}-26
              </span>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4">
              {fields.map((f) => (
                <div key={f.label}>
                  <p className="text-[11px] uppercase tracking-wide text-muted-foreground">{f.label}</p>
                  <p className="mt-1 text-sm font-semibold leading-snug sm:text-[15px] text-background">{f.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border/10 pt-5">
              <span className="rounded-full bg-orange-500/15 px-3 py-1 text-xs font-medium text-orange-300">
                {quickFacts.recognitionShort}
              </span>
              <Link
                href={quickFacts.seeFullEligibility}
                className="inline-flex items-center gap-1 text-xs font-medium text-muted underline-offset-4 hover:text-background hover:underline"
              >
                See full eligibility & documents
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Perforation */}
          <div className="relative hidden md:block">
            <div className="absolute inset-y-0 left-0 border-l-2 border-dashed border-border/15" />
            <div className="absolute -left-2 -top-2 h-4 w-4 rounded-full bg-background" />
            <div className="absolute -bottom-2 -left-2 h-4 w-4 rounded-full bg-background" />
          </div>

          {/* Route stub */}
          <div className="flex flex-col justify-center gap-4 bg-background/3 p-6 sm:p-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Plane className="h-3.5 w-3.5 text-orange-500" />
              <span className="text-[11px] uppercase tracking-wide">Route</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold">
              <span>DEL</span>
              <span className="text-orange-400">→</span>
              <span>{hero.city}</span>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-wide text-muted-foreground">Intake</p>
              <p className="text-sm font-semibold">{hero.intake}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}