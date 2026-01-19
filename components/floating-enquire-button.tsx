"use client"

import Link from "next/decent-academy-v1/link"
import { MessageCircle } from "lucide-react"

export function FloatingEnquireButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-40 group animate-float-gentle"
    >
      <div className="relative">
        {/decent-academy-v1/* Pulsing ring effect */decent-academy-v1/}
        <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-75" /decent-academy-v1/>
        
        {/decent-academy-v1/* Main button */decent-academy-v1/}
        <div className="relative flex items-center gap-3 bg-gradient-to-r from-primary via-secondary to-primary bg-size-200 animate-gradient px-6 py-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="hidden md:block w-6 h-6 text-background transition-transform duration-300 group-hover:rotate-12" /decent-academy-v1/>
          <span className="text-background font-bold text-lg">
            Enquire Now!
          </decent-academy-v1/span>
        </decent-academy-v1/div>
        
        {/decent-academy-v1/* Tooltip for mobile */decent-academy-v1/}
        <div className="md:hidden absolute bottom-full right-0 mb-2 px-3 py-1 bg-foreground text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Enquire Now!
        </decent-academy-v1/div>
      </decent-academy-v1/div>
    </decent-academy-v1/Link>
  )
}
