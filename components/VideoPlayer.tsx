"use client"

import Image from "next/image"
import { memo, useCallback, useEffect, useRef } from "react"
import { Pause, Play } from "iconoir-react"
import { cn } from "@/lib/utils"

interface VideoPlayerProps {
  src: string
  captionsSrc?: string
  className?: string
  thumbnailSrc?: string

  /** Controlled by parent */
  isPlaying: boolean
  onPlay: () => void
  onPause: () => void
}

const VideoPlayer = ({
  src,
  captionsSrc,
  className,
  thumbnailSrc = "/videos/sahil-thumbnail.webp",
  isPlaying,
  onPlay,
  onPause,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  /**
   * Parent controls playback.
   */
  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    if (isPlaying) {
      video.play().catch(() => {})
    } else {
      video.pause()
    }
  }, [isPlaying])

  /**
   * Play / Pause
   */
  const handlePlayPause = useCallback(() => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      onPlay()
    } else {
      video.pause()
    }
  }, [onPlay])

  return (
    <div className={cn("w-full", className)}>
      <div className="group relative aspect-9/16 overflow-hidden rounded-2xl shadow-lg">
        <video
          ref={videoRef}
          className="h-full w-full object-cover"
          preload="metadata"
          playsInline
          poster={thumbnailSrc}
          onPause={onPause}
          onEnded={() => {
            videoRef.current!.currentTime = 0
            onPause()
          }}
        >
          <source src={src} type="video/mp4" />

          {captionsSrc && (
            <track
              src={captionsSrc}
              kind="subtitles"
              srcLang="en"
              label="English"
            />
          )}
        </video>

        {!isPlaying && (
          <button
            type="button"
            onClick={handlePlayPause}
            className="absolute inset-0 z-10 cursor-pointer"
          >
            <Image
              src={thumbnailSrc}
              alt="Video thumbnail"
              fill
              sizes="(max-width:768px) 100vw, 320px"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-xl backdrop-blur-sm transition group-hover:scale-110">
                <Play className="ml-1" color="#111827" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-black/80 via-black/20 to-transparent p-4 text-white text-left">
              <p className="text-lg font-semibold">Watch Our Story</p>
              <p className="mt-1 text-sm text-white/80">
                Click to play the video
              </p>
            </div>
          </button>
        )}

        {isPlaying && (
          <button
            type="button"
            onClick={handlePlayPause}
            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <div className="rounded-full bg-black/40 p-3 backdrop-blur-sm">
              <Pause color="white" />
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

export default memo(VideoPlayer)
