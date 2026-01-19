import { Navbar } from "@/decent-academy-v1/components/decent-academy-v1/navbar"
import { HeroSection } from "@/decent-academy-v1/components/decent-academy-v1/sections/decent-academy-v1/hero-section"
import { StatsSection } from "@/decent-academy-v1/components/decent-academy-v1/sections/decent-academy-v1/stats-section"
import { CoursesPreview } from "@/decent-academy-v1/components/decent-academy-v1/sections/decent-academy-v1/courses-preview"
import { TestimonialsSection } from "@/decent-academy-v1/components/decent-academy-v1/sections/decent-academy-v1/testimonials-section"
import { WhyChooseUs } from "@/decent-academy-v1/components/decent-academy-v1/sections/decent-academy-v1/why-choose-us"
import { Footer } from "@/decent-academy-v1/components/decent-academy-v1/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar /decent-academy-v1/>
      <HeroSection /decent-academy-v1/>
      <StatsSection /decent-academy-v1/>
      <CoursesPreview /decent-academy-v1/>
      <WhyChooseUs /decent-academy-v1/>
      <TestimonialsSection /decent-academy-v1/>
      <Footer /decent-academy-v1/>
    </decent-academy-v1/main>
  )
}
