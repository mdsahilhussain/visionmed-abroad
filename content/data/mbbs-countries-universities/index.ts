import { University } from "@/types/university"
import { jalalAbadStateUniversity } from "./kyrgyzstan/jalal-abad-state-university"
import { oshStateUniversity } from "./kyrgyzstan/osh-state-university"

const registry: Record<string, Record<string, University>> = {
  kyrgyzstan: {
    "osh-state-university": oshStateUniversity,
    "jalal-abad-state-university": jalalAbadStateUniversity,
  },

  russia: {},

  uzbekistan: {},

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
