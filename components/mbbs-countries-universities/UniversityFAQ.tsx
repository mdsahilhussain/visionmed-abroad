import Link from "next/link"
import { ArrowRight } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { University } from "@/types/university"

export function UniversityFAQ({ university }: { university: University }) {
  const { faq, breadcrumb } = university
  const countryHref = breadcrumb[breadcrumb.length - 2]?.href ?? "/"

  return (
    <section className="w-full">
      <div className="mb-8 flex items-center gap-2">
        <span className="h-px w-8 bg-orange-500" />
        <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
          FAQ
        </span>
      </div>
      <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-foreground">
        {faq.title}
      </h2>

      <Accordion className="mt-10">
        {faq.items.map((item, i) => (
          <AccordionItem key={item.question} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-sm font-semibold text-foreground sm:text-base">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <Link
        href={`${countryHref}#eligibility`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-orange-600 hover:text-orange-700"
      >
        More on eligibility, NEET & documents required for Kyrgyzstan
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </section>
  )
}
