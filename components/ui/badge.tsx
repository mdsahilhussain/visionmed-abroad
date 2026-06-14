import { Sparks, ShieldCheck, CheckCircle } from 'iconoir-react'
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "nmc" | "who" | "gold-partner" | "trust" | "success";

const styles: Record<BadgeVariant, string> = {
    nmc: "border-foreground text-foreground backdrop-blur-md",
    who: "border-green-500 bg-green-100 dark:bg-green-800/20 text-green-600",
    "gold-partner": "border-amber-500 bg-amber-50 text-amber-600",
    trust: "border-foreground text-foreground backdrop-blur-md",
    success: "border-green-500 bg-green-100 dark:bg-green-800/20 text-green-500"
};

export function Badge({
    children,
    variant = "trust",
    className
}: {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
}) {
    const Icon = variant === "gold-partner" ? Sparks : variant === "nmc" ? ShieldCheck : CheckCircle;

    return (
        <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs md:text-md font-semibold", styles[variant], className)}>
            <Icon className="size-4" aria-hidden="true" color={"currentColor"} />
            {children}
        </span>
    );
}
