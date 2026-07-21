import UniversityMegaMenu from "./UniversityMegaMenu"
import Link from "next/link"
import Image from "next/image"
import { partnerCountriesUniversities } from "@/content/data/mbbs-countries-universities"
import { landing_brand_images } from "@/content/images/brand-images/brand"

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-center bg-muted text-foreground">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-start gap-6 px-4 py-12">
        <UniversityMegaMenu countries={partnerCountriesUniversities} />
        <div className="grid gap-10 border-t border-border pt-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Link
              href="/"
              aria-label="Go to homepage"
              className="flex items-center gap-4"
            >
              <Image
                src={landing_brand_images.brand_logo}
                alt="Vision Study MBBS Abroad"
                width={72}
                height={72}
                className="h-16 w-16"
                priority
              />

              <div>
                <h3 className="text-lg leading-tight font-bold uppercase">
                  Vision Study MBBS Abroad
                </h3>
                <p className="text-sm text-muted-foreground">Private Limited</p>
              </div>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted-foreground">
              Helping Indian students secure admission to top NMC-approved
              medical universities abroad with complete admission, visa, and
              travel support.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Contact Information</h4>

            <div className="space-y-4 text-sm leading-7 text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Head Office</p>
                <p>
                  The Hub, 2nd Floor, Room No. 8,
                  <br />
                  Co-working Studio,
                  <br />
                  Near Regent Cinema, Gandhi Maidan Road,
                  <br />
                  Patna – 800004, Bihar, India
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground">Email</p>
                <a
                  href="mailto:visionmedabroad@gmail.com"
                  className="hover:text-primary"
                >
                  visionmedabroad@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold text-foreground">Support</p>

                <a
                  href="tel:+916200083799"
                  className="block hover:text-primary"
                >
                  🇮🇳 +91 6200083799
                </a>

                <a
                  href="tel:+996755220903"
                  className="block hover:text-primary"
                >
                  🇰🇬 +996 755220903
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / Social / CTA */}
          <div>
            <h4 className="mb-5 text-lg font-semibold">Quick Links</h4>

            <div className="space-y-3">
              <Link href="/about" className="block hover:text-primary">
                About Us
              </Link>

              <Link href="/countries" className="block hover:text-primary">
                Study Destinations
              </Link>

              <Link href="/universities" className="block hover:text-primary">
                Universities
              </Link>

              <Link href="/contact" className="block hover:text-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full">
          <p className="text-sm font-light">
            © {new Date().getFullYear()} Vision Study MBBS Abroad Private
            Limited. All rights reserved.
          </p>
        </div>
        <div></div>
      </div>
    </footer>
  )
}
