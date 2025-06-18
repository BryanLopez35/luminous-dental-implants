"use client"

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import { useLanguage } from "@/contexts/LanguageContext"
import ScrollAnimation from "./ui/scroll-animation"

const testimonials = [
  {
    name: "Sarah Johnson",
    age: 45,
    text: "I was so self-conscious about my missing teeth. Dr. Martinez and his team gave me my confidence back with beautiful dental implants. The process was much easier than I expected!",
    rating: 5,
    procedure: "Single Tooth Implant",
    image: "/placeholder.svg?height=80&width=80&text=SJ",
    location: "Las Vegas, NV",
  },
  {
    name: "Michael Chen",
    age: 62,
    text: "After years of struggling with dentures, I finally got implant-supported dentures. I can eat anything I want now! Best decision I ever made.",
    rating: 5,
    procedure: "Full Mouth Reconstruction",
    image: "/placeholder.svg?height=80&width=80&text=MC",
    location: "Henderson, NV",
  },
  {
    name: "Maria Rodriguez",
    age: 38,
    text: "The staff at Luminous Dental made me feel so comfortable. My implants look completely natural - nobody can tell they're not my original teeth!",
    rating: 5,
    procedure: "Multiple Implants",
    image: "/placeholder.svg?height=80&width=80&text=MR",
    location: "Las Vegas, NV",
  },
  {
    name: "Robert Thompson",
    age: 55,
    text: "I was nervous about the procedure, but the team explained everything clearly. The results exceeded my expectations. I'm smiling with confidence again!",
    rating: 5,
    procedure: "Implant Bridge",
    image: "/placeholder.svg?height=80&width=80&text=RT",
    location: "North Las Vegas, NV",
  },
]

export default function Testimonials() {
  const { t } = useLanguage()
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const scrollToForm = () => {
    const formElement = document.getElementById("contact-form")
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <section className="py-24 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2314B8A6' fillOpacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation animation="fadeInUp">
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {t("testimonials.patientReviews")}
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">{t("testimonials.title")}</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">{t("testimonials.subtitle")}</p>
          </div>
        </ScrollAnimation>

        {/* Featured Testimonial */}
        <ScrollAnimation animation="fadeInUp" delay={200}>
          <div className="max-w-5xl mx-auto mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-100 to-emerald-100 rounded-full opacity-50 transform translate-x-16 -translate-y-16"></div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <Quote className="w-16 h-16 text-sky-200" />
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="text-2xl lg:text-3xl text-gray-800 font-medium leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {testimonials[currentIndex].name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-bold text-xl text-gray-900">
                        {testimonials[currentIndex].name}, {testimonials[currentIndex].age}
                      </div>
                      <div className="text-teal-600 font-semibold">{testimonials[currentIndex].procedure}</div>
                      <div className="text-gray-500 text-sm">{testimonials[currentIndex].location}</div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevTestimonial}
                      className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                    >
                      <ChevronLeft className="w-6 h-6 text-gray-600 group-hover:text-sky-600" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="w-12 h-12 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
                    >
                      <ChevronRight className="w-6 h-6 text-gray-600 group-hover:text-sky-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollAnimation>

        {/* Testimonial Grid */}
        <ScrollAnimation animation="fadeInUp" delay={400}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`p-6 rounded-2xl transition-all duration-300 text-left ${
                  index === currentIndex
                    ? "bg-white shadow-xl scale-105 border-2 border-sky-500"
                    : "bg-white/60 hover:bg-white/80 shadow-lg hover:shadow-xl"
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-3">{testimonial.text}</p>
              </button>
            ))}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animation="fadeInUp" delay={600}>
          <div className="text-center">
            <button
              onClick={scrollToForm}
              className="bg-gradient-to-r from-blue-600 to-sky-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-sky-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              {t("testimonials.readMore")}
            </button>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
