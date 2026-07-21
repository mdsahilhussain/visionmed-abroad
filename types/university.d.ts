export interface University {
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
  breadcrumb: { name: string; href: string }[]
  hero: {
    universityName: string
    shortName: string
    country: string
    city: string
    established: string
    type: string
    logo: string
    coverImage: string
    tagline: string
    admissionStatus: string
    intake: string
    applicationDeadline: string
    partnerUniversity: boolean
    cta: {
      primary: { label: string; href: string }
      secondary: { label: string; href: string }
    }
  }
  quickFacts: {
    duration: string
    degree: string
    medium: string
    annualTuitionFee: string
    hostelFee: string
    universityType: string
    internationalStudents: string
    indianStudents: string
    recognitionShort: string
    seeFullEligibility: string
  }
  about: {
    title: string
    description: string[]
    stats: { label: string; value: string }[]
  }
  highlights: { title: string; description: string; icon: string }[]
  feeStructure: {
    title: string
    currency: string
    yearly: {
      year: string
      tuitionFee: number
      hostelFee: number
      medicalInsurance: number
      registrationFee: number
      total: number
    }[]
    oneTimeCharges: { title: string; amount: number }[]
    note: string
  }
  intake: {
    intakeMonth: string
    applicationStart: string
    invitationLetter: string
  }
  clinicalTraining: {
    title: string
    affiliatedHospitals: string[]
  }
  hostel: {
    title: string
    description: string
    roomTypes: string[]
    facilities: string[]
    food: {
      indianMess: boolean
      vegetarianFood: boolean
      nonVegetarianFood: boolean
      description: string
    }
  }
  city: {
    title: string
    description: string
    quickFacts: {
      population: string
      nearestAirport: string
      currency: string
      timezone: string
    }
    livingExpenses: {
      food: string
      transportation: string
      miscellaneous: string
    }
    attractions: string[]
  }
  gallery: {
    title: string
    images: { title: string; image: string }[]
  }
  downloads: { title: string; type: string; icon: string; href: string }[]
  videos: {
    title: string
    thumbnail: string
    youtubeId: string
    duration: string
  }[]
  testimonials: { name?: string; quote?: string; image?: string }[]
  relatedUniversities: { name: string; slug: string; image: string }[]
  faq: {
    title: string
    items: { question: string; answer: string }[]
  }
  cta: {
    title: string
    description: string
    primaryButton: string
    secondaryButton: string
  }
}
