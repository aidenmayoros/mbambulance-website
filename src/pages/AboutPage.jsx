import {
  IconArrowRight,
  IconMapPin,
  IconPhone,
  IconMail,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SectionHeader from "../components/SectionHeader";
import { aboutServices, serviceArea } from "../data/siteContent";

function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <Card className="overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white ring-0 ring-transparent dark:border-mba-blue-soft/25 dark:bg-slate-900">
        <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:px-12 lg:py-12">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit border-mba-blue-soft/50 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue-soft/30 dark:bg-slate-800 dark:text-slate-50 sm:text-[0.65rem]"
            >
              About MBA
            </Badge>

            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep dark:text-slate-50 sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl">
              About Morongo Basin Ambulance
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
              Morongo Basin Ambulance is a 501(c)(3) community-based,
              non-profit, non-tax based corporation founded in 1948 by seven
              resident volunteers in Joshua Tree. MBA now responds to more than
              6,500 calls per year and covers over 2,700 square miles.
            </p>

            <Card className="mt-6 gap-0 rounded-xl border-mba-blue-deep bg-mba-blue-deep p-6 py-6 text-white ring-0 sm:mt-8">
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
            <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue-soft/40 p-0 py-0 ring-0 dark:border-mba-blue-soft/25">
              <img
                src="/about-mba.jpg"
                alt="Morongo Basin Ambulance team"
                className="aspect-4/3 w-full object-cover"
              />
              <CardContent className="p-5">
                <Badge
                  variant="outline"
                  className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
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
                className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
              >
                Coverage
              </Badge>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {serviceArea.map((place) => (
                  <Badge
                    key={place}
                    variant="outline"
                    className="border-mba-blue-soft/45 bg-white/85 text-xs font-medium text-mba-blue-deep dark:border-mba-blue-soft/30 dark:bg-slate-800/80 dark:text-slate-300"
                  >
                    {place}
                  </Badge>
                ))}
              </div>
            </Card>
          </aside>
        </div>
      </Card>

      <Card className="overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white ring-0 ring-transparent dark:border-mba-blue-soft/25 dark:bg-slate-900">
        <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <SectionHeader
                eyebrow="MBA in the Community"
                title="Community support belongs inside the broader MBA story."
                titleClassName="text-mba-blue-deep! dark:text-slate-50!"
                className="max-w-3xl"
              />

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                <p>
                  Morongo Basin Ambulance gives back to the community whenever,
                  and however it can. Serving the hi-desert communities of the
                  Morongo Basin, MBA proudly supports an annual Holiday Toy
                  Drive, community parades, fairs, events, and more.
                </p>
                <p>
                  Folding this staged community content into the About page
                  keeps the site structure tighter while still preserving what
                  the current staging site says about local involvement.
                </p>
              </div>
            </div>

            <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue-soft/40 p-0 py-0 ring-0 dark:border-mba-blue-soft/25">
              <img
                src="/about-community.jpg"
                alt="MBA in the Community"
                className="aspect-4/3 w-full object-cover"
              />
              <CardContent className="p-5 border-mba-gold/30 bg-mba-tan/50 dark:bg-mba-tan/10">
                <CardTitle className="text-sm font-semibold text-mba-blue-deep dark:text-slate-50">
                  Community highlights
                </CardTitle>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {[
                    "Annual Holiday Toy Drive support",
                    "Participation in community parades and fairs",
                    "Visible presence at local events across the Morongo Basin",
                  ].map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-mba-blue-soft/45 bg-white/85 text-xs font-medium text-mba-blue-deep dark:border-mba-blue-soft/30 dark:bg-slate-800/80 dark:text-slate-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card
        id="services"
        className="overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white ring-0 ring-transparent dark:border-mba-blue-soft/25 dark:bg-slate-900"
      >
        <CardContent className="px-5 pt-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid gap-4">
            {aboutServices.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="scroll-mt-28 overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white ring-0 ring-transparent dark:border-mba-blue-soft/25 dark:bg-slate-900"
              >
                <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
                  <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(320px,360px)_minmax(0,1fr)] lg:gap-10">
                    <Card className="h-full gap-0 overflow-hidden rounded-xl border-mba-blue-soft/40 p-0 py-0 ring-0 dark:border-mba-blue-soft/25">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full min-h-[280px] w-full object-cover sm:min-h-[320px]"
                      />
                    </Card>

                    <div className="min-w-0 flex h-full flex-col justify-center">
                      <SectionHeader
                        eyebrow={service.eyebrow}
                        title={service.title}
                        titleClassName="text-mba-blue-deep dark:text-slate-50"
                        className="max-w-3xl"
                      />

                      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                        <p>{service.description}</p>
                      </div>

                      {service.cta ? (
                        <div className="mt-5">
                          <Button
                            asChild
                            className="rounded-full bg-mba-blue font-semibold text-white hover:bg-mba-blue-deep hover:text-mba-gold"
                          >
                            <a
                              href={service.cta.href}
                              className="inline-flex items-center gap-1.5"
                            >
                              {service.cta.label}
                              <IconArrowRight className="size-4" aria-hidden />
                            </a>
                          </Button>
                        </div>
                      ) : null}

                      <Separator className="my-5 bg-mba-blue-soft/25 dark:bg-slate-700" />

                      <div className="flex flex-wrap gap-1.5">
                        {service.details.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="h-auto whitespace-normal border-mba-blue-soft/45 bg-white/85 px-2.5 py-1 text-left text-xs leading-5 font-medium text-mba-blue-deep dark:border-mba-blue-soft/30 dark:bg-slate-800/80 dark:text-slate-300"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="overflow-hidden rounded-2xl border-mba-blue-deep bg-mba-blue-deep ring-0 ring-transparent">
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
                <IconMapPin
                  className="mt-0.5 size-4 shrink-0 text-slate-500"
                  aria-hidden
                />
                6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
              </p>
              <p className="flex items-center gap-2">
                <IconPhone
                  className="size-4 shrink-0 text-slate-500"
                  aria-hidden
                />
                760-366-8474
              </p>
              <p className="flex items-center gap-2">
                <IconMail
                  className="size-4 shrink-0 text-slate-500"
                  aria-hidden
                />
                cbell@mbambulance.org
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}

export default AboutPage;
