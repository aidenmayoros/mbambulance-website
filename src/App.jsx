const services = [
  {
    title: 'ALS Emergency',
    description:
      'Advanced life support emergency response for the desert communities MBA serves every day.',
  },
  {
    title: 'BLS Non-Emergency',
    description:
      'Scheduled and non-emergency transportation with dependable clinical support and clearer booking paths.',
  },
  {
    title: 'CCT RN Transport',
    description:
      'Critical care transport supported by registered nurses for higher-acuity patient transfers.',
  },
  {
    title: 'Stand-By Ambulance',
    description:
      'On-site event medical coverage for productions, gatherings, and community events that need readiness.',
  },
  {
    title: 'AHA Courses',
    description:
      'Training and education offerings that help prepare families, organizations, and workplaces.',
  },
  {
    title: 'Careers',
    description:
      'Open roles for EMTs, paramedics, nurses, dispatchers, and other mission-driven healthcare professionals.',
  },
]

const serviceArea = [
  'Joshua Tree',
  'Twentynine Palms',
  'Morongo Valley',
  'Pioneertown',
  'Rimrock',
  'Flamingo Heights',
  'Landers',
  'Johnson Valley',
  'Wonder Valley',
  'Amboy',
  'Joshua Tree National Park',
]

const supportLinks = ['Memberships', 'Donations', 'Community Events']

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(43,74,182,0.16),_transparent_28%),linear-gradient(180deg,_#f9fbff_0%,_#eef3ff_44%,_#f7f4ef_100%)] text-slate-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="rounded-[30px] border border-white/70 bg-white/85 px-5 py-4 shadow-[0_18px_50px_-28px_rgba(27,44,92,0.28)] backdrop-blur md:px-7">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-4">
              <div className="rounded-2xl bg-white p-3 shadow-[0_12px_30px_-20px_rgba(27,44,92,0.3)]">
                <img
                  src="/mba-logo.png"
                  alt="Morongo Basin Ambulance EMS logo"
                  className="h-16 w-auto sm:h-20"
                />
              </div>
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-mba-blue">
                  Morongo Basin Ambulance
                </p>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  A more polished homepage direction built from the current site&apos;s
                  nonprofit mission, service lines, and support pathways.
                </p>
              </div>
            </div>

            <nav
              className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700"
              aria-label="Primary"
            >
              <a
                className="rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue"
                href="#services"
              >
                Services
              </a>
              <a
                className="rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue"
                href="#about"
              >
                About
              </a>
              <a
                className="rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue"
                href="#support"
              >
                Support
              </a>
              <a
                className="rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex flex-col gap-5">
          <section className="overflow-hidden rounded-[34px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-14">
              <div className="relative">
                <div className="absolute -left-8 top-0 h-36 w-36 rounded-full bg-mba-blue/10 blur-3xl" />
                <div className="absolute left-20 top-28 h-24 w-24 rounded-full bg-mba-red/14 blur-3xl" />

                <p className="relative inline-flex rounded-full border border-mba-blue/15 bg-mba-blue/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
                  9-1-1 emergency response and non-emergency transport
                </p>

                <h1 className="relative mt-6 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Desert emergency care with a stronger, clearer online presence.
                </h1>

                <p className="relative mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Morongo Basin Ambulance is a non-tax based 501(c)(3) serving
                  the hi-desert with emergency response, medical transport, and
                  community support. This rebuild keeps the familiar identity but
                  gives it a more confident, modern front end.
                </p>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
                    href="#services"
                  >
                    View Services
                  </a>
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-mba-red/30 bg-white px-6 py-3 text-sm font-semibold text-mba-red transition hover:-translate-y-0.5 hover:border-mba-red hover:bg-mba-red hover:text-white"
                    href="#support"
                  >
                    Support MBA
                  </a>
                </div>

                <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-mba-blue/10 bg-mba-blue/5 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">Founded in 1948</p>
                    <p className="mt-1 text-sm text-slate-500">Longstanding local service</p>
                  </div>
                  <div className="rounded-2xl border border-mba-red/10 bg-mba-red/5 px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">Nonprofit Mission</p>
                    <p className="mt-1 text-sm text-slate-500">Revenue reinvested locally</p>
                  </div>
                  <div className="rounded-2xl border border-mba-gold/30 bg-mba-tan px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">Community Focus</p>
                    <p className="mt-1 text-sm text-slate-500">Support beyond transport</p>
                  </div>
                </div>
              </div>

              <aside className="grid gap-4 self-end">
                <div className="rounded-[30px] border border-mba-blue/10 bg-slate-950 px-6 py-6 text-white">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
                    Why this redesign works
                  </p>
                  <h2 className="mt-4 font-heading text-3xl leading-tight tracking-[-0.04em] text-white">
                    Same mission. Cleaner layout. More trust at first glance.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    The live site already has the right ingredients: local trust,
                    service depth, and community support. This version simply
                    presents them with better hierarchy and a stronger visual system.
                  </p>
                </div>

                <div className="rounded-[30px] border border-mba-gold/40 bg-mba-tan px-6 py-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                    Service area
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
            className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8 md:py-9"
            id="services"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
                  Core services
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  The existing homepage services, reorganized into a cleaner decision grid.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-500">
                Instead of forcing visitors to hunt through smaller links, this
                version gives each service line enough visual weight to feel clear.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <article
                  key={service.title}
                  className="group rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-mba-blue/25 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mba-blue/10 text-sm font-bold text-mba-blue">
                      {String(index + 1).padStart(2, '0')}
                    </div>
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
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]" id="about">
            <div className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
                About MBA
              </p>
              <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                A non-tax based nonprofit built to serve, reinvest, and stay local.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-blue-50/90">
                The current site says it plainly: as a 501(c)(3), MBA reinvests
                money back into the organization and the communities it serves.
                This version gives that message the visual emphasis it deserves.
              </p>
            </div>

            <div
              className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
              id="support"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                Support and community
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Memberships, donations, and community involvement should feel central to the homepage.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The live site already highlights donations, memberships, toy drives,
                and local events. This layout makes those support paths easier to find
                and more inviting to engage with.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {supportLinks.map((item) => (
                  <div
                    key={item}
                    className="rounded-3xl border border-mba-red/10 bg-mba-red/5 p-5"
                  >
                    <p className="text-sm font-semibold text-slate-950">{item}</p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      Clearer navigation and stronger calls to action can make this section much more effective.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer
          className="rounded-[30px] border border-slate-900/10 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.35)] md:px-7"
          id="contact"
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div className="flex items-center gap-4">
              <img
                src="/mba-footer-logo.png"
                alt="Morongo Basin Ambulance EMS footer logo"
                className="h-16 w-auto sm:h-20"
              />
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
                  Contact
                </p>
                <h2 className="mt-2 font-heading text-3xl leading-tight tracking-[-0.04em] text-white">
                  Ready for the next pass: real CTAs, real forms, and final content cleanup.
                </h2>
              </div>
            </div>

            <div className="space-y-3 text-sm leading-7 text-slate-300">
              <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
              <p>760-366-8474</p>
              <p>Facebook and Instagram links can be added back into this footer next.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
