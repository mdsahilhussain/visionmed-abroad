"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { AnimatePresence, motion, Variants } from "motion/react"
import { Menu, NavArrowDown, Xmark } from "iconoir-react"

import { buttonVariants } from "@/components/ui/button"

import { navbarCategories } from "@/content/data/data"
import { partnerCountriesUniversities } from "@/content/data/mbbs-countries-universities"
import { cn } from "@/lib/utils"

const overlayVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
    },
  },
}

const drawerVariants: Variants = {
  hidden: {
    y: "-100%",
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 28,
    },
  },
  exit: {
    y: "-100%",
    transition: {
      duration: 0.25,
    },
  },
}

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.05,
    },
  }),
}

export default function MobileNav() {
  const [open, setOpen] = useState(false)

  const [expanded, setExpanded] = useState<string | null>(null)

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""

    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      {/* Hamburger */}
      <button
        aria-label="Toggle Navigation"
        onClick={() => setOpen((prev) => !prev)}
        className="flex h-11 w-11 items-center justify-center"
        type="button"
      >
        {open ? <Xmark className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 z-40 bg-background/40 backdrop-blur-sm"
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              className="fixed inset-x-0 top-0 z-50 h-screen overflow-y-auto bg-background"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="flex min-h-screen flex-col">
                {/* Header */}
                <div className="flex h-20 items-center justify-between border-b px-6">
                  <h2 className="text-xl font-bold">Menu</h2>

                  <button
                    onClick={() => setOpen(false)}
                    className="rounded-lg p-2 transition hover:bg-muted"
                    type="button"
                  >
                    <Xmark className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation */}
                <div className="flex-1 px-6 py-8">
                  <div className="space-y-2">
                    {navbarCategories.map((category, index) => {
                      const hasChildren = category.featured

                      const isExpanded = expanded === category.label

                      return (
                        <motion.div
                          key={category.label}
                          custom={index}
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          {!hasChildren ? (
                            <Link
                              href={category.href ?? "/"}
                              className="flex items-center justify-between rounded-xl px-4 py-4 text-lg font-medium transition hover:bg-muted"
                              onClick={() => setOpen(false)}
                            >
                              {category.name}
                            </Link>
                          ) : (
                            <>
                              <button
                                onClick={() =>
                                  setExpanded(
                                    isExpanded ? null : category.label
                                  )
                                }
                                type="button"
                                className="flex w-full items-center justify-between rounded-xl px-4 py-4 text-left text-lg font-medium transition hover:bg-muted"
                              >
                                {category.name}

                                <NavArrowDown
                                  className={cn(
                                    "transition-transform duration-300",
                                    isExpanded && "rotate-180"
                                  )}
                                />
                              </button>
                              <AnimatePresence initial={false}>
                                {isExpanded && (
                                  <motion.div
                                    initial={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    animate={{
                                      height: "auto",
                                      opacity: 1,
                                    }}
                                    exit={{
                                      height: 0,
                                      opacity: 0,
                                    }}
                                    transition={{
                                      duration: 0.25,
                                    }}
                                    className="overflow-hidden"
                                  >
                                    <div className="space-y-6 py-4 pl-4">
                                      {partnerCountriesUniversities.map((country) => (
                                        <div key={country.id}>
                                          <Link
                                            href={`/mbbs-in-${country.slug}`}
                                            className="mb-3 text-sm font-semibold tracking-wide text-primary uppercase"
                                          >
                                            MBBS in {country.name}
                                          </Link>

                                          <div className="space-y-2">
                                            {country.universities.map(
                                              (university) => (
                                                <Link
                                                  key={university.slug}
                                                  href={`/mbbs-in-${country.slug}/${university.slug}`}
                                                  onClick={() => setOpen(false)}
                                                  className="block rounded-lg px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
                                                >
                                                  {university.name}
                                                </Link>
                                              )
                                            )}
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </motion.div>
                                )}
                              </AnimatePresence>
                            </>
                          )}
                        </motion.div>
                      )
                    })}
                  </div>
                  {/* CTA */}
                  <motion.div
                    variants={itemVariants}
                    custom={navbarCategories.length + 1}
                    initial="hidden"
                    animate="visible"
                    className="mt-10"
                  >
                    <Link
                      href="/contact"
                      onClick={() => setOpen(false)}
                      className={cn(
                        buttonVariants({
                          size: "lg",
                          className: "w-full rounded-xl",
                        })
                      )}
                    >
                      Book Free Counselling
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
