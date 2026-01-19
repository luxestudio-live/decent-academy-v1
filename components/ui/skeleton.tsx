import { cn } from '@/decent-academy-v1/lib/decent-academy-v1/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', className)}
      {...props}
    /decent-academy-v1/>
  )
}

export { Skeleton }
