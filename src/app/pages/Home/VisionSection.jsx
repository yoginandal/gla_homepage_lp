// components/VisionSection.jsx
"use client";

import { Card } from "@/components/ui/card";
import { TrendingUp, Target, Award, ArrowRight } from "lucide-react";

export default function VisionSection() {
  return (
    <section className="relative w-full bg-linear-to-br from-slate-50 via-white to-green-50 py-16 md:py-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-600/10 rounded-full mb-4">
            <Target className="h-4 w-4 text-green-600" />
            <span className="text-xs font-semibold text-green-700">
              Strategic Roadmap
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-slate-900">Our </span>
            <span className="text-green-600">5-Year </span>
            <span className="text-slate-900">Vision</span>
            <div className="h-1 w-24 bg-linear-to-r from-green-600 to-yellow-500 mx-auto mt-3 rounded-full"></div>
          </h2>

          <p className="text-base md:text-lg text-slate-600 leading-relaxed mt-4">
            Setting new benchmarks in education with industry-focused learning
            and exceptional career outcomes
          </p>
        </div>

        {/* Split Cards Layout */}
        <div className="grid lg:grid-cols-2 gap-4 md:gap-6">
          {/* Card 1 - Targeted Average Salary */}
          <Card className="group relative overflow-hidden bg-linear-to-br from-green-900 via-green-800 to-green-700 border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400 rounded-full blur-2xl"></div>
            </div>

            <div className="relative p-6 md:p-8">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-400 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="h-6 w-6 text-green-900" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-white/90 mb-4">
                Targeted Average Salary
              </h3>

              {/* Main Value */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl md:text-6xl font-black text-yellow-400 drop-shadow-2xl">
                    ₹30
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-yellow-300">
                    LPA
                  </span>
                </div>
                <p className="text-sm text-green-200 font-medium">by 2029</p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-white/80 leading-relaxed mb-4">
                Our comprehensive industry partnerships and cutting-edge
                curriculum are designed to prepare students for high-value roles
                in the global market
              </p>

              {/* Progress Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-xs text-white/70">
                  <span>Progress to Goal</span>
                  <span>65%</span>
                </div>
                <div className="h-1.5 bg-green-950/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-linear-to-r from-yellow-400 to-yellow-300 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: "65%" }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/20 rounded-bl-full"></div>
          </Card>

          {/* Card 2 - Expected Salary for First Graduating Batch */}
          <Card className="group relative overflow-hidden bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.01]">
            {/* Decorative Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-600 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-500 rounded-full blur-2xl"></div>
            </div>

            <div className="relative p-6 md:p-8">
              {/* Icon Badge */}
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Award className="h-6 w-6 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">
                Expected Salary for First Graduating Batch
              </h3>

              {/* Main Value */}
              <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-5xl md:text-6xl font-black bg-linear-to-r from-green-600 to-green-700 bg-clip-text text-transparent drop-shadow-lg">
                    ₹15
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-green-700">
                    LPA
                  </span>
                </div>
                <p className="text-sm text-slate-600 font-medium">
                  starting package
                </p>
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-slate-600 leading-relaxed mb-4">
                Our first batch of graduates will enter the job market with
                practical skills and industry exposure, commanding competitive
                starting salaries
              </p>

              {/* Feature List */}
              <div className="space-y-2">
                {[
                  "Industry-ready skillset",
                  "Practical project experience",
                  "Competitive market positioning",
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-700"
                  >
                    <div className="shrink-0 w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Link */}
              <button className="mt-6 inline-flex items-center gap-2 text-green-600 font-semibold text-sm hover:gap-3 transition-all group">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-600/10 rounded-tr-full"></div>
          </Card>
        </div>

        {/* Bottom Stats Bar */}
        {/* <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { value: "86%", label: "Placement Rate" },
            { value: "500+", label: "Hiring Partners" },
            { value: "15 LPA", label: "Highest Package" },
            { value: "39K+", label: "Alumni Network" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-4 md:p-6 text-center hover:border-green-500 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-green-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-slate-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
