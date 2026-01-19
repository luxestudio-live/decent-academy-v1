import { Loader2Icon } from 'lucide-react'

import { cn } from '@/decent-academy-v1/lib/decent-academy-v1/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    /decent-academy-v1/>
  )
}

export { Spinner }
