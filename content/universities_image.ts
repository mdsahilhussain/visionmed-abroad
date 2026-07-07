import PERM_SMU from "@/public/university/PERM_SMU.webp"
import OSH_SMU from "@/public/university/OSH_SMU.webp"
import KALMYK_SMU from "@/public/university/KALMYK_SMU.webp"
import MARI_SMU from "@/public/university/MARI_SMU.webp"
import ORENBURG_SMU from "@/public/university/ORENBURG_SMU.webp"
import PSKOV_SMU from "@/public/university/PSKOV_SMU.webp"
import TVER_SMU from "@/public/university/TVER_SMU.webp"

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
