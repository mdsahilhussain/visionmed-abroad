import brand_logo from "@/public/images/vsma-brand-logo.webp"

export const image = {
  brand_logo,
} as const


export type imageKey = keyof typeof image