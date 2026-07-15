import { Receipt, Info } from "lucide-react"
import type { University } from "@/types/university"

export function FeeStructure({ university }: { university: University }) {
  const { feeStructure } = university
  const currencySymbol =
    feeStructure.currency === "USD" ? "$" : feeStructure.currency

  const fmt = (n: number) => `${currencySymbol}${n.toLocaleString()}`

  const columns: {
    key: keyof (typeof feeStructure.yearly)[number]
    label: string
  }[] = [
    { key: "tuitionFee", label: "Tuition" },
    { key: "hostelFee", label: "Hostel" },
    { key: "medicalInsurance", label: "Insurance" },
    { key: "registrationFee", label: "Registration" },
  ]

  return (
    <section className="container mx-auto">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-8 bg-orange-500" />
            <span className="text-xs font-semibold tracking-[0.18em] text-orange-600 uppercase">
              Cost of study
            </span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            {feeStructure.title}
          </h2>
        </div>
        <div className="flex items-center max-sm:items-start gap-2 rounded-full max-sm:rounded-2xl border border-border bg-muted/50 px-4 py-2 text-xs text-muted-foreground">
          <Info className="size-4 shrink-0 max-sm:mt-1" />
          {feeStructure.note}
        </div>
      </div>

      {/* Ledger card */}
      <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
        <div className="flex items-center gap-2 border-b border-border bg-background px-6 py-4 text-foreground">
          <Receipt className="h-4 w-4 text-orange-400" />
          <span className="text-sm font-semibold">Year-by-year breakdown</span>
          <span className="ml-auto font-mono text-xs text-muted-foreground">
            {feeStructure.currency}
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-160 border-collapse text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40 text-left text-xs tracking-wide text-muted-foreground uppercase">
                <th className="px-6 py-3 font-semibold">Year</th>
                {columns.map((c) => (
                  <th key={c.key} className="px-4 py-3 font-semibold">
                    {c.label}
                  </th>
                ))}
                <th className="px-6 py-3 text-right font-semibold text-foreground">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {feeStructure.yearly.map((row, i) => (
                <tr
                  key={row.year}
                  className={
                    i % 2 === 0
                      ? "border-b border-border/60"
                      : "border-b border-border/60 bg-muted/20"
                  }
                >
                  <td className="px-6 py-3.5 font-semibold text-foreground">
                    {row.year}
                  </td>
                  {columns.map((c) => {
                    const val = row[c.key] as number
                    return (
                      <td
                        key={c.key}
                        className="px-4 py-3.5 text-muted-foreground"
                      >
                        {val ? (
                          fmt(val)
                        ) : (
                          <span className="text-muted-foreground/40">—</span>
                        )}
                      </td>
                    )
                  })}
                  <td className="px-6 py-3.5 text-right font-bold text-orange-600">
                    {fmt(row.total)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* One-time charges */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {feeStructure.oneTimeCharges.map((charge) => (
          <div
            key={charge.title}
            className="flex items-center justify-between rounded-xl border border-dashed border-orange-200 bg-orange-50/50 px-5 py-4"
          >
            <span className="text-sm font-medium text-foreground">
              {charge.title}
            </span>
            <span className="text-sm font-bold text-orange-700">
              {fmt(charge.amount)}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
