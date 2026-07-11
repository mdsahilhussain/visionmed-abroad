import Link from "next/link"
import { Button } from "../ui/button"

export default function SectionHeader({
  eyebrow,
  title,
  jump_link = false,
}: {
  eyebrow: string
  title: string
  jump_link?: boolean
}) {
  return (
    <div className="h-fit w-full">
      <span className="text-md flex items-center gap-2 font-bold text-orange-500 uppercase">
        <hr className="h-0.5 w-12 bg-orange-500" />
        {eyebrow}
      </span>
      <div className="flex items-end justify-between">
        <h1 className="mt-6 text-3xl font-extrabold text-foreground md:text-4xl lg:text-6xl">
          {title}
        </h1>
        {
          jump_link && <Link href="/contact" type="link" className="text-md font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground">
          View more
        </Link>
        }
      </div>
    </div>
  )
}
