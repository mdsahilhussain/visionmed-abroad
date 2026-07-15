import {
  Award,
  Handshake,
  Heart,
  ScrollText,
  Sparkles,
  Target,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { AboutPageData } from "@/types/about"
import SectionHeader from "../blocks/Header"

interface CoreValuesProps {
  values: AboutPageData["values"]
}

const ICONS = [ScrollText, Sparkles, Target, Award, Handshake, Heart]

export function CoreValues({ values }: CoreValuesProps) {
  return (
    <section>
      <SectionHeader eyebrow={"What Guides Us"} title={values.title} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Card
              key={item.title}
              className="group p-6 transition-all hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
