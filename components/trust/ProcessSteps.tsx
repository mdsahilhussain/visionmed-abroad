import { processSteps } from "@/content/data"
import Image from "next/image"

export function ProcessSteps() {
  return (
    <div className="flex md:grid gap-8 md:grid-cols-4 overflow-x-auto md:overflow-visible pt-24">
      {processSteps.map((step) => (
        <article
          key={step.number}
          className="rounded-2xl border border-border bg-primary-foreground p-5 relative min-w-70"
        >
          <div className="absolute -top-8 right-4 bg-foreground rounded-full size-18 flex items-center justify-center">
            <p className="text-3xl font-bold text-background">{step.number}.</p>
          </div>
          <Image
            src={step.imageSrc}
            alt={`${step.title} icon`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            width={256}
            height={256}
          />
          <h3 className="text-foreground mt-1 font-semibold text-2xl">{step.title}</h3>
          <p className="text-muted-foreground mt-2 text-lg">{step.description}</p>
        </article>
      ))}
    </div>
  )
}
