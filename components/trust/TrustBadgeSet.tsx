import { Badge } from "@/components/ui/badge"

const badges = [
  "NMC Approved",
  "Free Counselling",
  "15+ Years",
  "WHO Recognized",
]

export function TrustBadgeSet() {
  return (
    <div className="flex flex-wrap gap-2" aria-label="Trust signals">
      {badges.map((badge, index) => (
        <Badge
          key={badge}
          variant={index === 0 ? "nmc" : index === 3 ? "who" : "trust"}
        >
          {badge}
        </Badge>
      ))}
    </div>
  )
}
