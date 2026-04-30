"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Star, Award } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"

export default function Footer() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+17028058688"
  }

  const handleEmailClick = () => {
    window.location.href = "mailto:info@luminousdentallv.com"
  }

  const handleVisitClick = () => {
    window.open("https://maps.app.goo.gl/UGHxrFbAqnPVkd648", "_blank")
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-sky-900 to-blue-900 text-white relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-400 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-400 rounded-full opacity-5 blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%2314B8A6' fillOpacity='0.1'%3E%3Cpath d='M30 30c8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative">
        {/* Top CTA Section */}
        <div className="text-center mb-16">
          <div className="bg-gradient-to-r from-sky-600 to-blue-600 rounded-3xl p-8 lg:p-12 shadow-2xl border border-sky-500/20">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Award className="w-8 h-8 text-white" />
              <h3 className="text-3xl lg:text-4xl font-bold text-white">{t("footer.readyTransform")}</h3>
              <Award className="w-8 h-8 text-white" />
            </div>
            <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">{t("footer.join1000Patients")}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={scrollToForm}
                className="bg-white text-sky-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-3"
              >
                <Star className="w-6 h-6 fill-current" />
                <span>{t("footer.bookConsultation")}</span>
              </button>
              <button
                onClick={handlePhoneClick}
                className="border-2 border-white text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white hover:text-teal-700 transition-all duration-300 flex items-center space-x-3"
              >
                <Phone className="w-6 h-6" />
                <span>(702) 805-8688</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Luminous Dental LV"
                width={200}
                height={60}
                className="h-14 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sky-300 font-semibold mb-4 text-lg">{t("footer.specialists")}</p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-md">{t("footer.description")}</p>

            {/* Trust indicators */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-sky-500/20">
                <div className="text-2xl font-bold text-sky-300">1000+</div>
                <div className="text-sm text-gray-400">{t("footer.patients")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-blue-500/20">
                <div className="text-2xl font-bold text-blue-300">98%</div>
                <div className="text-sm text-gray-400">{t("footer.success")}</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-indigo-500/20">
                <div className="text-2xl font-bold text-indigo-300">15+</div>
                <div className="text-sm text-gray-400">{t("footer.years")}</div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-600 transition-all duration-300 group border border-white/20"
              >
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-600 transition-all duration-300 group border border-white/20"
              >
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-sky-600 transition-all duration-300 group border border-white/20"
              >
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-300 flex items-center space-x-2">
              <Star className="w-5 h-5 fill-current" />
              <span>{t("footer.services")}</span>
            </h4>
            <ul className="space-y-4 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block py-1 hover:text-sky-300"
                >
                  {t("footer.services.single")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block py-1 hover:text-sky-300"
                >
                  {t("footer.services.multiple")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block py-1 hover:text-sky-300"
                >
                  {t("footer.services.fullMouth")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block py-1 hover:text-sky-300"
                >
                  {t("footer.services.dentures")}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors hover:translate-x-1 transform duration-300 block py-1 hover:text-sky-300"
                >
                  {t("footer.services.bone")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-teal-300 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span>{t("footer.contact")}</span>
            </h4>
            <div className="space-y-6 text-gray-300">
              <button
                onClick={handleVisitClick}
                className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg border border-white/10 hover:border-sky-400 w-full text-left group"
              >
                <MapPin className="w-6 h-6 text-sky-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">1212 S Maryland Pkwy</p>
                  <p className="text-gray-300">Las Vegas, NV 89104</p>
                </div>
              </button>
              <button
                onClick={handlePhoneClick}
                className="flex items-center space-x-3 hover:text-white transition-colors group p-3 bg-white/5 rounded-lg border border-white/10 hover:border-sky-400 w-full text-left"
              >
                <Phone className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">(702) 805-8688</p>
                  <p className="text-sm text-gray-400">{t("footer.clickToCall")}</p>
                </div>
              </button>
              <button
                onClick={handleEmailClick}
                className="flex items-center space-x-3 hover:text-white transition-colors group p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400 w-full text-left"
              >
                <Mail className="w-6 h-6 text-blue-400 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="font-semibold text-white">info@luminousdentallv.com</p>
                  <p className="text-sm text-gray-400">{t("footer.clickToEmail")}</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
              <div className="flex items-center space-x-4 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-teal-300 transition-colors">
                  {t("footer.privacy")}
                </Link>
                <span className="text-gray-600">|</span>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-teal-300 transition-colors">
                  {t("footer.terms")}
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-2 text-gray-400 hover:text-white text-sm transition-colors font-medium px-3 py-1 rounded-lg hover:bg-white/10 border border-white/20"
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
              <span className="text-gray-600">|</span>
              <span className="text-gray-400 text-sm font-medium">{t("footer.implants")}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
