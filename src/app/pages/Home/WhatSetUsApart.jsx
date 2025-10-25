// components/WhatSetsUsApart.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Users,
  Award,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const features = [
  {
    id: 1,
    icon: Building2,
    title: "Industry-Centric Learning Environment",
    subtitle: "Real-world Applications",
    description:
      "Our comprehensive industry partnerships and cutting-edge curriculum are designed to prepare students for high-value roles in the global market. Hands-on projects and practical learning ensure job-ready graduates.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop",
    gradient: "from-blue-600 to-indigo-700",
    stats: { value: "500+", label: "Industry Partners" },
  },
  {
    id: 2,
    icon: GraduationCap,
    title: "Elite Faculty from Renowned Institutions",
    subtitle: "Expert Guidance",
    description:
      "Learn from the best in the field with our distinguished faculty members who bring decades of industry experience and academic excellence. Personalized mentorship ensures every student reaches their full potential.",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop",
    gradient: "from-emerald-600 to-teal-700",
    stats: { value: "700+", label: "Expert Faculty" },
  },
  {
    id: 3,
    icon: Briefcase,
    title: "Mentorship from Leading Professionals",
    subtitle: "Industry Connections",
    description:
      "Direct access to industry leaders and seasoned professionals who guide your career journey. Our extensive alumni network and corporate partnerships open doors to exceptional opportunities worldwide.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop",
    gradient: "from-purple-600 to-pink-700",
    stats: { value: "39K+", label: "Global Alumni" },
  },
];

export default function WhatSetsUsApart() {
  const [currentFeature, setCurrentFeature] = useState(0);

  const nextFeature = () => {
    setCurrentFeature((prev) => (prev + 1) % features.length);
  };

  const prevFeature = () => {
    setCurrentFeature((prev) => (prev - 1 + features.length) % features.length);
  };

  const feature = features[currentFeature];
  const FeatureIcon = feature.icon;

  return (
    <section className="relative w-full bg-gradient-to-br from-green-50 via-yellow-50 to-green-100 py-20 md:py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-400 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-300 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-green-200 shadow-lg mb-6">
            <Sparkles className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">
              Our Competitive Edge
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
            <span className="text-slate-900">What Sets Us </span>
            <span className="bg-gradient-to-r from-green-600 to-yellow-600 bg-clip-text text-transparent">
              Apart?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-light">
            At GLA Greater Noida, we offer more than just traditional education.
            Our students gain real-world experience through industry-based
            learning and projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Overlay Badge */}
          <div className="relative group order-2 lg:order-1">
            <div className="relative h-[500px] md:h-[600px] rounded-3xl overflow-hidden shadow-2xl">
              {features.map((item, index) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-700 ${
                    index === currentFeature ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
                </div>
              ))}

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 bg-green-600 text-white px-4 py-2 rounded-full font-bold shadow-xl backdrop-blur-sm border-2 border-white/20">
                GLA GREATER NOIDA
              </div>

              {/* Bottom Label */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 to-transparent p-8">
                <div className="text-white">
                  <div className="text-sm font-semibold text-yellow-400 mb-2 uppercase tracking-wider">
                    Featured Program
                  </div>
                  <div className="text-2xl md:text-3xl font-bold">
                    AN INDUSTRY-INTEGRATED
                    <br />
                    LEARNING CAMPUS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Feature Cards Carousel */}
          <div className="relative order-1 lg:order-2">
            <div className="space-y-6">
              {/* Current Feature Card */}
              <Card className="relative overflow-hidden bg-white/95 backdrop-blur-sm border-2 border-green-200 shadow-2xl p-8 md:p-10">
                {/* Gradient Accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${feature.gradient}`}
                ></div>

                {/* Icon Badge */}
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg mb-6`}
                >
                  <FeatureIcon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-green-600 mb-2 uppercase tracking-wide">
                      {feature.subtitle}
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 leading-tight">
                      {feature.title}
                    </h3>
                  </div>

                  <p className="text-lg text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Stat Badge */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                    <div
                      className={`text-4xl font-extrabold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}
                    >
                      {feature.stats.value}
                    </div>
                    <div className="text-sm text-slate-600 font-medium">
                      {feature.stats.label}
                    </div>
                  </div>
                </div>
              </Card>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevFeature}
                    className="h-12 w-12 rounded-full border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextFeature}
                    className="h-12 w-12 rounded-full border-2 border-green-600 hover:bg-green-600 hover:text-white transition-all"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                </div>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentFeature(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentFeature
                          ? "w-12 bg-green-600"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to feature ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
