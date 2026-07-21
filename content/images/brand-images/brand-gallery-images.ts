import gallery_one from "@/public/images/brand/brand-gallery/gallery-1.webp"
import gallery_two from "@/public/images/brand/brand-gallery/gallery-2.webp"
import gallery_three from "@/public/images/brand/brand-gallery/gallery-3.webp"
import gallery_four from "@/public/images/brand/brand-gallery/gallery-4.webp"
import gallery_five from "@/public/images/brand/brand-gallery/gallery-5.webp"

export const landing_gallery_images = [
  gallery_one,
  gallery_two,
  gallery_three,
  gallery_four,
  gallery_five,
] as const

export type galleryImageKey = keyof typeof landing_gallery_images
