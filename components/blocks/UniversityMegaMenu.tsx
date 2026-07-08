import Link from "next/link"
import Image from "next/image"

interface UniversityMegaMenuProps {
  countries: Country[]
}

export default function UniversityMegaMenu({
  countries,
}: UniversityMegaMenuProps) {
  return (
    <>
      <h3 className="text-2xl font-semibold text-orange-500">
        All universities at a glance
      </h3>

      <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-3">
        {countries.map((country) => (
          <div key={country.id}>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src={country.flag}
                alt={country.name}
                width={22}
                height={22}
                loading="lazy"
                className="w-auto"
              />

              <h4 className="text-md font-semibold text-foreground">
                MBBS in {country.name}
              </h4>
            </div>

            <ul className="space-y-3">
              {country.universities.map((university) => (
                <li key={university.slug}>
                  <Link
                    href={`/mbbs-in-${country.slug}/${university.slug}`}
                    className="text-sm text-foreground transition-colors hover:text-muted-foreground"
                  >
                    {university.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
