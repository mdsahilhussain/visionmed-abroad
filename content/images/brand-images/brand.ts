import bukhara from "@/public/images/universities/bukhara/bukhara-thumbnail.webp"
import perm from "@/public/images/universities/perm/perm-thumbnail.webp"
import jalal from "@/public/images/universities/jalal-abad/jalal-abad-thumbnail.webp"
import osh from "@/public/images/universities/osh/osh-thumbnail.webp"
import mari from "@/public/images/universities/mari/mari-thumbnail.webp"
import pskov from "@/public/images/universities/pskov/pskov-thumbnail.webp"

import brand_logo from "@/public/images/brand/vsma-brand-logo.webp"

import couselling_process from "@/public/images/brand/process-counselling.webp"
import couselling_process_step1 from "@/public/images/brand/process-step-1.webp"
import couselling_process_step2 from "@/public/images/brand/process-step-2.webp"
import couselling_process_step3 from "@/public/images/brand/process-step-3.webp"
import couselling_process_step4 from "@/public/images/brand/process-step-4.webp"

export const landing_brand_images = {
  brand_logo,
}

export const landing_universities_background = {
  bukhara,
  perm,
  jalal,
  osh,
  mari,
  pskov,
} as const

export const landing_couselling_process_steps = {
  couselling_process,
  couselling_process_step1,
  couselling_process_step2,
  couselling_process_step3,
  couselling_process_step4,
}

export type landingUniversitiesBackgroundImageKey = keyof typeof landing_universities_background
export type landingCousellingProcessStepsImageKey = keyof typeof landing_couselling_process_steps
export type landingBrandImagesKey = keyof typeof landing_brand_images