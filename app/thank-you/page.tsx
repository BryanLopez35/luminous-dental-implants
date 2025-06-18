"use client"

import { Suspense, useEffect } from "react"
import Link from "next/link"
import { CheckCircle, Phone, Mail, Calendar, ArrowRight, Star, Award, Copy, Check } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import BackToTop from "@/components/BackToTop"

function ThankYouContent({ searchParams }: { searchParams: { id?: string } }) {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)
  const leadId = searchParams.id || "LUM-" + Math.random().toString(36).substr(2, 8).toUpperCase()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const copyToClipboard = () => {
    if (leadId) {
      navigator.clipboard.writeText(leadId)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+17252915588"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:info@luminousdentallv.com"
  }

  const handleVisitClick = () => {
    window.open("https://maps.app.goo.gl/UGHxrFbAqnPVkd648", "_blank")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-sky-100 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-100 rounded-full opacity-10 animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          {/* Success Icon */}
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl animate-bounce">
              <CheckCircle className="w-16 h-16 text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center animate-pulse">
              <Star className="w-4 h-4 text-amber-800 fill-current" />
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600">
                {t("thankYou.title")}
              </span>
              <span className="block text-3xl lg:text-4xl text-gray-700 font-medium mt-2">
                {t("thankYou.subtitle")}
              </span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("thankYou.description")}
            </p>
          </div>

          {/* Reference ID */}
          {leadId && (
            <div className="bg-white/90 backdrop-blur-sm border-2 border-sky-200 rounded-3xl p-8 shadow-2xl max-w-md mx-auto">
              <div className="flex items-center justify-center space-x-3 mb-4">
                <Award className="w-8 h-8 text-sky-600" />
                <h2 className="text-2xl font-bold text-sky-900">{t("thankYou.referenceId")}</h2>
              </div>
              <div className="bg-gradient-to-r from-sky-600 to-blue-700 text-white px-6 py-4 rounded-2xl relative">
                <p className="text-3xl font-bold font-mono tracking-wider">{leadId}</p>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-2 right-2 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-lg flex items-center justify-center transition-colors"
                  title={t("thankYou.copyId")}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-sm text-sky-700 mt-3 font-medium">📋 {t("thankYou.keepId")}</p>
            </div>
          )}

          {/* Process Steps */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-sky-100">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12">{t("thankYou.whatNext")}</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "1",
                  title: t("thankYou.step1.title"),
                  description: t("thankYou.step1.description"),
                  icon: Phone,
                  color: "from-sky-500 to-blue-600",
                },
                {
                  step: "2",
                  title: t("thankYou.step2.title"),
                  description: t("thankYou.step2.description"),
                  icon: Calendar,
                  color: "from-blue-500 to-indigo-600",
                },
                {
                  step: "3",
                  title: t("thankYou.step3.title"),
                  description: t("thankYou.step3.description"),
                  icon: Award,
                  color: "from-indigo-500 to-sky-600",
                },
                {
                  step: "4",
                  title: t("thankYou.step4.title"),
                  description: t("thankYou.step4.description"),
                  icon: Star,
                  color: "from-sky-500 to-blue-600",
                },
              ].map((item, index) => (
                <div key={index} className="relative group">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-gray-900 to-sky-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
            <h2 className="text-3xl font-bold mb-8">{t("thankYou.needHelp")}</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <button
                onClick={handlePhoneClick}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t("contact.call")}</h3>
                <p className="text-sky-300 font-bold text-xl">(725) 291-5588</p>
                <p className="text-sm text-gray-300 mt-1">{t("thankYou.clickToCall")}</p>
              </button>

              <button
                onClick={handleEmailClick}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t("contact.email")}</h3>
                <p className="text-blue-300 font-semibold">info@luminousdentallv.com</p>
                <p className="text-sm text-gray-300 mt-1">{t("thankYou.clickToEmail")}</p>
              </button>

              <button
                onClick={handleVisitClick}
                className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-sky-600 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-2">{t("contact.visit")}</h3>
                <p className="text-indigo-300 text-center font-semibold">
                  1212 S Maryland Pkwy
                  <br />
                  Las Vegas, NV 89104
                </p>
                <p className="text-sm text-gray-300 mt-1">{t("thankYou.clickToVisit")}</p>
              </button>
            </div>
          </div>

          {/* Return Button */}
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-sky-600 to-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-sky-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            <span>{t("thankYou.return")}</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function ThankYouPage({ searchParams }: { searchParams: { id?: string } }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        }
      >
        <ThankYouContent searchParams={searchParams} />
      </Suspense>
      <Footer />
      <BackToTop />
    </div>
  )
}
