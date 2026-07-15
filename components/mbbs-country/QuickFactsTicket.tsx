import { PlaneIcon } from "lucide-react"
import type { MbbsCountryData } from "@/types/mbbs-country"

interface QuickFactsTicketProps {
  quickFacts: MbbsCountryData["quickFacts"]
  countryName: string
}

const FIELDS: Array<{
  label: string
  key: keyof MbbsCountryData["quickFacts"]
}> = [
  { label: "Duration", key: "duration" },
  { label: "Medium", key: "medium" },
  { label: "Eligibility", key: "eligibility" },
  { label: "NEET", key: "neet" },
  { label: "Annual Fees", key: "annualFees" },
  { label: "Living Cost", key: "livingCost" },
]

export function QuickFactsTicket({
  quickFacts,
  countryName,
}: QuickFactsTicketProps) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-2xl bg-foreground shadow-2xl shadow-orange-500/20 sm:flex-row">
      {/* main body */}
      <div className="flex-1 p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <span className="text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
            Boarding Details
          </span>
          <span className="font-mono text-xs text-muted/80">
            VISA-MBBS-{countryName.slice(0, 3).toUpperCase()}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-3">
          {FIELDS.map(({ label, key }) => (
            <div key={key}>
              <div className="text-[11px] font-medium tracking-wide text-muted/80 uppercase">
                {label}
              </div>
              <div className="mt-1 text-sm font-semibold text-background sm:text-base">
                {quickFacts[key]}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* perforation divider */}
      <div className="relative flex shrink-0 items-center justify-center sm:w-0">
        {/* notches — top/left on mobile (horizontal cut), left/right on desktop (vertical cut) */}
        <div className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-background sm:top-1/2 sm:left-0 sm:-translate-x-1/2 sm:-translate-y-1/2" />
        <div className="absolute -bottom-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full bg-background sm:bottom-0 sm:left-0 sm:-translate-x-1/2 sm:translate-y-1/2" />
        <div className="h-px w-full border-t border-dashed border-muted sm:h-full sm:w-px sm:border-t-0 sm:border-l" />
      </div>

      {/* stub */}
      <div className="flex shrink-0 flex-col justify-between gap-6 bg-secondary-foreground p-6 sm:w-64 sm:p-8">
        <div>
          <div className="text-[11px] font-medium tracking-wide text-muted/80 uppercase">
            Route
          </div>
          <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-background">
            <span>DEL</span>
            <PlaneIcon className="h-3.5 w-3.5 rotate-90 text-orange-500" />
            <span>{quickFacts.capital}</span>
          </div>
        </div>

        <div>
          <div className="text-[11px] font-medium tracking-wide text-muted/80 uppercase">
            Intake
          </div>
          <div className="mt-1 text-sm font-semibold text-background">
            {quickFacts.intake}
          </div>
        </div>

        <div>
          <div className="text-[11px] font-medium tracking-wide text-muted/80 uppercase">
            Currency
          </div>
          <div className="mt-1 text-sm font-semibold text-background">
            {quickFacts.currency}
          </div>
        </div>
      </div>
    </div>
  )
}
