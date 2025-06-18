"use client"

import Image from "next/image"
import { ArrowRight, Star, CheckCircle, Phone } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

export default function HeroSection() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+17252915588"
  }

  return (
    <section className="relative bg-gradient-to-br from-sky-50 via-white to-blue-50 py-16 lg:py-24 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-100 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-cyan-100 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Floating medical icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-8 h-8 bg-sky-200 rounded-lg opacity-40 animate-float"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-blue-200 rounded-full opacity-40 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-10 h-10 bg-indigo-200 rounded-lg opacity-40 animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <ScrollAnimation animation="fadeInUp">
              <div className="space-y-6">
                {/* Simple trust indicator */}
                <div className="flex items-center space-x-3 bg-white/80 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-sky-100 w-fit">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold text-sm">{t("hero.rating")}</span>
                </div>

                {/* Main headline */}
                <div className="space-y-4">
                  <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                    <span className="block text-gray-900">Dental</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">
                      Implants
                    </span>
                    <span className="block text-2xl lg:text-4xl text-gray-700 font-medium mt-2">in Las Vegas</span>
                  </h1>

                  {/* Texto con formato */}
                  <div className="relative">
                    <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                      {t("hero.transformSmile")}{" "}
                      <span className="font-bold text-sky-700 bg-sky-100 px-2 py-1 rounded-lg">
                        {t("hero.permanentNatural")}
                      </span>{" "}
                      {t("hero.dentalImplants")}{" "}
                      <span className="font-bold text-blue-700">{t("hero.painFreeProcedures")}</span>{" "}
                      {t("hero.lastingResults")}
                    </p>
                    {/* Decorative accent */}
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="fadeInUp" delay={200}>
              <div className="space-y-6">
                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={scrollToForm}
                    className="group bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-xl font-bold text-base hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>{t("hero.bookFreeConsultation")}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button
                    onClick={handlePhoneClick}
                    className="group border-2 border-sky-600 text-sky-700 px-6 py-3 rounded-xl font-bold text-base hover:bg-sky-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 bg-white/80 backdrop-blur-sm flex items-center justify-center space-x-2 whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" />
                    <span>{t("hero.phone")}</span>
                  </button>
                </div>

                {/* Simple key features */}
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full border border-blue-200">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">{t("hero.features.consultation")}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-sky-50 text-sky-700 px-4 py-2 rounded-full border border-sky-200">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">{t("hero.features.sameDay")}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-indigo-50 text-indigo-700 px-4 py-2 rounded-full border border-indigo-200">
                    <CheckCircle className="w-4 h-4" />
                    <span className="font-semibold">{t("hero.features.financing")}</span>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>

          <ScrollAnimation animation="fadeInRight" delay={300}>
            <div className="relative">
              {/* Main image container */}
              <div className="relative z-10 group">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <Image
                    src="images/dental-implants.png?height=600&width=500&text=Happy+Patient+Smile"
                    alt="Happy patient with dental implants"
                    width={500}
                    height={600}
                    className="group-hover:scale-105 transition-all duration-700"
                    priority
                  />
                </div>

                {/* Single floating testimonial */}
                <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl max-w-xs animate-float border border-blue-100">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      M
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Maria S.</div>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm font-medium">"{t("hero.testimonialText")}"</p>
                </div>

                {/* Single floating stat */}
                <div className="absolute -top-4 -right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg animate-float delay-1000 border border-sky-100">
                  <div className="text-center">
                    <div className="text-xl font-bold text-sky-600">98%</div>
                    <div className="text-xs text-gray-600 font-semibold">{t("hero.successRate")}</div>
                  </div>
                </div>
              </div>

              {/* Background decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-full h-full bg-gradient-to-br from-sky-100 via-blue-100 to-indigo-100 rounded-3xl -z-10 opacity-60"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full -z-10 opacity-50"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
