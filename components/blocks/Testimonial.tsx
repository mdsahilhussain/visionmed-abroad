"use client"
import { useState } from "react"
import SectionHeader from "./Header"
import dynamic from "next/dynamic"

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
  loading: () => (
    <div className="aspect-9/16 w-full animate-pulse rounded-2xl bg-muted" />
  ),
})

export default function Testimonial() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)

  return (
    <section className="w-full">
      <SectionHeader
        eyebrow="TRUST • SUCCESS • EXCELLENCE"
        title="Stories That Speak for Themselves"
      />
      <div className="scrollbar-hide mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="w-70 shrink-0 snap-start md:w-[320px]" key={index}>
            <VideoPlayer
              src="/videos/sahil-testimonial.mp4"
              isPlaying={playingVideo === index}
              onPlay={() => setPlayingVideo(index)}
              onPause={() => setPlayingVideo(null)}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
