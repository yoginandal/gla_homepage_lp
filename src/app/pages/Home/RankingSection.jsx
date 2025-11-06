"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const trophy = "/video/videoplayback.webm";
const dainik = "/logo/danikJagran.webp";
const times = "/logo/timesbschool.webp";

const rankingData = [
  {
    id: 1,
    rank: "1",
    title: "Ranked #1 in UP",
    description: "amongst Best Private Universities",
    year: "2020",
    logoSrc: dainik,
  },
  {
    id: 2,
    rank: "2",
    title: "Ranked #2 in UP & #7 in India",
    description: "amongst all private B-Schools",
    year: "2021",
    logoSrc: times,
  },
  {
    id: 3,
    rank: "1",
    title: "Ranked #1 in UP",
    description: "amongst Best Private Universities",
    year: "2020",
    logoSrc: dainik,
  },
  {
    id: 4,
    rank: "2",
    title: "Ranked #2 in UP & #7 in India",
    description: "amongst all private B-Schools",
    year: "2021",
    logoSrc: times,
  },
];

export default function RankingSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(rankingData.length / itemsPerPage);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalPages);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, totalPages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const getCurrentPageItems = () => {
    const startIndex = currentIndex * itemsPerPage;
    return rankingData.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="relative py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <Badge className="mb-4 bg-linear-to-r from-blue-600 to-purple-600 text-white border-0 px-4 py-1.5">
            <Award className="w-3.5 h-3.5 mr-2" />
            Recognition & Rankings
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Award-Winning Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognized by leading institutions for our commitment to quality
            education
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Rankings */}
          <div
            className="space-y-6"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {getCurrentPageItems().map((item, index) => (
              <div
                key={item.id}
                className="group relative bg-linear-to-br from-slate-50 to-white border-2 border-slate-200 rounded-2xl p-6 md:p-8 hover:border-slate-300 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex gap-6">
                  {/* Rank Badge */}
                  <div className="shrink-0">
                    <div className="relative w-20 h-20 md:w-24 md:h-24">
                      {/* Card Image */}
                      <img
                        src={item.logoSrc || "/images/banner_Image.webp"}
                        alt="Ranking card"
                        className="absolute inset-0 w-full h-full object-contain rounded-2xl"
                      />
                      
                      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                        <span className="text-xs font-bold opacity-90"></span>
                        <span className="text-4xl md:text-5xl font-black">
                         
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-slate-600 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-4 pt-2">
                      <Badge variant="outline" className="text-xs">
                        <Sparkles className="w-3 h-3 mr-1" />
                        {item.year}
                      </Badge>
                      {/* <img
                        src={item.logoSrc}
                        alt="Institution logo"
                        className="h-6 object-contain"
                      /> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation */}
            <div className="flex items-center gap-3 pt-4">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-2"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="h-11 w-11 rounded-full border-2"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>

              <div className="flex items-center gap-2 ml-4">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                      setTimeout(() => setIsAutoPlaying(true), 8000);
                    }}
                    className={cn(
                      "transition-all rounded-full",
                      index === currentIndex
                        ? "w-8 h-2.5 bg-linear-to-r from-blue-600 to-purple-600"
                        : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right - Trophy */}
          <div className="relative overflow-hidden">
            <div className="relative max-w-lg mx-auto lg:mx-0 lg:ml-auto">
              {/* Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full max-w-[400px] aspect-square rounded-full bg-linear-to-br from-amber-100 to-orange-100 opacity-40" />
              </div>

              {/* Trophy Video */}
              <div className="relative z-10">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto"
                >
                  <source src={trophy} type="video/webm" />
                </video>
              </div>

              {/* Excellence Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 border border-slate-200">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-amber-400 to-orange-500 flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium">
                      Excellence
                    </div>
                    <div className="text-base font-bold text-slate-900">
                      Since 2020
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
