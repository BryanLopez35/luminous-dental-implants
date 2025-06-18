"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Eye, Zap, Star, Award } from "lucide-react"
import BeforeAfterComparison from "./BeforeAfterComparison"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

const cases = [
  {
    id: 1,
    before: "/placeholder.svg?height=500&width=600&text=Before+Single+Implant",
    after: "/placeholder.svg?height=500&width=600&text=After+Single+Implant",
    descriptionKey: "gallery.case1" as const,
    duration: "3 months",
    type: "Single Implant",
    patientAge: "45",
    satisfaction: "100%",
  },
  {
    id: 2,
    before: "/placeholder.svg?height=500&width=600&text=Before+Full+Mouth",
    after: "/placeholder.svg?height=500&width=600&text=After+Full+Mouth",
    descriptionKey: "gallery.case2" as const,
    duration: "6 months",
    type: "Full Mouth",
    patientAge: "62",
    satisfaction: "100%",
  },
  {
    id: 3,
    before: "/placeholder.svg?height=500&width=600&text=Before+Multiple+Implants",
    after: "/placeholder.svg?height=500&width=600&text=After+Multiple+Implants",
    descriptionKey: "gallery.case3" as const,
    duration: "4 months",
    type: "Multiple Implants",
    patientAge: "38",
    satisfaction: "100%",
  },
]

export default function BeforeAfterGallery() {
  const { t } = useLanguage()
  const [currentCase, setCurrentCase] = useState(0)

  const nextCase = () => {
    setCurrentCase((prev) => (prev + 1) % cases.length)
  }

  const prevCase = () => {
    setCurrentCase((prev) => (prev - 1 + cases.length) % cases.length)
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-sky-25 to-blue-25 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-sky-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-indigo-100 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314B8A6' fillOpacity='0.1'%3E%3Cpath d='M40 40c11.046 0 20-8.954 20-20S51.046 0 40 0 20 8.954 20 20s8.954 20 20 20zm0-8c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-sky-100 text-blue-800 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-sky-200">
              <Eye className="w-4 h-4" />
              <span>{t("gallery.realTransformations")}</span>
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">{t("gallery.title")}</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("gallery.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="max-w-6xl mx-auto">
          <ScrollAnimation animation="fadeInUp" delay={200}>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-teal-100">
              {/* Case info header */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 space-y-4 lg:space-y-0">
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="bg-gradient-to-r from-blue-500 to-sky-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Case #{cases[currentCase].id}
                    </div>
                    <div className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-bold">
                      {cases[currentCase].type}
                    </div>
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900">
                    {t(cases[currentCase].descriptionKey)}
                  </h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-200">
                    <div className="text-2xl font-bold text-emerald-600">{cases[currentCase].duration}</div>
                    <div className="text-xs text-emerald-700 font-semibold">{t("gallery.treatmentTime")}</div>
                  </div>
                  <div className="bg-teal-50 rounded-2xl p-4 border border-teal-200">
                    <div className="text-2xl font-bold text-teal-600">{cases[currentCase].patientAge}</div>
                    <div className="text-xs text-teal-700 font-semibold">{t("gallery.patientAge")}</div>
                  </div>
                  <div className="bg-cyan-50 rounded-2xl p-4 border border-cyan-200">
                    <div className="text-2xl font-bold text-cyan-600">{cases[currentCase].satisfaction}</div>
                    <div className="text-xs text-cyan-700 font-semibold">{t("gallery.satisfaction")}</div>
                  </div>
                </div>
              </div>

              {/* Before/After Comparison */}
              <div className="relative">
                <BeforeAfterComparison
                  beforeImage={cases[currentCase].before}
                  afterImage={cases[currentCase].after}
                  alt={t(cases[currentCase].descriptionKey)}
                />

                {/* Floating achievement badges */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-emerald-200">
                  <div className="flex items-center space-x-2">
                    <Award className="w-5 h-5 text-emerald-600" />
                    <span className="text-sm font-bold text-emerald-700">{t("gallery.awardWinning")}</span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-lg border border-teal-200">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-amber-500 fill-current" />
                    <span className="text-sm font-bold text-teal-700">{t("gallery.fiveStarResult")}</span>
                  </div>
                </div>
              </div>

              {/* Navigation and indicators */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevCase}
                  className="group flex items-center space-x-3 bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  <span>{t("gallery.previousCase")}</span>
                </button>

                <div className="flex space-x-3">
                  {cases.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCase(index)}
                      className={`w-4 h-4 rounded-full transition-all duration-300 ${
                        index === currentCase
                          ? "bg-gradient-to-r from-emerald-500 to-teal-600 scale-125 shadow-lg"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to case ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextCase}
                  className="group flex items-center space-x-3 bg-gradient-to-r from-emerald-600 to-cyan-600 text-white px-6 py-4 rounded-2xl font-semibold hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <span>{t("gallery.nextCase")}</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>

              {/* Patient testimonial for current case */}
              <div className="mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    P
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">{t("gallery.patientTestimonial")}</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 italic font-medium">"{t("gallery.testimonialText")}"</p>
              </div>
            </div>
          </ScrollAnimation>
        </div>

        {/* Bottom CTA */}
        <ScrollAnimation animation="fadeInUp" delay={400}>
          <div className="text-center mt-16">
            <button
              onClick={() => {
                const formElement = document.getElementById("contact-form")
                if (formElement) {
                  formElement.scrollIntoView({ behavior: "smooth", block: "start" })
                }
              }}
              className="group bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white px-10 py-5 rounded-3xl font-bold text-xl hover:from-emerald-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 flex items-center space-x-3 mx-auto"
            >
              <Eye className="w-6 h-6" />
              <span>{t("gallery.seeTransformation")}</span>
              <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-gray-600 mt-4 font-medium">{t("gallery.bookFreeConsultation")}</p>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
