// components/CampusEventsSection.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Briefcase,
  Users,
  Award,
  Building2,
  GraduationCap,
} from "lucide-react";

const campusHappenings = [
  {
    id: 1,
    title: "Top Companies Recruit GLA Graduates",
    category: "Career",
    tag: "CAREER",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    date: "Mar 5, 2024",
    source: "Placement Cell",
    icon: Briefcase,
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    id: 2,
    title: "New Engineering Block Inaugurated at GLA University",
    category: "Campus",
    tag: "FACILITIES",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 28, 2024",
    source: "Campus News",
    icon: Building2,
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 3,
    title: "GLA Alumni Meet 2024: Connecting Past and Future",
    category: "Events",
    tag: "ALUMNI",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 20, 2024",
    source: "Alumni Association",
    icon: Users,
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 4,
    title: "Research Excellence: GLA Students Win National Award",
    category: "Achievement",
    tag: "AWARDS",
    image:
      "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
    date: "Feb 15, 2024",
    source: "Research Cell",
    icon: Award,
    gradient: "from-amber-600 to-orange-600",
  },
];

const upcomingEvents = [
  {
    id: 1,
    title: "GLA Tech Fest 2024: Innovation Summit",
    date: "25",
    month: "MAR",
    time: "9:30 AM - ...",
    location: "Main Auditorium, GLA",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 2,
    title: "Annual Cultural Festival - Yuva Tarang",
    date: "28",
    month: "MAR",
    time: "10:00 AM - 8:00 PM",
    location: "University Grounds",
    gradient: "from-purple-600 to-pink-600",
  },
  {
    id: 3,
    title: "Industry Expert Talk: Future of AI",
    date: "02",
    month: "APR",
    time: "2:00 PM - 4:00 PM",
    location: "Seminar Hall B",
    gradient: "from-emerald-600 to-teal-600",
  },
  {
    id: 4,
    title: "Career Counseling & Resume Workshop",
    date: "05",
    month: "APR",
    time: "11:00 AM - 3:00 PM",
    location: "Placement Cell",
    gradient: "from-amber-600 to-orange-600",
  },
];

export default function CampusEventsSection() {
  const [currentHappening, setCurrentHappening] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextHappening();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentHappening]);

  const nextHappening = () => {
    setCurrentHappening((prev) => (prev + 1) % campusHappenings.length);
  };

  const prevHappening = () => {
    setCurrentHappening(
      (prev) => (prev - 1 + campusHappenings.length) % campusHappenings.length
    );
  };

  const happening = campusHappenings[currentHappening];
  const HappeningIcon = happening.icon;

  return (
    <section className="relative w-full bg-gradient-to-br from-slate-50 via-white to-green-50 py-20 md:py-28 overflow-hidden">
      {/* Background Decorative Elements - Same as Vision Section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-600/10 rounded-full blur-3xl"></div>
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* LEFT SIDE - Campus Happenings (Horizontal Carousel) */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  Campus Happenings
                </h2>
                <p className="text-slate-600">
                  Latest news and updates from GLA
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-green-600 hover:text-green-700 gap-2"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Carousel Card */}
            <div
              className="relative"
              onMouseEnter={() => setIsAutoPlaying(false)}
              onMouseLeave={() => setIsAutoPlaying(true)}
            >
              <Card className="relative overflow-hidden bg-white border-0 shadow-2xl">
                {/* Image Section */}
                <div className="relative h-64 md:h-80">
                  {campusHappenings.map((item, index) => (
                    <div
                      key={item.id}
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        index === currentHappening ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority={index === 0}
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-60`}
                      ></div>
                    </div>
                  ))}

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <Badge
                      className={`bg-gradient-to-r ${happening.gradient} text-white border-0 px-3 py-1 text-xs font-bold uppercase shadow-lg`}
                    >
                      <HappeningIcon className="h-3 w-3 mr-1 inline" />
                      {happening.tag}
                    </Badge>
                  </div>

                  {/* Navigation Arrows */}
                  <div className="absolute bottom-4 right-4 flex gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={prevHappening}
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="secondary"
                      size="icon"
                      onClick={nextHappening}
                      className="h-10 w-10 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white shadow-lg"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight">
                    {happening.title}
                  </h3>

                  <div className="flex items-center gap-4 text-sm text-slate-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{happening.date}</span>
                    </div>
                    <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                    <span>{happening.source}</span>
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 pb-6">
                  {campusHappenings.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHappening(index)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        index === currentHappening
                          ? "w-8 bg-green-600"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </Card>
            </div>
          </div>

          {/* RIGHT SIDE - Events (Vertical List) */}
          <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-2">
                  Events
                </h2>
                <p className="text-slate-600">
                  Upcoming programs and activities
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-green-600 hover:text-green-700 gap-2"
              >
                View all
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Events List */}
            <div className="space-y-4">
              {upcomingEvents.map((event, index) => (
                <Card
                  key={event.id}
                  className="group relative overflow-hidden bg-white border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  <div className="flex gap-4 p-5">
                    {/* Date Badge */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${event.gradient} flex flex-col items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}
                    >
                      <div className="text-2xl font-extrabold leading-none">
                        {event.date}
                      </div>
                      <div className="text-xs font-semibold uppercase mt-0.5">
                        {event.month}
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-slate-900 mb-2 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {event.title}
                      </h3>

                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <Clock className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{event.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-slate-600">
                          <MapPin className="h-4 w-4 flex-shrink-0" />
                          <span className="truncate">{event.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex-shrink-0 self-center">
                      <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>

                  {/* Hover Gradient Accent */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${event.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                  ></div>
                </Card>
              ))}
            </div>

            {/* Load More Button */}
            <Button
              variant="outline"
              className="w-full border-2 border-slate-300 hover:border-green-600 hover:bg-green-50 transition-all"
            >
              Load More Events
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
