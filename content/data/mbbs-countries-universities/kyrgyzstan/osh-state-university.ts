import type { University } from "@/types/university"

export const oshStateUniversity: University = {
  seo: {
    title:
      "Osh State University MBBS 2026 | Fees, Admission, Hostel | Vision Study",
    description:
      "Study MBBS at Osh State University, Kyrgyzstan through Vision Study. 2026 fees, hostel, admission process, and affiliated hospitals.",
    keywords: [
      "Osh State University",
      "MBBS in Osh State University",
      "Osh State University MBBS Fees",
      "Vision Study MBBS Abroad",
    ],
    canonical: "https://visionstudy.in/mbbs-in-kyrgyzstan/osh-state-university",
    robots: { index: true, follow: true },
    openGraph: {
      title: "Study MBBS at Osh State University | Admission Open 2026",
      description:
        "Apply for MBBS at Osh State University through Vision Study. Affordable tuition, English-medium program, hostel, and complete admission assistance.",
      image: "/images/universities/osh-state-university/og.webp",
      type: "website",
    },
  },

  breadcrumb: [
    { name: "Home", href: "/" },
    { name: "MBBS in Kyrgyzstan", href: "/mbbs-in-kyrgyzstan" },
    { name: "Osh State University", href: "/mbbs-in-kyrgyzstan/osh-state-university" },
  ],

  hero: {
    universityName: "Osh State University",
    shortName: "OSU",
    country: "Kyrgyzstan",
    city: "Osh",
    established: "1951",
    type: "Public University",
    logo: "/images/universities/osh/osh-logo.webp",
    coverImage: "/images/universities/osh/osh-thumbnail.webp",
    tagline: "One of Kyrgyzstan's leading public medical universities for international students.",
    admissionStatus: "Admissions Open",
    intake: "September 2026",
    applicationDeadline: "Applications accepted until August 2026 (subject to seat availability)",
    partnerUniversity: true,
    cta: {
      primary: { label: "Book Free Counselling", href: "/contact" },
      secondary: { label: "Download Brochure", href: "/brochures/osh-state-university.pdf" },
    },
  },

  quickFacts: {
    duration: "6 Years",
    degree: "MD (Equivalent to MBBS in India)",
    medium: "English",
    annualTuitionFee: "Starts from USD 3,800 / Year",
    hostelFee: "Starts from USD 600 / Year",
    universityType: "Government",
    internationalStudents: "5000+",
    indianStudents: "1500+",
    recognitionShort: "NMC · WDOMS Listed", // one-liner instead of full recognitions block
    seeFullEligibility: "/mbbs-in-kyrgyzstan#eligibility", // link to country page section
  },

  about: {
    title: "About Osh State University",
    description: [
      "Established in 1951, Osh State University is one of the oldest and most respected public universities in Kyrgyzstan.",
      "The International Medical Faculty offers an English-medium MBBS program designed specifically for overseas students, combining theoretical knowledge with practical clinical training through affiliated teaching hospitals.",
      "Osh State University attracts thousands of students from India, Nepal, Pakistan, Bangladesh, and several African countries due to its affordable tuition fees, globally recognized degree, and student-friendly environment.",
    ],
    stats: [
      { label: "Established", value: "1951" },
      { label: "University Type", value: "Public" },
      { label: "International Students", value: "5,000+" },
      { label: "Indian Students", value: "1,500+" },
    ],
  },

  highlights: [
    {
      title: "Affordable Tuition Fees",
      description: "Quality medical education at an affordable cost compared to many private medical colleges.",
      icon: "badge-dollar-sign",
    },
    {
      title: "Modern Clinical Training",
      description: "Practical clinical exposure through affiliated teaching hospitals in Osh.",
      icon: "stethoscope",
    },
    {
      title: "Safe Hostel Facilities",
      description: "Separate hostel accommodation with security, Wi-Fi, laundry, and essential student amenities.",
      icon: "house",
    },
    {
      title: "Indian Student Community",
      description: "A vibrant community of Indian students with access to Indian food and cultural events.",
      icon: "users",
    },
  ],

  // ---- FEE STRUCTURE (unique — keep in full) ----
  feeStructure: {
    title: "Osh State University MBBS Fee Structure 2026",
    currency: "USD",
    yearly: [
      { year: "1st Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 200, total: 4750 },
      { year: "2nd Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 0, total: 4550 },
      { year: "3rd Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 0, total: 4550 },
      { year: "4th Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 0, total: 4550 },
      { year: "5th Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 0, total: 4550 },
      { year: "6th Year", tuitionFee: 3800, hostelFee: 600, medicalInsurance: 150, registrationFee: 0, total: 4550 },
    ],
    oneTimeCharges: [
      { title: "Invitation Letter", amount: 250 },
      { title: "Visa Processing", amount: 200 },
      { title: "Document Translation", amount: 100 },
    ],
    note: "Fees are indicative and may change according to the university's latest notification and exchange rate. Students are advised to confirm the latest fee structure before admission.",
  },

  intake: {
    intakeMonth: "September 2026",
    applicationStart: "January 2026",
    invitationLetter: "Usually issued within 7–15 working days after document verification.",
  },

  // ---- CLINICAL TRAINING (unique — named hospitals) ----
  clinicalTraining: {
    title: "Clinical Training",
    affiliatedHospitals: [
      "Osh State University Medical Clinic",
      "Osh Provincial Clinical Hospital",
      "Osh City Territorial Hospital",
      "Osh Inter-Provincial Clinical Children's Hospital",
      "Perinatal Centre",
      "Provincial Maternity Hospital",
    ],
  },

  // ---- HOSTEL (unique — specific room types/facilities) ----
  hostel: {
    title: "Hostel & Accommodation",
    description:
      "Osh State University provides hostel accommodation for international students, with separate arrangements for male and female students.",
    roomTypes: ["2 Sharing", "3 Sharing", "4 Sharing"],
    facilities: [
      "Separate hostels for boys & girls",
      "Fully furnished rooms",
      "Wi-Fi access",
      "24×7 security & CCTV",
      "Laundry facilities",
      "Common kitchen",
      "Hot & cold water, heating in winter",
    ],
    food: {
      indianMess: true,
      vegetarianFood: true,
      nonVegetarianFood: true,
      description: "Indian food is available through the university mess and nearby Indian restaurants.",
    },
  },

  // ---- CITY (unique — Osh-specific) ----
  city: {
    title: "About Osh City",
    description:
      "Osh is the second-largest city in Kyrgyzstan and one of Central Asia's oldest continuously inhabited cities.",
    quickFacts: {
      population: "300,000+",
      nearestAirport: "Osh International Airport",
      currency: "Kyrgyzstani Som (KGS)",
      timezone: "GMT +6",
    },
    livingExpenses: {
      food: "$80 - $150 / month",
      transportation: "$10 - $20 / month",
      miscellaneous: "$50 - $100 / month",
    },
    attractions: [
      "Sulaiman-Too Mountain (UNESCO World Heritage Site)",
      "Jayma Bazaar",
      "Osh City Park",
    ],
  },

  gallery: {
    title: "Campus Gallery",
    images: [
      { title: "University Main Building", image: "/images/universities/osh-state-university/gallery/campus.webp" },
      { title: "Medical Laboratory", image: "/images/universities/osh-state-university/gallery/lab.webp" },
      { title: "Hostel", image: "/images/universities/osh-state-university/gallery/hostel.webp" },
      { title: "Clinical Training", image: "/images/universities/osh-state-university/gallery/hospital.webp" },
    ],
  },

  downloads: [
    { title: "Osh State University Brochure", type: "PDF", icon: "file-text", href: "/downloads/osh-state-university-brochure.pdf" },
    { title: "MBBS Fee Structure 2026", type: "PDF", icon: "receipt", href: "/downloads/osh-state-university-fees-2026.pdf" },
  ],

  // TODO: fill with real content before launch — currently empty in source data
  videos: [
    { title: "Osh State University Campus Tour", thumbnail: "/images/universities/osh-state-university/videos/campus-tour.webp", youtubeId: "", duration: "8:25" },
  ],

  // TODO: needs a real student testimonial — placeholder removed, don't render empty card
  testimonials: [],

  relatedUniversities: [
    { name: "Jalal-Abad State University", slug: "/mbbs-in-kyrgyzstan/jalal-abad-state-university", image: "/universities/jalal-abad.webp" },
  ],

  // Only university-SPECIFIC FAQs. Generic ones ("Is NEET compulsory?", "What documents do I need?")
  // are answered once on the country page and linked from here instead of repeated.
  faq: {
    title: "Frequently Asked Questions — Osh State University",
    items: [
      {
        question: "Is Osh State University recognized by NMC?",
        answer:
          "Osh State University is listed in the World Directory of Medical Schools (WDOMS). Always verify the latest NMC eligibility requirements before applying.",
      },
      {
        question: "Does the university provide hostel accommodation?",
        answer:
          "Yes. Separate hostel facilities are available for international students with Wi-Fi, security, laundry, and study areas.",
      },
      {
        question: "Is Indian food available?",
        answer: "Yes. Indian mess facilities and nearby Indian restaurants are available for students.",
      },
      {
        question: "How much does MBBS cost at Osh State University?",
        answer:
          "Tuition is around USD 3,800/year plus hostel and insurance — see the fee structure table above for the full year-by-year breakdown.",
      },
    ],
  },

  cta: {
    title: "Start Your MBBS Journey at Osh State University",
    description:
      "Receive personalized guidance from our experienced counsellors — from application to arrival in Kyrgyzstan.",
    primaryButton: "Book Free Counselling",
    secondaryButton:"Chat on WhatsApp",
  },
}