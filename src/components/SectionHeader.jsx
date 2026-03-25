function SectionHeader({
  eyebrow,
  title,
  description,
  className = '',
  titleClassName = '',
}) {
  return (
    <div className={className}>
      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-mba-blue">
        {eyebrow}
      </p>
      <h2
        className={`mt-3 font-heading text-3xl leading-tight tracking-[-0.04em] text-slate-950 sm:text-4xl ${titleClassName}`}
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-sm leading-7 text-slate-500">{description}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
