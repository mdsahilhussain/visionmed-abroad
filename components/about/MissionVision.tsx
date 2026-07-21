import { Compass, Target } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { AboutPageData } from "@/types/about"

interface MissionVisionProps {
  mission: AboutPageData["mission"]
  vision: AboutPageData["vision"]
}

export function MissionVision({ mission, vision }: MissionVisionProps) {
  const blocks = [
    { icon: Target, ...mission },
    { icon: Compass, ...vision },
  ]

  return (
    <section className="w-full border-t pt-12">
      <div className="grid gap-4 sm:grid-cols-2">
        {blocks.map(({ icon: Icon, title, description }) => (
          <Card
            key={title}
            className="group p-6 transition-all hover:-translate-y-1 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-100"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-orange-600 transition-colors group-hover:bg-orange-600 group-hover:text-white">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  )
}
