"use client"

import Image from "next/image"
import { Phone, Calendar, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Header() {
  const { language, setLanguage, t } = useLanguage()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    setIsMobileMenuOpen(false)
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+17028058688"
  }

  return (
    <header
      className={`bg-white sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-lg border-b-2 border-sky-100" : "shadow-sm border-b border-gray-100"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar - Desktop only */}
        <div
          className={`hidden lg:flex items-center justify-between text-sm border-b border-gray-100 transition-all duration-300 ${
            isScrolled ? "py-1" : "py-2"
          }`}
        >
          <div className="flex items-center space-x-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-sky-600" />
              <span>(702) 805-8688</span>
            </div>
            <div className="text-gray-400">|</div>
            <span>📍 Las Vegas, Nevada</span>
            <div className="text-gray-400">|</div>
            <span className="text-blue-600 font-semibold">✨ {t("header.freeConsultationAvailable")}</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-600 hover:text-sky-600 transition-colors px-2 py-1 rounded hover:bg-gray-50"
            >
              {language === "es" ? (
                <>
                  <Image src="/usa-flag.svg" alt="USA flag" width={24} height={16} className="h-4 w-auto" />
                  <span>English</span>
                </>
              ) : (
                <>
                  <Image src="/mexico-flag.svg" alt="Bandera de México" width={24} height={16} className="h-4 w-auto" />
                  <span>Español</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Main header */}
        <div
          className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
        >
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="Luminous Dental LV"
              width={200}
              height={60}
              className={`w-auto transition-all duration-300 ${isScrolled ? "h-10" : "h-12"}`}
              priority
            />
            <div className="hidden sm:block border-l border-gray-200 pl-3">
              <p className="text-sm text-sky-600 font-medium">{t("header.specialists")}</p>
              <p className="text-xs text-gray-500">Las Vegas, Nevada</p>
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={handlePhoneClick}
              className="flex items-center space-x-2 text-gray-700 hover:text-sky-600 transition-colors font-medium px-4 py-2 rounded-lg hover:bg-sky-50"
            >
              <Phone className="w-4 h-4" />
              <div className="text-left">
                <div className="text-sm font-semibold">(702) 805-8688</div>
                <div className="text-xs text-gray-500">{t("header.callNow")}</div>
              </div>
            </button>
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center space-x-2 transform hover:scale-105"
            >
              <Calendar className="w-4 h-4" />
              <span>{t("header.consultation")}</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5 text-gray-600" /> : <Menu className="w-5 h-5 text-gray-600" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4 bg-white animate-fadeInDown">
            {/* Mobile Contact */}
            <div className="space-y-3">
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 w-full text-left p-4 bg-sky-50 rounded-lg hover:bg-sky-100 transition-colors"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-gray-900">(702) 805-8688</div>
                  <div className="text-sm text-sky-600">{t("header.callForFreeConsultation")}</div>
                </div>
              </button>

              <button
                onClick={scrollToForm}
                className="w-full bg-gradient-to-r from-sky-600 to-blue-600 text-white px-6 py-4 rounded-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Calendar className="w-5 h-5" />
                <span>{t("header.consultation")}</span>
              </button>

              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center space-x-2 w-full text-gray-600 hover:text-sky-600 transition-colors py-3 border border-gray-200 rounded-lg hover:border-sky-200"
              >
                {language === "es" ? (
                  <>
                    <Image src="/usa-flag.svg" alt="USA flag" width={24} height={16} className="h-4 w-auto" />
                    <span>English</span>
                  </>
                ) : (
                  <>
                    <Image src="/mexico-flag.svg" alt="Bandera de México" width={24} height={16} className="h-4 w-auto" />
                    <span>Español</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
