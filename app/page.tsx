import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/decent-academy-v1/hero-section"
import { StatsSection } from "@/components/sections/decent-academy-v1/stats-section"
import { CoursesPreview } from "@/components/sections/decent-academy-v1/courses-preview"
import { TestimonialsSection } from "@/components/sections/decent-academy-v1/testimonials-section"
import { WhyChooseUs } from "@/components/sections/decent-academy-v1/why-choose-us"
import { Footer } from "@/components/footer"

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
