import { boardMembers } from "../data/siteContent";

function BoardPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)] md:px-10 md:py-12">
        <div className="max-w-4xl">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
            Board of Directors
          </p>
          <h1 className="mt-4 font-heading text-5xl leading-[0.94] tracking-[-0.055em] text-slate-950 sm:text-6xl">
            Meet Our Leadership!
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Here are the dedicated leaders guiding Morongo Basin Ambulance’s
            services in our mission to provide exceptional emergency medical
            care to our community.
          </p>
        </div>
      </section>

      <section className="grid gap-5">
        {boardMembers.map((member) => (
          <article
            key={member.name}
            className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
          >
            <div className="grid gap-6 lg:grid-cols-[0.34fr_0.66fr] lg:gap-8">
              <div className="space-y-5">
                <div className="mx-auto flex w-fit max-w-full items-center justify-center overflow-hidden rounded-[28px] border border-mba-blue/10 bg-mba-tan/40 shadow-[0_18px_45px_-32px_rgba(27,44,92,0.35)] lg:w-auto lg:max-w-none">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="block h-auto max-h-80 w-auto max-w-full object-contain object-center sm:max-h-90 md:max-h-105 lg:h-105 lg:w-full lg:max-w-none lg:object-cover lg:object-[50%_18%]"
                  />
                </div>
                <div className="text-center lg:text-left">
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
                <p className="mt-4 text-base leading-8 text-slate-600">
                  {member.bio}
                </p>
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

      <section className="rounded-4xl border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
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
  );
}

export default BoardPage;
