import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getAllMbbsCountrySlugs,
  getMbbsCountryData,
} from "@/content/data/mbbs-countries"

import { CountryHero } from "@/components/mbbs-country/CountryHero"
import { QuickFactsTicket } from "@/components/mbbs-country/QuickFactsTicket"
import { CountryOverview } from "@/components/mbbs-country/CountryOverview"

import { AdmissionJourney } from "@/components/mbbs-country/AdmissionJourney"
import { CurriculumAndRecognition } from "@/components/mbbs-country/CurriculumAndRecognition"
import { LifeAbroad } from "@/components/mbbs-country/LifeAbroad"
import { VisaProcess } from "@/components/mbbs-country/VisaProcess"
import { Container } from "@/components/blocks/Container"
import { FinalCTA } from "@/components/mbbs-country/FinalCTA"
import { LeadForm } from "@/components/leads/LeadForm"

interface PageProps {
  params: Promise<{ country: string }>
}

export function generateStaticParams() {
  return getAllMbbsCountrySlugs().map((country) => ({ country }))
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { country } = await params
  const data = getMbbsCountryData(country)
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

export default async function MbbsCountryPage({ params }: PageProps) {
  const { country } = await params
  const data = getMbbsCountryData(country)
  if (!data) notFound()

  return (
    <Container>
      {/* Full-width hero + signature ticket strip */}
      <CountryHero data={data} />
      <QuickFactsTicket
        quickFacts={data.quickFacts}
        countryName={data.countryName}
      />

      {/* Overview stays full-width — it's the reading intro, not a "detail" card */}
      <CountryOverview
        overview={data.overview}
        advantages={data.advantages}
        countryName={data.countryName}
      />

      {/* Main content + sticky counselling sidebar */}
      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start lg:gap-10">
        <div className="space-y-10">
          <AdmissionJourney
            eligibility={data.eligibility}
            admissionProcess={data.admissionProcess}
            requiredDocuments={data.requiredDocuments}
          />

          <CurriculumAndRecognition
            curriculum={data.curriculum}
            recognition={data.recognition}
            careerOpportunities={data.careerOpportunities}
          />

          <LifeAbroad
            studentLife={data.studentLife}
            climate={data.climate}
            indianCommunity={data.indianCommunity}
            countryName={data.countryName}
          />

          <VisaProcess visa={data.visa} countryName={data.countryName} />
        </div>

        <div className="order-first mt-10 lg:mt-0 lg:sticky lg:top-24 lg:order-0 lg:mb-0">
          <LeadForm countryName={data.countryName} variant="sidebar"/>
        </div>
      </div>

      <FinalCTA countryName={data.countryName} />
    </Container>
  )
}
