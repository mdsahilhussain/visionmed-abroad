import { CTASection } from "../blocks/CTA"

interface FinalCTAProps {
  countryName: string
}

export function FinalCTA({ countryName }: FinalCTAProps) {
  return (
    <CTASection
      title={`Ready to start your MBBS journey in ${countryName}?`}
      description="Get a verified shortlist, real total cost breakdown, and a named counsellor — free."
      primaryButtonText="Book Free Counselling"
      secondaryButtonText="Chat on WhatsApp"
    />
  )
}
