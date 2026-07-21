import { University } from "@/types/university"
import { jalalAbadStateUniversity } from "./kyrgyzstan/jalal-abad-state-university"
import { oshStateUniversity } from "./kyrgyzstan/osh-state-university"
import { mariStateUniversity } from "./russia/mari-state-university"
import { omskStateMedicalUniversity } from "./russia/omsk-state-medical-university"
import { orenburgStateMedicalUniversity } from "./russia/orenburg-state-medical-university"
import { permStateMedicalUniversity } from "./russia/perm-state-medical-university"
import { pskovStateUniversity } from "./russia/pskov-state-university"
import { tulaStateUniversity } from "./russia/tula-state-university"
import { tverStateMedicalUniversity } from "./russia/tver-state-medical-university"
import { andijanStateMedicalInstitute } from "./uzbekistan/andijan-state-medical-institute"
import { bukharaStateMedicalInstitute } from "./uzbekistan/bukhara-state-medical-institute"
import { namanganStateMedicalInstitute } from "./uzbekistan/namangan-state-medical-institute"

const registry: Record<string, Record<string, University>> = {
  kyrgyzstan: {
    "osh-state-university": oshStateUniversity,
    "jalal-abad-state-university": jalalAbadStateUniversity,
  },

  russia: {
    "mari-state-university": mariStateUniversity,
    "omsk-state-medical-university": omskStateMedicalUniversity,
    "orenburg-state-medical-university": orenburgStateMedicalUniversity,
    "perm-state-medical-university": permStateMedicalUniversity,
    "pskov-state-university": pskovStateUniversity,
    "tula-state-university": tulaStateUniversity,
    "tver-state-medical-university": tverStateMedicalUniversity,
  },

  uzbekistan: {
    "andijan-state-medical-institute": andijanStateMedicalInstitute,
    "bukhara-state-medical-institute": bukharaStateMedicalInstitute,
    "namangan-state-medical-institute": namanganStateMedicalInstitute,
  },

  bangladesh: {},
}

export function getUniversityData(
  country: string,
  university: string
): University | null {
  return registry[country]?.[university] ?? null
}

export function getAllUniversityParams() {
  return Object.entries(registry).flatMap(([country, universities]) =>
    Object.keys(universities).map((university) => ({
      country,
      university,
    }))
  )
}

export const partnerUniversities: PartnerUniversity[] = [
  {
    thumbnail: "/images/universities/perm/perm-thumbnail.webp",
    name: "Perm State Medical University",
    country: "Russia",
    city: "Perm",
    verifiedPartner: true,
    studentsPlaced: 560,
    feeRangePerYear: "INR 4.8L-5.6L",
    nmcApproved: true,
    slug: "perm-state-medical-university",
  },
  {
    thumbnail: "/images/universities/orenburg/orenburg-thumbnail.webp",
    name: "Orenburg State Medical University",
    country: "Russia",
    city: "Orenburg",
    verifiedPartner: true,
    studentsPlaced: 690,
    feeRangePerYear: "INR 3.8L-4.6L",
    nmcApproved: true,
    slug: "orenburg-state-medical-university",
  },
  {
    thumbnail: "/images/universities/mari/mari-thumbnail.webp",
    name: "Mari State University, Medical Faculty",
    country: "Russia",
    city: "Yoshkar-Ola",
    verifiedPartner: true,
    studentsPlaced: 440,
    feeRangePerYear: "INR 3.9L-4.8L",
    nmcApproved: true,
    slug: "mari-state-university",
  },
  {
    thumbnail: "/images/universities/tula/tula-thumbnail.webp",
    name: "Tula State University",
    country: "Russia",
    city: "Tula",
    verifiedPartner: true,
    studentsPlaced: 580,
    feeRangePerYear: "INR 3.8L-4.8L",
    nmcApproved: true,
    slug: "tula-state-university",
  },
  {
    thumbnail: "/images/universities/pskov/pskov-thumbnail.webp",
    name: "Pskov State University, Medical Faculty",
    country: "Russia",
    city: "Pskov",
    verifiedPartner: false,
    studentsPlaced: 260,
    feeRangePerYear: "INR 3.6L-4.4L",
    nmcApproved: true,
    slug: "pskov-state-university",
  },
  {
    thumbnail: "/images/universities/tver/tver-thumbnail.webp",
    name: "Tver State Medical University",
    country: "Russia",
    city: "Tver",
    verifiedPartner: true,
    studentsPlaced: 620,
    feeRangePerYear: "INR 4.3L-5.2L",
    nmcApproved: true,
    slug: "tver-state-medical-university",
  },
  {
    thumbnail: "/images/universities/omsk/omsk-thumbnail.webp",
    name: "Omsk State Medical University",
    country: "Russia",
    city: "Omsk",
    verifiedPartner: true,
    studentsPlaced: 350,
    feeRangePerYear: "INR 4.2L-5.0L",
    nmcApproved: true,
    slug: "omsk-state-medical-university",
  },
  {
    thumbnail: "/images/universities/osh/osh-thumbnail.webp",
    name: "Osh State University, International Medical Faculty",
    country: "Kyrgyzstan",
    city: "Osh",
    verifiedPartner: true,
    studentsPlaced: 780,
    feeRangePerYear: "INR 2.8L-3.5L",
    nmcApproved: true,
    slug: "osh-state-university",
  },
  {
    thumbnail: "/images/universities/jalal-abad/jalal-abad-thumbnail.webp",
    name: "Jalal-Abad State University",
    country: "Kyrgyzstan",
    city: "Jalal-Abad",
    verifiedPartner: true,
    studentsPlaced: 460,
    feeRangePerYear: "INR 2.7L-3.4L",
    nmcApproved: true,
    slug: "jalal-abad-state-university",
  },
  {
    thumbnail: "/images/universities/bukhara/bukhara-thumbnail.webp",
    name: "Bukhara State Medical Institute",
    country: "Uzbekistan",
    city: "Bukhara",
    verifiedPartner: true,
    studentsPlaced: 510,
    feeRangePerYear: "INR 3.2L-4.0L",
    nmcApproved: true,
    slug: "bukhara-state-medical-institute",
  },
]

export const partnerCountriesUniversities: Country[] = [
  {
    id: "russia",
    name: "Russia",
    slug: "russia",
    flag: "/images/universities/countries/russia-flag.webp",
    universities: [
      {
        name: "Perm State Medical University",
        slug: "perm-state-medical-university",
      },
      {
        name: "Orenburg State Medical University",
        slug: "orenburg-state-medical-university",
      },
      {
        name: "Mari State University, Medical Faculty",
        slug: "mari-state-university",
      },
      {
        name: "Tula State University",
        slug: "tula-state-university",
      },
      {
        name: "Pskov State University, Medical Faculty",
        slug: "pskov-state-university",
      },
      {
        name: "Tver State Medical University",
        slug: "tver-state-medical-university",
      },
      {
        name: "Omsk State Medical University",
        slug: "omsk-state-medical-university",
      },
    ],
  },

  {
    id: "kyrgyzstan",
    name: "Kyrgyzstan",
    slug: "kyrgyzstan",
    flag: "/images/universities/countries/kyrgyzstan-flag.webp",
    universities: [
      {
        name: "Osh State University, International Medical Faculty",
        slug: "osh-state-university",
      },
      {
        name: "Jalal-Abad State University",
        slug: "jalal-abad-state-university",
      },
    ],
  },

  {
    id: "uzbekistan",
    name: "Uzbekistan",
    slug: "uzbekistan",
    flag: "/images/universities/countries/uzbekistan-flag.webp",
    universities: [
      {
        name: "Bukhara State Medical Institute",
        slug: "bukhara-state-medical-institute",
      },
      {
        name: "Andijan State Medical Institute",
        slug: "andijan-state-medical-institute",
      },
      {
        name: "Namangan State Medical Institute",
        slug: "namangan-state-medical-institute",
      },
    ],
  },
]
