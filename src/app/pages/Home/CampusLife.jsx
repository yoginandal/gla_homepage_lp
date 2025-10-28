"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Data for campus life activities
const schools = [
  {
    id: 1,
    name: "Sports & Athletics",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cultural Events & Festivals",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Library & Learning Spaces",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Student Clubs & Communities",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    name: "Music & Dance",
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    name: "Cafeteria & Dining",
    image:
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 7,
    name: "Art & Photography",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 8,
    name: "Hostel Life",
    image:
      "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop",
  },
];

const SchoolCard = ({ name, image }) => (
  <div className="flex-shrink-0 w-[320px] rounded-lg overflow-hidden shadow-2xl bg-slate-900">
    <div className="relative h-56 w-full">
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover"
        sizes="320px"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-white h-16">{name}</h3>
      <Link
        href="#"
        className="group inline-flex items-center text-sm font-semibold text-green-400 hover:text-yellow-400 transition-colors"
      >
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  </div>
);

export default function SchoolsSection() {
  const extendedSchools = [...schools, ...schools]; // Duplicate for seamless loop

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Top Content Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Campus <span className="text-green-600">Life</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            GLA University fosters a vibrant campus life that encourages
            creativity in all its forms—be it art, music, drama, or dance.
            Students experience a dynamic environment with countless
            opportunities for personal growth and leadership development. The
            university also provides excellent sporting facilities and programs,
            encouraging an active lifestyle and enabling students to compete at
            various levels, making for a truly memorable and holistic
            experience.
          </p>
        </div>

        {/* Infinite Slider */}
        <div className="overflow-hidden relative w-full">
          <div className="flex space-x-8 animate-scroll">
            {extendedSchools.map((school, index) => (
              <SchoolCard
                key={`${school.id}-${index}`}
                name={school.name}
                image={school.image}
              />
            ))}
          </div>
          {/* Fade effect on the sides */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Keyframes for the scrolling animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${schools.length * (320 + 32)}px);
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
      `}</style>
    </section>
  );
}
