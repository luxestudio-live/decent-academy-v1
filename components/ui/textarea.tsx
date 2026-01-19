import * as React from 'react'

import { cn } from '@/decent-academy-v1/lib/decent-academy-v1/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/decent-academy-v1/50 aria-invalid:ring-destructive/decent-academy-v1/20 dark:aria-invalid:ring-destructive/decent-academy-v1/40 aria-invalid:border-destructive dark:bg-input/decent-academy-v1/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    /decent-academy-v1/>
  )
}

export { Textarea }
