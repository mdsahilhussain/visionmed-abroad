import { Button } from "@/components/ui/button"

interface CTASectionProps {
  title: string
  description: string
  primaryButtonText: string
  secondaryButtonText: string
  primaryButtonAction?: () => void
  secondaryButtonAction?: () => void
}

export function CTASection({
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonAction,
  secondaryButtonAction,
}: CTASectionProps) {
  return (
    <section className="w-full border-t border-muted-foreground/40 bg-linear-to-b from-background/80 to-background">
      <div className="px-6 py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>

        <p className="mx-auto mt-4 max-w-md text-sm text-zinc-400 sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button size="lg" onClick={primaryButtonAction}>
            {primaryButtonText}
          </Button>

          <Button size="lg" variant="outline" onClick={secondaryButtonAction}>
            {secondaryButtonText}
          </Button>
        </div>
      </div>
    </section>
  )
}
