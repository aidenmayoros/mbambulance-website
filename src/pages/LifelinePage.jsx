import {
  IconArrowRight,
  IconHeart,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { PAGE_CONTAINER } from "@/lib/pageLayout";
import { cn } from "@/lib/utils";
import SectionHeader from "../components/SectionHeader";
import { lifelineImpact } from "../data/siteContent";

const donationHref =
  "https://www.paypal.com/donate?token=rEQOS90AtzhYVdsjyz_nHpcNnBj9NjrI_IPlZkmgoVHXcfWr-NSeqDeKe7tdmxzo-jh_49Ss8kB2619z";

function LifelinePage() {
  return (
    <main className="flex flex-col">
      <section className="w-full border-b border-mba-blue/20 bg-white dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12 lg:py-14")}>
          <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <div className="flex flex-col">
              <Badge
                variant="outline"
                className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep sm:text-[0.65rem] dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
              >
                Lifeline Club
              </Badge>

              <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
                Our medical crew needs your support.
              </h1>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400">
                Be a lifesaver and join the Lifeline Club. As a nonprofit
                ambulance company, MBA relies on the generosity of the community
                to keep services strong, stay prepared, and care for the people
                of the Morongo Basin when every second counts.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
                <Button
                  asChild
                  className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep hover:text-mba-gold"
                >
                  <a
                    href={donationHref}
                    className="inline-flex items-center gap-1.5"
                  >
                    <IconHeart className="size-4" aria-hidden />
                    Become a Member
                  </a>
                </Button>
              </div>
            </div>

            <aside className="self-end">
              <Card className="gap-0 overflow-hidden rounded-xl border-mba-blue/25 p-0 py-0 ring-0 dark:border-mba-blue/20">
                <img
                  src="/lifeline-community.jpg"
                  alt="Morongo Basin Ambulance community support"
                  className="aspect-4/3 w-full object-cover"
                />
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
                  >
                    What is Lifeline Club?
                  </Badge>
                  <CardDescription className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    Your monthly gift, no matter the size, helps MBA respond
                    faster, stay prepared, and care for the Morongo Basin with
                    dependable emergency services.
                  </CardDescription>
                </CardContent>
              </Card>
            </aside>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-mba-gold/30 bg-mba-tan dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12")}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Why Give Monthly"
              eyebrowClassName="bg-slate-50"
              title="Small recurring gifts help keep emergency care ready."
              titleClassName="text-mba-blue-deep! dark:text-slate-50!"
              className="max-w-2xl"
            />
            <p className="max-w-xl text-sm leading-7 text-mba-blue-deep md:text-right dark:text-slate-400">
              These impact points come directly from the staging Lifeline page
              and make the monthly-giving story much clearer than a generic
              donation ask.
            </p>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lifelineImpact.map((item) => (
              <Card
                key={item.amount}
                className="gap-0 overflow-hidden rounded-xl border-mba-gold bg-linear-to-br from-mba-blue-deep to-mba-blue p-0 py-0 shadow-lg ring-0 dark:border-mba-gold"
              >
                <div className="flex items-center justify-center bg-white/10 p-6">
                  <img
                    src={item.image}
                    alt=""
                    className="h-24 w-24 object-contain"
                  />
                </div>
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="w-fit border-mba-gold/50 bg-mba-gold text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep"
                  >
                    {item.amount}
                  </Badge>
                  <CardTitle className="mt-3 font-heading text-xl leading-tight tracking-[-0.02em] text-white sm:text-2xl">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-7 text-slate-100">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full border-b border-mba-blue/20 bg-mba-tan/30 dark:border-mba-blue/10 dark:bg-slate-950/50">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12")}>
          <div className="grid gap-4 lg:grid-cols-2">
            <Card className="gap-0 rounded-xl border-mba-blue-deep bg-mba-blue-deep p-6 py-6 ring-0 sm:p-8">
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Sign Up
              </Badge>
              <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                A nonprofit service built with community support from the
                beginning.
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
                <p>MBA started in 1948 with only volunteers.</p>
                <p>
                  Today it remains one of only two nonprofit ambulance companies
                  in California, and community support still matters because
                  public tax funding has never been part of the model.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="rounded-full bg-white px-6 font-semibold text-mba-blue-deep hover:bg-mba-blue-deep hover:text-mba-gold"
                >
                  <a
                    href={donationHref}
                    className="inline-flex items-center gap-1.5"
                  >
                    Become a Lifeline Member
                    <IconArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </Card>

            <Card className="gap-0 rounded-xl border-mba-blue/25 bg-white p-6 py-6 ring-0 sm:p-8 dark:border-mba-blue/20 dark:bg-slate-900">
              <Badge
                variant="outline"
                className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
              >
                Donate
              </Badge>
              <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-mba-blue-deep sm:text-3xl dark:text-slate-50">
                Donations help fund the equipment, technology, and vehicles MBA
                depends on.
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
                <p>
                  Donations are tax deductible, and the nonprofit EIN listed on
                  the staged page is{" "}
                  <span className="font-semibold text-slate-950 dark:text-slate-50">
                    95-6100536
                  </span>
                  .
                </p>
                <p>
                  Every dollar received from individuals and organizations in
                  the Morongo Basin supports service improvements, technology,
                  state-of-the-art medical equipment, supplies, and maintenance
                  for the five ambulances running daily across a
                  2700-square-mile area.
                </p>
              </div>
              <div className="mt-6">
                <Button
                  asChild
                  className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep hover:text-mba-gold"
                >
                  <a
                    href={donationHref}
                    className="inline-flex items-center gap-1.5"
                  >
                    Pay Securely
                    <IconArrowRight className="size-4" aria-hidden />
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LifelinePage;
