"use client"

import { statistics } from "@/content/data"
import {
  useMotionValue,
  useSpring,
  useTransform,
  motion,
  useInView,
} from "motion/react"
import { useEffect, useRef } from "react"
import { Card } from "../ui/card"

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
    <div
      ref={ref}
      className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
      {statistics.map((stat) => (
        <Card key={stat.label} className="flex-row-reverse justify-between p-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-500/10">
            <stat.icon className="h-6 w-6 text-orange-500" />
          </div>
          <div className="flex flex-col items-start gap-1">
            <p className="text-xl font-black text-orange-500 md:text-3xl lg:text-5xl">
              {inView ? <Counter value={stat.number} /> : 0}
              {stat.suffix}
            </p>
            <p className="text-xs capitalize lg:text-sm">{stat.label}</p>
          </div>
        </Card>
      ))}
    </div>
  )
}
