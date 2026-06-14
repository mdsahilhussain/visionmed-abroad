"use client";

import { useEffect, useState } from "react";
import { universities_images } from "@/content/universities_image"; // adjust the import path
import { cn } from "@/lib/utils";

const HERO_IMAGES = [
    universities_images.OSH_SMU.src,
    universities_images.PERM_SMU.src,
    universities_images.PSKOV_SMU.src,
    universities_images.TVER_SMU.src,
    universities_images.KALMYK_SMU.src,
    universities_images.MARI_SMU.src,
];

const SLIDE_DURATION = 3000;

interface HeroBackgroundCarouselProps {
    children: React.ReactNode;
}

export default function HeroBackgroundCarousel({
    children,
}: HeroBackgroundCarouselProps) {
    const [currentImage, setCurrentImage] = useState(0);

    // Preload images to avoid flickering.
    useEffect(() => {
        HERO_IMAGES.forEach((src) => {
            const img = new window.Image();
            img.src = src;
        });
    }, []);

    // Auto-slide.
    useEffect(() => {
        const interval = window.setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
        }, SLIDE_DURATION);

        return () => window.clearInterval(interval);
    }, []);

    return (
        <section
            id="hero"
            className="w-full min-h-svh overflow-hidden"
            aria-label="Study MBBS Abroad Hero Section"
        >
            {/* Background carousel (decorative only) */}
            <div
                className="absolute inset-0 -z-20 pointer-events-none overflow-hidden"
                aria-hidden="true"
            >
                {HERO_IMAGES.map((image, index) => (
                    <div
                        key={image}
                        className={cn("absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-in-out",
                            index === currentImage
                                ? "opacity-100 scale-105"
                                : "opacity-0 scale-100"
                        )}
                        style={{
                            backgroundImage: `url(${image})`,
                            willChange: "opacity, transform",
                        }}
                    />
                ))}
            </div>

            {/* Dark overlay for readability */}
            <div
                className="absolute inset-0 -z-10 bg-background/40"
                aria-hidden="true"
            />

            {/* Optional gradient overlay */}
            <div
                className="absolute inset-0 -z-10 bg-linear-to-b from-background/20 via-background/40 to-background"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex min-h-svh items-center px-4 py-16 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-7xl">
                    {children}
                </div>
            </div>
        </section>
    );
}