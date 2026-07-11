import type { AboutPageData } from "@/types/about"

interface OurStoryProps {
  story: AboutPageData["story"]
  whoWeAre: AboutPageData["whoWeAre"]
}

export function OurStory({ story, whoWeAre }: OurStoryProps) {
  return (
    <section>
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            {story.title}
          </div>

          <div className="space-y-8">
            {story.description.map((para, i) => (
              <div key={i} className="relative">
                <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {para}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-orange-500 uppercase">
            <span className="h-px w-8 bg-orange-500" />
            {whoWeAre.title}
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {whoWeAre.description}
          </p>
        </div>
      </div>
    </section>
  )
}
