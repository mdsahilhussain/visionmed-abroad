import {
  BadgeCheck,
  Building2,
  GraduationCap,
  Home,
  Languages,
  Wallet,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { MbbsCountryData } from "@/types/mbbs-country"
import SectionHeader from "../blocks/Header"

interface CountryOverviewProps {
  overview: MbbsCountryData["overview"]
  advantages: MbbsCountryData["advantages"]
  countryName: string
}

const ADVANTAGE_ICONS = [
  Wallet,
  BadgeCheck,
  Languages,
  Building2,
  GraduationCap,
  Home,
]

export function CountryOverview({
  overview,
  advantages,
  countryName,
}: CountryOverviewProps) {
  return (
    <section className="w-full">
      <SectionHeader eyebrow={"Overview"} title={overview.title} />
      <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
        {overview.description
          .trim()
          .split("\n\n")
          .map((para, i) => (
            <p key={i}>{para}</p>
          ))}
      </div>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map((advantage, i) => {
          const Icon = ADVANTAGE_ICONS[i % ADVANTAGE_ICONS.length]
          return (
            <Card
              key={advantage.title}
              className="group p-6 transition-all hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">
                {advantage.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {advantage.description}
              </p>
            </Card>
          )
        })}
      </div>

      <p className="sr-only">
        {countryName} MBBS advantages, overview, and program details.
      </p>
    </section>
  )
}
