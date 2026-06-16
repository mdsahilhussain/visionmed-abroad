import SectionHeader from "@/components/blocks/Header"
import HeroBackgroundCarousel from "@/components/blocks/HeroBackground"
import { Container } from "@/components/blocks/Container"
import { LeadForm } from "@/components/leads/LeadForm"
import { ProcessSteps } from "@/components/trust/ProcessSteps"
import { TrustBadgeSet } from "@/components/trust/TrustBadgeSet"
import { TrustStatsBar } from "@/components/trust/TrustStatsBar"
import { UniversityCard } from "@/components/trust/UniversityCard"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  contactOptions,
  partnerUniversities,
  testimonials,
  whyUsPoints,
} from "@/content/data"
import { image } from "@/content/image"
import { cn } from "@/lib/utils"
import { ShieldCheck, StarSolid } from "iconoir-react"
import Image from "next/image"
import Link from "next/link"

const ITEMS_COUNT = Array.from({ length: 5 })

export default function Page() {
  return (
    <Container>
      <HeroBackgroundCarousel>
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6 lg:px-8">
          <TrustBadgeSet />
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground transition delay-300 duration-50 ease-in-out hover:-translate-y-1 hover:scale-105 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
            Your MBBS Dream Abroad Starts Here
          </h1>
          <p className="max-w-2xl text-xl text-foreground/80">
            Get a verified shortlist of NMC/WHO-approved universities with fee
            clarity, visa guidance and named counsellor support.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row">
            <AvatarGroup className="grayscale">
              {testimonials.map((t, index) => (
                <Avatar key={index} size="lg">
                  <AvatarImage
                    src={"https://github.com/shadcn.png"}
                    alt={t.name}
                  />
                  <AvatarFallback>{t.name}</AvatarFallback>
                </Avatar>
              ))}
              <AvatarGroupCount>+3</AvatarGroupCount>
            </AvatarGroup>
            <div className="-gap-1 flex flex-col items-center lg:items-start">
              <div className="flex items-center gap-1">
                {ITEMS_COUNT.map((_, idx) => (
                  <StarSolid key={idx} className="size-6 text-yellow-500" />
                ))}
              </div>
              <p className="text-md font-light text-foreground/80">
                <strong className="font-medium text-foreground">
                  500+ students placed
                </strong>{" "}
                by senior counsellors
              </p>
            </div>
          </div>
        </div>
      </HeroBackgroundCarousel>
      <section className="w-full">
        <div className="mb-12 flex w-full flex-col gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col items-start gap-6 lg:w-3/5">
            <SectionHeader
              eyebrow="Who we are"
              title="Welcome to VisionMed Abroad"
            />
            <p className="text-md max-w-2xl text-muted-foreground">
              For over [X] years, Vision Study MBBS Abroad has guided thousands
              of NEET-qualified students toward their dream of becoming doctors
              — through honest counselling, transparent fee structures, and
              admissions to NMC-approved medical universities across Russia,
              Kyrgyzstan, Uzbekistan, Kazakhstan, Bangladesh, and Nepal. With
              [X,XXX]+ students placed and a reputation built on trust, we are
              one of India&apos;s most credible MBBS-abroad consultancies —
              committed to your success, not just your admission.
            </p>
            <div className="mt-6 grid w-full grid-cols-1 gap-4 md:grid-cols-3">
              {contactOptions.map((option, index) => (
                <Link
                  href={option.actionLink}
                  className={cn(
                    option.bgColor,
                    option.shadowColor,
                    "flex flex-row items-center gap-4 rounded-xl px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] lg:flex-col lg:items-start lg:gap-2"
                  )}
                  key={index}
                >
                  <option.icon className="size-8 text-white" />
                  <span>
                    <h2 className="text-md font-bold text-white">
                      {option.title}
                    </h2>
                    <p className="text-sm text-white/90">
                      {option.description}
                    </p>
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <LeadForm variant="hero" />
        </div>
        <TrustStatsBar />
      </section>
      <section className="w-full">
        <SectionHeader
          eyebrow="Our Partner universities"
          title="Only NMC/WHO-approved universities shown"
        />
        <div className="mt-12 flex gap-6 overflow-x-auto pb-3 md:grid md:grid-cols-3 md:overflow-visible">
          {partnerUniversities.map((university) => (
            <UniversityCard key={university.slug} university={university} />
          ))}
        </div>
      </section>
      <section className="w-full">
        <SectionHeader
          eyebrow="Full service package"
          title="How we help you to get an admission for medicine at the university of your dreams."
        />
        <ProcessSteps />
      </section>
      <section className="w-full">
        <SectionHeader
          eyebrow="Organization snapshot"
          title="Compliance, clarity and counsellor ownership"
        />
        <div className="mt-12 flex items-start gap-12">
          <div className="flex flex-col gap-4">
            {whyUsPoints.slice(0, 5).map((point) => (
              <div
                key={point.headline}
                className="flex items-start gap-3 rounded-xl bg-muted p-4"
              >
                <ShieldCheck className="text-success size-8 shrink-0" />
                <div className="flex flex-col items-start gap-1">
                  <h3 className="text-lg font-semibold">{point.headline}</h3>
                  <p className="text-sm text-muted-foreground">{point.body}</p>
                </div>
              </div>
            ))}
            <Button className="w-full" variant={"default"} size={"lg"}>
              Book a free counselling session
            </Button>
          </div>
          <Image
            src={image.counselling_process}
            alt="counselling process image"
            width={480}
            height={380}
            className="rounded-2xl"
          />
        </div>
      </section>
    </Container>
  )
}
