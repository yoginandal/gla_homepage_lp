"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const slides = [
  {
    badge: "Excellence in Education",
    title: "Empowering Tomorrow's Innovators",
    highlight: "Today",
    subtitle: "Join a community of achievers shaping the future",
    stats: { value: "95%", label: "Placement Success" },
    ctaText: "Start Your Journey",
    bgImage:
      "/images/117hbanner_placement-piyush.webp",
  },
  {
    badge: "World-Class Infrastructure",
    title: "Modern Facilities for Future",
    highlight: "Leaders",
    subtitle: "State-of-the-art learning environments designed for excellence",
    stats: { value: "500+", label: "Industry Partners" },
    ctaText: "Explore Campus",
    bgImage:
      "/images/101hbanner_offcampus-banner.webp",
  },
  {
    badge: "Industry Integration",
    title: "An Industry Integrated Learning",
    highlight: "Campus",
    subtitle: "Bridge the gap between education and professional success",
    stats: { value: "#1", label: "Ranked Institution" },
    ctaText: "Apply Now",
    bgImage:
      "/images/banner_Image.webp",
  },
];

export default function EducationHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const slide = slides[currentSlide];

  return (
    <section
      className="relative h-[95vh] min-h-[700px] w-full overflow-hidden bg-slate-950"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {slides.map((s, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 transition-all duration-1000",
              index === currentSlide
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            )}
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${s.bgImage})` }}
            />
            {/* <div className="absolute inset-0 bg-linear-to-br from-slate-950/80 via-slate-950/50 to-transparent" /> */}
            <div className="absolute inset-0 bg-linear-to-t from-slate-950/60 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-12 -right-12 md:-top-24 md:-right-24 w-64 h-64 md:w-96 md:h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-12 -left-12 md:-bottom-24 md:-left-24 w-64 h-64 md:w-96 md:h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        variant="ghost"
        size="icon"
        className="absolute left-4 md:left-8 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronLeft className="h-5 w-5 text-white" />
      </Button>
      <Button
        onClick={nextSlide}
        variant="ghost"
        size="icon"
        className="absolute right-4 md:right-8 top-1/2 z-30 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 hover:scale-110 transition-all"
      >
        <ChevronRight className="h-5 w-5 text-white" />
      </Button>

      {/* Main Content */}

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "transition-all duration-300 rounded-full",
              index === currentSlide
                ? "w-8 h-2 bg-linear-to-r from-emerald-400 to-amber-400"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
