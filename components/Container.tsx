import { cn } from "@/lib/utils";
export function Container({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <main
            className={cn(
                "mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-24",
                className
            )}
        >
            {children}
        </main>
    );
}