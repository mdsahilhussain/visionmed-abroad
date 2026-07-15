import Link from "next/link"
import {
  FileText,
  Receipt,
  Download,
  PlayCircle,
  type LucideIcon,
} from "lucide-react"
import type { University } from "@/types/university"

const ICON_MAP: Record<string, LucideIcon> = {
  "file-text": FileText,
  receipt: Receipt,
}

export function DownloadsAndVideos({ university }: { university: University }) {
  const { downloads, videos } = university
  const playableVideos = videos.filter((v) => v.youtubeId)

  return (
    <section className="border-t border-border py-20">
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
        {/* Downloads */}
        <div>
          <div className="mb-6 flex items-center gap-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
              Resources
            </span>
          </div>
          <div className="flex items-center gap-4">
            {downloads.map((d) => {
              const Icon = ICON_MAP[d.icon] ?? FileText
              return (
                <Link
                  key={d.title}
                  href={d.href}
                  className="group flex items-center justify-between rounded-xl border border-border bg-background px-5 py-4 transition-colors hover:border-orange-300 hover:bg-orange-50/40"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 text-orange-600">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">
                        {d.title}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {d.type}
                      </span>
                    </span>
                  </span>
                  <Download className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              )
            })}
          </div>
        </div>

        {/* Videos */}
        {playableVideos.length > 0 && (
          <div>
            <div className="mb-6 flex items-center gap-2">
              <span className="h-px w-8 bg-orange-500" />
              <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
                Campus tour
              </span>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {playableVideos.map((v) => (
                <a
                  key={v.title}
                  href={`https://www.youtube.com/watch?v=${v.youtubeId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative aspect-video overflow-hidden rounded-xl border border-border bg-background"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <PlayCircle className="h-10 w-10 text-foreground transition-transform group-hover:scale-110" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-linear-to-t from-background/80 to-transparent p-3">
                    <span className="text-xs font-medium text-foreground">
                      {v.title}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {v.duration}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
