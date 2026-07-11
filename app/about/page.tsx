import type { Metadata } from "next"

import { aboutPage } from "@/content/data/about"
import { Breadcrumb } from "@/components/blocks/Breadcrumb"
import { AboutHero } from "@/components/about/AboutHero"
import { TrustCertificate } from "@/components/about/TrustCertificate"
import { OurStory } from "@/components/about/OurStory"
import { MissionVision } from "@/components/about/MissionVision"
import { WhyChooseUs } from "@/components/about/WhyChooseUs"
import { ServicesList } from "@/components/about/ServicesList"
import { CoreValues } from "@/components/about/CoreValues"
import { Destinations } from "@/components/about/Destinations"
import { Promise } from "@/components/about/Promise"
import { AboutFAQ } from "@/components/about/AboutFAQ"
import { AboutCTA } from "@/components/about/AboutCTA"
import { Container } from "@/components/blocks/Container"
import { TrustBadgeSet } from "@/components/trust/TrustBadgeSet"
import { TrustStatsBar } from "@/components/trust/TrustStatsBar"

export const metadata: Metadata = {
  title: aboutPage.seo.title,
  description: aboutPage.seo.description,
  keywords: aboutPage.seo.keywords,
  alternates: { canonical: aboutPage.seo.canonical },
  robots: aboutPage.seo.robots,
  openGraph: {
    title: aboutPage.seo.openGraph.title,
    description: aboutPage.seo.openGraph.description,
    images: [aboutPage.seo.openGraph.image],
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutPage.structuredData),
        }}
      />

      <AboutHero hero={aboutPage.hero} breadcrumb={aboutPage.breadcrumb}/>
      <TrustCertificate company={aboutPage.company} />

      <OurStory story={aboutPage.story} whoWeAre={aboutPage.whoWeAre} />
      <MissionVision mission={aboutPage.mission} vision={aboutPage.vision} />
      {/* <StatsStrip stats={aboutPage.stats} /> */}
      <TrustStatsBar/>
      <WhyChooseUs whyChooseUs={aboutPage.whyChooseUs} />
      <ServicesList services={aboutPage.services} />
      <CoreValues values={aboutPage.values} />
      <Destinations countries={aboutPage.countries} />
      <Promise promise={aboutPage.promise} />
      <AboutFAQ faq={aboutPage.faq} />
      <AboutCTA cta={aboutPage.cta} />
    </Container>
  )
}
