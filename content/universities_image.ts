import PERM_SMU from "@/public/universities/perm.webp"
import OSH_SMU from "@/public/universities/osh.webp"
import MARI_SMU from "@/public/universities/mari.webp"
import ORENBURG_SMU from "@/public/universities/orenburg.webp"
import PSKOV_SMU from "@/public/universities/pskov.webp"
import TVER_SMU from "@/public/universities/tver.webp"

export const universities_images = {
  OSH_SMU,
  PERM_SMU,
  MARI_SMU,
  ORENBURG_SMU,
  PSKOV_SMU,
  TVER_SMU,
} as const

export const universities_logo = {} as const

export type universitiesImageKey = keyof typeof universities_images
export type universitiesLogoKey = keyof typeof universities_logo
