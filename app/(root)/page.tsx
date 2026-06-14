import HeroBackgroundCarousel from "@/components/blocks/HeroBackground";
import { TrustBadgeSet } from "@/components/trust/TrustBadgeSet";
import { Avatar, AvatarFallback, AvatarGroup, AvatarGroupCount, AvatarImage } from "@/components/ui/avatar";
import { testimonials } from "@/content/data";
import { StarSolid } from "iconoir-react";

const ITEMS_COUNT = Array.from({ length: 5 });

export default function Page() {
  return (
    <HeroBackgroundCarousel>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center gap-6 text-center">
        <TrustBadgeSet />
        <h1 className="text-7xl font-extrabold text-foreground transition delay-300 duration-50 ease-in-out hover:-translate-y-1 hover:scale-105">Your MBBS Dream Abroad Starts Here</h1>
        <p className="max-w-2xl text-lg text-foreground/80">Get a verified shortlist of NMC/WHO-approved universities with fee clarity, visa guidance and named counsellor support.</p>
        <div className="flex items-center gap-4 mt-4">
          <AvatarGroup className="grayscale">
            {
              testimonials.map((t, index) => (
                <Avatar key={index} size="lg">
                  <AvatarImage src={"https://github.com/shadcn.png"} alt={t.name} />
                  <AvatarFallback>{t.name}</AvatarFallback>
                </Avatar>
              ))
            }
            <AvatarGroupCount>+3</AvatarGroupCount>
          </AvatarGroup>
          <div className="flex flex-col -gap-1">
            <div className="flex items-center gap-1">
              {ITEMS_COUNT.map((_, idx) => (
                <StarSolid key={idx} className="size-6 text-yellow-500" />
              ))}
            </div>
            <p className="text-sm text-foreground"><strong className="font-bold">500+</strong> students guided by senior counsellors</p>
          </div>
        </div>
      </div>
    </HeroBackgroundCarousel>


  )
}
