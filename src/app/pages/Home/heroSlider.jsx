"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const desktopSlides = [
  { bgImage: "/images/117hbanner_placement-piyush.webp" },
  { bgImage: "/images/101hbanner_offcampus-banner.webp" },
  { bgImage: "/images/banner_Image.webp" },
];

const mobileSlides = [
  { bgImage: "https://noida.gla.ac.in/banner/banner_image_res.webp" },
  { bgImage: "https://www.gla.ac.in/Uploads/banner/118hbanner_placement-piyush-mob.webp" },
];

export default function EducationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const slides = isMobile ? mobileSlides : desktopSlides;

  // Auto-slide
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden",
        isMobile ? "h-[70vh] min-h-[500px]" : "h-[95vh] min-h-[700px]"
      )}
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000 bg-cover bg-center",
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            )}
            style={{ backgroundImage: `url(${s.bgImage})` }}
          />
        ))}
      </div>

      {/* Navigation Arrows — Desktop Only */}
      {!isMobile && (
        <>
          <Button
            onClick={prevSlide}
            variant="ghost"
            size="icon"
            className="absolute left-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </Button>
          <Button
            onClick={nextSlide}
            variant="ghost"
            size="icon"
            className="absolute right-6 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </Button>
        </>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === currentSlide
                ? "w-6 h-2 bg-gradient-to-r from-emerald-400 to-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </section>
  );
}
