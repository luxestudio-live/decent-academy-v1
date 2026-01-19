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
      <Navbar />
      <HeroSection />
      <StatsSection />
      <CoursesPreview />
      <WhyChooseUs />
      <TestimonialsSection />
      <Footer />
    </main>
  )
}
