import { topNav } from '../data/siteContent'

function Header({ isMenuOpen, toggleMenu, closeMenu, pathname }) {
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
        {topNav.map((item) => {
          const isActive = pathname === item.href

          return (
            <a
              key={item.label}
              className={`rounded-full px-4 py-2 transition hover:bg-mba-tan hover:text-mba-blue ${
                isActive ? 'bg-mba-tan text-mba-blue' : ''
              }`}
              href={item.href}
            >
              {item.label}
            </a>
          )
        })}
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
            {topNav.map((item) => {
              const isActive = pathname === item.href

              return (
                <a
                  key={item.label}
                  className={`rounded-2xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mba-tan hover:text-mba-blue ${
                    isActive ? 'bg-mba-tan text-mba-blue' : ''
                  }`}
                  href={item.href}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              )
            })}
            <a
              className={`mt-2 inline-flex min-h-11 items-center justify-center rounded-2xl px-4 py-3 text-sm font-semibold no-underline transition ${
                pathname === '/lifeline'
                  ? 'bg-mba-blue-deep text-white'
                  : 'bg-mba-blue text-white hover:bg-mba-blue-deep'
              }`}
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

export default Header
