import { BadgeCheck, Building, Calendar, Globe, GraduationCap, Phone, VideoCamera, Whatsapp } from "iconoir-react"
import { image } from "./image"

export const contactOptions: ContactOptions[] = [
  {
    title: "Chat on WhatsApp",
    description: "Chat instantly with a counsellor",
    icon: Whatsapp,
    bgColor: "bg-green-500",
    shadowColor: "shadow-[0_6px_24px_rgba(37,211,102,0.35)]",
    actionLink: `https://wa.me/919900001111?text=${encodeURIComponent(
      "Hello, I am interested in MBBS abroad counselling. Please provide more information."
    )}`,
  },
  {
    title: "Get Instant Callback",
    description: "Call instantly with a counsellor",
    icon: Phone,
    bgColor: "bg-blue-500",
    shadowColor: "shadow-[0_6px_24px_rgba(59,130,246,0.35)]",
    actionLink: "tel:+919900001111",
  },
  {
    title: "Book Video Counselling",
    description: "Face-to-face guidance from an expert",
    icon: VideoCamera,
    bgColor: "bg-purple-500",
    shadowColor: "shadow-[0_6px_24px_rgba(168,85,247,0.35)]",
    actionLink: "https://calendly.com/visionmed-abroad/video-counselling",
  },
]

export const teamMembers: TeamMember[] = [
  {
    photo: "/images/team/aisha-rao.webp",
    name: "Aisha Rao",
    title: "Senior MBBS Counsellor",
    experience: 11,
    countries: ["Georgia", "Russia", "Kazakhstan"],
    languages: ["English", "Hindi", "Telugu"],
    linkedin: "https://linkedin.com",
    quote: "A transparent shortlist is always better than a long one.",
    whatsapp: "919900001111",
    order: 1,
  },
  {
    photo: "/images/team/rahul-mehta.webp",
    name: "Rahul Mehta",
    title: "Admissions Lead",
    experience: 14,
    countries: ["Uzbekistan", "Kyrgyzstan", "Armenia"],
    languages: ["English", "Hindi", "Gujarati"],
    linkedin: "https://linkedin.com",
    quote: "Parents deserve fee clarity before any paperwork begins.",
    whatsapp: "919900002222",
    order: 2,
  },
  {
    photo: "/images/team/neha-singh.webp",
    name: "Neha Singh",
    title: "Visa Documentation Specialist",
    experience: 8,
    countries: ["Russia", "Georgia", "Nepal"],
    languages: ["English", "Hindi", "Bengali"],
    linkedin: "https://linkedin.com",
    quote: "Small document misses cause big delays, so we verify early.",
    whatsapp: "919900003333",
    order: 3,
  },
  {
    photo: "/images/team/farhan-khan.webp",
    name: "Farhan Khan",
    title: "Student Success Manager",
    experience: 10,
    countries: ["Kazakhstan", "Uzbekistan", "Georgia"],
    languages: ["English", "Hindi", "Urdu"],
    linkedin: "https://linkedin.com",
    quote:
      "The work continues after admission, especially for first-year students.",
    whatsapp: "919900004444",
    order: 4,
  },
]

export const statistics: Statistic[] = [
  {
    icon: GraduationCap,
    number: 500,
    label: "students guided",
    suffix: "+",
    section: "global",
  },
  {
    icon: Building,
    number: 10,
    label: "NMC/WHO-approved universities",
    suffix: "+",
    section: "global",
  },
  {
    icon: Globe,
    number: 5,
    label: "countries covered",
    suffix: "+",
    section: "global",
  },
  {
    icon: BadgeCheck,
    number: 98,
    label: "visa documentation pass rate",
    suffix: "%",
    section: "global",
  },
  {
    icon: Calendar,
    number: 5,
    label: "years in MBBS admissions",
    suffix: "+",
    section: "global",
  },
]

export const testimonials: Testimonial[] = [
  {
    photo:
      "https://unsplash.com/photos/asian-adult-casual-cheerful-beauty-concept-yl8DHSHZ8Ew",
    name: "Priya Sharma",
    city: "Delhi",
    neetRange: "420-470",
    university: "Tbilisi State Medical University",
    year: 2024,
    quote:
      "VisionMed showed the full fee picture and helped my parents speak directly with a counsellor before we decided.",
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    verified: true,
  },
  {
    photo:
      "https://unsplash.com/photos/man-wearing-henley-top-portrait-7YVZYZeITc8",
    name: "Aman Verma",
    city: "Lucknow",
    neetRange: "360-410",
    university: "Samarkand State Medical University",
    year: 2023,
    quote:
      "The shortlist was practical for my score and budget. Visa documents were checked twice before submission.",
    verified: true,
  },
  {
    photo:
      "https://unsplash.com/photos/a-close-up-of-a-person-with-frecky-hair-wtAC4c_Hj-g",
    name: "Fatima Khan",
    city: "Hyderabad",
    neetRange: "480-530",
    university: "Astana Medical University",
    year: 2024,
    quote:
      "My counsellor compared hostels, clinical exposure and exam support instead of pushing one college.",
    youtubeUrl: "https://youtube.com/watch?v=dQw4w9WgXcQ",
    verified: true,
  },
  {
    photo:
      "https://unsplash.com/photos/man-wearing-white-v-neck-shirt-iFgRcqHznqg",
    name: "Rohan Patel",
    city: "Ahmedabad",
    neetRange: "390-440",
    university: "Yerevan State Medical University",
    year: 2022,
    quote:
      "The WhatsApp updates kept our family calm from offer letter to departure.",
    verified: true,
  },
  {
    photo:
      "https://unsplash.com/photos/woman-in-white-crew-neck-shirt-smiling-IF9TK5Uy-KI",
    name: "Isha Nair",
    city: "Kochi",
    neetRange: "450-500",
    university: "Kazan Federal University",
    year: 2023,
    quote:
      "They were honest about weather, food and first-year adjustment, which mattered more than brochures.",
    verified: true,
  },
]

export const partnerUniversities: PartnerUniversity[] = [
  {
    logo: "/images/universities/tbilisi.webp",
    name: "Tbilisi State Medical University",
    country: "Georgia",
    city: "Tbilisi",
    verifiedPartner: true,
    studentsPlaced: 640,
    feeRangePerYear: "INR 4.8L-5.6L",
    nmcApproved: true,
    slug: "tbilisi-state-medical-university",
  },
  {
    logo: "/images/universities/kazan.webp",
    name: "Kazan Federal University",
    country: "Russia",
    city: "Kazan",
    verifiedPartner: true,
    studentsPlaced: 520,
    feeRangePerYear: "INR 5.2L-6.1L",
    nmcApproved: true,
    slug: "kazan-federal-university",
  },
  {
    logo: "/images/universities/samarkand.webp",
    name: "Samarkand State Medical University",
    country: "Uzbekistan",
    city: "Samarkand",
    verifiedPartner: true,
    studentsPlaced: 710,
    feeRangePerYear: "INR 3.4L-4.2L",
    nmcApproved: true,
    slug: "samarkand-state-medical-university",
  },
  {
    logo: "/images/universities/astana.webp",
    name: "Astana Medical University",
    country: "Kazakhstan",
    city: "Astana",
    verifiedPartner: false,
    studentsPlaced: 360,
    feeRangePerYear: "INR 3.8L-4.9L",
    nmcApproved: true,
    slug: "astana-medical-university",
  },
  {
    logo: "/images/universities/yerevan.webp",
    name: "Yerevan State Medical University",
    country: "Armenia",
    city: "Yerevan",
    verifiedPartner: true,
    studentsPlaced: 430,
    feeRangePerYear: "INR 4.1L-5.0L",
    nmcApproved: true,
    slug: "yerevan-state-medical-university",
  },
  {
    logo: "/images/universities/osh.webp",
    name: "Osh State University",
    country: "Kyrgyzstan",
    city: "Osh",
    verifiedPartner: false,
    studentsPlaced: 390,
    feeRangePerYear: "INR 2.9L-3.7L",
    nmcApproved: true,
    slug: "osh-state-university",
  },
  {
    logo: "/images/universities/bukhara.webp",
    name: "Bukhara State Medical Institute",
    country: "Uzbekistan",
    city: "Bukhara",
    verifiedPartner: true,
    studentsPlaced: 470,
    feeRangePerYear: "INR 3.2L-4.0L",
    nmcApproved: true,
    slug: "bukhara-state-medical-institute",
  },
  {
    logo: "/images/universities/batumi.webp",
    name: "Batumi Shota Rustaveli State University",
    country: "Georgia",
    city: "Batumi",
    verifiedPartner: false,
    studentsPlaced: 280,
    feeRangePerYear: "INR 4.5L-5.4L",
    nmcApproved: true,
    slug: "batumi-shota-rustaveli-state-university",
  },
]

export const whyUsPoints: WhyUsPoint[] = [
  {
    icon: "ShieldCheck",
    headline: "NMC-first shortlisting",
    body: "Every recommendation starts with current NMC/WHO approval, medium of instruction, duration and internship clarity.",
    studentQuote:
      "They rejected two cheaper options because compliance was unclear.",
    order: 1,
  },
  {
    icon: "ReceiptText",
    headline: "Real total cost clarity",
    body: "Tuition, hostel, food, visa, travel and first-year setup are shown before application fees.",
    studentQuote: "My parents had one sheet with every expected rupee.",
    order: 2,
  },
  {
    icon: "UsersRound",
    headline: "Counsellor-led admission",
    body: "Students work with named counsellors instead of anonymous call-center handoffs.",
    studentQuote: "We spoke to the same person from shortlist to visa.",
    order: 3,
  },
  {
    icon: "FileCheck2",
    headline: "Document verification discipline",
    body: "Marksheets, passport, offer letter, translation and visa packs are checked through a structured process.",
    studentQuote: "The second review caught an address mismatch.",
    order: 4,
  },
  {
    icon: "PlaneTakeoff",
    headline: "Post-admission support",
    body: "Departure briefing, campus arrival coordination and parent WhatsApp updates continue after admission.",
    studentQuote: "The first week abroad felt planned, not improvised.",
    order: 5,
  },
]

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    imageSrc: image.step_1,
    title: "Counselling",
    description:
      "A senior counsellor maps NEET score, budget, country preference and family priorities.",
  },
  {
    number: 2,
    imageSrc: image.step_2,
    title: "Shortlist",
    description:
      "You receive only NMC/WHO-approved options with total cost and risk notes.",
  },
  {
    number: 3,
    imageSrc: image.step_3,
    title: "Application",
    description:
      "We prepare and track the application pack, offer letter and university communication.",
  },
  {
    number: 4,
    imageSrc: image.step_4,
    title: "Visa",
    description:
      "Documentation, interview prep and departure steps are verified before travel.",
  },
]

export const accreditation: Accreditation[] = [
  {
    certImage: "/images/accreditations/nmc.webp",
    title: "NMC Compliance Review",
    issuingBody: "National Medical Commission checklist",
    year: 2025,
    displayOn: ["home", "about", "university"],
  },
  {
    certImage: "/images/accreditations/who.webp",
    title: "WHO Directory Verification",
    issuingBody: "World Directory of Medical Schools",
    year: 2025,
    displayOn: ["home", "about"],
  },
  {
    certImage: "/images/accreditations/partner.webp",
    title: "University Partner Audit",
    issuingBody: "VisionMed Admissions Desk",
    year: 2025,
    displayOn: ["about"],
  },
]

export const blogPosts: BlogPost[] = [
  {
    slug: "nmc-rules-mbbs-abroad",
    title: "NMC rules every MBBS abroad applicant should verify",
    excerpt: "A practical checklist before choosing a university.",
    category: "Compliance",
  },
  {
    slug: "mbbs-abroad-fees",
    title: "How to compare MBBS abroad fees beyond tuition",
    excerpt: "Hostel, food, visa and travel costs parents should include.",
    category: "Fees",
  },
  {
    slug: "neet-score-country-fit",
    title: "Matching NEET score to the right country",
    excerpt: "How counsellors think about budget, exam plans and climate.",
    category: "Admissions",
  },
]

export const navbarCategories: NavbarCategories[] = [
  {
    name: "About us",
    label: "about-us",
    href: "/about",
  },
  {
    name: "Universities",
    label: "universities",
    featured: true,
    items: partnerUniversities.map((u) => ({
      name: u.name,
      href: `/universities/${u.slug}`,
      imageSrc: u.logo,
    })),
  },
  {
    name: "Tools",
    label: "tools",
    featured: true,
    items: [
      {
        name: "Editor picks",
        href: `/products?category=ui_kits`,
        imageSrc: "/nav/ui-kits/mixed.jpg",
      },
      {
        name: "New Arrivals",
        href: "/products?category=ui_kits&sort=desc",
        imageSrc: "/nav/ui-kits/blue.jpg",
      },
      {
        name: "Bestsellers",
        href: "/products?category=ui_kits",
        imageSrc: "/nav/ui-kits/purple.jpg",
      },
    ],
  },
  {
    name: "Why Us",
    label: "why-us",
    href: "/why-us",
  },
  {
    name: "Our Team",
    label: "our-team",
    href: "/our-team",
  },
]
