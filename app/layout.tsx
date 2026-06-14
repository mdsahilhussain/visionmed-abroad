import { Geist_Mono, Figtree } from "next/font/google"
import { Metadata } from "next";
import "./globals.css"
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/blocks/Navbar";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "VisionMed Abroad | MBBS Abroad Counselling",
  description: "Trust-first MBBS abroad counselling with NMC/WHO-approved university shortlists."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", figtree.variable)}
    >
      <body>
        <Navbar/>
        <main>
        <ThemeProvider>{children}</ThemeProvider>
        </main>
      </body>
    </html>
  )
}
