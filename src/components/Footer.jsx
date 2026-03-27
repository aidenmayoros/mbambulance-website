import { IconBrandFacebook, IconBrandInstagram, IconPhone, IconMapPin } from '@tabler/icons-react'

import { CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { PAGE_CONTAINER } from '@/lib/pageLayout'
import { cn } from '@/lib/utils'
import { socialLinks } from '../data/siteContent'
import FooterMap from './FooterMap'

const socialIcons = {
  Facebook: IconBrandFacebook,
  Instagram: IconBrandInstagram,
}

const footerLinkClass =
  'text-slate-400 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40'

/** E.164 digits only in `href` per https://www.rfc-editor.org/rfc/rfc3966 */
const PHONE_TEL = 'tel:+17603668474'

/** Google Maps search for the street address (PO box omitted for geocoding). */
const ADDRESS_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  '6335 Park Blvd, Joshua Tree, CA 92252',
)}`

function Footer() {
  return (
    <footer id="contact" className="w-full border-t border-slate-800 bg-slate-950">
      <div className={cn(PAGE_CONTAINER, 'flex flex-col gap-8 py-8 sm:py-10')}>
        <div className="grid min-w-0 gap-8 lg:grid-cols-2 lg:items-start lg:gap-10">
          <div className="flex min-w-0 flex-col gap-6 sm:flex-row sm:gap-5">
            <img
              src="/mba-footer-logo.png"
              alt="Morongo Basin Ambulance EMS footer logo"
              className="h-14 w-auto shrink-0 sm:h-20"
            />
            <div className="min-w-0 flex-1">
              <CardTitle className="font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                Get in Touch
              </CardTitle>
              <div className="mt-4 space-y-2.5 text-sm text-slate-400">
                <p className="flex items-start gap-2">
                  <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                  <a
                    href={ADDRESS_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(footerLinkClass, 'break-words underline-offset-2 hover:underline')}
                  >
                    6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <IconPhone className="size-4 shrink-0 text-slate-500" aria-hidden />
                  <a href={PHONE_TEL} className={cn(footerLinkClass, 'underline-offset-2 hover:underline')}>
                    760-366-8474
                  </a>
                </p>
              </div>

              <div className="mt-6 flex flex-wrap items-start gap-8 sm:gap-10">
                <nav
                  className="flex flex-col gap-2 text-sm"
                  aria-label="Site links"
                >
                  <a href="/lifeline" className={footerLinkClass}>
                    Lifeline
                  </a>
                  <a href="/about" className={footerLinkClass}>
                    About &amp; Services
                  </a>
                  <a href="/careers" className={footerLinkClass}>
                    Careers
                  </a>
                </nav>

                <nav
                  className="flex flex-col gap-2 text-sm"
                  aria-label="Social links"
                >
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.label]

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(footerLinkClass, 'inline-flex items-center gap-1.5')}
                      >
                        {Icon ? <Icon className="size-4 shrink-0 text-slate-500" aria-hidden /> : null}
                        {link.label}
                      </a>
                    )
                  })}
                </nav>
              </div>
            </div>
          </div>

          <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">
              Location
            </p>
            <FooterMap />
          </div>
        </div>

        <Separator className="bg-white/10" />

        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Morongo Basin Ambulance. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Non-profit 501(c)(3) &middot; Non-tax based
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
