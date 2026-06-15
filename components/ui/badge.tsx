import { Sparks, ShieldCheck, CheckCircle } from 'iconoir-react'
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "nmc" | "who" | "gold-partner" | "trust" | "success";

const styles: Record<BadgeVariant, string> = {
    nmc: "border-foreground text-foreground bg-foreground/10",
    who: "border-green-500 bg-green-100/20 dark:bg-green-800/20 text-green-500",
    "gold-partner": "border-amber-500 bg-amber-50 text-amber-600",
    trust: "border-foreground text-foreground bg-foreground/10",
    success: "border-green-500 bg-green-100/20 dark:bg-green-800/20 text-green-500"
};

export function Badge({
    children,
    variant = "trust",
    className,
    isCard = false,
}: {
    children: ReactNode;
    variant?: BadgeVariant;
    className?: string;
    isCard?: boolean;
}) {
    const Icon = variant === "gold-partner" ? Sparks : variant === "nmc" ? ShieldCheck : CheckCircle;

    return (
        <span className={cn("inline-flex items-center gap-1.5 border font-medium backdrop-blur-md", isCard ? "rounded-full px-2 py-1 text-[10px] md:text-xs" : "rounded-lg px-3 py-1 text-sm md:text-base", styles[variant], className)}>
            <Icon className="size-3 md:size-4" aria-hidden="true" color={"currentColor"} />
            {children}
        </span>
    );
}
