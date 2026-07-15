import type { University } from "@/types/university"
import { CTASection } from "../blocks/CTA"

export function UniversityFinalCTA({ university }: { university: University }) {
  const { cta, hero } = university

  return (
    <CTASection
      eyebrow={hero.universityName}
      title={cta.title}
      description={cta.description}
      primaryButtonText={cta.primaryButton}
      secondaryButtonText={cta.secondaryButton}
    />
  )
}
