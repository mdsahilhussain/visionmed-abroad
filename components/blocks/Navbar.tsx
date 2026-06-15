"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { NavArrowDown } from "iconoir-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"
import { navbarCategories } from "@/content/data"
import { image } from "@/content/image"

const Navbar = () => {
  return (
    <div className="sticky inset-x-0 top-0 z-50">
      <header className="relative w-full">
        <div className="border-b py-4 backdrop-blur-md transition-all duration-300">
          <div className="mx-auto flex h-fit max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Mobile Navigation */}
            {/* <MobileNav /> */}

            {/* Logo */}
            <Link href="/" aria-label="Go to homepage">
              <Image
                src={image.brand_logo}
                alt="Logo"
                width={100}
                height={100}
                loading="eager"
                className="size-16"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:h-full lg:items-stretch">
              <NavItemsContainer />
            </div>

            {/* CTA */}
            <div className="flex items-center">
              <Link
                href="/"
                className={cn(
                  buttonVariants({
                    variant: "default",
                    size: "lg",
                  }),
                  "hidden lg:inline-flex"
                )}
              >
                Book free session
              </Link>

              {/* Mobile menu button can go here */}
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

const NavItemsContainer = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const navRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(navRef, () => setActiveIndex(null))

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveIndex(null)
      }
    }

    document.addEventListener("keydown", handler)

    return () => {
      document.removeEventListener("keydown", handler)
    }
  }, [setActiveIndex])

  const isAnyOpen = activeIndex !== null

  return (
    <nav
      ref={navRef}
      className="flex h-full gap-2"
      aria-label="Primary navigation"
    >
      {navbarCategories.map((category, i) => {
        const isOpen = activeIndex === i

        const handleOpen = () => {
          if (!category.featured) return

          setActiveIndex((prev) => (prev === i ? null : i))
        }

        return (
          <NavItem
            key={category.label}
            category={category}
            isOpen={isOpen}
            isAnyOpen={isAnyOpen}
            handleOpen={handleOpen}
            close={() => setActiveIndex(null)}
          />
        )
      })}
    </nav>
  )
}

const NavItem = ({
  category,
  isAnyOpen,
  isOpen,
  handleOpen,
  close,
}: NavItemProps) => {
  return (
    <div className="relative flex">
      <div className="flex items-center">
        {category.href && !category.featured ? (
          <Link
            href={category.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              "h-auto gap-1.5 px-3 py-2"
            )}
          >
            {category.name}
          </Link>
        ) : (
          <Button
            variant="ghost"
            className="gap-1.5"
            onClick={handleOpen}
            aria-expanded={isOpen}
            aria-haspopup="menu"
          >
            {category.name}
            <NavArrowDown
              className={cn(
                "size-5 text-muted-foreground transition-transform duration-200",
                {
                  "rotate-180": isOpen,
                }
              )}
              strokeWidth={3}
            />
          </Button>
        )}
      </div>

      {isOpen && category.featured && (
        <div
          className={cn(
            "absolute top-full left-1/2 z-50 mt-2 w-screen max-w-5xl -translate-x-1/2",
            {
              "animate-in duration-200 fade-in-0 zoom-in-95": !isAnyOpen,
            }
          )}
        >
          <div className="overflow-hidden rounded-2xl border bg-background shadow-2xl">
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
              {category.items?.map(
                (item: { name: string; href: string; imageSrc: string }) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={close}
                    className="group block rounded-xl p-2 transition-colors hover:bg-muted"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg bg-muted">
                      <Image
                        src={item.imageSrc}
                        alt={item.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="mt-3 font-medium text-foreground">
                      {item.name}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Read more
                    </p>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export { Navbar }
