import { IconArrowRight, IconMapPin, IconPhone } from "@tabler/icons-react";

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
import { careersRoles } from "../data/siteContent";

function CareersPage() {
  return (
    <main className="flex flex-col">
      <section className="w-full border-b border-mba-blue/20 bg-white dark:border-mba-blue/10 dark:bg-slate-900">
        <div
          className={cn(
            PAGE_CONTAINER,
            "py-8 sm:py-10 md:py-12 lg:py-14",
          )}
        >
        <div className="grid gap-6 sm:gap-8 md:gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="flex flex-col">
            <Badge
              variant="outline"
              className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep sm:text-[0.65rem] dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
            >
              Careers with MBA
            </Badge>

            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
              Careers at Morongo Basin Ambulance
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400">
              Morongo Basin Ambulance employs full time and part time
              Paramedics, EMTs, CCT RNs, and Communications Operators. The
              organization also offers limited positions in its Reserve program,
              plus early experience opportunities for local high school students
              through the Explorer program.
            </p>
          </div>

          <aside className="grid gap-4 self-end">
            <Card className="gap-0 rounded-xl border-mba-blue-deep bg-mba-blue-deep p-6 py-6 ring-0">
              <Badge
                variant="outline"
                className="w-fit border-white/15 bg-white/10 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-gold"
              >
                Why Work Here
              </Badge>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                <li>Nonprofit mission and local community impact</li>
                <li>
                  Emergency response, transport, and critical care opportunities
                </li>
                <li>
                  Pathways for field staff, communications, reserve, and youth
                  exploration
                </li>
              </ul>
            </Card>

            <Card className="gap-0 rounded-xl border-mba-blue/25 bg-mba-blue/12 p-6 py-6 ring-0 dark:border-mba-blue/20 dark:bg-slate-900">
              <Badge
                variant="outline"
                className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
              >
                Contact
              </Badge>
              <div className="mt-4 space-y-2.5 text-sm text-slate-50 dark:text-slate-400">
                <p className="flex items-start gap-2">
                  <IconMapPin
                    className="mt-0.5 size-4 shrink-0 text-slate-50 dark:text-slate-500"
                    aria-hidden
                  />
                  6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone
                    className="size-4 shrink-0 text-slate-50 dark:text-slate-500"
                    aria-hidden
                  />
                  760-366-8474
                </p>
                <p className="text-slate-50 dark:text-slate-400">
                  Use the online application to submit for current and future
                  openings.
                </p>
              </div>
            </Card>
          </aside>
        </div>
        </div>
      </section>

      <section
        id="open-roles"
        className="w-full border-b border-mba-blue/20 bg-mba-tan dark:border-mba-blue/10 dark:bg-slate-900"
      >
        <div className={cn(PAGE_CONTAINER, "pb-10 pt-8 sm:pb-12 sm:pt-10 md:pt-12")}>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Open Roles"
              eyebrowClassName="bg-slate-50"
              title="Current job categories"
              titleClassName="text-mba-blue-deep! dark:text-slate-50!"
              className="max-w-2xl"
            />
            <p className="max-w-xl text-sm leading-7 text-mba-blue-deep md:text-right dark:text-slate-400">
              Take a look at our current job openings and see where you could
              make an impact with Morongo Basin Ambulance.
            </p>
          </div>

          <div className="mt-6 grid gap-4 xl:grid-cols-2">
            {careersRoles.map((role) => (
              <Card
                key={role.title}
                className="gap-0 overflow-hidden rounded-xl border-mba-blue/25 bg-white p-0 py-0 ring-0 transition hover:shadow-lg dark:border-mba-blue/20 dark:bg-slate-900"
              >
                <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
                  {role.tone === "red" ? (
                    <Badge
                      variant="outline"
                      className="w-fit border-mba-red/25 bg-mba-red/8 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mba-red dark:border-mba-red/30 dark:bg-mba-red/10"
                    >
                      Not Currently Hiring — Applications Accepted
                    </Badge>
                  ) : (
                    <Badge
                      variant="outline"
                      className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
                    >
                      Hiring
                    </Badge>
                  )}
                  <CardTitle className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-mba-blue-deep sm:text-3xl dark:text-slate-50">
                    {role.title}
                  </CardTitle>
                  <CardDescription className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
                    {role.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="p-5 pt-4 sm:p-6 sm:pt-4">
                  <Separator className="mb-4 bg-mba-blue/20 dark:bg-slate-700" />
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    Basic Requirements
                  </p>
                  <ul className="mt-3 grid gap-2">
                    {role.requirements.map((item) => (
                      <li
                        key={item}
                        className="rounded-lg border border-mba-blue/25 bg-mba-blue/10 px-4 py-3 text-sm leading-6 text-slate-600 dark:border-mba-blue/15 dark:bg-slate-800/50 dark:text-slate-400"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5">
                    <Button
                      asChild
                      className="rounded-full bg-mba-blue px-6 font-semibold text-white hover:bg-mba-blue-deep! hover:text-mba-gold!"
                    >
                      <a href="https://www.cognitoforms.com/MorongoBasinAmbulance1/EmploymentApplication">
                        Apply Today
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default CareersPage;
