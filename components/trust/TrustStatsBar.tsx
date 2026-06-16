"use client"

import { statistics } from "@/content/data"
import { cn } from "@/lib/utils"
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "motion/react"
import { useEffect, useRef } from "react"

function Counter({ value }: { value: number }) {
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { duration: 1400 })
  const display = useTransform(spring, (latest: number) =>
    Math.round(latest).toLocaleString("en-IN")
  )

  useEffect(() => {
    motionValue.set(value)
  }, [motionValue, value])

  return <motion.span>{display}</motion.span>
}

export function TrustStatsBar() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 lg:grid-cols-5">
      {statistics.map((stat) => (
        <div
          key={stat.label}
          className={cn(
            "rounded-2xl border border-border bg-primary-foreground px-4 py-6 shadow-[0_12px_36px_rgba(15,23,42,0.12)]",
            "group transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
          )}
        >
          <stat.icon className="mb-3 size-6 text-orange-500" />
          <p className="text-2xl font-black text-orange-500 transition-all duration-300 group-hover:translate-x-4 group-hover:-translate-y-1 group-hover:scale-[1.16] md:text-3xl lg:text-5xl">
            {inView ? <Counter value={stat.number} /> : 0}
            {stat.suffix}
          </p>
          <p className="mt-1 text-xs capitalize lg:text-sm">{stat.label}</p>
        </div>
      ))}
    </div>
  )
}
