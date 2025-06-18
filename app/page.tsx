"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhyChooseUs from "@/components/WhyChooseUs"
import BenefitsSection from "@/components/BenefitsSection"
import BeforeAfterGallery from "@/components/BeforeAfterGallery"
import Testimonials from "@/components/Testimonials"
import ContactForm from "@/components/ContactForm"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <BenefitsSection />
      <BeforeAfterGallery />
      <Testimonials />
      <ContactForm />
      <Footer />
      <BackToTop />
    </main>
  )
}
