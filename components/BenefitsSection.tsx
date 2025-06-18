"use client"

import { Check, ArrowRight } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

const benefits = [
  "benefits.permanent",
  "benefits.natural",
  "benefits.chewing",
  "benefits.boneLoss",
  "benefits.cleaning",
  "benefits.confidence",
] as const

export default function BenefitsSection() {
  const { t } = useLanguage()

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314B8A6' fillOpacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <ScrollAnimation animation="fadeInLeft">
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t("benefits.lifeBenefits")}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  {t("benefits.title")}
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">{t("benefits.subtitle")}</p>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <ScrollAnimation key={index} animation="fadeInLeft" delay={index * 50}>
                    <div className="flex items-start space-x-4 group">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium text-lg group-hover:text-gray-900 transition-colors">
                        {t(benefit)}
                      </span>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              <ScrollAnimation animation="fadeInUp" delay={300}>
                <button
                  onClick={scrollToForm}
                  className="group bg-gradient-to-r from-blue-600 to-sky-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-sky-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-3"
                >
                  <span>{t("benefits.cta")}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </ScrollAnimation>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInRight" delay={200}>
            <div className="relative">
              <div className="relative z-10 group">
                <Image
                  src="/placeholder.svg?height=600&width=700&text=Dental+Procedure"
                  alt="Dental implant procedure illustration"
                  width={700}
                  height={600}
                  className="rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                />

                {/* Floating stats cards */}
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl animate-float">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-sky-600">98%</div>
                    <div className="text-sm text-gray-600">{t("benefits.successRate")}</div>
                  </div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl animate-float delay-1000">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">{t("benefits.yearsLasting")}</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-full h-full bg-gradient-to-br from-blue-100 to-sky-200 rounded-3xl -z-10 opacity-50"></div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
