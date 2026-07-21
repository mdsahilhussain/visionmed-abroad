import { processSteps } from "@/content/data/data"
import { ArrowRight } from "iconoir-react"
import Image from "next/image"

export function ProcessSteps() {
  return (
    <div className="mt-24 flex gap-8 overflow-x-auto md:grid md:grid-cols-4 md:overflow-visible">
      {processSteps.map((step) => (
        <div key={step.number} className="overflow-none relative min-w-70 p-6">
          <div className="absolute -top-8 right-4 z-2 flex size-18 items-center justify-center rounded-full bg-foreground">
            <p className="text-3xl font-bold text-background">{step.number}</p>
          </div>
          <Image
            src={step.imageSrc}
            alt={`${step.title} icon`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            width={256}
            height={256}
            loading="lazy"
          />
          <h3 className="mt-1 text-2xl font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-2 text-lg text-muted-foreground">
            {step.description}
          </p>
          {step.number !== 4 && (
            <ArrowRight className="absolute right-4 bottom-4 size-6 text-foreground" />
          )}
        </div>
      ))}
    </div>
  )
}
