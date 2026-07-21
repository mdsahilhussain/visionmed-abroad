"use client"

import { useState } from "react"
import Image from "next/image"
import { ImageOff } from "lucide-react"
import type { University } from "@/types/university"

function GalleryTile({
  image,
  title,
  className,
}: {
  image: string
  title: string
  className?: string
}) {
  const [errored, setErrored] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border border-border bg-muted ${className ?? ""}`}
    >
      {!errored ? (
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setErrored(true)}
        />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-orange-100 to-orange-50 text-orange-400">
          <ImageOff className="h-6 w-6" />
        </div>
      )}
      <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
        <p className="text-sm font-medium text-white">{title}</p>
      </div>
    </div>
  )
}

export function GallerySection({ university }: { university: University }) {
  const { gallery } = university

  return (
    <section className="container mx-auto">
      <div className="mb-10 flex items-center gap-2">
        <span className="h-px w-8 bg-orange-500" />
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600">
          {gallery.title}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:grid-rows-2">
        {gallery.images.map((img, i) => (
          <GalleryTile
            key={img.title}
            image={img.image}
            title={img.title}
            className={
              i === 0
                ? "col-span-2 row-span-2 aspect-square sm:aspect-auto"
                : "aspect-square"
            }
          />
        ))}
      </div>
    </section>
  )
}