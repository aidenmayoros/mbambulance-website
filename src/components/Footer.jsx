import { IconBrandFacebook, IconBrandInstagram, IconPhone, IconMapPin } from '@tabler/icons-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { socialLinks } from '../data/siteContent'

const socialIcons = {
  Facebook: IconBrandFacebook,
  Instagram: IconBrandInstagram,
}

function Footer() {
  return (
    <footer id="contact">
      <Card className="overflow-hidden rounded-2xl border-slate-800 bg-slate-950 ring-0 ring-transparent">
        <CardContent className="flex flex-col gap-8 px-5 py-8 sm:px-8 md:px-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
            <div className="flex items-start gap-4 sm:gap-5">
              <img
                src="/mba-footer-logo.png"
                alt="Morongo Basin Ambulance EMS footer logo"
                className="h-14 w-auto shrink-0 sm:h-20"
              />
              <div>
                <CardTitle className="font-heading text-2xl leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  Get in Touch
                </CardTitle>
                <div className="mt-4 space-y-2.5 text-sm text-slate-400">
                  <p className="flex items-start gap-2">
                    <IconMapPin className="mt-0.5 size-4 shrink-0 text-slate-500" aria-hidden />
                    6335 Park Blvd (PO Box 460), Joshua Tree, CA 92252
                  </p>
                  <p className="flex items-center gap-2">
                    <IconPhone className="size-4 shrink-0 text-slate-500" aria-hidden />
                    760-366-8474
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="gap-0 rounded-xl border-white/10 bg-white/5 p-5 py-5 ring-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Support
                </p>
                <nav className="mt-4 flex flex-col gap-1" aria-label="Support links">
                  <Button variant="link" asChild className="h-auto justify-start p-0 text-sm font-medium text-slate-300 hover:text-white">
                    <a href="/lifeline">Lifeline</a>
                  </Button>
                  <Button variant="link" asChild className="h-auto justify-start p-0 text-sm font-medium text-slate-300 hover:text-white">
                    <a href="/about">About &amp; Services</a>
                  </Button>
                  <Button variant="link" asChild className="h-auto justify-start p-0 text-sm font-medium text-slate-300 hover:text-white">
                    <a href="/careers">Careers</a>
                  </Button>
                </nav>
              </Card>

              <Card className="gap-0 rounded-xl border-white/10 bg-white/5 p-5 py-5 ring-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Connect
                </p>
                <nav className="mt-4 flex flex-col gap-1" aria-label="Social links">
                  {socialLinks.map((link) => {
                    const Icon = socialIcons[link.label]

                    return (
                      <Button
                        key={link.label}
                        variant="link"
                        asChild
                        className="h-auto justify-start gap-2 p-0 text-sm font-medium text-slate-300 hover:text-white"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {Icon ? <Icon className="size-4" aria-hidden /> : null}
                          {link.label}
                        </a>
                      </Button>
                    )
                  })}
                </nav>
              </Card>
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
        </CardContent>
      </Card>
    </footer>
  )
}

export default Footer
