import SectionHeader from "../components/SectionHeader";
import { serviceArea, serviceLinks } from "../data/siteContent";

function HomePage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-[30px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)] sm:rounded-[34px]">
        <div className="grid gap-6 px-4 py-5 sm:gap-8 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1fr_1fr] lg:px-12 lg:py-14">
          <div className="relative">
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-mba-blue/10 blur-3xl sm:-left-8 sm:h-36 sm:w-36" />
            <div className="absolute left-12 top-24 h-20 w-20 rounded-full bg-mba-red/14 blur-3xl sm:left-20 sm:top-28 sm:h-24 sm:w-24" />

            <p className="relative inline-flex max-w-full rounded-full border border-mba-blue/15 bg-mba-blue/5 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-mba-blue sm:px-4 sm:text-[0.72rem] sm:tracking-[0.28em]">
              9-1-1 emergency and non-emergency medical transportation
            </p>

            <h1 className="relative mt-4 max-w-4xl font-heading text-[2.45rem] leading-[0.92] tracking-[-0.06em] text-slate-950 sm:mt-6 sm:text-6xl sm:leading-[0.94] sm:tracking-[-0.055em] lg:text-7xl">
              Morongo Basin Ambulance
            </h1>

            <div className="relative mt-4 max-w-3xl space-y-4 text-[0.97rem] leading-7 text-slate-600 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p className="sm:hidden">
                Morongo Basin Ambulance provides 9-1-1 emergency and
                non-emergency medical transportation across multiple desert
                communities in San Bernardino County.
              </p>
              <p className="hidden sm:block">
                Morongo Basin Ambulance provides 9-1-1 emergency and
                non-emergency medical transportation across multiple communities
                in San Bernardino County.
              </p>
              <p className="hidden sm:block">
                Founded in 1948 as a non-tax based, non-profit corporation, MBA
                is the sole provider of 9-1-1 emergency ambulance services to
                much of the Morongo Basin, including Joshua Tree National Park.
              </p>
              <p className="hidden sm:block">
                Revenue above operating costs is put back into the company and
                the communities it serves, with care centered on service rather
                than maximizing profit.
              </p>
            </div>

            <div className="relative mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mba-blue-deep sm:w-auto"
                href="#services"
              >
                View Ambulance Services
              </a>
            </div>

            <div className="relative mt-6 grid gap-3 sm:mt-10 sm:grid-cols-3">
              <div className="rounded-2xl border border-mba-blue/10 bg-mba-blue/5 px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Founded in 1948
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Longstanding local service
                </p>
              </div>
              <div className="rounded-2xl border border-mba-red/10 bg-mba-red/5 px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  501(c)(3) nonprofit
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Revenue reinvested locally
                </p>
              </div>
              <div className="rounded-2xl border border-mba-gold/30 bg-mba-tan px-4 py-4">
                <p className="text-sm font-semibold text-slate-900">
                  Desert service area
                </p>
                <p className="mt-1 text-sm text-slate-500">
                  Communities plus the national park
                </p>
              </div>
            </div>

            <div className="relative mt-6 rounded-[26px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_16px_40px_-30px_rgba(27,44,92,0.18)] sm:mt-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-blue">
                About MBA
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-[0.96rem] sm:leading-8">
                Morongo Basin Ambulance is a non-tax based nonprofit focused on
                emergency response, non-emergency transport, community support,
                and reinvesting back into the hi-desert communities it serves.
              </p>
            </div>
          </div>

          <aside className="grid gap-4 self-end">
            <div className="overflow-hidden rounded-[26px] border border-mba-blue/10 bg-white shadow-[0_16px_50px_-32px_rgba(27,44,92,0.22)] sm:rounded-[30px]">
              <img
                src="/mba-crew.jpg"
                alt="Morongo Basin Ambulance crew"
                className="w-full object-center sm:aspect-square"
              />
            </div>

            <div className="rounded-[30px] border border-mba-gold/40 bg-mba-tan px-6 py-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                Service area
              </p>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                MBA serves communities across the Morongo Basin and Joshua Tree
                National Park while operating as a nonprofit built around care,
                local trust, and service rather than profit maximization.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {serviceArea.map((place) => (
                  <span
                    key={place}
                    className="rounded-full border border-mba-gold/50 bg-white/80 px-3 py-1.5 text-sm font-medium text-slate-700"
                  >
                    {place}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8 md:py-9"
        id="services"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader eyebrow="Ambulance Services" className="max-w-2xl" />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {serviceLinks.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group rounded-[28px] border border-slate-200/80 bg-linear-to-br from-white via-white to-slate-50 p-6 no-underline transition hover:-translate-y-1 hover:border-mba-blue/25 hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  MBA
                </span>
              </div>

              <h3 className="mt-5 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {service.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
