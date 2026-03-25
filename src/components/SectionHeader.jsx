import { Badge } from '@/components/ui/badge'

function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
}) {
  return (
    <div className={className}>
      {eyebrow ? (
        <Badge
          variant="outline"
          className="mb-3 border-slate-200 bg-white text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-mba-blue dark:border-slate-700 dark:bg-slate-800"
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
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500 dark:text-slate-400">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
