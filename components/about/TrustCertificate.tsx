import { ShieldCheck } from "lucide-react"
import type { AboutPageData } from "@/types/about"
import { cn } from "@/lib/utils"

interface TrustCertificateProps {
  company: AboutPageData["company"]
}

/**
 * Renders company facts as a certificate / registration plaque — corner
 * brackets, a dashed inner border, and a rotating "verified" seal. This is
 * the page's signature visual: an About page is fundamentally an argument
 * for trust, so the founding facts are framed as something certified rather
 * than a plain stat row.
 */
export function TrustCertificate({ company }: TrustCertificateProps) {
  return (
    <section className="-mt-8 w-full sm:-mt-10">
      <div className="relative rounded-2xl border border-background bg-foreground p-1.5 shadow-2xl shadow-orange-500/20">
        {/* inner dashed border */}
        <div className="relative rounded-xl border border-dashed border-background px-6 py-8 sm:px-10 sm:py-10">
          {/* corner brackets */}
          {[
            "left-3 top-3 border-l border-t",
            "right-3 top-3 border-r border-t",
            "left-3 bottom-3 border-l border-b",
            "right-3 bottom-3 border-r border-b",
          ].map((pos) => (
            <span
              key={pos}
              className={cn("absolute h-4 w-4 border-orange-500/60", pos)}
            />
          ))}

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-left">
            <div>
              <div className="text-[11px] font-semibold tracking-[0.2em] text-orange-500 uppercase">
                Certified Consultancy
              </div>
              <div className="mt-2 text-xl font-bold text-background sm:text-2xl">
                {company.name}
              </div>
              <div className="mt-3 grid grid-cols-3 gap-6 sm:gap-8">
                <div>
                  <div className="text-[10px] tracking-wide text-muted/80 uppercase">
                    Founded
                  </div>
                  <div className="mt-1 text-sm font-semibold text-background">
                    {company.founded}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-wide text-muted/80 uppercase">
                    Founder
                  </div>
                  <div className="mt-1 text-sm font-semibold text-background">
                    {company.founder}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] tracking-wide text-muted/80 uppercase">
                    Experience
                  </div>
                  <div className="mt-1 text-sm font-semibold text-background">
                    {company.experience}
                  </div>
                </div>
              </div>
            </div>

            {/* seal */}
            <div className="relative flex h-24 w-24 shrink-0 items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-orange-500/50" />
              <div className="absolute inset-2 rounded-full border border-orange-500/30" />
              <div className="flex flex-col items-center gap-0.5 text-orange-500">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-[9px] font-bold tracking-wide uppercase">
                  Verified
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
