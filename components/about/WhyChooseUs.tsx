import {
  BadgeCheck,
  HeartHandshake,
  MessageSquareHeart,
  ShieldCheck,
  UserCheck,
  Workflow,
} from "lucide-react"
import { Card } from "@/components/ui/card"
import type { AboutPageData } from "@/types/about"
import SectionHeader from "../blocks/Header"

interface WhyChooseUsProps {
  whyChooseUs: AboutPageData["whyChooseUs"]
}

const ICONS = [
  UserCheck,
  BadgeCheck,
  ShieldCheck,
  Workflow,
  MessageSquareHeart,
  HeartHandshake,
]

export function WhyChooseUs({ whyChooseUs }: WhyChooseUsProps) {
  return (
    <section>
      <SectionHeader eyebrow={" Why Vision Study"} title={whyChooseUs.title} />
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.items.map((item, i) => {
          const Icon = ICONS[i % ICONS.length]
          return (
            <Card
              key={item.title}
              className="p-6 transition-colors hover:border-orange-500/40 hover:bg-muted/5 hover:shadow-lg hover:shadow-orange-500/10"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
                <Icon className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground">
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
