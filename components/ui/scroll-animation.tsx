"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface ScrollAnimationProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "scaleIn"
  delay?: number
}

export default function ScrollAnimation({
  children,
  className = "",
  animation = "fadeInUp",
  delay = 0,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const animations = {
    fadeInUp: isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8",
    fadeInLeft: isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8",
    fadeInRight: isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8",
    fadeIn: isVisible ? "opacity-100" : "opacity-0",
    scaleIn: isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95",
  }

  return (
    <div ref={ref} className={`transition-all duration-700 ease-out ${animations[animation]} ${className}`}>
      {children}
    </div>
  )
}
