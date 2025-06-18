"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { useLanguage } from "@/contexts/LanguageContext"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PrivacyPolicy() {
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
          <span>{t("privacy.backToHome")}</span>
        </Link>

        <h1 className="text-4xl font-bold text-gray-900 mb-8">{t("privacy.title")}</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">
            <strong>{t("privacy.effectiveDate")}</strong> {t("common.january")}
            <br />
            <strong>{t("privacy.lastUpdated")}</strong> {t("common.january")}
          </p>

          {language === "es" ? (
            <>
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
                <p className="text-gray-700 mb-4">
                  Recopilamos información que nos proporcionas directamente, como cuando:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Completas nuestro formulario de solicitud de consulta</li>
                  <li>Nos contactas por teléfono o correo electrónico</li>
                  <li>Programas citas</li>
                  <li>Recibes tratamiento dental</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Esta información puede incluir tu nombre, dirección de correo electrónico, número de teléfono,
                  dirección, fecha de nacimiento, historial médico y registros dentales.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Usamos tu Información</h2>
                <p className="text-gray-700 mb-4">Usamos la información que recopilamos para:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Proporcionar servicios y tratamientos dentales</li>
                  <li>Programar y confirmar citas</li>
                  <li>Comunicarnos contigo sobre tu tratamiento</li>
                  <li>Procesar pagos y reclamos de seguros</li>
                  <li>Cumplir con requisitos legales y regulatorios</li>
                  <li>Mejorar nuestros servicios</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Información</h2>
                <p className="text-gray-700 mb-4">
                  No vendemos, intercambiamos o transferimos tu información personal a terceros sin tu consentimiento,
                  excepto como se describe en esta política. Podemos compartir tu información con:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Proveedores de atención médica involucrados en tu cuidado</li>
                  <li>Compañías de seguros para el procesamiento de reclamos</li>
                  <li>Autoridades legales cuando sea requerido por ley</li>
                  <li>Proveedores de servicios que asisten en nuestras operaciones</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no
                  autorizado, alteración, divulgación o destrucción. Sin embargo, ningún método de transmisión por
                  internet es 100% seguro.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
                <p className="text-gray-700 mb-4">Tienes derecho a:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Acceder a tu información personal</li>
                  <li>Corregir información inexacta</li>
                  <li>Solicitar la eliminación de tu información</li>
                  <li>Optar por no recibir comunicaciones de marketing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contáctanos</h2>
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad, contáctanos:
                </p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-700 mb-4">
                  We collect information you provide directly to us, such as when you:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Fill out our consultation request form</li>
                  <li>Contact us via phone or email</li>
                  <li>Schedule appointments</li>
                  <li>Receive dental treatment</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  This information may include your name, email address, phone number, address, date of birth, medical
                  history, and dental records.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use the information we collect to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide dental services and treatment</li>
                  <li>Schedule and confirm appointments</li>
                  <li>Communicate with you about your treatment</li>
                  <li>Process payments and insurance claims</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information Sharing</h2>
                <p className="text-gray-700 mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your
                  consent, except as described in this policy. We may share your information with:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Healthcare providers involved in your care</li>
                  <li>Insurance companies for claims processing</li>
                  <li>Legal authorities when required by law</li>
                  <li>Service providers who assist in our operations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy, please contact us:
                </p>
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
              href="/terms-of-service"
              onClick={() => window.scrollTo(0, 0)}
              className="text-blue-600 hover:text-blue-700"
            >
              {t("footer.terms")}
            </Link>
            <button
              onClick={() => {
                setLanguage(language === "es" ? "en" : "es")
              }}
              className="text-blue-600 hover:text-blue-700"
            >
              {t("privacy.viewInSpanish")}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
