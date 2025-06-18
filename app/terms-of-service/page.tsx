"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function TermsOfService() {
  const { language, t, setLanguage } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          href="/"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{t("terms.backToHome")}</span>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("terms.title")}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>{t("terms.effectiveDate")}</strong> {t("common.january")}
            <br />
            <strong>{t("terms.lastUpdated")}</strong> {t("common.january")}
          </p>

          {language === "es" ? (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de Términos</h2>
                <p className="text-gray-700 mb-4">
                  Al acceder a nuestro sitio web, programar citas o recibir servicios de Luminous Dental LV, aceptas
                  estar sujeto a estos Términos de Servicio y todas las leyes y regulaciones aplicables.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Servicios</h2>
                <p className="text-gray-700 mb-4">
                  Luminous Dental LV proporciona servicios de implantes dentales y atención dental relacionada. Todos
                  los servicios son proporcionados por profesionales dentales licenciados de acuerdo con los estándares
                  médicos aplicables.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Citas y Cancelaciones</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Las citas deben programarse con anticipación</li>
                  <li>Se requiere aviso de 24 horas para cancelaciones</li>
                  <li>Las cancelaciones tardías pueden resultar en cargos</li>
                  <li>Las ausencias sin aviso pueden ser cobradas con la tarifa completa de la cita</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Términos de Pago</h2>
                <p className="text-gray-700 mb-4">
                  El pago se debe al momento del servicio a menos que se hayan hecho otros arreglos. Aceptamos efectivo,
                  tarjetas de crédito y ofrecemos opciones de financiamiento para pacientes calificados.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Consentimiento de Tratamiento</h2>
                <p className="text-gray-700 mb-4">
                  Todos los procedimientos dentales requieren consentimiento informado. Los riesgos, beneficios y
                  alternativas se discutirán antes de comenzar el tratamiento. Tienes derecho a rechazar cualquier
                  tratamiento.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitación de Responsabilidad</h2>
                <p className="text-gray-700 mb-4">
                  Nuestra responsabilidad se limita al costo de los servicios proporcionados. No somos responsables por
                  daños indirectos, incidentales o consecuentes que surjan de nuestros servicios.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Información de Contacto</h2>
                <p className="text-gray-700 mb-4">Para preguntas sobre estos Términos de Servicio, contáctanos:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Luminous Dental LV</strong>
                    <br />
                    1212 S Maryland Pkwy
                    <br />
                    Las Vegas, NV 89104
                    <br />
                    Teléfono: (725) 291-5588
                    <br />
                    Correo: info@luminousdentallv.com
                  </p>
                </div>
              </section>
            </>
          ) : (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing our website, scheduling appointments, or receiving services from Luminous Dental LV, you
                  agree to be bound by these Terms of Service and all applicable laws and regulations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
                <p className="text-gray-700 mb-4">
                  Luminous Dental LV provides dental implant services and related dental care. All services are provided
                  by licensed dental professionals in accordance with applicable medical standards.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Appointments and Cancellations</h2>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Appointments must be scheduled in advance</li>
                  <li>24-hour notice is required for cancellations</li>
                  <li>Late cancellations may result in fees</li>
                  <li>No-shows may be charged the full appointment fee</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Terms</h2>
                <p className="text-gray-700 mb-4">
                  Payment is due at the time of service unless other arrangements have been made. We accept cash, credit
                  cards, and offer financing options for qualified patients.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Treatment Consent</h2>
                <p className="text-gray-700 mb-4">
                  All dental procedures require informed consent. Risks, benefits, and alternatives will be discussed
                  before treatment begins. You have the right to refuse any treatment.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  Our liability is limited to the cost of the services provided. We are not liable for indirect,
                  incidental, or consequential damages arising from our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Contact Information</h2>
                <p className="text-gray-700 mb-4">For questions about these Terms of Service, please contact us:</p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Luminous Dental LV</strong>
                    <br />
                    1212 S Maryland Pkwy
                    <br />
                    Las Vegas, NV 89104
                    <br />
                    Phone: (725) 291-5588
                    <br />
                    Email: info@luminousdentallv.com
                  </p>
                </div>
              </section>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link
              href="/privacy-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="text-blue-600 hover:text-blue-700"
            >
              {t("footer.privacy")}
            </Link>
            <button
              onClick={() => setLanguage(language === "es" ? "en" : "es")}
              className="text-blue-600 hover:text-blue-700"
            >
              {t("terms.viewInSpanish")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
