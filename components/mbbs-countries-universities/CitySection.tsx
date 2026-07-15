import { Users2, Plane, Coins, Clock3, MapPinned } from "lucide-react"
import type { University } from "@/types/university"

export function CitySection({ university }: { university: University }) {
  const { city } = university

  const facts = [
    { icon: Users2, label: "Population", value: city.quickFacts.population },
    { icon: Plane, label: "Nearest Airport", value: city.quickFacts.nearestAirport },
    { icon: Coins, label: "Currency", value: city.quickFacts.currency },
    { icon: Clock3, label: "Timezone", value: city.quickFacts.timezone },
  ]

  const expenses = [
    { label: "Food", value: city.livingExpenses.food },
    { label: "Transportation", value: city.livingExpenses.transportation },
    { label: "Miscellaneous", value: city.livingExpenses.miscellaneous },
  ]

  return (
    <section className="w-full">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
            Life around campus
          </span>
        </div>
        <h2 className="max-w-xl text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {city.title}
        </h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">{city.description}</p>

        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {/* Quick facts */}
          <div className="rounded-2xl border border-border bg-background p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/70">
              At a glance
            </h3>
            <div className="mt-4 space-y-4">
              {facts.map((f) => (
                <div key={f.label} className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                    <f.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground">{f.label}</p>
                    <p className="truncate text-sm font-semibold text-foreground">{f.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Living expenses */}
          <div className="rounded-2xl border border-border bg-background p-6">
            <h3 className="text-sm font-bold uppercase tracking-wide text-foreground/70">
              Monthly living cost
            </h3>
            <div className="mt-4 space-y-3">
              {expenses.map((e) => (
                <div
                  key={e.label}
                  className="flex items-center justify-between border-b border-border/60 pb-3 last:border-0 last:pb-0"
                >
                  <span className="text-sm text-muted-foreground">{e.label}</span>
                  <span className="text-sm font-bold text-foreground">{e.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Attractions */}
          <div className="rounded-2xl bg-foreground p-6 text-background">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-background">
              <MapPinned className="h-4 w-4 text-orange-500" />
              Worth exploring
            </h3>
            <ul className="mt-4 space-y-3">
              {city.attractions.map((place, i) => (
                <li key={place} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 font-mono text-xs text-orange-400">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="leading-snug text-muted">{place}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
    </section>
  )
}