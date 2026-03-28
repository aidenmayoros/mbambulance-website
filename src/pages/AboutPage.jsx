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
import { PAGE_CONTAINER } from "@/lib/pageLayout";
import { cn } from "@/lib/utils";
import SectionHeader from "../components/SectionHeader";
import { aboutServices, serviceArea } from "../data/siteContent";

const aboutContactLinkClass =
  "text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40";

const ABOUT_PHONE_TEL = "tel:+17603668474";
const ABOUT_EMAIL_MAILTO = "mailto:cbell@mbambulance.org";
const ABOUT_ADDRESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "6335 Park Blvd, Joshua Tree, CA 92252",
)}`;

function AboutPage() {
  return (
    <main className="flex flex-col">
      <section className="w-full border-b border-mba-blue/20 bg-white dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12 lg:py-14")}>
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
            <div className="flex flex-col">
              <Badge
                variant="outline"
                className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50 sm:text-[0.65rem]"
              >
                About MBA
              </Badge>

              <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep dark:text-slate-50 sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl">
                About Morongo Basin Ambulance
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
                Morongo Basin Ambulance is a 501(c)(3) community-based,
                non-profit, non-tax based corporation founded in 1948 by seven
                resident volunteers in Joshua Tree. MBA now responds to more
                than 6,500 calls per year and covers over 2,700 square miles.
              </p>

              <Card className="mt-6 gap-0 rounded-xl border-mba-blue-deep bg-mba-blue-deep p-6 py-6 text-white ring-0 sm:mt-8">
                <Badge
                  variant="outline"
                  className="w-fit border-white/20 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
                >
                  Our Mission
                </Badge>
                <p className="mt-4 text-sm leading-8 text-blue-50/90">
                  "Our responsibility is to the members of the communities that
                  we serve. We strive to be a model of excellence within the EMS
                  system, through outstanding performance and commitment."
                </p>
              </Card>
            </div>

            <aside className="grid gap-4 self-end">
              <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue/25 p-0 py-0 ring-0 dark:border-mba-blue/20">
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
                    in the early 1970s, and progressed into Advanced Life
                    Support services by the early 1980s.
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

      <section className="w-full border-b border-mba-blue/20 bg-mba-blue/12 dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12")}>
          <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr] lg:gap-10">
            <div>
              <SectionHeader
                eyebrow="MBA in the Community"
                eyebrowClassName="bg-slate-50 border-mba-gold"
                title="Community support belongs inside the broader MBA story."
                titleClassName="text-white dark:text-slate-50!"
                className="max-w-3xl"
              />

              <div className="mt-5 space-y-4 text-base leading-8 text-slate-50 dark:text-slate-400">
                <p>
                  Morongo Basin Ambulance gives back to the community whenever,
                  and however it can. Serving the hi-desert communities of the
                  Morongo Basin, MBA proudly supports an annual Holiday Toy
                  Drive, community parades, fairs, events, and more.
                </p>
              </div>
            </div>

            <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue/25 p-0 py-0 ring-0 dark:border-mba-blue/20">
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
                      className="border-mba-blue/30 bg-white/85 text-xs font-medium text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800/80 dark:text-slate-300"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="w-full border-b border-mba-blue/20 bg-mba-tan dark:border-mba-blue/10 dark:bg-slate-900"
      >
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12")}>
          <div className="grid gap-4">
            {aboutServices.map((service) => (
              <Card
                key={service.id}
                id={service.id}
                className="scroll-mt-28 overflow-hidden rounded-2xl border-mba-blue/25 bg-mba-tan ring-0 ring-transparent dark:border-mba-blue/20 dark:bg-slate-900"
              >
                <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10">
                  <div className="grid items-stretch gap-6 lg:grid-cols-[minmax(320px,360px)_minmax(0,1fr)] lg:gap-10">
                    <Card className="h-full gap-0 overflow-hidden rounded-xl border-mba-blue/25 p-0 py-0 ring-0 dark:border-mba-blue/20">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full min-h-70 w-full object-cover sm:min-h-80"
                      />
                    </Card>

                    <div className="min-w-0 flex h-full flex-col justify-center">
                      <SectionHeader
                        eyebrow={service.eyebrow}
                        eyebrowClassName="border-mba-blue/30 bg-white/85 px-2.5 py-1 text-left text-xs leading-5 font-medium text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800/80 dark:text-slate-300"
                        title={service.title}
                        titleClassName="text-mba-blue-deep! dark:text-slate-50!"
                        className="max-w-3xl"
                      />

                      <div className="mt-5 space-y-4 text-base leading-8 text-slate-600 dark:text-slate-400">
                        <p
                          dangerouslySetInnerHTML={{
                            __html: service.description,
                          }}
                        />
                      </div>

                      {service.cta ? (
                        <div className="mt-5">
                          <Button
                            asChild
                            className="rounded-full bg-mba-blue font-semibold text-white hover:bg-mba-blue-deep! hover:text-mba-gold"
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

                      <Separator className="my-5 bg-mba-blue/20 dark:bg-slate-700" />

                      <div className="flex flex-wrap gap-1.5">
                        {service.details.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="h-auto cursor-default whitespace-normal border-mba-blue/30 bg-white/85 px-2.5 py-1 text-left text-xs leading-5 font-medium text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800/80 dark:text-slate-300"
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
        </div>
      </section>

      <section className="w-full bg-mba-blue-deep">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12")}>
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
                <a
                  href={ABOUT_ADDRESS_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    aboutContactLinkClass,
                    "wrap-break-word underline-offset-2 hover:underline",
                  )}
                >
                  6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconPhone
                  className="size-4 shrink-0 text-slate-500"
                  aria-hidden
                />
                <a
                  href={ABOUT_PHONE_TEL}
                  className={cn(
                    aboutContactLinkClass,
                    "underline-offset-2 hover:underline",
                  )}
                >
                  760-366-8474
                </a>
              </p>
              <p className="flex items-center gap-2">
                <IconMail
                  className="size-4 shrink-0 text-slate-500"
                  aria-hidden
                />
                <a
                  href={ABOUT_EMAIL_MAILTO}
                  className={cn(
                    aboutContactLinkClass,
                    "underline-offset-2 hover:underline",
                  )}
                >
                  cbell@mbambulance.org
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
