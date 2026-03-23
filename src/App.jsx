import { useState } from 'react'

const serviceLinks = [
  {
    number: '01',
    title: 'ALS Emergency',
    href: '/about#als-emergency',
    description:
      'Emergency ambulance response with advanced life support for the communities MBA serves.',
  },
  {
    number: '02',
    title: 'BLS Non-Emergency',
    href: '/about#bls-non-emergency',
    description:
      'Non-emergency medical transportation with dependable support for patients who still need care in transit.',
  },
  {
    number: '03',
    title: 'CCT RN Transport',
    href: '/about#cct-rn-transport',
    description:
      'Critical care transport supported by registered nurses for higher-acuity patient transfers.',
  },
  {
    number: '04',
    title: 'Stand-By Ambulance',
    href: '/about#stand-by-ambulance',
    description:
      'Stand-by ambulance services for special events and movie production sets.',
  },
  {
    number: '05',
    title: 'AHA Courses',
    href: '/about#aha-courses',
    description:
      'Training and certification courses that support preparedness in the wider community.',
  },
  {
    number: '06',
    title: 'Careers',
    href: '/careers',
    description:
      'Career paths for paramedics, EMTs, nurses, and dispatchers serving the hi-desert.',
  },
]

const topNav = [
  { label: 'About MBA', href: '/about' },
  { label: 'Board of Directors', href: '/board-of-directors' },
  { label: 'Careers with MBA', href: '/careers' },
  { label: 'Lifeline', href: '/lifeline' },
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

const boardMembers = [
  {
    name: 'Donna Munoz',
    role: 'Vice Chair and Board Member',
    image: '/board-donna-munoz.jpg',
    bio: 'Donna Munoz Aldana is a long-term resident of the Morongo Basin, having lived in Yucca Valley and Morongo Valley for the past 40 years. She has been politically and privately active in a number of community organizations with a focus on strengthening the basin and enriching the lives of local residents.',
    highlights: [
      '16 years as an elected member of the Morongo Unified School District Board of Education',
      'Obtained unprecedented earthquake funds for Joshua Tree Elementary',
      '10 years as a member of the Boys and Girls Club Board of Directors',
      'Founder of the Morongo Basin Transit Authority and active board member',
      'Member of Hearts of Yucca Valley for 25 years',
    ],
  },
  {
    name: 'Richard Middlebrough',
    role: 'Board Member',
    image: '/board-richard-middlebrough.jpg',
    bio: 'As a retired Fire Captain and EMT for the City of Newport Beach, Richard brings more than 30 years of experience in fire suppression, emergency scene management, extrication, and basic and advanced life support systems. He also managed facilities for six fire stations, the main lifeguard headquarters, and the construction of a temporary seventh station.',
    highlights: [
      'Former President of the Newport Beach Firefighters Association for 10 years',
      'Selected as Firefighter of the Year twice',
      'Serves MBA as part of an outstanding and caring nonprofit organization',
    ],
  },
  {
    name: 'Steve Reyes',
    role: 'Board Member',
    image: '/board-steve-reyes.jpg',
    bio: 'Steve Reyes is a full-time Morongo Basin resident and retired law enforcement professional with a 29-year career across patrol, fugitive warrants, and federal task forces. In the basin, he has served on several volunteer councils and advisory boards in both county and education settings.',
    highlights: [
      'Served on the San Bernardino County Municipal Advisory Council',
      'Served on the Bureau of Land Management Desert Advisory Council',
      'Served on the Morongo Unified School District School Site Council for Oasis Elementary',
    ],
  },
  {
    name: 'Dave Behrens',
    role: 'Board Member',
    image: '/board-dave-behrens.jpg',
    bio: 'Dave and his family have deep roots in the Morongo Basin, with a history in the region going back to the 1960s. He retired from various local public works positions, operated his own metal fabrication business, and taught adult education at College of the Desert.',
    highlights: [
      'Longtime full-time resident of the Morongo Basin',
      'Former local public works professional and small business owner',
      'Proud supporter of MBA after witnessing its service over many years',
    ],
  },
  {
    name: 'Chris Claire',
    role: 'Treasurer of the Morongo Basin Ambulance Association',
    image: '/board-chris-claire.jpg',
    bio: 'Christopher Claire has strong ties to the Morongo Basin as a former student, small business owner, youth sports volunteer, nonprofit treasurer, and education leader. His local background and service roles reflect a long-term commitment to supporting students, families, and community growth.',
    highlights: [
      'Local upbringing and continued business leadership in the basin',
      'Volunteer and nonprofit service experience',
      'Focused on stronger opportunity and support for local families',
    ],
  },
  {
    name: 'Craig Bell',
    role: 'Operations Chief, EMS Coordinator',
    image: '/board-craig-bell.jpg',
    bio: 'Craig Bell is featured on the staging leadership page as MBA’s Operations Chief and EMS Coordinator, connecting board leadership with day-to-day service operations.',
    highlights: [
      'Operations Chief and EMS Coordinator for Morongo Basin Ambulance',
      'Included on the staging leadership page alongside the board members',
      'Supports the link between governance, operations, and field service delivery',
    ],
  },
]

const careersRoles = [
  {
    title: 'Full/Part-Time Paramedic',
    tone: 'blue',
    description:
      'MBA employs paramedics who help cover 9-1-1 emergency response and non-emergency transport across the Morongo Basin service area.',
    requirements: [
      'CA State Paramedic License',
      'ACLS card',
      'CPR card',
      'CA drivers license',
      'Ambulance drivers license',
      'Medical Examiner certification',
      'DMV H6 (long form) print-out dated within six months of application',
    ],
  },
  {
    title: 'Part-Time EMT-B',
    tone: 'red',
    description:
      'EMT-B positions support frontline ambulance response and patient care for one of the few nonprofit ambulance services in California.',
    requirements: [
      'CA State EMT-B License',
      'CPR card',
      'CA drivers license',
      'Ambulance drivers license',
      'Medical Examiner certification',
      'DMV H6 printout included with application',
    ],
  },
  {
    title: 'Part-Time Communications Operator',
    tone: 'gold',
    description:
      'MBA’s Communication Operators are the literal lifeline between ambulances and the citizens who need help, making this a critical support role in the system.',
    requirements: [
      'MBA is not currently hiring for this position',
      'Applications are still accepted from qualified candidates',
      'Strong communication and dispatch support mindset is essential',
    ],
  },
  {
    title: 'Part-Time CCT RN',
    tone: 'blue',
    description:
      'Critical Care Transport RNs support higher-acuity transports and bring advanced clinical care to patients who need more than standard ambulance staffing.',
    requirements: [
      'Valid California RN license',
      'ACLS card',
      'CPR card',
      'ICEMA authorized MICN certification',
    ],
  },
]

const lifelineImpact = [
  {
    amount: '$10/month',
    title: 'Keep oxygen tanks full',
    description: 'Helps support the oxygen supplies crews depend on every day.',
    image: '/lifeline-oxygen.webp',
  },
  {
    amount: '$25/month',
    title: 'Replace aging equipment',
    description: 'Helps refresh older medical gear so teams stay prepared in the field.',
    image: '/lifeline-stethoscopes.webp',
  },
  {
    amount: '$50/month',
    title: 'Keep crews trained',
    description: 'Supports ongoing readiness, training, and emergency response preparation.',
    image: '/lifeline-training.png',
  },
  {
    amount: '$100/month',
    title: 'Help replace ambulances',
    description: 'Contributes toward the cost of updating aging ambulance vehicles.',
    image: '/lifeline-ambulance.png',
  },
]

const aboutServices = [
  {
    id: 'als-emergency',
    eyebrow: 'ALS Emergency',
    title: 'Advanced Life Support Ambulance',
    description:
      'MBA has provided Advanced Life Support and paramedic-level care for surrounding communities since the early 1980s, with emergency coverage available day and night in challenging desert conditions.',
    details: [
      'Five ALS ambulances staffed with highly skilled paramedics and EMTs',
      'Coverage includes Morongo Valley, Joshua Tree, Twentynine Palms, Wonder Valley, Joshua Tree National Park, and other hi-desert communities',
      'Mutual aid support for the City of Yucca Valley and the Twentynine Palms Marine Corps Base',
      'ALS interfacility transport available for hospitals, nursing facilities, dialysis, psychiatric facilities, and long-distance transfers',
    ],
  },
  {
    id: 'bls-non-emergency',
    eyebrow: 'BLS Non-Emergency',
    title: 'Basic Life Support Ambulance',
    description:
      'The dedicated BLS page in staging is currently very thin, but the staged site still positions BLS as part of MBA’s core ambulance offering for dependable non-emergency medical transportation across the Morongo Basin.',
    details: [
      'Supports non-emergency medical transportation needs',
      'Part of MBA’s broader ambulance service lineup alongside ALS and CCT',
      'Built for patients who still need trained medical transport while in transit',
    ],
  },
  {
    id: 'cct-rn-transport',
    eyebrow: 'Critical Care',
    title: 'Critical Care Transport Ambulance',
    description:
      'MBA’s critical care transport nurses and critical care paramedics provide direct patient care during transfers between facilities when a standard paramedic-level transport is not enough.',
    details: [
      'Designed for higher-acuity patients moving between hospitals or facilities',
      'CCT RNs and CCPs can provide a higher level of care than a standard paramedic unit',
      'CCT nurses work closely with paramedics and EMTs to support the sickest patients',
      'Staged copy highlights RNs with emergency room backgrounds and multiple years of experience',
    ],
  },
  {
    id: 'stand-by-ambulance',
    eyebrow: 'Special Events',
    title: 'Stand-By Ambulance',
    description:
      'Beyond emergency, non-emergency, and CCT transports, MBA also offers ALS and BLS stand-by services for one-day and multi-day events.',
    details: [
      'Available for transport and non-transport event support',
      'Used for movie sets, off-road motor racing events, corporate events, and extreme sports events',
      'Fleet includes off-road vehicles designed to treat and transport patients in remote areas',
      'Staging asks event organizers to complete the request form or call 760-366-8474 and select option 5',
    ],
  },
  {
    id: 'aha-courses',
    eyebrow: 'Training',
    title: 'American Heart Association Courses',
    description:
      'MBA provides AHA course scheduling, registration support, and on-site training information directly from its Joshua Tree location.',
    details: [
      'Students can view the current class schedule online',
      'Registration is handled through 760-366-8474 option 5 or cbell@mbambulance.org',
      'Payments accepted are cash or check, and classes are free for MBA employees',
      'Course location is 6335 Park Blvd, Joshua Tree, CA 92252, with additional group and on-site rate options available',
    ],
    cta: {
      label: 'View Class Schedule',
      href: 'https://www.cognitoforms.com/MorongoBasinAmbulance1/ClassInformation',
    },
  },
]

function Header({ isMenuOpen, toggleMenu, closeMenu }) {
  return (
    <header className="rounded-[30px] border border-white/70 bg-white/85 px-5 py-4 shadow-[0_18px_50px_-28px_rgba(27,44,92,0.28)] backdrop-blur md:px-7">
      <div className="flex items-start justify-between gap-4 lg:items-center">
        <div className="flex min-w-0 items-center gap-4">
          <a
            href="/"
            className="contents"
            aria-label="Go to the Morongo Basin Ambulance homepage"
          >
            <div className="shrink-0 rounded-2xl bg-white p-3 shadow-[0_12px_30px_-20px_rgba(27,44,92,0.3)]">
              <img
                src="/mba-logo.png"
                alt="Morongo Basin Ambulance EMS logo"
                className="h-14 w-auto sm:h-20"
              />
            </div>
            <div className="min-w-0">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-mba-blue">
                Morongo Basin Ambulance
              </p>
              <p className="mt-2 hidden max-w-xl text-sm leading-6 text-slate-500 sm:block">
                Non-profit and non-tax based 501(c)(3) ambulance service for the
                Morongo Basin and surrounding desert communities.
              </p>
            </div>
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-mba-blue/10 bg-white text-mba-blue shadow-[0_12px_30px_-20px_rgba(27,44,92,0.25)] transition hover:bg-mba-tan lg:hidden"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <span className="sr-only">
            {isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          </span>
          <span className="flex w-5 flex-col gap-1.5">
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`h-0.5 rounded-full bg-current transition ${
                isMenuOpen ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <div className="mt-4 sm:hidden">
        <p className="max-w-xl text-sm leading-6 text-slate-500">
          Non-profit and non-tax based 501(c)(3) ambulance service for the
          Morongo Basin and surrounding desert communities.
        </p>
      </div>

      <nav
        className="mt-5 hidden flex-wrap gap-2 text-sm font-semibold text-slate-700 lg:flex"
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

      <div
        id="mobile-navigation"
        className={`grid overflow-hidden transition-all duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'mt-5 grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <nav
            className="flex flex-col gap-2 rounded-[26px] border border-mba-blue/10 bg-white/80 p-3 shadow-[0_16px_30px_-24px_rgba(27,44,92,0.25)]"
            aria-label="Mobile Primary"
          >
            {topNav.map((item) => (
              <a
                key={item.label}
                className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mba-tan hover:text-mba-blue"
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              className="mt-2 inline-flex min-h-11 items-center justify-center rounded-2xl bg-mba-blue px-4 py-3 text-sm font-semibold text-white no-underline transition hover:bg-mba-blue-deep"
              href="/lifeline"
              onClick={closeMenu}
            >
              Support MBA
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
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
                href="/memberships"
                className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
              >
                Memberships
              </a>
              <a
                href="/lifeline"
                className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
              >
                Lifeline
              </a>
              <a
                href="/about"
                className="text-sm font-semibold text-white no-underline transition hover:text-mba-gold"
              >
                About and Services
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
  )
}

function HomePage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-[30px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)] sm:rounded-[34px]">
        <div className="grid gap-6 px-4 py-5 sm:gap-8 sm:px-6 sm:py-8 md:px-10 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12 lg:py-14">
          <div className="relative">
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-mba-blue/10 blur-3xl sm:-left-8 sm:h-36 sm:w-36" />
            <div className="absolute left-12 top-24 h-20 w-20 rounded-full bg-mba-red/14 blur-3xl sm:left-20 sm:top-28 sm:h-24 sm:w-24" />

            <p className="relative inline-flex max-w-full rounded-full border border-mba-blue/15 bg-mba-blue/5 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-mba-blue sm:px-4 sm:text-[0.72rem] sm:tracking-[0.28em]">
              9-1-1 emergency and non-emergency medical transportation
            </p>

            <h1 className="relative mt-4 max-w-4xl font-heading text-[2.45rem] leading-[0.92] tracking-[-0.06em] text-slate-950 sm:mt-6 sm:text-6xl sm:leading-[0.94] sm:tracking-[-0.055em] lg:text-7xl">
              Morongo Basin Ambulance, rebuilt with clearer structure and stronger trust signals.
            </h1>

            <div className="relative mt-4 max-w-3xl space-y-4 text-[0.97rem] leading-7 text-slate-600 sm:mt-6 sm:space-y-5 sm:text-base sm:leading-8">
              <p className="sm:hidden">
                Morongo Basin Ambulance provides 9-1-1 emergency and
                non-emergency medical transportation across multiple desert
                communities in San Bernardino County.
              </p>
              <p className="hidden sm:block">
                Morongo Basin Ambulance provides 9-1-1 emergency and
                non-emergency medical transportation across multiple
                communities in San Bernardino County.
              </p>
              <p className="hidden sm:block">
                Founded in 1948 as a non-tax based, non-profit corporation,
                MBA is the sole provider of 9-1-1 emergency ambulance services
                to much of the Morongo Basin, including Joshua Tree National Park.
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
              <a
                className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-mba-red/30 bg-white px-6 py-3 text-sm font-semibold text-mba-red transition hover:-translate-y-0.5 hover:border-mba-red hover:bg-mba-red hover:text-white sm:w-auto"
                href="/lifeline"
              >
                Support MBA
              </a>
            </div>

            <div className="relative mt-6 grid gap-3 sm:mt-10 sm:grid-cols-3">
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
                className="aspect-[4/3] w-full object-cover sm:aspect-square"
              />
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                  Updated staging photo
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Staging now includes newer photography, which gives the site a
                  more current and professional feel than the older placeholder image.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-mba-gold/40 bg-mba-tan px-6 py-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                About and service area
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
            Memberships and Lifeline
          </p>
          <h2 className="mt-4 max-w-xl font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            Make support options feel concrete, affordable, and easy to act on.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-blue-50/90">
            The MBA Emergency Services Discount Plan gives the community an
            affordable way to help reduce ambulance costs if transport is needed,
            while Lifeline support helps sustain one of the only nonprofit ambulance
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
              href="/memberships"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-mba-blue no-underline transition hover:-translate-y-0.5"
            >
              Explore Memberships
            </a>
            <a
              href="/lifeline"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-white/10"
            >
              Explore Lifeline
            </a>
          </div>
        </div>

        <div
          className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
          id="community"
        >
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
            Lifeline and Community
          </p>
          <h2 className="mt-3 max-w-2xl font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Reinforce why support matters and connect it back to the community story.
          </h2>
          <p className="mt-5 text-base leading-8 text-slate-600">
            The Lifeline page explains that MBA has never received public
            funding or tax dollars, and that rising operating costs make
            community support matter. That message should be visible right on the homepage.
          </p>

          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl border border-mba-red/10 bg-mba-red/5 p-5">
              <p className="text-sm font-semibold text-slate-950">Why Lifeline matters</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Lifeline support helps your community and helps save lives while covering the growing cost of supplies, communications, and operations.
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
  )
}

function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
        <div className="grid gap-6 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          <div className="relative">
            <div className="absolute -left-10 top-0 h-28 w-28 rounded-full bg-mba-blue/10 blur-3xl" />
            <div className="absolute left-16 top-24 h-20 w-20 rounded-full bg-mba-red/12 blur-3xl" />

            <p className="relative text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              About MBA
            </p>
            <h1 className="relative mt-4 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl">
              About Morongo Basin Ambulance
            </h1>
            <p className="relative mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Morongo Basin Ambulance is a 501(c)(3) community-based,
              non-profit, non-tax based corporation founded in 1948 by seven
              resident volunteers in Joshua Tree. MBA now responds to more than
              6,500 calls per year and covers over 2,700 square miles.
            </p>

            <div className="relative mt-8 rounded-[28px] border border-mba-blue/10 bg-mba-blue px-6 py-6 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-gold">
                Our mission
              </p>
              <p className="mt-4 text-sm leading-8 text-blue-50/90">
                “Our responsibility is to the members of the communities that
                we serve. We strive to be a model of excellence within the EMS
                system, through outstanding performance and commitment.”
              </p>
            </div>
          </div>

          <aside className="grid gap-4 self-end">
            <div className="overflow-hidden rounded-[30px] border border-mba-blue/10 bg-white shadow-[0_16px_50px_-32px_rgba(27,44,92,0.22)]">
              <img
                src="/mba-crew.jpg"
                alt="Morongo Basin Ambulance team"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                  Serving the hi-desert
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  MBA grew with the needs of the community, added EMT staffing
                  in the early 1970s, and progressed into Advanced Life Support
                  services by the early 1980s.
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-mba-gold/40 bg-mba-tan px-6 py-6">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-red">
                Coverage
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

      <section className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8">
        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
          MBA in the Community
        </p>
        <h2 className="mt-3 max-w-3xl font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
          Community support belongs inside the broader MBA story.
        </h2>
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <p>
              Morongo Basin Ambulance gives back to the community whenever, and
              however it can. Serving the hi-desert communities of the Morongo
              Basin, MBA proudly supports an annual Holiday Toy Drive,
              community parades, fairs, events, and more.
            </p>
            <p>
              Folding this staged community content into the About page keeps
              the site structure tighter while still preserving what the current
              staging site says about local involvement.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200/80 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-slate-950">Community highlights</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
              <li>Annual Holiday Toy Drive support</li>
              <li>Participation in community parades and fairs</li>
              <li>Visible presence at local events across the Morongo Basin</li>
            </ul>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              Services and training
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Thin staged service pages, combined into one clearer reference page.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            This page keeps the staged service information, but gives it a
            better structure than several short standalone pages.
          </p>
        </div>

        <div className="mt-8 grid gap-5">
          {aboutServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-[30px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-[0_12px_35px_-28px_rgba(27,44,92,0.18)]"
            >
              <div className="grid gap-5 lg:grid-cols-[0.42fr_0.58fr] lg:gap-8">
                <div>
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-red">
                    {service.eyebrow}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-slate-600">
                    {service.description}
                  </p>
                  {service.cta ? (
                    <a
                      href={service.cta.href}
                      className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-mba-blue px-5 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
                    >
                      {service.cta.label}
                    </a>
                  ) : null}
                </div>

                <ul className="space-y-3">
                  {service.details.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200/80 bg-white px-4 py-3 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
              Contact
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Questions about services, training, or transport?
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-7 text-blue-50/90">
            <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
            <p>760-366-8474</p>
            <p>AHA registration contact: cbell@mbambulance.org</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function BoardPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)] md:px-10 md:py-12">
        <div className="max-w-4xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
            Board of Directors
          </p>
          <h1 className="mt-4 font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            Meet Our Leadership!
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Here are the dedicated leaders guiding Morongo Basin Ambulance’s
            services in our mission to provide exceptional emergency medical care
            to our community.
          </p>
        </div>
      </section>

      <section className="grid gap-5">
        {boardMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8">
              <div className="space-y-5">
                <div className="mx-auto flex w-fit max-w-full items-center justify-center overflow-hidden rounded-[28px] border border-mba-blue/10 bg-mba-tan/40 shadow-[0_18px_45px_-32px_rgba(27,44,92,0.35)] lg:w-auto lg:max-w-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block h-auto max-h-[320px] w-auto max-w-full object-contain object-center sm:max-h-[360px] md:max-h-[420px] lg:h-[420px] lg:w-full lg:max-w-none lg:object-cover lg:object-[50%_18%]"
                  />
                </div>
                <div className="text-center lg:text-left">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                    Leadership
                  </p>
                  <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-semibold text-mba-blue">
                    {member.role}
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
                  Experience and service
                </p>
                <p className="mt-4 text-base leading-8 text-slate-600">{member.bio}</p>
                <ul className="mt-6 space-y-3">
                  {member.highlights.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
              Leadership and operations
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
              Governance and operations stay connected at MBA.
            </h2>
          </div>
          <div className="space-y-3 text-sm leading-7 text-blue-50/90">
            <p>Operations Chief, EMS Coordinator</p>
            <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
            <p>760-366-8474</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function CareersPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
        <div className="grid gap-6 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
          <div className="relative">
            <div className="absolute -left-8 top-2 h-28 w-28 rounded-full bg-mba-blue/12 blur-3xl" />
            <div className="absolute left-20 top-24 h-20 w-20 rounded-full bg-mba-red/12 blur-3xl" />

            <p className="relative text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              Careers with MBA
            </p>
            <h1 className="relative mt-4 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl">
              Careers at Morongo Basin Ambulance
            </h1>
            <p className="relative mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Morongo Basin Ambulance employs full time and part time Paramedics,
              EMTs, CCT RNs, and Communications Operators. The organization also
              offers limited positions in its Reserve program, plus early
              experience opportunities for local high school students through the
              Explorer program.
            </p>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.cognitoforms.com/MorongoBasinAmbulance1/EmploymentApplication"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
              >
                Apply Now
              </a>
              <a
                href="#open-roles"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-mba-red/30 bg-white px-6 py-3 text-sm font-semibold text-mba-red no-underline transition hover:-translate-y-0.5 hover:border-mba-red hover:bg-mba-red hover:text-white"
              >
                View Open Roles
              </a>
            </div>
          </div>

          <aside className="grid gap-4 self-end">
            <div className="rounded-[30px] border border-mba-blue/10 bg-mba-blue px-6 py-6 text-white">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-gold">
                Why work here
              </p>
              <div className="mt-4 space-y-4 text-sm leading-7 text-blue-50/90">
                <p>Nonprofit mission and local community impact</p>
                <p>Emergency response, transport, and critical care opportunities</p>
                <p>Pathways for field staff, communications, reserve, and youth exploration</p>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_16px_40px_-30px_rgba(27,44,92,0.18)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-red">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
                <p>760-366-8474</p>
                <p>Use the online application to submit for current and future openings.</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="open-roles"
        className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              Open roles
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Current job categories, cleaned up into a clearer hiring page.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            This first version uses the real careers page content and requirements,
            but presents them in a cleaner card layout that is easier to scan.
          </p>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {careersRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 p-6 shadow-[0_12px_35px_-28px_rgba(27,44,92,0.2)]"
            >
              <p
                className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${
                  role.tone === 'red'
                    ? 'text-mba-red'
                    : role.tone === 'gold'
                      ? 'text-amber-700'
                      : 'text-mba-blue'
                }`}
              >
                Career path
              </p>
              <h3 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                {role.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{role.description}</p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-950">Basic requirements</p>
                <ul className="mt-4 space-y-3">
                  {role.requirements.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl border border-slate-200/80 bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1fr_1fr]">
        <div className="rounded-[32px] border border-mba-red/10 bg-mba-red/5 px-6 py-8 md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
            Reserve and Explorer
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            MBA also creates ways to build experience before a full-time role.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              The current careers page mentions a limited number of positions in
              the Reserve program for people who want to gain experience in the field.
            </p>
            <p>
              Local high school youth can also get involved through the Explorer
              program, which makes this page feel bigger than just a job board.
            </p>
          </div>
        </div>

        <div className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
            Apply
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            Submit an application for current openings or future consideration.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50/90">
            MBA’s current careers page uses a Cognito Forms application. Keeping
            that as the first CTA is the easiest way to make this page useful
            right away while we continue rebuilding the rest of the site.
          </p>
          <div className="mt-8">
            <a
              href="https://www.cognitoforms.com/MorongoBasinAmbulance1/EmploymentApplication"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-mba-blue no-underline transition hover:-translate-y-0.5"
            >
              Open Employment Application
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

function LifelinePage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
        <div className="grid gap-6 px-6 py-8 md:px-10 md:py-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative">
            <div className="absolute -left-8 top-0 h-28 w-28 rounded-full bg-mba-red/10 blur-3xl" />
            <div className="absolute left-16 top-24 h-24 w-24 rounded-full bg-mba-blue/10 blur-3xl" />

            <p className="relative text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
              Lifeline Club
            </p>
            <h1 className="relative mt-4 max-w-4xl font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl">
              Our medical crew&apos;s need your support.
            </h1>
            <p className="relative mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Be a lifesaver and join the Lifeline Club. As a nonprofit
              ambulance company, MBA relies on the generosity of the community
              to keep services strong, stay prepared, and care for the people
              of the Morongo Basin when every second counts.
            </p>

            <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
              >
                Become a Member
              </a>
              <a
                href="https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-mba-red/30 bg-white px-6 py-3 text-sm font-semibold text-mba-red no-underline transition hover:-translate-y-0.5 hover:border-mba-red hover:bg-mba-red hover:text-white"
              >
                Donate Today
              </a>
            </div>
          </div>

          <aside className="self-end">
            <div className="overflow-hidden rounded-[30px] border border-mba-blue/10 bg-white shadow-[0_16px_50px_-32px_rgba(27,44,92,0.22)]">
              <img
                src="/lifeline-community.jpg"
                alt="Morongo Basin Ambulance community support"
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
                  What is Lifeline Club?
                </p>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  Your monthly gift, no matter the size, helps MBA respond faster,
                  stay prepared, and care for the Morongo Basin with dependable
                  emergency services.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              Why give monthly
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Small recurring gifts help keep emergency care ready.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            These impact points come directly from the staging Lifeline page and
            make the monthly-giving story much clearer than a generic donation ask.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {lifelineImpact.map((item) => (
            <article
              key={item.amount}
              className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-white to-slate-50 shadow-[0_12px_35px_-28px_rgba(27,44,92,0.2)]"
            >
              <div className="flex items-center justify-center bg-mba-tan/60 p-6">
                <img src={item.image} alt="" className="h-24 w-24 object-contain" />
              </div>
              <div className="p-6">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-mba-red">
                  {item.amount}
                </p>
                <h3 className="mt-3 font-heading text-2xl leading-tight tracking-[-0.03em] text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="rounded-[32px] border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
            Sign up to be a Lifeline Member
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            A nonprofit service built with community support from the beginning.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-blue-50/90">
            <p>MBA started in 1948 with only volunteers.</p>
            <p>
              Today it remains one of only two nonprofit ambulance companies in
              California, and community support still matters because public tax
              funding has never been part of the model.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-mba-blue no-underline transition hover:-translate-y-0.5"
            >
              Become a Lifeline Member
            </a>
          </div>
        </div>

        <div className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
            Commit to a Donation
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            Donations help fund the equipment, technology, and vehicles MBA depends on.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
            <p>
              The staging page explains that rising costs in supplies, communications,
              maintenance, and operations make donor support directly meaningful.
            </p>
            <p>
              Donations are tax deductible, and the nonprofit EIN listed on the
              staged page is <span className="font-semibold text-slate-950">95-6100536</span>.
            </p>
            <p>
              Every dollar received from individuals and organizations in the
              Morongo Basin supports service improvements, technology,
              state-of-the-art medical equipment, supplies, and maintenance for
              the five ambulances running daily across a 2700-square-mile area.
            </p>
          </div>
          <div className="mt-8">
            <a
              href="https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-red px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Pay Securely
            </a>
          </div>
        </div>
      </section>

      <section className="rounded-[32px] border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8">
        <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
              Contact MBA
            </p>
            <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
              Questions about giving or monthly support?
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              The staged page closes by thanking supporters and directing
              visitors to contact MBA for more information.
            </p>
          </div>
          <div className="space-y-3 text-sm leading-7 text-slate-600">
            <p>6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252</p>
            <p>760-366-8474</p>
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname =
    typeof window !== 'undefined'
      ? window.location.pathname.replace(/\/+$/, '') || '/'
      : '/'

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const isAboutPage = pathname === '/about'
  const isBoardPage = pathname === '/board-of-directors'
  const isCareersPage = pathname === '/careers'
  const isLifelinePage = pathname === '/lifeline'

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(43,74,182,0.16),_transparent_28%),linear-gradient(180deg,_#f9fbff_0%,_#eef3ff_44%,_#f7f4ef_100%)] text-slate-700">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <Header
          isMenuOpen={isMenuOpen}
          toggleMenu={toggleMenu}
          closeMenu={closeMenu}
        />
        {isAboutPage ? (
          <AboutPage />
        ) : isBoardPage ? (
          <BoardPage />
        ) : isCareersPage ? (
          <CareersPage />
        ) : isLifelinePage ? (
          <LifelinePage />
        ) : (
          <HomePage />
        )}
        <Footer />
      </div>
    </div>
  )
}

export default App
