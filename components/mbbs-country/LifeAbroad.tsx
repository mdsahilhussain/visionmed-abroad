import {
  Bus,
  ShieldCheck,
  Soup,
  ThermometerSun,
  Users,
  Home,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { MbbsCountryData } from "@/types/mbbs-country"

interface LifeAbroadProps {
  studentLife: MbbsCountryData["studentLife"]
  climate: MbbsCountryData["climate"]
  indianCommunity: MbbsCountryData["indianCommunity"]
  countryName: string
}

export function LifeAbroad({
  studentLife,
  climate,
  indianCommunity,
  countryName,
}: LifeAbroadProps) {
  const tiles = [
    { icon: Home, label: "Accommodation", text: studentLife.accommodation },
    { icon: Soup, label: "Food", text: studentLife.food },
    { icon: Bus, label: "Transport", text: studentLife.transport },
    { icon: ShieldCheck, label: "Safety", text: studentLife.safety },
  ]

  return (
    <section className="rounded-2xl border border-muted-foreground/40 bg-background/40 px-6 py-14 sm:px-8 sm:py-16">
      <div>
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
          <span className="h-px w-8 bg-orange-500" />
          Life in {countryName}
        </div>
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What everyday life looks like
        </h2>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {tiles.map(({ icon: Icon, label, text }) => (
            <Card key={label} className="p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                  <Icon className="h-4 w-4 text-orange-500" />
                </div>
                <h3 className="text-sm font-semibold text-foreground">
                  {label}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
                {text}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                <ThermometerSun className="h-4 w-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">Climate</h3>
            </div>
            <div className="mt-4 flex gap-6 text-sm">
              <div>
                <div className="text-[11px] tracking-wide text-muted-foreground/80 uppercase">
                  Summer
                </div>
                <div className="mt-1 font-semibold text-foreground">
                  {climate.summer}
                </div>
              </div>
              <div>
                <div className="text-[11px] tracking-wide text-muted-foreground/80 uppercase">
                  Winter
                </div>
                <div className="mt-1 font-semibold text-foreground">
                  {climate.winter}
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
              {climate.description}
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                <Users className="h-4 w-4 text-orange-500" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">
                Indian Community
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground/70">
              {indianCommunity.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
