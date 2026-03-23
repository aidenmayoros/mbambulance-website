const services = [
  {
    title: 'ALS Emergency',
    description:
      'Emergency ambulance response with advanced life support for the communities MBA serves.',
  },
  {
    title: 'BLS Non-Emergency',
    description:
      'Scheduled and non-emergency transportation for patients who still need professional medical support.',
  },
  {
    title: 'CCT RN Transport',
    description:
      'Critical care transport supported by registered nurses for higher-acuity patient transfers.',
  },
  {
    title: 'Stand-By Ambulance',
    description:
      'Medical coverage for events, productions, and special situations that need on-site readiness.',
  },
  {
    title: 'AHA Courses',
    description:
      'Training and education offerings that support preparedness and community safety.',
  },
  {
    title: 'Careers',
    description:
      'Opportunities for paramedics, EMTs, nurses, dispatchers, and other mission-driven team members.',
  },
]

const highlights = [
  'Founded in 1948',
  'Non-profit 501(c)(3)',
  '9-1-1 and non-emergency transport',
]

function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(15,124,144,0.18),_transparent_32%),linear-gradient(180deg,_#f8fbfc_0%,_#edf3f6_100%)] text-slate-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <header className="rounded-[28px] border border-white/60 bg-white/80 px-5 py-4 shadow-[0_16px_40px_-24px_rgba(20,41,61,0.16)] backdrop-blur md:px-7">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-teal-dark">
                Morongo Basin Ambulance
              </p>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                A cleaner, more modern homepage direction built from the current
                MBA site structure.
              </p>
            </div>

            <nav
              className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700"
              aria-label="Primary"
            >
              <a
                className="rounded-full px-3 py-2 transition hover:bg-mba-sand hover:text-mba-teal-dark"
                href="#services"
              >
                Services
              </a>
              <a
                className="rounded-full px-3 py-2 transition hover:bg-mba-sand hover:text-mba-teal-dark"
                href="#about"
              >
                About
              </a>
              <a
                className="rounded-full px-3 py-2 transition hover:bg-mba-sand hover:text-mba-teal-dark"
                href="#community"
              >
                Community
              </a>
              <a
                className="rounded-full px-3 py-2 transition hover:bg-mba-sand hover:text-mba-teal-dark"
                href="#contact"
              >
                Contact
              </a>
            </nav>
          </div>
        </header>

        <main className="flex flex-col gap-5">
          <section className="overflow-hidden rounded-[34px] border border-white/60 bg-white/85 shadow-[0_20px_60px_-32px_rgba(20,41,61,0.25)]">
            <div className="grid gap-10 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-12 lg:py-14">
              <div className="relative">
                <div className="absolute -left-8 top-0 h-32 w-32 rounded-full bg-mba-teal/10 blur-2xl" />
                <div className="absolute left-28 top-24 h-20 w-20 rounded-full bg-mba-red/15 blur-2xl" />

                <p className="relative text-[0.74rem] font-semibold uppercase tracking-[0.3em] text-mba-teal-dark">
                  Serving the Morongo Basin and surrounding desert communities
                </p>

                <h1 className="relative mt-5 max-w-4xl font-heading text-5xl leading-[0.95] tracking-[-0.05em] text-slate-900 sm:text-6xl lg:text-7xl">
                  Emergency, non-emergency, and community-centered care with a
                  cleaner digital front door.
                </h1>

                <p className="relative mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                  Morongo Basin Ambulance provides 9-1-1 emergency response and
                  non-emergency medical transportation across multiple San
                  Bernardino County communities. This rebuild keeps the current
                  brand feel while making the site easier to trust, scan, and use.
                </p>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-teal px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mba-teal-dark"
                    href="#services"
                  >
                    Explore Services
                  </a>
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-mba-teal hover:text-mba-teal-dark"
                    href="#contact"
                  >
                    Contact MBA
                  </a>
                </div>

                <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
                  {highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-slate-200/80 bg-mba-sand px-4 py-4 text-sm font-semibold text-slate-700"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <aside className="grid gap-4 self-end">
                <div className="rounded-[28px] border border-slate-200/80 bg-slate-950 px-6 py-6 text-white">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-sand">
                    Why this matters
                  </p>
                  <p className="mt-4 text-2xl font-heading leading-tight">
                    A non-tax based non-profit focused on patient care over profit.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    The current site has strong mission-driven content. This
                    version turns that story into a clearer, more modern homepage.
                  </p>
                </div>

                <div className="rounded-[28px] border border-slate-200/80 bg-white px-6 py-6">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                    Service area
                  </p>
                  <p className="mt-4 text-base leading-7 text-slate-600">
                    Joshua Tree, Twentynine Palms, Morongo Valley, Pioneertown,
                    Rimrock, Flamingo Heights, Landers, Johnson Valley, Wonder
                    Valley, Amboy, and Joshua Tree National Park.
                  </p>
                </div>
              </aside>
            </div>
          </section>

          <section
            className="rounded-[30px] border border-white/60 bg-white/85 px-6 py-8 shadow-[0_16px_40px_-28px_rgba(20,41,61,0.22)] md:px-8 md:py-9"
            id="services"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-teal-dark">
                  Services
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl">
                  The current homepage service links, reorganized into cleaner cards.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-500">
                MBA currently highlights emergency response, transport, training,
                and careers. This layout makes those options easier to scan.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group rounded-[26px] border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 transition hover:-translate-y-1 hover:border-mba-teal/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mba-teal/10 text-sm font-bold text-mba-teal-dark">
                    MBA
                  </div>
                  <h3 className="mt-5 text-2xl font-heading leading-tight tracking-[-0.03em] text-slate-900">
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
            <div className="rounded-[30px] border border-white/60 bg-slate-950 px-6 py-8 text-white shadow-[0_16px_40px_-28px_rgba(20,41,61,0.3)] md:px-8">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-sand">
                About MBA
              </p>
              <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Built around service, reinvestment, and local trust.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300">
                As a 501(c)(3), MBA reinvests revenue back into the organization
                and the communities it serves. That message deserves a more
                confident visual treatment than the current homepage gives it.
              </p>
            </div>

            <div className="rounded-[30px] border border-white/60 bg-white/85 px-6 py-8 shadow-[0_16px_40px_-28px_rgba(20,41,61,0.22)] md:px-8" id="community">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                Community
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-900 sm:text-4xl">
                Community involvement should feel like a real part of the story, not an afterthought.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The live site talks about toy drives, parades, fairs, and giving
                back across the hi-desert. We can turn that into a more visual,
                more human section with photos, event highlights, and stronger
                support calls to action.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-200 bg-mba-sand p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    Better hierarchy
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Stronger section spacing, typography, and calls to action.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5">
                  <p className="text-sm font-semibold text-slate-900">
                    More modern layout
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Cleaner cards, simpler navigation, and a better mobile rhythm.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          className="rounded-[28px] border border-white/60 bg-white/80 px-5 py-6 shadow-[0_16px_40px_-28px_rgba(20,41,61,0.2)] md:px-7"
          id="contact"
        >
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-teal-dark">
                Contact
              </p>
              <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-900">
                A clearer contact and support section belongs near the bottom of the page.
              </h2>
            </div>

            <div className="space-y-3 text-sm leading-7 text-slate-600">
              <p>6335 Park Blvd, Joshua Tree, CA 92252</p>
              <p>760-366-8474</p>
              <p>Donations, memberships, and contact actions can live here next.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
