import { Hospital } from "lucide-react"
import type { University } from "@/types/university"

export function ClinicalTraining({ university }: { university: University }) {
  const { clinicalTraining } = university

  return (
    <section className="w-full">
      <div className="mb-10 max-w-xl">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-xs font-semibold tracking-[0.18em] text-orange-400 uppercase">
            Hands-on training
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          {clinicalTraining.title}
        </h2>
        <p className="mt-3 text-muted-foreground">
          Students rotate through these affiliated teaching hospitals for
          practical clinical exposure.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {clinicalTraining.affiliatedHospitals.map((hospital) => (
          <div
            key={hospital}
            className="flex items-center gap-3 rounded-xl border border-foreground/10 bg-foreground/4 px-5 py-4 transition-colors hover:border-orange-400/40 hover:bg-foreground/[0.07]"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-orange-500/15 text-orange-400">
              <Hospital className="h-4 w-4" />
            </div>
            <span className="text-sm leading-snug font-medium">{hospital}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
