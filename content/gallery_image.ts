import gallery_one from "@/public/gallery/gallery-1.webp"
import gallery_two from "@/public/gallery/gallery-2.webp"
import gallery_three from "@/public/gallery/gallery-3.webp"
import gallery_four from "@/public/gallery/gallery-4.webp"
import gallery_five from "@/public/gallery/gallery-5.webp"

export const gallery_images = [
  gallery_one,
  gallery_two,
  gallery_three,
  gallery_four,
  gallery_five,
] as const

export type galleryImageKey = keyof typeof gallery_images
