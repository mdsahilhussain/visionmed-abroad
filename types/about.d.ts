export interface AboutPageData {
  seo: {
    title: string
    description: string
    keywords: string[]
    canonical: string
    robots: { index: boolean; follow: boolean }
    openGraph: {
      title: string
      description: string
      image: string
      type: string
    }
  }

  breadcrumb: Array<{ name: string; href: string }>

  hero: {
    badge: string
    title: string
    description: string
    cta: { primary: string; secondary: string }
  }

  company: {
    name: string
    founded: string
    founder: string
    experience: string
  }

  story: {
    title: string
    description: string[]
  }

  whoWeAre: {
    title: string
    description: string
  }

  mission: { title: string; description: string }
  vision: { title: string; description: string }

  whyChooseUs: {
    title: string
    items: Array<{ title: string; description: string }>
  }

  services: {
    title: string
    items: string[]
  }

  values: {
    title: string
    items: Array<{ title: string; description: string }>
  }

  countries: {
    title: string
    items: string[]
  }

  promise: { title: string; description: string }

  faq: Array<{ question: string; answer: string }>

  structuredData: Record<string, unknown>

  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
}
