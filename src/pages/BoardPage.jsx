import { IconMapPin, IconPhone } from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { boardMembers } from '../data/siteContent'

function BoardPage() {
  return (
    <main className="flex flex-col gap-5">
      <Card className="overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white ring-0 ring-transparent dark:border-mba-blue-soft/25 dark:bg-slate-900">
        <CardContent className="px-5 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:px-12 lg:py-12">
          <div className="max-w-4xl">
            <Badge
              variant="outline"
              className="w-fit border-mba-blue-soft/50 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep sm:text-[0.65rem] dark:border-mba-blue-soft/30 dark:bg-slate-800 dark:text-slate-50"
            >
              Board of Directors
            </Badge>
            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
              Meet Our Leadership
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400">
              Here are the dedicated leaders guiding Morongo Basin Ambulance's
              services in our mission to provide exceptional emergency medical
              care to our community.
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {boardMembers.map((member) => (
          <Card
            key={member.name}
            className="group overflow-hidden rounded-2xl border-mba-blue-soft/40 bg-white p-0 py-0 ring-0 transition hover:border-mba-gold hover:bg-linear-to-br hover:from-mba-blue-deep hover:to-mba-blue hover:shadow-lg dark:border-mba-blue-soft/25 dark:bg-slate-900 dark:hover:border-mba-gold"
          >
            <div className="grid gap-0 lg:grid-cols-[minmax(220px,280px)_1fr]">
              <div className="overflow-hidden bg-mba-blue-soft/12 dark:bg-slate-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="block aspect-4/3 w-full object-cover object-[50%_18%] lg:h-full lg:aspect-auto"
                />
              </div>

              <div className="flex flex-col gap-5 p-5 sm:p-6 lg:p-8">
                <div>
                  <CardTitle className="font-heading text-2xl leading-tight tracking-[-0.03em] text-mba-blue-deep transition-colors group-hover:text-white sm:text-3xl dark:text-slate-50">
                    {member.name}
                  </CardTitle>
                  <CardDescription className="mt-1.5 text-sm font-medium text-mba-blue transition-colors group-hover:text-mba-gold">
                    {member.role}
                  </CardDescription>
                </div>

                <Separator className="bg-mba-blue-soft/25 dark:bg-slate-700" />

                <div>
                  <Badge
                    variant="outline"
                    className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep transition-colors group-hover:bg-mba-gold group-hover:text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
                  >
                    Experience &amp; Service
                  </Badge>
                  <p className="mt-3 text-sm leading-7 text-slate-600 transition-colors group-hover:text-slate-100 sm:text-base sm:leading-8 dark:text-slate-400 dark:group-hover:text-slate-100">
                    {member.bio}
                  </p>
                </div>

                <ul className="grid gap-2 sm:grid-cols-2">
                  {member.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-lg border border-mba-blue-soft/35 bg-mba-blue-soft/12 px-4 py-3 text-sm leading-6 text-slate-600 transition-colors group-hover:border-white/15 group-hover:bg-white/10 group-hover:text-slate-100 dark:border-mba-blue-soft/20 dark:bg-slate-800/50 dark:text-slate-400 dark:group-hover:bg-white/8 dark:group-hover:text-slate-100"
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

      <Card className="overflow-hidden rounded-2xl border-mba-blue-deep bg-mba-blue-deep ring-0 ring-transparent">
        <CardContent className="px-5 py-8 sm:px-8 md:px-10">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Leadership &amp; Operations
              </Badge>
              <h2 className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl lg:text-4xl">
                Governance and operations stay connected at MBA.
              </h2>
            </div>
            <div className="space-y-2.5 text-sm text-slate-400">
              <p className="font-medium text-slate-300">
                Operations Chief, EMS Coordinator
              </p>
              <p className="flex items-start gap-2">
                <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
              </p>
              <p className="flex items-center gap-2">
                <IconPhone className="size-4 shrink-0 text-slate-500" aria-hidden />
                760-366-8474
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  )
}

export default BoardPage
