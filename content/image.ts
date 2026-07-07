import brand_logo from "@/public/images/vsma-brand-logo.webp"
import step_1 from "@/public/images/step-1.webp"
import step_2 from "@/public/images/step-2.webp"
import step_3 from "@/public/images/step-3.webp"
import step_4 from "@/public/images/step-4.webp"
import counselling_process from "@/public/images/counselling_process.webp"

export const image = {
  brand_logo,
  step_1,
  step_2,
  step_3,
  step_4,
  counselling_process,
} as const

export type imageKey = keyof typeof image
