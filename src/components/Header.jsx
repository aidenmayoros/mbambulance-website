import { IconHeart, IconMenu2, IconMoon, IconSun } from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { topNav } from "../data/siteContent";

function isCurrentPage(currentPath, linkPath) {
  return currentPath === linkPath;
}

function Header({
  isMenuOpen,
  toggleMenu,
  closeMenu,
  pathname,
  theme,
  toggleTheme,
}) {
  const onSheetOpenChange = (open) => {
    if (open !== isMenuOpen) {
      if (open) {
        toggleMenu();
      } else {
        closeMenu();
      }
    }
  };

  return (
    <header className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div className="flex items-center gap-3 px-4 py-3 sm:px-6 lg:gap-4 lg:px-6 xl:gap-6 xl:px-8">
        <a
          href="/"
          className="flex shrink-0 items-center gap-3"
          aria-label="Go to the Morongo Basin Ambulance homepage"
        >
          <img
            src="/mba-logo.png"
            alt="Morongo Basin Ambulance EMS logo"
            className="h-10 w-auto sm:h-12"
          />
          <span className="hidden whitespace-nowrap text-sm font-semibold tracking-tight text-slate-900 xl:inline dark:text-slate-100">
            Morongo Basin Ambulance
          </span>
        </a>

        <NavigationMenu
          viewport={false}
          className="hidden max-w-none flex-1 lg:flex"
        >
          <NavigationMenuList className="flex gap-0 xl:gap-1">
            {topNav.map((item) => {
              const active = isCurrentPage(pathname, item.href);

              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "whitespace-nowrap rounded-md px-2 py-1.5 text-[0.8125rem] font-medium text-slate-600 transition-colors xl:px-3 xl:text-sm dark:text-slate-400",
                      "hover:bg-mba-blue-deep hover:text-mba-gold dark:hover:bg-slate-800 dark:hover:text-slate-100",
                      active &&
                        "bg-mba-blue-deep text-mba-gold dark:bg-slate-800 dark:text-slate-100",
                    )}
                  >
                    <a href={item.href}>{item.label}</a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="ml-auto flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className={cn(
              "hidden whitespace-nowrap rounded-md bg-mba-blue px-3.5 text-sm font-medium text-white lg:inline-flex",
              "hover:bg-mba-blue-deep! hover:text-mba-gold",
              pathname === "/lifeline" && "bg-mba-blue-deep",
            )}
          >
            <a href="/lifeline" className="inline-flex items-center gap-1.5">
              <IconHeart className="size-3.5" aria-hidden />
              Support
            </a>
          </Button>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? (
              <IconSun className="size-4.5" aria-hidden />
            ) : (
              <IconMoon className="size-4.5" aria-hidden />
            )}
          </Button>

          <Sheet open={isMenuOpen} onOpenChange={onSheetOpenChange}>
            <SheetTrigger asChild>
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="text-slate-600 hover:bg-slate-100 hover:text-slate-900 lg:hidden dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
                aria-expanded={isMenuOpen}
                aria-controls="site-navigation-sheet"
                aria-label={
                  isMenuOpen ? "Close navigation menu" : "Open navigation menu"
                }
              >
                <IconMenu2 className="size-5" aria-hidden />
              </Button>
            </SheetTrigger>

            <SheetContent
              id="site-navigation-sheet"
              side="right"
              showCloseButton
              className="flex w-70 flex-col gap-0 bg-white p-0 sm:w-[320px] dark:bg-slate-900"
            >
              <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
                <img src="/mba-logo.png" alt="" className="h-8 w-auto" />
                <span className="text-sm font-semibold text-slate-900 dark:text-slate-100">
                  Morongo Basin Ambulance
                </span>
              </div>

              <nav className="flex-1 px-3 py-3" aria-label="Primary">
                <ul className="flex flex-col gap-0.5">
                  {topNav.map((item) => {
                    const active = isCurrentPage(pathname, item.href);

                    return (
                      <li key={item.href}>
                        <SheetClose asChild>
                          <a
                            href={item.href}
                            onClick={closeMenu}
                            className={cn(
                              "block rounded-md px-3 py-2.5 text-sm font-medium text-slate-600 transition-colors dark:text-slate-400",
                              "hover:bg-mba-blue-deep hover:text-mba-gold dark:hover:bg-slate-800 dark:hover:text-slate-100",
                              active &&
                                "bg-mba-blue-deep text-mba-gold dark:bg-slate-800 dark:text-slate-100",
                            )}
                          >
                            {item.label}
                          </a>
                        </SheetClose>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div className=" border-slate-100 p-4 dark:border-slate-800">
                <SheetClose asChild>
                  <Button
                    asChild
                    className={cn(
                      "w-full rounded-md bg-mba-blue text-sm font-medium text-white",
                      "hover:bg-mba-blue-deep! hover:text-mba-gold",
                    )}
                  >
                    <a
                      href="/lifeline"
                      onClick={closeMenu}
                      className="inline-flex items-center justify-center gap-1.5"
                    >
                      <IconHeart className="size-3.5" aria-hidden />
                      Support MBA
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

export default Header;
