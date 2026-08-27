import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'

type SectionHeaderProps = {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  inverted?: boolean
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  inverted = false,
}: SectionHeaderProps) {
  return (
    <Reveal
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            'flex items-center gap-3',
            align === 'center' && 'justify-center',
          )}
        >
          <span className="h-px w-8 bg-tech" aria-hidden="true" />
          <span
            className={cn(
              'text-xs font-semibold uppercase tracking-[0.18em]',
              inverted ? 'text-celeste' : 'text-tech',
            )}
          >
            {eyebrow}
          </span>
        </div>
      ) : null}

      <h2
        className={cn(
          'text-pretty text-3xl font-bold leading-tight md:text-4xl lg:text-[2.75rem]',
          inverted ? 'text-white' : 'text-navy',
        )}
      >
        {title}
      </h2>

      {subtitle ? (
        <p
          className={cn(
            'max-w-2xl text-pretty text-base leading-relaxed md:text-lg',
            inverted ? 'text-celeste/90' : 'text-muted-foreground',
            align === 'center' && 'mx-auto',
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </Reveal>
  )
}
