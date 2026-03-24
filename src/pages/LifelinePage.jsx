import SectionHeader from '../components/SectionHeader'
import { lifelineImpact } from '../data/siteContent'

const donationHref =
  'https://www.paypal.com/donate?token=2aOyhSc5amqiolYe2xfNr8cnIbPDq9dXSNgR986xwirkwU2-FoD5EJsFurV1c2Nx1NpSIfibgRSDsbgW'

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
                href={donationHref}
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-mba-blue px-6 py-3 text-sm font-semibold text-white no-underline transition hover:-translate-y-0.5 hover:bg-mba-blue-deep"
              >
                Become a Member
              </a>
              <a
                href={donationHref}
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
          <SectionHeader
            eyebrow="Why give monthly"
            title="Small recurring gifts help keep emergency care ready."
            className="max-w-2xl"
          />
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
              href={donationHref}
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
              href={donationHref}
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

export default LifelinePage
