import PERM_SMU from "@/public/images/PERM_SMU.webp"
import OSH_SMU from "@/public/images/OSH_SMU.webp"
import KALMYK_SMU from "@/public/images/KALMYK_SMU.webp"
import MARI_SMU from "@/public/images/MARI_SMU.webp"
import ORENBURG_SMU from "@/public/images/ORENBURG_SMU.webp"
import PSKOV_SMU from "@/public/images/PSKOV_SMU.webp"
import TVER_SMU from "@/public/images/TVER_SMU.webp"

export const universities_images = {
  OSH_SMU,
  PERM_SMU,
  KALMYK_SMU,
  MARI_SMU,
  ORENBURG_SMU,
  PSKOV_SMU,
  TVER_SMU,
} as const

export const universities_logo = {} as const

export type universitiesImageKey = keyof typeof universities_images
export type universitiesLogoKey = keyof typeof universities_logo
