import { Check, UtensilsCrossed, BedDouble } from "lucide-react"
import type { University } from "@/types/university"

export function HostelSection({ university }: { university: University }) {
  const { hostel } = university

  return (
    <section className="w-full">
      <div className="mb-10 w-full">
        <div className="mb-4 flex items-center gap-2">
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
            Living on campus
          </span>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          {hostel.title}
        </h2>
        <p className="mt-3 text-muted-foreground">{hostel.description}</p>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Room types */}
        <div className="rounded-2xl border border-border bg-background p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
            <BedDouble className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-foreground">Room options</h3>
          <div className="mt-4 space-y-2">
            {hostel.roomTypes.map((type) => (
              <div
                key={type}
                className="flex items-center justify-between rounded-lg bg-muted/50 px-3.5 py-2.5 text-sm font-medium text-foreground"
              >
                {type}
              </div>
            ))}
          </div>
        </div>

        {/* Facilities */}
        <div className="rounded-2xl border border-border bg-background p-6 lg:col-span-1">
          <h3 className="text-base font-bold text-foreground">Facilities</h3>
          <ul className="mt-4 space-y-2.5">
            {hostel.facilities.map((facility) => (
              <li
                key={facility}
                className="flex items-start gap-2.5 text-sm text-muted-foreground"
              >
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" />
                {facility}
              </li>
            ))}
          </ul>
        </div>

        {/* Food */}
        <div className="rounded-2xl border border-orange-500 p-6">
          <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-600 text-background">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <h3 className="text-base font-bold text-foreground">Food</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {hostel.food.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {hostel.food.indianMess && (
              <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                Indian Mess
              </span>
            )}
            {hostel.food.vegetarianFood && (
              <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                Vegetarian
              </span>
            )}
            {hostel.food.nonVegetarianFood && (
              <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-foreground shadow-sm">
                Non-Vegetarian
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
