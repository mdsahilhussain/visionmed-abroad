import { Quote } from "lucide-react";
import type { AboutPageData } from "@/types/about";

interface PromiseProps {
  promise: AboutPageData["promise"];
}

export function Promise({ promise }: PromiseProps) {
  return (
    <section className="w-full">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center sm:py-28">
        <Quote className="mx-auto h-8 w-8 text-orange-500/60" />
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          {promise.title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {promise.description}
        </p>
      </div>
    </section>
  );
}