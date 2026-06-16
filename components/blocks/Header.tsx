export default function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow: string
  title: string
}) {
  return (
    <div className="h-fit w-full">
      <span className="text-md flex items-center gap-2 font-bold text-orange-500 uppercase">
        <hr className="h-1 w-12 bg-orange-500" />
        {eyebrow}
      </span>
      <h1 className="mt-6 text-3xl font-extrabold text-foreground md:text-4xl lg:text-6xl">
        {title}
      </h1>
    </div>
  )
}
