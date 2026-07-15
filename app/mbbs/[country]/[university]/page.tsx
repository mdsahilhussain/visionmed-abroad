import type { Metadata } from "next"
import { oshStateUniversity } from "@/content/data/mbbs-countries-universities/kyrgyzstan/osh-state-university"
import { UniversityHero } from "@/components/mbbs-countries-universities/UniversityHero"
import { Container } from "@/components/blocks/Container"
import { QuickFactsPass } from "@/components/mbbs-countries-universities/QuickFactsPass"
import { UniversityAbout } from "@/components/mbbs-countries-universities/UniversityAbout"
import { UniversityHighlights } from "@/components/mbbs-countries-universities/UniversityHighlights"
import { FeeStructure } from "@/components/mbbs-countries-universities/FeeStructure"
import { ClinicalTraining } from "@/components/mbbs-countries-universities/ClinicalTraining"
import { HostelSection } from "@/components/mbbs-countries-universities/HostelSection"
import { CitySection } from "@/components/mbbs-countries-universities/CitySection"
import { GallerySection } from "@/components/mbbs-countries-universities/GallerySection"
import { DownloadsAndVideos } from "@/components/mbbs-countries-universities/DownloadsAndVideos"
import { RelatedUniversities } from "@/components/mbbs-countries-universities/RelatedUniversities"
import { UniversityFAQ } from "@/components/mbbs-countries-universities/UniversityFAQ"
import { UniversityFinalCTA } from "@/components/mbbs-countries-universities/UniversityFinalCTA"
import { getUniversityData } from "@/content/data/mbbs-countries-universities"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{ country: string; university: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country, university } = await params

  const data = getUniversityData(country, university)

  if (!data) return {}

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: "article",
    },
  }
}

export default async function UniversityPage({ params }: PageProps) {
  const { country, university } = await params

  const data = getUniversityData(country, university)

  if (!data) notFound()

  return (
    <Container>
      <UniversityHero university={data} />
      <QuickFactsPass university={data} />
      <UniversityAbout university={data} />
      <UniversityHighlights university={data} />
      <FeeStructure university={data} />
      <ClinicalTraining university={data} />
      <HostelSection university={data} />
      <CitySection university={data} />
      <GallerySection university={data} />
      <DownloadsAndVideos university={data} />
      <RelatedUniversities university={data} />
      <UniversityFAQ university={data} />
      <UniversityFinalCTA university={data} />
    </Container>
  )
}
