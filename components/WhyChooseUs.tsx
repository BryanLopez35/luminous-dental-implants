"use client"

import { Users, Clock, Shield, Heart, Microscope, Star, CheckCircle } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

const features = [
  {
    icon: Microscope,
    titleKey: "whyChoose.expert.title" as const,
    descriptionKey: "whyChoose.expert.description" as const,
    color: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
    borderColor: "border-sky-200",
    stat: "15+",
    statLabelKey: "whyChoose.experience" as const,
  },
  {
    icon: Users,
    titleKey: "whyChoose.cases.title" as const,
    descriptionKey: "whyChoose.cases.description" as const,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    stat: "1000+",
    statLabelKey: "whyChoose.successCases" as const,
  },
  {
    icon: Clock,
    titleKey: "whyChoose.sameDay.title" as const,
    descriptionKey: "whyChoose.sameDay.description" as const,
    color: "from-indigo-500 to-sky-600",
    bgColor: "bg-indigo-50",
    borderColor: "border-indigo-200",
    stat: "Same Day",
    statLabelKey: "whyChoose.service" as const,
  },
  {
    icon: Heart,
    titleKey: "whyChoose.warranty.title" as const,
    descriptionKey: "whyChoose.warranty.description" as const,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-50",
    borderColor: "border-rose-200",
    stat: "Lifetime",
    statLabelKey: "whyChoose.warranty" as const,
  },
]

export default function WhyChooseUs() {
  const { t } = useLanguage()

  return (
    <section className="py-24 bg-gradient-to-b from-white via-sky-25 to-blue-25 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314B8A6' fillOpacity='0.1'%3E%3Cpath d='M30 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15zm0-6c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating medical elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-6 h-6 bg-sky-200 rounded-full opacity-30 animate-float"></div>
        <div className="absolute top-40 right-20 w-8 h-8 bg-blue-200 rounded-lg opacity-30 animate-float delay-1000"></div>
        <div className="absolute bottom-32 left-20 w-4 h-4 bg-indigo-200 rounded-full opacity-30 animate-float delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-100 to-blue-100 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-sky-200">
              <Star className="w-4 h-4 fill-current" />
              <span>{t("whyChoose.whyChooseUs")}</span>
              <Star className="w-4 h-4 fill-current" />
            </div>
            <h2 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              <span className="block">{t("whyChoose.title")}</span>
            </h2>
            <p className="text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {t("whyChoose.subtitle")}
            </p>
          </div>
        </ScrollAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <ScrollAnimation key={index} animation="fadeInUp" delay={index * 150}>
              <div
                className={`group relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border-2 ${feature.borderColor} hover:border-opacity-50 overflow-hidden`}
              >
                {/* Background gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>

                {/* Icon container */}
                <div className="relative z-10 mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-3xl flex items-center justify-center mx-auto shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}
                  >
                    <feature.icon className="w-10 h-10 text-white" />
                  </div>
                  {/* Floating stat */}
                  <div className="absolute -top-2 -right-2 bg-white rounded-full px-3 py-1 shadow-lg border-2 border-gray-100">
                    <div className="text-xs font-bold text-gray-900">{feature.stat}</div>
                    <div className="text-xs text-gray-600">{t(feature.statLabelKey)}</div>
                  </div>
                </div>

                <div className="relative z-10 text-center space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {t(feature.descriptionKey)}
                  </p>

                  {/* Check mark */}
                  <div className="flex justify-center">
                    <div
                      className={`w-8 h-8 bg-gradient-to-br ${feature.color} rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0`}
                    >
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Decorative corner elements */}
                <div
                  className={`absolute top-4 right-4 w-4 h-4 ${feature.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                ></div>
                <div
                  className={`absolute bottom-4 left-4 w-3 h-3 ${feature.bgColor} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100`}
                ></div>
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA section */}
        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 rounded-3xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
                }}
              ></div>
            </div>

            <div className="relative z-10 text-center space-y-6">
              <h3 className="text-3xl lg:text-4xl font-bold">{t("whyChoose.readyTransform")}</h3>
              <p className="text-xl text-teal-100 max-w-2xl mx-auto">{t("whyChoose.join1000Patients")}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => {
                    const formElement = document.getElementById("contact-form")
                    if (formElement) {
                      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
                    }
                  }}
                  className="bg-white text-sky-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-3"
                >
                  <CheckCircle className="w-6 h-6" />
                  <span>{t("whyChoose.bookConsultation")}</span>
                </button>
                <div className="flex items-center space-x-2 text-teal-100">
                  <Shield className="w-5 h-5" />
                  <span className="font-semibold">{t("whyChoose.riskFreeConsultation")}</span>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
