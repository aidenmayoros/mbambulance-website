import { IconArrowRight, IconMapPin, IconPhone, IconMail } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import SectionHeader from '../components/SectionHeader'
import { aboutServices, serviceArea } from '../data/siteContent'

function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <Card className="overflow-hidden rounded-2xl border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 ring-0 ring-transparent">
        <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-12">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue sm:text-[0.65rem]"
            >
              About MBA
            </Badge>

            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-slate-950 dark:text-slate-50 sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl">
              About Morongo Basin Ambulance
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
              Morongo Basin Ambulance is a 501(c)(3) community-based,
              non-profit, non-tax based corporation founded in 1948 by seven
              resident volunteers in Joshua Tree. MBA now responds to more than
              6,500 calls per year and covers over 2,700 square miles.
            </p>

            <Card className="mt-6 gap-0 rounded-xl border-mba-blue bg-mba-blue p-6 py-6 text-white ring-0 sm:mt-8">
              <Badge
                variant="outline"
                className="w-fit border-white/20 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Our Mission
              </Badge>
              <p className="mt-4 text-sm leading-8 text-blue-50/90">
                "Our responsibility is to the members of the communities that we
                serve. We strive to be a model of excellence within the EMS
                system, through outstanding performance and commitment."
              </p>
            </Card>
          </div>

          <aside className="grid gap-4 self-end">
            <Card className="gap-0 overflow-hidden rounded-xl border-slate-200/80 dark:border-slate-700 p-0 py-0 ring-0">
              <img
                src="/about-mba.jpg"
                alt="Morongo Basin Ambulance team"
                className="aspect-4/3 w-full object-cover"
              />
              <CardContent className="p-5">
                <Badge
                  variant="outline"
                  className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white dark:bg-slate-800 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red"
                >
                  Serving the Hi-Desert
                </Badge>
                <CardDescription className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  MBA grew with the needs of the community, added EMT staffing
                  in the early 1970s, and progressed into Advanced Life Support
                  services by the early 1980s.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="gap-0 rounded-xl border-mba-gold/30 bg-mba-tan/50 dark:bg-mba-tan/10 p-6 py-6 ring-0">
              <Badge
                variant="outline"
                className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white dark:bg-slate-800 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red"
              >
                Coverage
              </Badge>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {serviceArea.map((place) => (
                  <Badge
                    key={place}
                    variant="outline"
                    className="border-mba-gold/50 dark:border-mba-gold/30 bg-white/80 dark:bg-slate-800/80 text-xs font-medium text-slate-700 dark:text-slate-300"
                  >
                    {place}
                  </Badge>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </Card>

      <Card className="overflow-hidden rounded-2xl border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 ring-0 ring-transparent">
        <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <SectionHeader
                eyebrow="MBA in the Community"
                title="Community support belongs inside the broader MBA story."
                className="max-w-3xl"
              />
              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                <p>
                  Morongo Basin Ambulance gives back to the community whenever, and
                  however it can. Serving the hi-desert communities of the Morongo
                  Basin, MBA proudly supports an annual Holiday Toy Drive, community
                  parades, fairs, events, and more.
                </p>
                <p>
                  Folding this staged community content into the About page keeps
                  the site structure tighter while still preserving what the current
                  staging site says about local involvement.
                </p>
              </div>
            </div>

            <Card className="gap-0 overflow-hidden rounded-xl border-slate-200/80 dark:border-slate-700 p-0 py-0 ring-0">
              <img
                src="/about-community.jpg"
                alt="MBA in the Community"
                className="aspect-4/3 w-full object-cover"
              />
              <CardContent className="p-5">
                <CardTitle className="text-sm font-semibold text-slate-950 dark:text-slate-50">
                  Community highlights
                </CardTitle>
                <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  <li>Annual Holiday Toy Drive support</li>
                  <li>Participation in community parades and fairs</li>
                  <li>Visible presence at local events across the Morongo Basin</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card
        id="services"
        className="overflow-hidden rounded-2xl border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-900 ring-0 ring-transparent"
      >
        <CardHeader className="px-5 pt-6 pb-0 sm:px-8 sm:pt-8 md:px-10">
          <SectionHeader eyebrow="Services and Training" className="max-w-2xl" />
        </CardHeader>

        <CardContent className="px-5 pt-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid gap-4">
            {aboutServices.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="scroll-mt-28 gap-0 overflow-hidden rounded-xl border-slate-200/80 dark:border-slate-700 bg-white dark:bg-slate-800 p-0 py-0 ring-0"
              >
                <div className="grid gap-0 lg:grid-cols-[minmax(220px,260px)_1fr]">
                  <div className="overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="aspect-4/3 w-full object-cover lg:h-full lg:aspect-auto"
                    />
                  </div>

                  <div className="flex flex-col gap-5 p-5 sm:p-6">
                    <div>
                      <Badge
                        variant="outline"
                        className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white dark:bg-slate-800 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red"
                      >
                        {service.eyebrow}
                      </Badge>
                      <h3 className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950 dark:text-slate-50 sm:text-3xl">
                        {service.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-base sm:leading-8">
                        {service.description}
                      </p>
                      {service.cta ? (
                        <div className="mt-4">
                          <Button
                            asChild
                            className="rounded-full bg-mba-blue font-semibold text-white hover:bg-mba-blue-deep"
                          >
                            <a href={service.cta.href} className="inline-flex items-center gap-1.5">
                              {service.cta.label}
                              <IconArrowRight className="size-4" aria-hidden />
                            </a>
                          </Button>
                        </div>
                      ) : null}
                    </div>

                    <Separator className="bg-slate-100 dark:bg-slate-700" />

                    <ul className="grid gap-2 sm:grid-cols-2">
                      {service.details.map((item) => (
                        <li
                          key={item}
                          className="rounded-lg border border-slate-200/80 dark:border-slate-700 bg-slate-50/80 dark:bg-slate-700/40 px-4 py-3 text-sm leading-6 text-slate-600 dark:text-slate-400"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-2xl border-slate-800 bg-slate-950 ring-0 ring-transparent">
        <CardContent className="px-5 py-8 sm:px-8 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Contact
              </Badge>
              <h2 className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Questions about services, training, or transport?
              </h2>
            </div>
            <div className="space-y-2.5 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="size-4 shrink-0 text-slate-500" aria-hidden />
                760-366-8474
              </p>
              <p className="flex items-center gap-2">
                <IconMail className="size-4 shrink-0 text-slate-500" aria-hidden />
                cbell@mbambulance.org
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default AboutPage
