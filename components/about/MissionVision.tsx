import { Compass, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { AboutPageData } from "@/types/about";

interface MissionVisionProps {
  mission: AboutPageData["mission"];
  vision: AboutPageData["vision"];
}

export function MissionVision({ mission, vision }: MissionVisionProps) {
  const blocks = [
    { icon: Target, ...mission },
    { icon: Compass, ...vision },
  ];

  return (
    <section className="border-t w-full pt-12">
        <div className="grid gap-4 sm:grid-cols-2">
          {blocks.map(({ icon: Icon, title, description }) => (
            <Card
              key={title}
              className="p-7 sm:p-8"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-orange-500/10">
                <Icon className="h-5 w-5 text-orange-500" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                {description}
              </p>
            </Card>
          ))}
        </div>
    </section>
  );
}