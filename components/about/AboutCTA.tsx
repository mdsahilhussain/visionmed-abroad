import type { AboutPageData } from "@/types/about"
import { CTASection } from "../blocks/CTA"

interface AboutCTAProps {
  cta: AboutPageData["cta"]
}

export function AboutCTA({ cta }: AboutCTAProps) {
  return (
    <CTASection
    title={cta.title}
    description={cta.description}
    primaryButtonText={cta.primaryButton}
    secondaryButtonText={cta.secondaryButton}
  />
  )
}
