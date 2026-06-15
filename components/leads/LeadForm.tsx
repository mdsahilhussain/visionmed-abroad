"use client";

import { FormEvent, useMemo, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ShieldCheck } from "iconoir-react";
import { cn } from "@/lib/utils";
import { partnerUniversities, teamMembers } from "@/content/data";

type LeadFormVariant = "hero" | "inline" | "sidebar" | "exit-popup";

interface LeadFormProps {
  variant?: LeadFormVariant;
  defaults?: {
    neet?: string;
    country?: string;
  };
}

export function LeadForm({
  variant = "hero",
  defaults,
}: LeadFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const countries = useMemo(
    () => [...new Set(partnerUniversities.map((u) => u.country))],
    []
  );

  const counsellor = teamMembers[0];

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // TODO: Connect with API
    setSubmitted(true);
  }

  return (
    <form
      onSubmit={onSubmit}
      aria-label="Free MBBS counselling form"
      className={cn(
        "flex h-full w-full lg:max-w-md flex-col rounded-2xl",
        "border border-border bg-primary-foreground p-5 md:p-6",
        "backdrop-blur-xl",
        "shadow-[0_12px_36px_rgba(15,23,42,0.12)]",
        "transition-all duration-300 hover:shadow-[0_18px_48px_rgba(15,23,42,0.18)]",
        "transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]",
        variant === "inline" &&
        "max-w-none gap-3 md:grid md:grid-cols-[1fr_1fr_auto] md:items-end"
      )}
    >
      {variant === "hero" && (
        <div className="mb-5 flex items-center gap-3 rounded-xl bg-muted p-3">
          <Avatar size="lg">
            <AvatarImage
              src="https://github.com/shadcn.png"
              alt={counsellor.name}
            />
            <AvatarFallback>
              {counsellor.name.charAt(0)}
            </AvatarFallback>
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
      )}

      <div
        className={cn(
          "grid gap-4",
          variant !== "inline" && "md:grid-cols-1"
        )}
      >
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
            pattern="[0-9+ ]{10,14}"
            required
          />
        </label>

        {variant !== "inline" && (
          <>
            <label className="grid gap-1.5 text-sm font-medium">
              <span>NEET Score</span>

              <Input
                name="neet"
                placeholder="Optional"
                defaultValue={defaults?.neet}
                inputMode="numeric"
                aria-label="NEET score"
              />
            </label>

            <div className="grid gap-1.5">
              <span className="text-sm font-medium">
                Preferred Country
              </span>
              <Select defaultValue={defaults?.country}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {countries.map((country) => (
                      <SelectItem
                        key={country}
                        value={country}
                      >
                        {country}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </>
        )}
      </div>

      {/* Push CTA to bottom */}
      <div className="mt-auto pt-5">
        <Button
          type="submit"
          className={cn(
            "w-full",
            variant === "inline" && "md:w-auto"
          )}
        >
          {submitted
            ? "Request Received ✓"
            : "Book Free Session"}
        </Button>

        <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <ShieldCheck className="size-4 text-green-500" />
          We never share your data.
        </p>
      </div>
    </form>
  );
}