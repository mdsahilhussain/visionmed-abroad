import { CheckCircle2 } from "lucide-react"
import type { AboutPageData } from "@/types/about"
import SectionHeader from "../blocks/Header"

interface ServicesListProps {
  services: AboutPageData["services"]
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <section className="w-full">
      <SectionHeader eyebrow={"End-to-End Support"} title={services.title} />
      <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.items.map((service) => (
          <div
            key={service}
            className="flex items-center gap-3 rounded-lg border border-border px-4 py-3.5"
          >
            <CheckCircle2 className="h-4 w-4 shrink-0 text-orange-500" />
            <span className="text-sm font-medium text-foreground">
              {service}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
