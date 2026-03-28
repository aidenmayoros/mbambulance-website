import { IconArrowRight } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PAGE_CONTAINER } from "@/lib/pageLayout";
import { cn } from "@/lib/utils";
import { serviceArea, serviceLinks } from "../data/siteContent";

function HomePage() {
  return (
    <main className="flex flex-col">
      <section className="w-full border-b border-mba-blue/20 bg-white dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12 lg:py-14")}>
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.3fr_.7fr] lg:gap-10">
            <div className="flex flex-col">
              <Badge
                variant="outline"
                className="h-auto max-w-full whitespace-normal border-mba-blue/35 bg-mba-tan/50 px-2.5 py-1 text-left text-[0.6rem] leading-5 font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50 sm:w-fit sm:text-[0.65rem]"
              >
                9-1-1 Emergency &amp; Non-Emergency Medical Transport
              </Badge>

              <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep dark:text-slate-50 sm:mt-6 sm:text-6xl sm:leading-[0.94] lg:text-7xl">
                Morongo Basin Ambulance
              </h1>

              <div className="mt-4 max-w-xl space-y-4 text-[0.95rem] leading-7 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-base sm:leading-8">
                <p className="sm:hidden">
                  Morongo Basin Ambulance provides 9-1-1 emergency and
                  non-emergency medical transportation across multiple desert
                  communities in San Bernardino County.
                </p>
                <p className="hidden sm:block">
                  Morongo Basin Ambulance provides 9-1-1 emergency and
                  non-emergency medical transportation across multiple
                  communities in San Bernardino County.
                </p>
                <p className="hidden sm:block">
                  Founded in 1948 as a non-tax based, non-profit corporation,
                  MBA is the sole provider of 9-1-1 emergency ambulance services
                  to much of the Morongo Basin, including Joshua Tree National
                  Park.
                </p>
                <p className="hidden sm:block">
                  Revenue above operating costs is put back into the company and
                  the communities it serves, with care centered on service
                  rather than maximizing profit.
                </p>
              </div>

              <div className="mt-6 sm:mt-8">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep! hover:text-mba-gold"
                >
                  <a href="#services">View Ambulance Services</a>
                </Button>
              </div>

              <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-3">
                <Card className="gap-0 rounded-xl border-mba-blue/30 bg-mba-blue/10 p-4 py-4 ring-0 dark:border-mba-blue/20 dark:bg-mba-blue/8">
                  <CardTitle className="text-sm font-semibold text-mba-blue-deep dark:text-slate-50">
                    Founded in 1948
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Longstanding local service
                  </CardDescription>
                </Card>
                <Card className="gap-0 rounded-xl border-mba-red/10 bg-mba-red/3 dark:bg-mba-red/10 p-4 py-4 ring-0">
                  <CardTitle className="text-sm font-semibold text-mba-blue-deep dark:text-slate-50">
                    501(c)(3) nonprofit
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Revenue reinvested locally
                  </CardDescription>
                </Card>
                <Card className="gap-0 rounded-xl border-mba-gold/30 bg-mba-tan/50 dark:bg-mba-tan/10 p-4 py-4 ring-0">
                  <CardTitle className="text-sm font-semibold text-mba-blue-deep dark:text-slate-50">
                    Desert service area
                  </CardTitle>
                  <CardDescription className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Communities plus the national park
                  </CardDescription>
                </Card>
              </div>

              <Card className="mt-6 gap-0 rounded-xl border-mba-blue/25 bg-white p-5 py-5 ring-0 dark:border-mba-blue/20 dark:bg-slate-900 sm:mt-8">
                <Badge
                  variant="outline"
                  className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
                >
                  About MBA
                </Badge>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400 sm:text-[0.95rem] sm:leading-8">
                  Morongo Basin Ambulance is a non-tax based nonprofit focused
                  on emergency response, non-emergency transport, community
                  support, and reinvesting back into the hi-desert communities
                  it serves.
                </p>
              </Card>
            </div>

            <aside className="grid gap-4 self-end">
              <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue/25 p-0 py-0 ring-0 dark:border-mba-blue/20">
                <img
                  src="/mba-crew.jpg"
                  alt="Morongo Basin Ambulance crew"
                  className="w-full object-center lg:aspect-square"
                />
              </Card>

              <Card className="gap-0 rounded-xl border-mba-gold/30 bg-mba-blue/10 dark:bg-mba-tan/10 p-6 py-6 ring-0">
                <Badge
                  variant="outline"
                  className="w-fit border-mba-blue/40 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
                >
                  Service Area
                </Badge>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  MBA serves communities across the Morongo Basin and Joshua
                  Tree National Park while operating as a nonprofit built around
                  care, local trust, and service rather than profit
                  maximization.
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {serviceArea.map((place) => (
                    <Badge
                      key={place}
                      variant="outline"
                      className="border-mba-blue/30 bg-white/85 text-xs font-medium text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800/80 dark:text-slate-300"
                    >
                      {place}
                    </Badge>
                  ))}
                </div>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="w-full border-b border-mba-gold/30 bg-mba-tan dark:border-mba-blue/10 dark:bg-slate-900"
      >
        <div className={cn(PAGE_CONTAINER, "py-8 pb-10 md:pb-12")}>
          <Badge
            variant="outline"
            className="w-fit border-mba-blue/35 bg-slate-50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800/80 dark:text-slate-300 sm:text-[0.65rem]"
          >
            Ambulance Services
          </Badge>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {serviceLinks.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group block no-underline"
              >
                <Card className="h-full gap-0 rounded-xl border-mba-blue/25 bg-white p-0 py-0 ring-0 transition hover:border-mba-gold hover:bg-linear-to-br hover:from-mba-blue-deep hover:to-mba-blue hover:shadow-lg dark:border-mba-blue/20 dark:bg-slate-900 dark:hover:border-mba-gold">
                  <CardHeader className="p-5 pb-0">
                    <CardTitle className="mt-4 font-heading text-xl leading-tight tracking-[-0.02em] text-mba-blue-deep transition-colors group-hover:text-white dark:text-slate-50 sm:text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col justify-between gap-4 p-5 pt-3">
                    <CardDescription className="text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-100 dark:text-slate-400 dark:group-hover:text-slate-100">
                      {service.description}
                    </CardDescription>
                    <span className="inline-flex w-fit items-center gap-1 rounded-full border border-mba-blue/30 bg-white/80 px-3 py-1.5 text-sm font-medium text-mba-blue transition-colors group-hover:border-mba-gold group-hover:bg-mba-blue-deep/20 group-hover:text-mba-gold dark:border-mba-blue/20 dark:bg-slate-900/60">
                      Learn more
                      <IconArrowRight
                        className="size-3.5 transition-transform group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomePage;
