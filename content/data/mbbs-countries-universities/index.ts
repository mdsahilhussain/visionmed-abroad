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
