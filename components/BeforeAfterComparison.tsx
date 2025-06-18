"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { useLanguage } from "@/contexts/LanguageContext"

interface BeforeAfterComparisonProps {
  beforeImage: string
  afterImage: string
  alt: string
}

export default function BeforeAfterComparison({ beforeImage, afterImage, alt }: BeforeAfterComparisonProps) {
  const { t } = useLanguage()
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseDown = () => {
    setIsDragging(true)
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleTouchStart = () => {
    setIsDragging(true)
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.touches[0].clientX - rect.left
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100))
    setSliderPosition(percentage)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") {
      setSliderPosition((prev) => Math.max(0, prev - 5))
    } else if (e.key === "ArrowRight") {
      setSliderPosition((prev) => Math.min(100, prev + 5))
    }
  }

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalTouchEnd = () => setIsDragging(false)

    if (isDragging) {
      document.addEventListener("mouseup", handleGlobalMouseUp)
      document.addEventListener("touchend", handleGlobalTouchEnd)
    }

    return () => {
      document.removeEventListener("mouseup", handleGlobalMouseUp)
      document.removeEventListener("touchend", handleGlobalTouchEnd)
    }
  }, [isDragging])

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-2xl shadow-lg cursor-col-resize select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="img"
      aria-label={`${t("gallery.before")} and ${t("gallery.after")} comparison: ${alt}`}
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image
          src={afterImage || "/placeholder.svg"}
          alt={`${t("gallery.after")} - ${alt}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {t("gallery.after")}
        </div>
      </div>

      {/* Before Image (Clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
        <Image
          src={beforeImage || "/placeholder.svg"}
          alt={`${t("gallery.before")} - ${alt}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          {t("gallery.before")}
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Slider Handle */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg border-4 border-blue-600 cursor-col-resize pointer-events-auto flex items-center justify-center"
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          role="slider"
          aria-label="Drag to compare before and after images"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={sliderPosition}
          tabIndex={0}
        >
          <div className="flex space-x-1">
            <div className="w-1 h-4 bg-blue-600 rounded"></div>
            <div className="w-1 h-4 bg-blue-600 rounded"></div>
          </div>
        </div>
      </div>

      {/* Instructions for screen readers */}
      <div className="sr-only">
        Use arrow keys or drag the slider to compare before and after images. Current position:{" "}
        {Math.round(sliderPosition)}% showing after image.
      </div>
    </div>
  )
}
