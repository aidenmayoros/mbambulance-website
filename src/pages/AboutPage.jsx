import SectionHeader from "../components/SectionHeader";
import { aboutServices, serviceArea } from "../data/siteContent";

function AboutPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
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
                “Our responsibility is to the members of the communities that we
                serve. We strive to be a model of excellence within the EMS
                system, through outstanding performance and commitment.”
              </p>
            </div>
          </div>

          <aside className="grid gap-4 self-end">
            <div className="overflow-hidden rounded-[30px] border border-mba-blue/10 bg-white shadow-[0_16px_50px_-32px_rgba(27,44,92,0.22)]">
              <img
                src="/about-mba.jpg"
                alt="Morongo Basin Ambulance team"
                className="aspect-4/3 w-full object-cover"
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

      <section className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8">
        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-4 text-base leading-8 text-slate-600">
            <SectionHeader
              eyebrow="MBA in the Community"
              title="Community support belongs inside the broader MBA story."
              className="max-w-3xl"
            />
            <p>
              Morongo Basin Ambulance gives back to the community whenever, and
              however it can. Serving the hi-desert communities of the Morongo
              Basin, MBA proudly supports an annual Holiday Toy Drive, community
              parades, fairs, events, and more.
            </p>
            <p>
              Folding this staged community content into the About page keeps
              the site structure tighter while still preserving what the current
              staging site says about local involvement.
            </p>
          </div>
          <div className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_12px_35px_-28px_rgba(27,44,92,0.18)]">
            <img
              src="/about-community.jpg"
              alt="MBA in the Community"
              className="aspect-4/3 w-full object-cover"
            />
            <div className="p-6">
              <p className="text-sm font-semibold text-slate-950">
                Community highlights
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <li>Annual Holiday Toy Drive support</li>
                <li>Participation in community parades and fairs</li>
                <li>
                  Visible presence at local events across the Morongo Basin
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Services and training"
            className="max-w-2xl"
          />
        </div>

        <div className="mt-8 grid gap-5">
          {aboutServices.map((service) => (
            <article
              key={service.id}
              id={service.id}
              className="scroll-mt-28 rounded-[30px] border border-slate-200/80 bg-linear-to-br from-white via-white to-slate-50 p-6 shadow-[0_12px_35px_-28px_rgba(27,44,92,0.18)]"
            >
              <div className="grid gap-5 lg:grid-cols-[minmax(240px,280px)_minmax(0,1fr)_minmax(0,1.1fr)] lg:items-start lg:gap-8">
                <div className="overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_12px_35px_-28px_rgba(27,44,92,0.18)] lg:h-52.5">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="aspect-4/3 w-full object-cover lg:h-full lg:aspect-auto"
                  />
                </div>

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

      <section className="rounded-4xl border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
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
  );
}

export default AboutPage;
