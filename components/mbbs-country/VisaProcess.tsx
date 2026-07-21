import { Card } from "@/components/ui/card"
import type { MbbsCountryData } from "@/types/mbbs-country"

interface VisaProcessProps {
  visa: MbbsCountryData["visa"]
  countryName: string
}

export function VisaProcess({ visa, countryName }: VisaProcessProps) {
  return (
    <section className="rounded-2xl border border-muted-foreground/40 bg-background/40 px-6 py-14 sm:px-8 sm:py-16">
      <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
        <span className="h-px w-8 bg-orange-500" />
        Visa
      </div>
      <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        {visa.type} for {countryName}
      </h2>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground">
            Processing Time
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/70">
            {visa.processing}
          </p>
        </Card>
        <Card className="p-6">
          <h3 className="text-sm font-semibold text-foreground">
            Renewal Support
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/70">
            {visa.renewal}
          </p>
        </Card>
      </div>
    </section>
  )
}
