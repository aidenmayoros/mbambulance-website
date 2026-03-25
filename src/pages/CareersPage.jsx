import SectionHeader from "../components/SectionHeader";
import { careersRoles } from "../data/siteContent";

function getRoleColorClass(tone) {
  if (tone === "red") {
    return "text-mba-red";
  }

  if (tone === "gold") {
    return "text-amber-700";
  }

  return "text-mba-blue";
}

function CareersPage() {
  return (
    <main className="flex flex-col gap-5">
      <section className="overflow-hidden rounded-4xl border border-white/70 bg-white/90 shadow-[0_24px_70px_-34px_rgba(27,44,92,0.28)]">
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
              Morongo Basin Ambulance employs full time and part time
              Paramedics, EMTs, CCT RNs, and Communications Operators. The
              organization also offers limited positions in its Reserve program,
              plus early experience opportunities for local high school students
              through the Explorer program.
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
                View Job positions
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
                <p>
                  Emergency response, transport, and critical care opportunities
                </p>
                <p>
                  Pathways for field staff, communications, reserve, and youth
                  exploration
                </p>
              </div>
            </div>

            <div className="rounded-[30px] border border-slate-200/80 bg-white px-6 py-6 shadow-[0_16px_40px_-30px_rgba(27,44,92,0.18)]">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-red">
                Contact
              </p>
              <div className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                <p>
                  6335 Park Blvd (mailing to PO Box 460), Joshua Tree, CA 92252
                </p>
                <p>760-366-8474</p>
                <p>
                  Use the online application to submit for current and future
                  openings.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section
        id="open-roles"
        className="rounded-4xl border border-white/70 bg-white/90 px-6 py-8 shadow-[0_16px_50px_-32px_rgba(27,44,92,0.25)] md:px-8"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Open roles"
            title="Current job categories"
            className="max-w-2xl"
          />
          <p className="max-w-xl text-sm leading-7 text-slate-500">
            Take a look at our current job openings and see where you could make
            an impact with Morongo Basin Ambulance.
          </p>
        </div>

        <div className="mt-8 grid gap-4 xl:grid-cols-2">
          {careersRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-[28px] border border-slate-200/80 bg-linear-to-br from-white via-white to-slate-50 p-6 shadow-[0_12px_35px_-28px_rgba(27,44,92,0.2)]"
            >
              <p
                className={`text-[0.72rem] font-semibold uppercase tracking-[0.24em] ${getRoleColorClass(role.tone)}`}
              >
                {role.tone === "red" ? (
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-red">
                    MBA is not currently hiring for this position
                    <br />
                    however applications are still accepted from qualified
                    candidates
                  </p>
                ) : (
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-mba-blue">
                    Career Path
                  </p>
                )}
              </p>

              <h3 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950">
                {role.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {role.description}
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-slate-950">
                  Basic requirements
                </p>
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
        <div className="rounded-4xl border border-mba-red/10 bg-mba-red/5 px-6 py-8 md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-red">
            Reserve and Explorer
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl">
            MBA also creates ways to build experience before a full-time role.
          </h2>
          <div className="mt-5 space-y-4 text-base leading-8 text-slate-600">
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
        </div>

        <div className="rounded-4xl border border-mba-blue/10 bg-mba-blue px-6 py-8 text-white shadow-[0_18px_50px_-30px_rgba(27,44,92,0.38)] md:px-8">
          <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-gold">
            Apply
          </p>
          <h2 className="mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-white sm:text-4xl">
            Submit an application for current openings or future consideration.
          </h2>
          <p className="mt-5 text-base leading-8 text-blue-50/90">
            MBA's current careers page uses a Cognito Forms application. Keeping
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
  );
}

export default CareersPage;
