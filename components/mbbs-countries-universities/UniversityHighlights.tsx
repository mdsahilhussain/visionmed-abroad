import {
  BadgeDollarSign,
  Stethoscope,
  Home,
  Users,
  type LucideIcon,
} from "lucide-react"
import type { University } from "@/types/university"
import { Card } from "../ui/card"
import SectionHeader from "../blocks/Header"

const ICON_MAP: Record<string, LucideIcon> = {
  "badge-dollar-sign": BadgeDollarSign,
  stethoscope: Stethoscope,
  house: Home,
  users: Users,
}

export function UniversityHighlights({
  university,
}: {
  university: University
}) {
  const { highlights } = university

  return (
    <section className="flex flex-col gap-14">
      <SectionHeader
        eyebrow={"Why this university"}
        title={" Built for international students"}
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => {
          const Icon = ICON_MAP[h.icon] ?? Users
          return (
            <Card
              key={h.title}
              className="group p-6 transition-all hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-bold text-foreground">{h.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {h.description}
              </p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
