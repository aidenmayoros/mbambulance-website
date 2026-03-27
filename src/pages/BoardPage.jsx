import { useState } from "react";
import { IconMapPin, IconPhone } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { PAGE_CONTAINER } from "@/lib/pageLayout";
import { cn } from "@/lib/utils";
import { boardMembers } from "../data/siteContent";

const BIO_PREVIEW_LENGTH = 280;

function getPreviewBio(bio) {
  if (bio.length <= BIO_PREVIEW_LENGTH) {
    return bio;
  }

  return `${bio.slice(0, BIO_PREVIEW_LENGTH).trimEnd()}...`;
}

function BoardPage() {
  const [expandedMembers, setExpandedMembers] = useState({});

  const toggleMemberBio = (memberName) => {
    setExpandedMembers((currentExpandedMembers) => ({
      ...currentExpandedMembers,
      [memberName]: !currentExpandedMembers[memberName],
    }));
  };

  return (
    <main className="flex flex-col">
      <section className="w-full border-b border-mba-blue/20 bg-white dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "py-8 sm:py-10 md:py-12 lg:py-14")}>
          <div className="max-w-4xl">
            <Badge
              variant="outline"
              className="w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep sm:text-[0.65rem] dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50"
            >
              Board of Directors
            </Badge>
            <h1 className="mt-5 font-heading text-[2.4rem] leading-[0.93] tracking-[-0.05em] text-mba-blue-deep sm:mt-6 sm:text-5xl sm:leading-[0.94] lg:text-6xl dark:text-slate-50">
              Meet Our Leadership
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:mt-6 sm:text-lg dark:text-slate-400">
              Here are the dedicated leaders guiding Morongo Basin Ambulance's
              services in our mission to provide exceptional emergency medical
              care to our community.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full border-b border-mba-gold/30 bg-mba-tan dark:border-mba-blue/10 dark:bg-slate-900">
        <div className={cn(PAGE_CONTAINER, "grid gap-4 py-6 sm:py-8 md:py-10")}>
          {boardMembers.map((member) =>
            (() => {
              const isExpanded = Boolean(expandedMembers[member.name]);
              const shouldShowToggle = member.bio.length > BIO_PREVIEW_LENGTH;
              const displayedBio = isExpanded
                ? member.bio
                : getPreviewBio(member.bio);

              return (
                <Card
                  key={member.name}
                  className="overflow-hidden rounded-xl border-mba-blue/25 bg-white p-0 py-0 ring-0 dark:border-mba-blue/20 dark:bg-slate-900"
                >
                  <div className="grid gap-0 lg:grid-cols-[minmax(220px,280px)_1fr]">
                    <div className="self-start overflow-hidden bg-mba-blue/10 dark:bg-slate-800">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="block aspect-4/3 w-full object-cover object-[50%_18%] lg:aspect-4/5"
                      />
                    </div>

                    <div className="flex flex-col gap-5 p-5 sm:p-6 lg:p-8">
                      <div>
                        <CardTitle className="font-heading text-2xl leading-tight tracking-[-0.03em] text-mba-blue-deep sm:text-3xl dark:text-slate-50">
                          {member.name}
                        </CardTitle>
                        <CardDescription className="mt-1.5 text-sm font-medium text-mba-blue-deep dark:text-mba-gold">
                          {member.role}
                        </CardDescription>
                      </div>

                      <Separator className="bg-mba-blue/20 dark:bg-slate-700" />

                      <div>
                        <Badge
                          variant="outline"
                          className="w-fit border-mba-gold/35 bg-white text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-gold/25 dark:bg-slate-800 dark:text-slate-50"
                        >
                          Experience &amp; Service
                        </Badge>
                        <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8 dark:text-slate-400">
                          {displayedBio}
                        </p>
                        {shouldShowToggle ? (
                          <div className="mt-4">
                            <Button
                              type="button"
                              variant="outline"
                              size="sm"
                              onClick={() => toggleMemberBio(member.name)}
                              className="rounded-full border-mba-blue/30 bg-white/90 text-mba-blue-deep cursor-pointer hover:bg-mba-blue-deep! hover:text-mba-gold dark:border-mba-blue/20 dark:bg-slate-800 dark:text-slate-100"
                            >
                              {isExpanded ? "Show Less" : "Show More"}
                            </Button>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })(),
          )}
        </div>
      </section>
    </main>
  );
}

export default BoardPage;
