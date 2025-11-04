"use client";

import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function UniversityLegacy() {
  const stats = [
    { value: "86%", label: "Career Placement", sublabel: "in Past 5 Years" },
    { value: "39,000+", label: "Alumni Spread", sublabel: "Across the Globe" },
    {
      value: "700+",
      label: "Faculty Members",
      sublabel: "from Global Institutions",
    },
    {
      value: "23,000+",
      label: "Students Enrolled",
      sublabel: "in Different Courses",
    },
  ];

  return (
    <section className="relative w-full bg-[#fdf9ea] text-slate-900 py-16 md:py-20 overflow-hidden">
      {/* Background Decorative Gradients */}
      <div className="absolute inset-0 opacity-20 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 md:w-96 md:h-96 bg-green-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 md:w-96 md:h-96 bg-yellow-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                <span className="text-green-600">GLA</span>
                <br />
                <span className="text-slate-900">University</span>
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                A university with a significant role in the global dynamics of
                R&D and higher learning, where students are motivated to attain
                their true potential. The faculty and staff aim to achieve
                excellence in pedagogy and contemporary research, while alumni
                strive to achieve global leadership.
              </p>
            </div>
          </div>

          {/* Right Content - Quote */}
          <div className="relative">
            <div className="absolute -top-6 -left-6 text-green-400/30 text-8xl md:text-9xl font-serif">
              <Quote className="w-16 h-16 md:w-24 md:h-24" fill="currentColor" />
            </div>

            <Card className="relative bg-gradient-to-br from-green-50 to-yellow-50 border-2 border-green-200 p-6 md:p-8 shadow-xl">
              <blockquote className="space-y-4">
                <p className="text-lg md:text-xl text-green-700 font-semibold leading-relaxed italic">
                  &quot;A Legacy of Educational Excellence — Experience
                  innovation and tradition harmoniously blended at GLA
                  University.&quot;
                </p>

                <footer className="border-t border-green-100 pt-4">
                  <cite className="not-italic">
                    <div className="text-base font-bold text-slate-800">
                      GLA University Leadership
                    </div>
                    <div className="text-sm text-slate-500">
                      Chancellor&apos;s Vision
                    </div>
                  </cite>
                </footer>
              </blockquote>
            </Card>

            <div className="absolute -bottom-6 -right-6 text-yellow-400/30 text-8xl md:text-9xl font-serif rotate-180">
              <Quote className="w-16 h-16 md:w-24 md:h-24" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Stats Grid - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-4 pt-12 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-200/40 to-yellow-100/40 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-white border border-slate-200 rounded-lg p-4 text-center hover:border-green-400 transition-all shadow-sm hover:shadow-md">
                <div className="text-2xl lg:text-3xl font-extrabold text-green-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 leading-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Grid - Mobile */}
        <div className="grid grid-cols-2 gap-3 mt-8 md:hidden">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-green-100/30 to-yellow-100/30 rounded-lg blur-xl"></div>
              <div className="relative bg-white border border-slate-200 rounded-lg p-3 text-center hover:border-green-400 transition-all shadow-sm hover:shadow-md">
                <div className="text-xl font-extrabold text-green-600 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 leading-tight">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.sublabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
