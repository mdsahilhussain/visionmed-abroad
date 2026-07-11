import { FileCheck2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import type { MbbsCountryData } from "@/types/mbbs-country";

interface AdmissionJourneyProps {
  eligibility: MbbsCountryData["eligibility"];
  admissionProcess: MbbsCountryData["admissionProcess"];
  requiredDocuments: MbbsCountryData["requiredDocuments"];
}

const ELIGIBILITY_ROWS: Array<{
  label: string;
  key: keyof MbbsCountryData["eligibility"];
}> = [
  { label: "Minimum Age", key: "minimumAge" },
  { label: "Education", key: "education" },
  { label: "Minimum Marks", key: "minimumMarks" },
  { label: "NEET", key: "neet" },
  { label: "English", key: "english" },
];

export function AdmissionJourney({
  eligibility,
  admissionProcess,
  requiredDocuments,
}: AdmissionJourneyProps) {
  return (
    <section className="rounded-2xl border border-muted-foreground/40 bg-background/40 px-6 py-14 sm:px-8 sm:py-16">
      <div>
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-orange-500">
          <span className="h-px w-8 bg-orange-500" />
          Admission Journey
        </div>
        <h2 className="max-w-2xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Eligibility, process &amp; paperwork
        </h2>

        <div className="mt-14 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          {/* Eligibility */}
          <Card className="h-fit p-6">
            <h3 className="text-base font-semibold text-foreground">
              Eligibility Criteria
            </h3>
            <dl className="mt-5 divide-y divide-muted-foreground/20">
              {ELIGIBILITY_ROWS.map(({ label, key }) => (
                <div
                  key={key}
                  className="flex items-start justify-between gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <dt className="text-sm text-muted-foreground/80">{label}</dt>
                  <dd className="text-right text-sm font-medium text-foreground">
                    {eligibility[key]}
                  </dd>
                </div>
              ))}
            </dl>
          </Card>

          {/* Admission process — a real sequence, so numbering earns its place */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {admissionProcess.map((step, i) => (
              <Card
                key={step}
                className="relative p-4"
              >
                <span className="text-xl font-bold text-orange-500/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 text-sm font-medium leading-snug text-foreground">
                  {step}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Required documents */}
        <div className="mt-14">
          <h3 className="text-base font-semibold text-foreground">
            Required Documents
          </h3>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {requiredDocuments.map((doc) => (
              <span
                key={doc}
                className="inline-flex items-center gap-2 rounded-lg border border-muted-foreground/40 bg-background/40 px-3.5 py-2 text-sm text-foreground"
              >
                <FileCheck2 className="h-4 w-4 text-orange-500" />
                {doc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}