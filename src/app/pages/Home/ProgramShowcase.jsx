"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Clock,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Award,
  Briefcase,
} from "lucide-react";

const programs = [
  {
    id: 1,
    title: "B.Tech (CSE / AIML)",
    category: "Engineering",
    description:
      "Master cutting-edge technologies with industry-focused curriculum and hands-on projects in AI/ML",
    duration: "4 Years",
    seats: "240",
    avgPackage: "12 LPA",
    highlights: [
      "AI/ML Specialization",
      "Industry Projects",
      "Global Internships",
      "100% Placement Support",
    ],
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-blue-600 to-cyan-600",
    accentColor: "blue",
  },
  {
    id: 2,
    title: "BCA",
    category: "Computer Applications",
    description:
      "Comprehensive computer applications program with focus on full-stack development and cloud computing",
    duration: "3 Years",
    seats: "180",
    avgPackage: "8 LPA",
    highlights: [
      "Full Stack Development",
      "Cloud Computing",
      "App Development",
      "Tech Certifications",
    ],
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-emerald-600 to-teal-600",
    accentColor: "emerald",
  },
  {
    id: 3,
    title: "BBA",
    category: "Business Management",
    description:
      "Transform into business leaders with practical management education and entrepreneurship training",
    duration: "3 Years",
    seats: "120",
    avgPackage: "6 LPA",
    highlights: [
      "Leadership Training",
      "Case Studies",
      "Entrepreneurship",
      "Industry Mentorship",
    ],
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-purple-600 to-pink-600",
    accentColor: "purple",
  },
  {
    id: 4,
    title: "MBA",
    category: "Master's Program",
    description:
      "Advanced management program designed for future executives with global exposure and strategic training",
    duration: "2 Years",
    seats: "100",
    avgPackage: "15 LPA",
    highlights: [
      "Executive Training",
      "Global Exposure",
      "Strategic Management",
      "Corporate Connect",
    ],
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop",
    gradient: "from-orange-600 to-red-600",
    accentColor: "orange",
  },
];

export default function ProgramsShowcase() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="relative w-full bg-slate-900 text-white py-20 md:py-28 overflow-hidden">
      {/* Background Pattern - Same as UniversityLegacy */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-green-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-green-600/20 text-green-400 border border-green-500/30 px-4 py-1.5">
            <GraduationCap className="w-3.5 h-3.5 mr-2" />
            Academic Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Explore Our <span className="text-green-400">Programs</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Industry-aligned courses designed to shape future leaders and
            innovators
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {programs.map((program) => (
            <div
              key={program.id}
              className="group relative"
              onMouseEnter={() => setHoveredId(program.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${program.gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
              />

              <Card className="relative overflow-hidden bg-slate-800/80 backdrop-blur-sm border-2 border-slate-700 hover:border-green-500/50 transition-all duration-500 shadow-2xl">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${program.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent" />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-slate-800/90 backdrop-blur-sm text-white border border-slate-700">
                      {program.category}
                    </Badge>
                  </div>

                  {/* Package Highlight */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`bg-gradient-to-r ${program.gradient} px-4 py-2 rounded-xl shadow-lg`}
                    >
                      <div className="text-xs text-white/80 font-medium">
                        Avg Package
                      </div>
                      <div className="text-lg font-black text-white">
                        {program.avgPackage}
                      </div>
                    </div>
                  </div>

                  {/* Title Overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {program.title}
                    </h3>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-slate-800/50 backdrop-blur-sm space-y-6">
                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Clock className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium">
                          Duration
                        </div>
                        <div className="text-sm font-bold text-white">
                          {program.duration}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${program.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <Users className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-gray-400 font-medium">
                          Seats
                        </div>
                        <div className="text-sm font-bold text-white">
                          {program.seats}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-3">
                    <div className="text-sm font-semibold text-gray-300">
                      Program Highlights
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {program.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    className={`w-full bg-gradient-to-r ${program.gradient} hover:opacity-90 text-white shadow-lg group/btn border-0`}
                    size="lg"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-500 hover:to-yellow-400 text-white shadow-xl hover:scale-105 transition-all px-8 border-0"
          >
            View All Programs
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
