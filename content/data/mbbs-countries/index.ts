import { MbbsCountryData } from "@/types/mbbs-country"
import { kyrgyzstanData } from "./kyrgyzstan"
import { russiaData } from "./russia"
import { bangladeshData } from "./bangladesh"
import { uzbekistanData } from "./uzbekistan"

const registry: Record<string, MbbsCountryData> = {
  kyrgyzstan: kyrgyzstanData,
  russia: russiaData,
  uzbekistan: uzbekistanData,
  bangladesh: bangladeshData,
}

export function getMbbsCountryData(country: string): MbbsCountryData | null {
  return registry[country] ?? null
}

export function getAllMbbsCountrySlugs(): string[] {
  return Object.keys(registry)
}
