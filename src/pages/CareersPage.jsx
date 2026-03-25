import { IconArrowRight, IconMapPin, IconPhone } from '@tabler/icons-react'

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
import { careersRoles } from '../data/siteContent'

function CareersPage() {
  return (
    <main className="flex flex-col gap-5">
      <Card className="overflow-hidden rounded-2xl border-slate-200/80 bg-white ring-0 ring-transparent dark:border-slate-700 dark:bg-slate-900">
        <div className="grid gap-6 px-5 py-6 sm:gap-8 sm:px-8 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:px-12 lg:py-12">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit border-slate-200 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue sm:text-[0.65rem] dark:border-slate-700 dark:bg-slate-800"
            >
              Careers with MBA
            </Badge>

            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-slate-950 sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
              Careers at Morongo Basin Ambulance
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400">
              Morongo Basin Ambulance employs full time and part time
              Paramedics, EMTs, CCT RNs, and Communications Operators. The
              organization also offers limited positions in its Reserve program,
              plus early experience opportunities for local high school students
              through the Explorer program.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row">
              <Button
                asChild
                className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep"
              >
                <a href="https://www.cognitoforms.com/MorongoBasinAmbulance1/EmploymentApplication">
                  Apply Now
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-200 px-6 font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <a href="#open-roles">View Open Roles</a>
              </Button>
            </div>
          </div>

          <aside className="grid gap-4 self-end">
            <Card className="gap-0 rounded-xl border-slate-800 bg-slate-950 p-6 py-6 ring-0">
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Why Work Here
              </Badge>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Nonprofit mission and local community impact</li>
                <li>Emergency response, transport, and critical care opportunities</li>
                <li>Pathways for field staff, communications, reserve, and youth exploration</li>
              </ul>
            </Card>

            <Card className="gap-0 rounded-xl border-slate-200/80 bg-white p-6 py-6 ring-0 dark:border-slate-700 dark:bg-slate-900">
              <Badge
                variant="outline"
                className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red dark:bg-slate-800"
              >
                Contact
              </Badge>
              <div className="mt-4 space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
                <p className="flex items-start gap-2">
                  <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-400 dark:text-slate-500" aria-hidden />
                  6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="size-4 shrink-0 text-slate-400 dark:text-slate-500" aria-hidden />
                  760-366-8474
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Use the online application to submit for current and future openings.
                </p>
              </div>
            </Card>
          </aside>
        </div>
      </Card>

      <Card
        id="open-roles"
        className="overflow-hidden rounded-2xl border-slate-200/80 bg-white ring-0 ring-transparent dark:border-slate-700 dark:bg-slate-900"
      >
        <CardHeader className="px-5 pt-6 pb-0 sm:px-8 sm:pt-8 md:px-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Open Roles"
              title="Current job categories"
              className="max-w-2xl"
            />
            <p className="max-w-xl text-sm leading-7 text-slate-500 md:text-right dark:text-slate-400">
              Take a look at our current job openings and see where you could make
              an impact with Morongo Basin Ambulance.
            </p>
          </div>
        </CardHeader>

        <CardContent className="px-5 pt-6 pb-6 sm:px-8 sm:pb-8 md:px-10 md:pb-10">
          <div className="grid gap-4 xl:grid-cols-2">
            {careersRoles.map((role) => (
              <Card
                key={role.title}
                className="gap-0 overflow-hidden rounded-xl border-slate-200/80 bg-white p-0 py-0 ring-0 dark:border-slate-700 dark:bg-slate-900"
              >
                <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
                  {role.tone === 'red' ? (
                    <Badge
                      variant="outline"
                      className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-mba-red/5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mba-red dark:bg-mba-red/10"
                    >
                      Not Currently Hiring — Applications Accepted
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="w-fit border-slate-200 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mba-blue dark:border-slate-700 dark:bg-slate-800"
                    >
                      Career Path
                    </Badge>
                  )}
                  <CardTitle className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl dark:text-slate-50">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {role.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-4 sm:p-6 sm:pt-4">
                  <Separator className="mb-4 bg-slate-100 dark:bg-slate-700" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Basic Requirements
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {role.requirements.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-slate-200/80 bg-slate-50/80 px-4 py-3 text-sm leading-6 text-slate-600 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4 lg:grid-cols-2">
        <Card className="gap-0 rounded-2xl border-slate-200/80 bg-slate-50/80 p-6 py-6 ring-0 sm:p-8 dark:border-slate-700 dark:bg-slate-800/50">
          <Badge
            variant="outline"
            className="w-fit border-mba-red/20 dark:border-mba-red/30 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-red dark:bg-slate-800"
          >
            Reserve &amp; Explorer
          </Badge>
          <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl dark:text-slate-50">
            MBA also creates ways to build experience before a full-time role.
          </h2>
          <div className="mt-4 space-y-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
            <p>
              The current careers page mentions a limited number of positions in
              the Reserve program for people who want to gain experience in the
              field.
            </p>
            <p>
              Local high school youth can also get involved through the Explorer
              program, which makes this page feel bigger than just a job board.
            </p>
          </div>
        </Card>

        <Card className="gap-0 rounded-2xl border-slate-800 bg-slate-950 p-6 py-6 ring-0 sm:p-8">
          <Badge
            variant="outline"
            className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
          >
            Apply
          </Badge>
          <h2 className="mt-4 font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl">
            Submit an application for current openings or future consideration.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            MBA's current careers page uses a Cognito Forms application. Keeping
            that as the first CTA is the easiest way to make this page useful
            right away while we continue rebuilding the rest of the site.
          </p>
          <div className="mt-6">
            <Button
              asChild
              className="rounded-full bg-white px-6 font-semibold text-slate-900 hover:bg-slate-100"
            >
              <a
                href="https://www.cognitoforms.com/MorongoBasinAmbulance1/EmploymentApplication"
                className="inline-flex items-center gap-1.5"
              >
                Open Employment Application
                <IconArrowRight className="size-4" aria-hidden />
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </main>
  )
}

export default CareersPage
