import type { University } from "@/types/university"

export function UniversityAbout({ university }: { university: University }) {
  const { about } = university

  return (
    <section>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
              Overview
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {about.title}
          </h2>

          <dl className="mt-8 grid grid-cols-2 gap-6">
            {about.stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-orange-200 pl-4">
                <dt className="text-xs uppercase tracking-wide text-muted-foreground">
                  {stat.label}
                </dt>
                <dd className="mt-1 text-2xl font-extrabold text-foreground">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="space-y-5">
          {about.description.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "text-xl font-medium leading-relaxed text-foreground"
                  : "text-base leading-relaxed text-muted-foreground"
              }
            >
              {para}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}