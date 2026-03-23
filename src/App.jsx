const serviceLinks = [
  {
    number: '01',
    title: 'ALS Emergency',
    href: 'https://www.mbambulance.org/advanced-life-support-ambulance/',
    description:
      'Emergency ambulance response with advanced life support for the communities MBA serves.',
  },
  {
    number: '02',
    title: 'BLS Non-Emergency',
    href: 'https://www.mbambulance.org/basic-life-support-ambulance/',
    description:
      'Non-emergency medical transportation with dependable support for patients who still need care in transit.',
  },
  {
    number: '03',
    title: 'CCT RN Transport',
    href: 'https://www.mbambulance.org/critical-care-transport-nurse-ambulance/',
    description:
      'Critical care transport supported by registered nurses for higher-acuity patient transfers.',
  },
  {
    number: '04',
    title: 'Stand-By Ambulance',
    href: 'https://www.mbambulance.org/standby-ambulance/',
    description:
      'Stand-by ambulance services for special events and movie production sets.',
  },
  {
    number: '05',
    title: 'AHA Courses',
    href: 'https://www.mbambulance.org/american-heart-association-courses/',
    description:
      'Training and certification courses that support preparedness in the wider community.',
  },
  {
    number: '06',
    title: 'Careers',
    href: 'https://www.mbambulance.org/emt-paramedic-jobs/',
    description:
      'Career paths for paramedics, EMTs, nurses, and dispatchers serving the hi-desert.',
  },
]

const topNav = [
  { label: 'Ambulance Services', href: '#services' },
  { label: 'Memberships', href: '#support' },
  { label: 'Careers with MBA', href: '#careers' },
  { label: 'MBA in the Community', href: '#community' },
  { label: 'Donations', href: '#support' },
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

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/MorongoBasinAmbulance/',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/morongobasinambulance/?hl=en',
  },
]

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
                  Non-profit and non-tax based 501(c)(3) ambulance service for the
                  Morongo Basin and surrounding desert communities.
                </p>
              </div>
            </div>

            <nav
              className="flex flex-wrap gap-2 text-sm font-semibold text-slate-700"
              aria-label="Primary"
            >
              {topNav.map((item) => (
                <a
                  key={item.label}
                  className="rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue"
                  href={item.href}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <main className="flex flex-col gap-5">
          <section className="overflow-hidden rounded-[34px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
            <div className="grid gap-8 px-6 py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
              <div className="relative">
                <div className="absolute -left-8 top-0 h-36 w-36 rounded-full bg-mba-blue/10 blur-3xl" />
                <div className="absolute left-20 top-28 h-24 w-24 rounded-full bg-mba-red/14 blur-3xl" />

                <p className="relative inline-flex rounded-full border border-mba-blue/15 bg-mba-blue/5 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
                  9-1-1 emergency and non-emergency medical transportation
                </p>

                <h1 className="relative mt-6 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
                  Morongo Basin Ambulance, rebuilt with clearer structure and stronger trust signals.
                </h1>

                <div className="relative mt-6 max-w-3xl space-y-5 text-base leading-8 text-slate-600">
                  <p>
                    Morongo Basin Ambulance provides 9-1-1 emergency and
                    non-emergency medical transportation across multiple
                    communities in San Bernardino County.
                  </p>
                  <p>
                    Founded in 1948 as a non-tax based, non-profit corporation,
                    MBA is the sole provider of 9-1-1 emergency ambulance services
                    to much of the Morongo Basin, including Joshua Tree National Park.
                  </p>
                  <p>
                    Revenue above operating costs is put back into the company and
                    the communities it serves, with care centered on service rather
                    than maximizing profit.
                  </p>
                </div>

                <div className="relative mt-8 flex flex-wrap gap-3">
                  <a
                    className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
                    href="#services"
                  >
                    View Ambulance Services
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
                    <p className="text-sm font-semibold text-slate-900">501(c)(3) nonprofit</p>
                    <p className="mt-1 text-sm text-slate-500">Revenue reinvested locally</p>
                  </div>
                  <div className="rounded-2xl border border-mba-gold/30 bg-mba-tan px-4 py-4">
                    <p className="text-sm font-semibold text-slate-900">Desert service area</p>
                    <p className="mt-1 text-sm text-slate-500">Communities plus the national park</p>
                  </div>
                </div>
              </div>

              <aside className="grid gap-4 self-end">
                <div className="overflow-hidden rounded-[30px] border border-mba-blue/10 bg-white shadow-[0_16px_50px_-32px_rgba(27,44,92,0.22)]">
                  <img
                    src="/mba-community.jpg"
                    alt="MBA in the Community"
                    className="aspect-square w-full object-cover"
                  />
                  <div className="p-6">
                    <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                      MBA in the Community
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      The live site highlights toy drives, parades, fairs, and
                      local events. That community story deserves real visual weight.
                    </p>
                  </div>
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
                  Ambulance Services
                </p>
                <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                  The live homepage service links, turned into a cleaner decision grid.
                </h2>
              </div>
              <p className="max-w-xl text-sm leading-7 text-slate-500">
                MBA already offers a strong set of services. This layout simply
                makes those options easier to scan and act on.
              </p>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {serviceLinks.map((service) => (
                <a
                  key={service.title}
                  href={service.href}
                  className="group rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 p-6 no-underline transition hover:-translate-y-1 hover:border-mba-blue/25 hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-mba-blue/10 text-sm font-bold text-mba-blue">
                      {service.number}
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
                </a>
              ))}
            </div>
          </section>

          <section className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
            <div
              className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8"
              id="support"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
                Memberships and Donations
              </p>
              <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
                Make support options feel concrete, affordable, and easy to act on.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-blue-50/90">
                The MBA Emergency Services Discount Plan gives the community an
                affordable way to help reduce ambulance costs if transport is needed,
                while donations help sustain one of the only nonprofit ambulance
                services in California.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[28px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-mba-gold">
                    Membership
                  </p>
                  <p className="mt-3 text-2xl font-heading text-white">Individual Plan: $100</p>
                  <p className="mt-2 text-sm leading-7 text-blue-50/85">
                    Annual coverage option for individuals through the ESDP membership.
                  </p>
                </div>
                <div className="rounded-[28px] bg-white/10 p-5 ring-1 ring-white/15 backdrop-blur">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-mba-gold">
                    Membership
                  </p>
                  <p className="mt-3 text-2xl font-heading text-white">Family Plan: $150</p>
                  <p className="mt-2 text-sm leading-7 text-blue-50/85">
                    Annual coverage for spouses and children under 18 at the same address.
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-[28px] border border-white/15 bg-slate-950/20 p-5">
                <p className="text-sm leading-7 text-blue-50/90">
                  To enroll in a membership, call <span className="font-semibold text-white">(760) 366-8474</span> and select Option 3,
                  or stop by Station 1 at 6335 Park Blvd in Joshua Tree during business hours.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="https://www.mbambulance.org/mba-memberships/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-mba-blue no-underline transition hover:-translate-y-0.5"
                >
                  Explore Memberships
                </a>
                <a
                  href="https://www.mbambulance.org/donations/"
                  className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/10"
                >
                  Make a Donation
                </a>
              </div>
            </div>

            <div
              className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
              id="community"
            >
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                Donations and Community
              </p>
              <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
                Reinforce why support matters and connect it back to the community story.
              </h2>
              <p className="mt-5 text-base leading-8 text-slate-600">
                The donations page explains that MBA has never received public
                funding or tax dollars, and that rising operating costs make
                community support matter. That message should be visible right on the homepage.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-3xl border border-mba-red/10 bg-mba-red/5 p-5">
                  <p className="text-sm font-semibold text-slate-950">Why donate</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Donations support your community and help save lives while covering the growing cost of supplies, communications, and operations.
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-5" id="careers">
                  <p className="text-sm font-semibold text-slate-950">Careers with MBA</p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    The site already positions MBA as an employer of paramedics, EMTs, nurses, and dispatchers, which is worth surfacing prominently.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer
          className="rounded-[30px] border border-slate-900/10 bg-slate-950 px-5 py-6 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.35)] md:px-7"
          id="contact"
        >
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex items-start gap-4">
              <img
                src="/mba-footer-logo.png"
                alt="Morongo Basin Ambulance EMS footer logo"
                className="h-16 w-auto shrink-0 sm:h-20"
              />
              <div>
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
                  Contact
                </p>
                <h2 className="mt-2 font-heading text-3xl leading-tight tracking-[-0.04em] text-white">
                  A cleaner footer with the real contact details and social links from the live site.
                </h2>
                <div className="mt-5 space-y-2 text-sm leading-7 text-slate-300">
                  <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
                  <p>760-366-8474</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-mba-gold">
                  Support
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  <a
                    href="https://www.mbambulance.org/mba-memberships/"
                    className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
                  >
                    Memberships
                  </a>
                  <a
                    href="https://www.mbambulance.org/donations/"
                    className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
                  >
                    Donations
                  </a>
                  <a
                    href="https://www.mbambulance.org/mba-in-the-community/"
                    className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
                  >
                    MBA in the Community
                  </a>
                </div>
              </div>

              <div className="rounded-[26px] border border-white/10 bg-white/5 p-5">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-mba-gold">
                  Connect
                </p>
                <div className="mt-4 flex flex-col gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
