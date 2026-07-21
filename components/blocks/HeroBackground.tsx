"use client"

import { useEffect, useState } from "react"
import { landing_universities_background } from "@/content/images/brand-images/brand"
import { cn } from "@/lib/utils"

const HERO_IMAGES = [
  landing_universities_background.osh.src,
  landing_universities_background.perm.src,
  landing_universities_background.bukhara.src,
  landing_universities_background.jalal.src,
  landing_universities_background.mari.src,
  landing_universities_background.pskov.src,
]

const SLIDE_DURATION = 3000

interface HeroBackgroundCarouselProps {
  children: React.ReactNode
}

export default function HeroBackgroundCarousel({
  children,
}: HeroBackgroundCarouselProps) {
  const [currentImage, setCurrentImage] = useState(0)

  // Preload images to avoid flickering.
  useEffect(() => {
    HERO_IMAGES.forEach((src) => {
      const img = new window.Image()
      img.src = src
    })
  }, [])

  // Auto-slide.
  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length)
    }, SLIDE_DURATION)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="hero"
      className="min-h-svh w-full overflow-hidden"
      aria-label="Study MBBS Abroad Hero Section"
    >
      {/* Background carousel (decorative only) */}
      <div
        className="pointer-events-none absolute inset-0 -z-20 overflow-hidden"
        aria-hidden="true"
      >
        {HERO_IMAGES.map((image, index) => (
          <div
            key={image}
            className={cn(
              "absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-in-out",
              index === currentImage
                ? "scale-105 opacity-100"
                : "scale-100 opacity-0"
            )}
            style={{
              backgroundImage: `url(${image})`,
              willChange: "opacity, transform",
            }}
          />
        ))}
      </div>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 -z-10 bg-background/40"
        aria-hidden="true"
      />

      {/* Optional gradient overlay */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-b from-background/20 via-background/40 to-background"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-svh items-center">
        <div className="w-full">{children}</div>
      </div>
    </section>
  )
}
