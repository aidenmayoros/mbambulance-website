import { IconArrowRight, IconHeart, IconMapPin, IconPhone } from '@tabler/icons-react'

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
import { lifelineImpact } from '../data/siteContent'

const donationHref =
  'https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW'

function LifelinePage() {
  return (
    <main className="flex flex-col gap-5">
      <Card className="overflow-hidden rounded-2xl border-slate-200/80 bg-white ring-0 ring-transparent dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-12 lg:py-12">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red sm:text-[0.65rem] dark:bg-slate-800"
            >
              Lifeline Club
            </Badge>

            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-slate-950 sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
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
                className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep"
              >
                <a href={donationHref} className="inline-flex items-center gap-1.5">
                  <IconHeart className="size-4" aria-hidden />
                  Become a Member
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-mba-red/30 px-6 font-semibold text-mba-red hover:border-mba-red hover:bg-mba-red hover:text-white"
              >
                <a href={donationHref}>Donate Today</a>
              </Button>
            </div>
          </div>

          <aside className="self-end">
            <Card className="gap-0 overflow-hidden rounded-xl border-slate-200/80 p-0 py-0 ring-0 dark:border-slate-700">
              <img
                src="/lifeline-community.jpg"
                alt="Morongo Basin Ambulance community support"
                className="aspect-4/3 w-full object-cover"
              />
              <CardContent className="p-5">
                <Badge
                  variant="outline"
                  className="w-fit border-slate-200 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue dark:border-slate-700 dark:bg-slate-800"
                >
                  What is Lifeline Club?
                </Badge>
                <CardDescription className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                  Your monthly gift, no matter the size, helps MBA respond faster,
                  stay prepared, and care for the Morongo Basin with dependable
                  emergency services.
                </CardDescription>
              </CardContent>
            </Card>
          </aside>
        </div>
      </Card>

      <Card className="overflow-hidden rounded-2xl border-slate-200/80 bg-white ring-0 ring-transparent dark:border-slate-700 dark:bg-slate-900">
        <CardHeader className="px-5 pt-6 pb-0 sm:px-8 sm:pt-8 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Why Give Monthly"
              title="Small recurring gifts help keep emergency care ready."
              className="max-w-2xl"
            />
            <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right dark:text-slate-400">
              These impact points come directly from the staging Lifeline page and
              make the monthly-giving story much clearer than a generic donation ask.
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-5 pt-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {lifelineImpact.map((item) => (
              <Card
                key={item.amount}
                className="gap-0 overflow-hidden rounded-xl border-slate-200/80 bg-white p-0 py-0 ring-0 dark:border-slate-700 dark:bg-slate-900"
              >
                <div className="flex items-center justify-center bg-mba-tan/40 p-6 dark:bg-mba-tan/10">
                  <img src={item.image} alt="" className="h-24 w-24 object-contain" />
                </div>
                <CardContent className="p-5">
                  <Badge
                    variant="outline"
                    className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red dark:bg-slate-800"
                  >
                    {item.amount}
                  </Badge>
                  <CardTitle className="mt-3 font-heading text-xl leading-tight tracking-[-0.02em] text-slate-950 sm:text-2xl dark:text-slate-50">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="gap-0 rounded-2xl border-slate-800 bg-slate-950 p-6 py-6 ring-0 sm:p-8">
          <Badge
            variant="outline"
            className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
          >
            Sign Up
          </Badge>
          <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl">
            A nonprofit service built with community support from the beginning.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            <p>MBA started in 1948 with only volunteers.</p>
            <p>
              Today it remains one of only two nonprofit ambulance companies in
              California, and community support still matters because public tax
              funding has never been part of the model.
            </p>
          </div>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full bg-white px-6 font-semibold text-slate-900 hover:bg-slate-100"
            >
              <a href={donationHref} className="inline-flex items-center gap-1.5">
                Become a Lifeline Member
                <IconArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </Card>

        <Card className="gap-0 rounded-2xl border-slate-200/80 bg-white p-6 py-6 ring-0 sm:p-8 dark:border-slate-700 dark:bg-slate-900">
          <Badge
            variant="outline"
            className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red dark:bg-slate-800"
          >
            Donate
          </Badge>
          <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl dark:text-slate-50">
            Donations help fund the equipment, technology, and vehicles MBA depends on.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
            <p>
              The staging page explains that rising costs in supplies, communications,
              maintenance, and operations make donor support directly meaningful.
            </p>
            <p>
              Donations are tax deductible, and the nonprofit EIN listed on the
              staged page is <span className="font-semibold text-slate-950 dark:text-slate-50">95-6100536</span>.
            </p>
            <p>
              Every dollar received from individuals and organizations in the
              Morongo Basin supports service improvements, technology,
              state-of-the-art medical equipment, supplies, and maintenance for
              the five ambulances running daily across a 2700-square-mile area.
            </p>
          </div>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full bg-mba-red px-6 font-semibold text-white hover:bg-red-700"
            >
              <a href={donationHref} className="inline-flex items-center gap-1.5">
                Pay Securely
                <IconArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </Card>
      </div>

      <Card className="overflow-hidden rounded-2xl border-slate-200/80 bg-white ring-0 ring-transparent dark:border-slate-700 dark:bg-slate-900">
        <CardContent className="px-5 py-8 sm:px-8 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Badge
                variant="outline"
                className="w-fit border-slate-200 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue dark:border-slate-700 dark:bg-slate-800"
              >
                Contact MBA
              </Badge>
              <h2 className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-4xl dark:text-slate-50">
                Questions about giving or monthly support?
              </h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
                The staged page closes by thanking supporters and directing
                visitors to contact MBA for more information.
              </p>
            </div>
            <div className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <p className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-400 dark:text-slate-500" aria-hidden />
                6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="size-4 shrink-0 text-slate-400 dark:text-slate-500" aria-hidden />
                760-366-8474
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default LifelinePage
