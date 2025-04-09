import { HeroSection } from "@/components/HeroSection"
import { AboutSection } from "@/components/AboutSection"
import { BenefitsSection } from "@/components/BenefitsSection"
import { ClassesSection } from "@/components/ClassesSection"
import { TestimonialsSection } from "@/components/TestimonialsSection"
import { GallerySection } from "@/components/GallerySection"
import { CTASection } from "@/components/CTASection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <ClassesSection />
      <TestimonialsSection />
      <GallerySection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  )
}
