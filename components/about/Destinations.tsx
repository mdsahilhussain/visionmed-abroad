import Link from "next/link"
import { ArrowUpRight, Globe2 } from "lucide-react"
import type { AboutPageData } from "@/types/about"
import SectionHeader from "../blocks/Header"

interface DestinationsProps {
  countries: AboutPageData["countries"]
}

export function Destinations({ countries }: DestinationsProps) {
  return (
    <section className="w-full">
      <SectionHeader
        eyebrow={"Where We Place Students"}
        title={countries.title}
      />

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {countries.items.map((country) => {
          const slug = country.toLowerCase()
          return (
            <Link
              key={country}
              href={`/mbbs-in-${slug}`}
              className="group flex flex-col items-start gap-3 rounded-xl border border-zinc-800 bg-zinc-900/40 p-5 transition-colors hover:border-orange-500/40 hover:bg-zinc-900/70"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500/10">
                <Globe2 className="h-4 w-4 text-orange-500" />
              </div>
              <div className="flex w-full items-center justify-between">
                <span className="text-sm font-semibold text-white">
                  {country}
                </span>
                <ArrowUpRight className="h-4 w-4 text-zinc-600 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-500" />
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
