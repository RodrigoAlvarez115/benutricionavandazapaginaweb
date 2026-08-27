import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'navy' | 'white'
  className?: string
  priority?: boolean
}

export function Logo({ variant = 'navy', className, priority = false }: LogoProps) {
  const isWhite = variant === 'white'

  return (
    <span className={cn('inline-flex items-center', className)} aria-label="BE Nutrición Avanzada">
      <Image
        src="/images/logo-bena.png"
        alt="BE Nutrición Avanzada"
        width={260}
        height={260}
        priority={priority}
        className={cn('h-16 w-auto object-contain', isWhite && 'h-16')}
      />
    </span>
  )
}
