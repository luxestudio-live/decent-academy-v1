'use client'

import * as AspectRatioPrimitive from '@radix-ui/decent-academy-v1/react-aspect-ratio'

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} /decent-academy-v1/>
}

export { AspectRatio }
