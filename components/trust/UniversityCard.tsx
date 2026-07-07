import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

export function UniversityCard({
  university,
}: {
  university: PartnerUniversity
}) {
  return (
    <article className="group min-w-70 rounded-2xl border border-border p-2 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)]">
      <Image
        src="/images/OSH_SMU.webp"
        alt={`${university.name} thumbnail`}
        width={1200}
        height={675}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
        className="aspect-video w-full rounded-xl object-cover transition-all duration-300 group-hover:brightness-100"
        loading="lazy"
      />

      <div className="flex flex-col items-start gap-3 p-0 md:p-2">
        <span>
          <h3 className="text-base font-semibold text-foreground md:text-lg">
            {university.name}
          </h3>
          <p className="text-xs text-muted-foreground md:text-sm">
            {university.city}, {university.country}
          </p>
        </span>
        <div className="flex flex-wrap gap-2">
          {university.nmcApproved ? (
            <Badge variant="nmc" isCard={true}>
              NMC Approved
            </Badge>
          ) : null}
          {university.verifiedPartner ? (
            <Badge variant="gold-partner" isCard={true}>
              Verified Partner
            </Badge>
          ) : null}
        </div>
        <dl className="grid grid-cols-2 gap-3 text-xs md:text-sm">
          <div>
            <dt className="font-medium text-muted-foreground">Fee/year</dt>
            <dd className="font-bold text-foreground">
              {university.feeRangePerYear}
            </dd>
          </div>
          <div>
            <dt className="font-medium text-muted-foreground">Placed</dt>
            <dd className="font-bold text-foreground">
              {university.studentsPlaced}+ students
            </dd>
          </div>
        </dl>
        <Link
          href={`/university/${university.slug}`}
          className={cn(
            buttonVariants({
              variant: "default",
              size: "lg",
            }),
            "w-full"
          )}
        >
          View Details
        </Link>
      </div>
    </article>
  )
}
