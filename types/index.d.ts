declare global {
  interface TeamMember {
    photo: string
    name: string
    title: string
    experience: number
    countries: string[]
    languages: string[]
    linkedin: string
    quote: string
    whatsapp: string
    order: number
  }

  interface Statistic {
    icon: string
    number: number
    label: string
    suffix: string
    section: string
  }

  interface Testimonial {
    photo: string
    name: string
    city: string
    neetRange: string
    university: string
    year: number
    quote: string
    youtubeUrl?: string
    verified: boolean
  }

  interface PartnerUniversity {
    logo: string
    name: string
    country: string
    city: string
    verifiedPartner: boolean
    studentsPlaced: number
    feeRangePerYear: string
    nmcApproved: boolean
    slug: string
  }

  interface WhyUsPoint {
    icon: string
    headline: string
    body: string
    studentQuote: string
    order: number
  }

  interface ProcessStep {
    number: number
    icon: string
    title: string
    description: string
  }

  interface Accreditation {
    certImage: string
    title: string
    issuingBody: string
    year: number
    displayOn: string[]
  }

  interface BlogPost {
    slug: string
    title: string
    excerpt: string
    category: string
  }

  interface NavItemProps {
    category: Category
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
  }

  interface NavbarCategories {
    name: string
    label: string
    href?: string
    featured?: boolean
    items?: {
      name: string
      href: string
      imageSrc: string
    }[]
  }
}

export {}
