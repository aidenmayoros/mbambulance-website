import { Badge } from "@/components/ui/badge";

function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  eyebrowClassName = "",
  titleClassName = "",
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Badge
          variant="outline"
          className={`mb-3 w-fit border-mba-blue/35 bg-mba-tan/50 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-mba-blue-deep dark:border-mba-blue/25 dark:bg-slate-800 dark:text-slate-50 sm:text-[0.65rem] ${eyebrowClassName}`}
        >
          {eyebrow}
        </Badge>
      ) : null}
      {title ? (
        <h2
          className={`font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl dark:text-slate-50 ${titleClassName}`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export default SectionHeader;
