import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { StatsSection } from "@/components/sections/stats-section"
import { CoursesPreview } from "@/components/sections/courses-preview"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { WhyChooseUs } from "@/components/sections/why-choose-us"
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
