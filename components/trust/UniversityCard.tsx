import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

export function UniversityCard({ university }: { university: PartnerUniversity }) {
    return (
        <article className="min-w-70 border border-border p-2 rounded-2xl hover:shadow-[0_12px_36px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] group">
            <Image
                src="/images/OSH_SMU.webp"
                alt={`${university.name} thumbnail`}
                width={1200} height={675}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                className="w-full aspect-video rounded-xl object-cover group-hover:brightness-100 transition-all duration-300"
                priority={false}
            />
            <div className="p-0 md:p-2 flex flex-col items-start gap-3">
                <span>
                    <h3 className="font-semibold text-base md:text-lg text-foreground">{university.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{university.city}, {university.country}</p>
                </span>
                <div className="flex flex-wrap gap-2">
                    {university.nmcApproved ? <Badge variant="nmc" isCard={true}>NMC Approved</Badge> : null}
                    {university.verifiedPartner ? <Badge variant="gold-partner" isCard={true}>Verified Partner</Badge> : null}
                </div>
                <dl className="grid grid-cols-2 gap-3 text-xs md:text-sm">
                    <div><dt className="font-medium text-muted-foreground">Fee/year</dt><dd className="font-bold text-foreground">{university.feeRangePerYear}</dd></div>
                    <div><dt className="font-medium text-muted-foreground">Placed</dt><dd className="font-bold text-foreground">{university.studentsPlaced}+ students</dd></div>
                </dl>
                <Link href={`/university/${university.slug}`} className={cn(
                    buttonVariants({
                        variant: "default",
                        size: "lg",
                    }),
                    "w-full"
                )}>View Details</Link>
            </div>
        </article>
    );
}
