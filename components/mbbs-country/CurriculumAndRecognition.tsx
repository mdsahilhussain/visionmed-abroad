import { ShieldCheck, Stethoscope } from "lucide-react"
import { Card } from "@/components/ui/card"
import type { MbbsCountryData } from "@/types/mbbs-country"

interface CurriculumAndRecognitionProps {
  curriculum: MbbsCountryData["curriculum"]
  recognition: MbbsCountryData["recognition"]
  careerOpportunities: MbbsCountryData["careerOpportunities"]
}

export function CurriculumAndRecognition({
  curriculum,
  recognition,
  careerOpportunities,
}: CurriculumAndRecognitionProps) {
  return (
    <section className="rounded-2xl border border-muted-foreground/40 bg-background/40 px-6 py-14 sm:px-8 sm:py-16">
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {/* Curriculum */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            Curriculum &middot; {curriculum.duration}
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            How the program is structured
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/80 sm:text-base">
            {curriculum.description}
          </p>

          <ol className="mt-6 space-y-3">
            {curriculum.structure.map((stage, i) => (
              <li
                key={stage}
                className="flex items-center gap-3 rounded-lg border border-muted-foreground/40 bg-background/40 px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-500/10 text-xs font-semibold text-orange-500">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-foreground">
                  {stage}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* Recognition + Career */}
        <div className="space-y-8">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
              <span className="h-px w-8 bg-orange-500" />
              Recognized By
            </div>
            <div className="flex flex-wrap gap-2.5">
              {recognition.map((body) => (
                <span
                  key={body}
                  className="inline-flex items-center gap-2 rounded-full border border-muted-foreground/40 bg-background/40 px-3.5 py-2 text-sm text-foreground"
                >
                  <ShieldCheck className="h-4 w-4 text-orange-500" />
                  {body}
                </span>
              ))}
            </div>
          </div>

          <Card className="p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500/10">
              <Stethoscope className="h-5 w-5 text-orange-500" />
            </div>
            <h3 className="mt-4 text-base font-semibold text-foreground">
              {careerOpportunities.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
              {careerOpportunities.description}
            </p>
          </Card>
        </div>
      </div>
    </section>
  )
}
