import { cn } from "@/lib/utils"
export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <main
      className={cn(
        "mx-auto flex w-full max-w-7xl flex-col items-center gap-12 md:gap-24 px-4 pb-12 sm:px-6 lg:px-8",
        className
      )}
    >
      {children}
    </main>
  )
}
