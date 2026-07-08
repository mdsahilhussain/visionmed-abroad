"use client"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { NavArrowDown } from "iconoir-react"

import { Button, buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

import { image } from "@/content/image"

import { useOnClickOutside } from "@/hooks/use-on-click-outside"
import UniversityMegaMenu from "./UniversityMegaMenu"
import { partnerCountries } from "@/content/data/universities"
import { navbarCategories } from "@/content/data"
import MobileNav from "./MobileNav"

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/40 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Go to homepage"
          className="flex shrink-0 items-center gap-3"
        >
          <Image
            src={image.brand_logo}
            alt="Vision Study MBBS Abroad"
            width={64}
            height={64}
            priority
            className="h-14 w-14"
          />

          <div className="hidden xl:block">
            <h2 className="text-base leading-none font-bold uppercase">
              Vision Study
            </h2>

            <p className="text-sm text-muted-foreground">MBBS Abroad</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex">
          <DesktopNav />
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({
                size: "lg",
              }),
              "hidden lg:inline-flex"
            )}
          >
            Book Free Counselling
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar

const DesktopNav = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const navRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(navRef, () => {
    setActiveIndex(null)
  })

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
  }, [])

  return (
    <nav
      ref={navRef}
      className="flex items-center gap-2"
      aria-label="Desktop Navigation"
    >
      {navbarCategories.map((category, index) => {
        const isOpen = activeIndex === index

        return (
          <div
            key={category.label}
            className="relative"
            onMouseLeave={() => setActiveIndex(null)}
          >
            {/* Normal Link */}
            {!category.featured && category.href ? (
              <Link
                href={category.href}
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "h-11 px-4"
                )}
              >
                {category.name}
              </Link>
            ) : (
              <>
                <Button
                  variant="ghost"
                  className="h-11 gap-1.5 px-4"
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() =>
                    setActiveIndex((prev) => (prev === index ? null : index))
                  }
                >
                  {category.name}

                  <NavArrowDown
                    strokeWidth={3}
                    className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      isOpen && "rotate-180"
                    )}
                  />
                </Button>

                {/* Mega Menu */}
                {isOpen && (
                  <div className="absolute top-full left-1/2 z-50 w-225 -translate-x-1/2 pt-5">
                    <div className="rounded-3xl border bg-background p-10 shadow-2xl">
                      {category.menuType === "universities" && (
                        <UniversityMegaMenu countries={partnerCountries} />
                      )}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        )
      })}
    </nav>
  )
}
