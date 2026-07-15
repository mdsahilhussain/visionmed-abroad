import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import type { University } from "@/types/university"

export function RelatedUniversities({
  university,
}: {
  university: University
}) {
  const { relatedUniversities } = university

  if (!relatedUniversities?.length) return null

  return (
    <section className="w-full">
      <div className="mb-10 flex items-center gap-2">
        <span className="h-px w-8 bg-orange-500" />
        <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
          Explore more
        </span>
      </div>
      <h2 className="mb-8 max-w-2xl text-3xl font-extrabold tracking-tight text-foreground">
        Other universities in Kyrgyzstan
      </h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
        {relatedUniversities.map((uni) => (
          <Link
            key={uni.slug}
            href={uni.slug}
            className="group relative flex h-48 flex-col justify-end overflow-hidden rounded-2xl border border-border bg-neutral-900 p-5"
          >
            <Image
              src={uni.image}
              alt={uni.name}
              fill
              sizes="(min-width: 640px) 33vw, 90vw"
              className="object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative flex items-center justify-between gap-2">
              <span className="text-base leading-snug font-bold text-white">
                {uni.name}
              </span>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-white/80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
