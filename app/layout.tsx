import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { LanguageProvider } from "@/contexts/LanguageContext"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dental Implants Las Vegas | Luminous Dental LV | Free Consultation",
  description:
    "Professional dental implants in Las Vegas. Restore your smile with our experienced team. Free consultation available. Call (725) 291-5588 today!",
  keywords:
    "dental implants, Las Vegas dentist, tooth replacement, dental surgery, implant dentistry, Nevada dental care",
  authors: [{ name: "Luminous Dental LV" }],
  openGraph: {
    title: "Dental Implants Las Vegas | Luminous Dental LV",
    description: "Professional dental implants in Las Vegas. Restore your smile with our experienced team.",
    url: "https://dentalimplants.luminousdentallv.com",
    siteName: "Luminous Dental LV",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200",
        width: 1200,
        height: 630,
        alt: "Dental Implants Las Vegas - Luminous Dental LV",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dental Implants Las Vegas | Luminous Dental LV",
    description: "Professional dental implants in Las Vegas. Free consultation available.",
    images: ["/placeholder.svg?height=630&width=1200"],
  },
  alternates: {
    canonical: "https://dentalimplants.luminousdentallv.com",
    languages: {
      "en-US": "https://dentalimplants.luminousdentallv.com",
      "es-ES": "https://dentalimplants.luminousdentallv.com/es",
    },
  },
  other: {
    "geo.region": "US-NV",
    "geo.placename": "Las Vegas",
    "geo.position": "36.1699;-115.1398",
    ICBM: "36.1699, -115.1398",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DentalClinic",
              name: "Luminous Dental LV",
              description: "Professional dental implants and comprehensive dental care in Las Vegas",
              url: "https://dentalimplants.luminousdentallv.com",
              telephone: "(725) 291-5588",
              email: "info@luminousdentallv.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1212 S Maryland Pkwy",
                addressLocality: "Las Vegas",
                addressRegion: "NV",
                postalCode: "89104",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "36.1699",
                longitude: "-115.1398",
              },
              openingHours: ["Mo-Fr 08:00-17:00", "Sa 09:00-15:00"],
              priceRange: "$$",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "127",
              },
              medicalSpecialty: "Dentistry",
              availableService: [
                {
                  "@type": "MedicalProcedure",
                  name: "Dental Implants",
                  description: "Single tooth and full mouth dental implant procedures",
                },
                {
                  "@type": "MedicalProcedure",
                  name: "Implant Supported Dentures",
                  description: "Secure dentures supported by dental implants",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
