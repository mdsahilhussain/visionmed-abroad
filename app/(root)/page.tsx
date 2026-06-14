import HeroBackgroundCarousel from "@/components/blocks/HeroBackground";
import { TrustBadgeSet } from "@/components/trust/TrustBadgeSet";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { contactOptions, testimonials } from "@/content/data";
import { cn } from "@/lib/utils";
import { Phone, StarSolid, VideoCamera, Whatsapp } from "iconoir-react";
import Link from "next/link";

const ITEMS_COUNT = Array.from({ length: 5 });

export default function Page() {
  return (
    <><HeroBackgroundCarousel>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
        <TrustBadgeSet />
        <h1 className="text-8xl font-extrabold text-foreground transition delay-300 duration-50 ease-in-out hover:-translate-y-1 hover:scale-105">Your MBBS Dream Abroad Starts Here</h1>
        <p className="max-w-2xl text-xl text-foreground/80">Get a verified shortlist of NMC/WHO-approved universities with fee clarity, visa guidance and named counsellor support.</p>
        <div className="flex items-center gap-4 mt-4">
          <AvatarGroup className="grayscale">
            {testimonials.map((t, index) => (
              <Avatar key={index} size="lg">
                <AvatarImage src={"https://github.com/shadcn.png"} alt={t.name} />
                <AvatarFallback>{t.name}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
          <div className="flex flex-col -gap-1">
            <div className="flex items-center gap-1">
              {ITEMS_COUNT.map((_, idx) => (
                <StarSolid key={idx} className="size-6 text-yellow-500" />
              ))}
            </div>
            <p className="text-md text-foreground/80 font-normal"><strong className="font-black text-foreground">500+ students placed</strong> by senior counsellors</p>
          </div>
        </div>
      </div>
    </HeroBackgroundCarousel>
      <section className="py-16 flex items-center gap-4 max-w-7xl mx-auto">
        <div className="flex flex-col items-start gap-6 w-[60%]">
          <span className="text-orange-500 text-md font-bold flex items-center gap-2"> <hr className="w-12 h-1 bg-orange-500"/> WHO WE ARE</span>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-foreground">Welcome to VisionMed Abroad</h1>
          <p className="max-w-2xl text-md text-muted-foreground">For over [X] years, Vision Study MBBS Abroad has guided thousands of NEET-qualified students toward their dream of becoming doctors — through honest counselling, transparent fee structures, and admissions to NMC-approved medical universities across Russia, Kyrgyzstan, Uzbekistan, Kazakhstan, Bangladesh, and Nepal. With [X,XXX]+ students placed and a reputation built on trust, we are one of India&apos;s most credible MBBS-abroad consultancies — committed to your success, not just your admission.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
            {contactOptions.map((option, index) => (
              <Link href={option.actionLink} className={cn(option.bgColor, option.shadowColor, "rounded-xl px-4 py-5 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]")} key={index}>
                <option.icon className="size-8 text-white" />
                <h2 className="text-md font-bold text-white mt-2">{option.title}</h2>
                <p className="text-white/90 text-sm">{option.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
