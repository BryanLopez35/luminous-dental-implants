"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Mail, MapPin, Calendar, User, MessageSquare } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

export default function ContactForm() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    preferredDate: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, language }),
      })

      if (response.ok) {
        const result = await response.json()
        // Scroll to top before navigation
        window.scrollTo(0, 0)
        window.location.href = `/thank-you?id=${result.leadId}`
      } else {
        alert(
          language === "es"
            ? "Hubo un error al enviar tu formulario. Por favor intenta de nuevo."
            : "There was an error submitting your form. Please try again.",
        )
      }
    } catch (error) {
      alert(
        language === "es"
          ? "Hubo un error al enviar tu formulario. Por favor intenta de nuevo."
          : "There was an error submitting your form. Please try again.",
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
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
    <section
      id="contact-form"
      className="py-24 bg-gradient-to-br from-gray-900 via-sky-900 to-gray-900 text-white relative overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16">
          <ScrollAnimation animation="fadeInLeft">
            <div className="space-y-8">
              <div>
                <div className="inline-block bg-sky-500/20 text-sky-300 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  {t("contact.getStartedToday")}
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">{t("contact.title")}</h2>
                <p className="text-xl text-gray-300 leading-relaxed">{t("contact.subtitle")}</p>
              </div>

              <div className="space-y-6">
                <div
                  onClick={handlePhoneClick}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t("contact.call")}</div>
                    <div className="text-sky-300 text-xl font-bold">(725) 291-5588</div>
                    <div className="text-sm text-gray-400">{t("contact.clickToCall")}</div>
                  </div>
                </div>

                <div
                  onClick={handleEmailClick}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t("contact.email")}</div>
                    <div className="text-blue-300 text-lg font-semibold">info@luminousdentallv.com</div>
                    <div className="text-sm text-gray-400">{t("contact.clickToEmail")}</div>
                  </div>
                </div>

                <div
                  onClick={handleVisitClick}
                  className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-sky-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-lg">{t("contact.visit")}</div>
                    <div className="text-indigo-300 font-semibold">
                      1212 S Maryland Pkwy
                      <br />
                      Las Vegas, NV 89104
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation animation="fadeInRight" delay={200}>
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <div className="text-center mb-8">
                <Calendar className="w-12 h-12 text-teal-400 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">{t("contact.form.title")}</h3>
                <p className="text-gray-300">{t("contact.fillForm")}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-300"
                    placeholder={`${t("contact.form.name")} *`}
                  />
                </div>

                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-300"
                    placeholder={`${t("contact.form.email")} *`}
                  />
                </div>

                <div className="relative">
                  <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-300"
                    placeholder={`${t("contact.form.phone")} *`}
                  />
                </div>

                <div className="relative">
                  <Calendar className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    id="preferredDate"
                    name="preferredDate"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white transition-all duration-300"
                  />
                </div>

                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl focus:ring-2 focus:ring-sky-500 focus:border-transparent text-white placeholder-gray-300 transition-all duration-300 resize-none"
                    placeholder={t("contact.form.messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sky-600 to-blue-700 text-white py-5 rounded-2xl font-bold text-lg hover:from-sky-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>{t("contact.form.submitting")}</span>
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5" />
                      <span>{t("contact.form.submit")}</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  {t("contact.form.privacy")}{" "}
                  <a href="/privacy-policy" className="text-sky-400 hover:text-sky-300 underline">
                    {t("contact.form.privacyLink")}
                  </a>{" "}
                  {t("contact.form.and")}{" "}
                  <a href="/terms-of-service" className="text-sky-400 hover:text-sky-300 underline">
                    {t("contact.form.termsLink")}
                  </a>
                </p>
              </form>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
