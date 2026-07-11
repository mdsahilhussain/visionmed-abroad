import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { AboutPageData } from "@/types/about"
import SectionHeader from "../blocks/Header"

interface AboutFAQProps {
  faq: AboutPageData["faq"]
}

export function AboutFAQ({ faq }: AboutFAQProps) {
  return (
    <section className="w-full">
      <SectionHeader eyebrow={"FAQ"} title={"Common Questions"} />

      <Accordion className="mt-10">
        {faq.map((item, i) => (
          <AccordionItem
            key={item.question}
            value={`item-${i}`}
          >
            <AccordionTrigger className="text-left text-sm font-semibold text-foreground sm:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
