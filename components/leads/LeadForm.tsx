"use client"
import {  ShieldCheck, } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useMemo, useState, FormEvent } from "react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { contactOptions, teamMembers } from "@/content/data/data"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { partnerUniversities } from "@/content/data/mbbs-countries-universities"

type LeadFormVariant = "hero" | "sidebar"

interface LeadFormProps {
  countryName?: string
  variant?: LeadFormVariant
  className?: string
}

export function LeadForm({ countryName, variant = "hero" }: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const counsellor = teamMembers[0] ?? { name: "Our Team", experience: 10 }
  const countries = useMemo(
    () => [...new Set(partnerUniversities.map((u) => u.country))],
    []
  )
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: Connect with API
    setSubmitted(true)
  }
  return (
    <Card
      className={cn(
        "w-full p-6",
        variant === "sidebar" &&
          "sticky top-24 border border-muted-foreground/40"
      )}
    >
      <form onSubmit={onSubmit} aria-label="Free MBBS counselling form">
        {variant === "hero" ? (
          <div className="mb-5 flex items-center gap-3 rounded-xl bg-muted p-3">
            <Avatar size="lg">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt={counsellor.name}
              />
              <AvatarFallback>{counsellor.name.charAt(0)}</AvatarFallback>
            </Avatar>

            <div>
              <p className="font-semibold text-foreground">
                Free counselling with {counsellor.name}
              </p>
              <p className="text-sm text-muted-foreground">
                {counsellor.experience}+ years of MBBS admissions
              </p>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-base font-semibold text-foreground">
              Free counselling for {countryName}
            </h3>
            <p className="mt-1 text-xs text-muted-foreground/80">
              Get a fee breakdown and university shortlist within 24 hours.
            </p>
          </>
        )}

        <div className="mt-5 space-y-3">
          <label className="grid gap-1.5 text-sm font-medium">
            <span>Name</span>
            <Input
              name="name"
              placeholder="Student name"
              aria-label="Student name"
              required
            />
          </label>

          <label className="grid gap-1.5 text-sm font-medium">
            <span>Phone</span>
            <Input
              name="phone"
              placeholder="+91 Phone Number"
              aria-label="Phone number"
              inputMode="numeric"
              pattern="[0-9+ ]{10,14}"
              required
            />
          </label>

          <label className="grid gap-1.5 text-sm font-medium">
            <span>Neet Score (optional)</span>
            <Input
              name="neet"
              placeholder="450"
              inputMode="numeric"
              aria-label="NEET score"
            />
          </label>

          {variant === "hero" && (
            <label className="grid gap-1.5 text-sm font-medium">
              <span>Preferred Country</span>
              <Select name="country" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country) => (
                      <SelectItem key={country} value={country}>
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
          )}
          <Button className="w-full">
            {submitted ? "Request Received ✓" : "Book Free Session"}
          </Button>
          <p className="flex items-center justify-center gap-1.5 text-[11px] text-green-500">
            <ShieldCheck className="h-3.5 w-3.5 text-green-500" />
            We never share your data.
          </p>
        </div>
      </form>

      <div className="mt-5 grid grid-cols-3 gap-2 border-t border-border pt-5">
        {contactOptions.map((option, index) => (
          <Link
            key={index}
            href={option.actionLink}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({
                variant: "ghost",
                size:"sm"
              }),
              "py-6"
            )}
          >
            <option.icon className="h-4 w-4" />
            <span className="text-xs">{option.title}</span>
          </Link>
        ))}
      </div>
    </Card>
  )
}
