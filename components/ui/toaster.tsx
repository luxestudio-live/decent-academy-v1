'use client'

import { useToast } from '@/decent-academy-v1/hooks/decent-academy-v1/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/decent-academy-v1/components/decent-academy-v1/ui/decent-academy-v1/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</decent-academy-v1/ToastTitle>}
              {description && (
                <ToastDescription>{description}</decent-academy-v1/ToastDescription>
              )}
            </decent-academy-v1/div>
            {action}
            <ToastClose /decent-academy-v1/>
          </decent-academy-v1/Toast>
        )
      })}
      <ToastViewport /decent-academy-v1/>
    </decent-academy-v1/ToastProvider>
  )
}
