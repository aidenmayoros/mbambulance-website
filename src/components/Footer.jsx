import { socialLinks } from '../data/siteContent'

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

export default Footer
