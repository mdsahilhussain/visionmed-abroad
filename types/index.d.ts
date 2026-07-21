import { type IconType } from "iconoir-react"
import { StaticImageData } from "next/image"
import { MbbsCountryData } from "./mbbs-country"
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
    icon: IconType
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
    thumbnail: string
    name: string
    country: string
    city: string
    verifiedPartner: boolean
    studentsPlaced: number
    feeRangePerYear: string
    nmcApproved: boolean
    slug: string
  }

  interface University {
    name: string
    slug: string
  }

  interface Country {
    id: string
    name: string
    slug: string
    flag: string
    universities: University[]
  }

  interface WhyUsPoint {
    icon: IconType
    headline: string
    body: string
    studentQuote: string
    order: number
  }

  interface ProcessStep {
    number: number
    imageSrc: StaticImageData
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
    category: NavbarCategory
    handleOpen: () => void
    close: () => void
    isOpen: boolean
    isAnyOpen: boolean
  }

  type NavbarItem = Country | Tool | SimpleMenuItem

  interface NavbarCategory {
    name: string
    label: string
    href?: string
    featured?: boolean
    menuType?: "universities" | "tools"
    items?: NavbarItem[]
  }

  export interface SimpleMenuItem {
    type: "link"
    name: string
    href: string
    imageSrc?: string
  }

  export interface Tool {
    type: "tool"
    name: string
    href: string
    icon: string
  }

  interface ContactOptions {
    title: string
    description?: string
    icon: IconType
    actionLink: string
    bgColor?: string
    shadowColor?: string
  }
}

export {}
