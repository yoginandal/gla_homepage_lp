"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const schools = [
  { id: 1, name: "Sports & Athletics", image: "/images/IMG-20251104-WA0001_1_11zon.webp" },
  { id: 2, name: "Cultural Events & Festivals", image: "/images/IMG-20251104-WA0002_2_11zon.webp" },
  { id: 3, name: "Library & Learning Spaces", image: "/images/IMG-20251104-WA0003_3_11zon.webp" },
  { id: 4, name: "Student Clubs & Communities", image: "/images/IMG-20251104-WA0004_4_11zon.webp" },
  { id: 5, name: "Music & Dance", image: "/images/IMG-20251104-WA0005_5_11zon.webp" },
  { id: 6, name: "Cafeteria & Dining", image: "/images/IMG-20251104-WA0006_6_11zon.webp" },
  { id: 7, name: "Art & Photography", image: "/images/IMG-20251104-WA0007_7_11zon.webp" },
  { id: 8, name: "Hostel Life", image: "/images/IMG-20251104-WA0008_8_11zon.webp" },
];

const SchoolCard = ({ name, image }) => (
  <div className="flex-shrink-0 w-[280px] sm:w-[320px] rounded-lg overflow-hidden shadow-xl bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
    <div className="relative h-56 w-full">
      <Image src={image} alt={name} fill className="object-cover" sizes="320px" />
    </div>
    <div className="p-6">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 min-h-[56px]">{name}</h3>
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
  const loopedSchools = [...schools, ...schools];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Campus <span className="text-green-600">Life</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            GLA University fosters a vibrant campus life that encourages creativity in all its forms—be it art, music,
            drama, or dance. Students experience a dynamic environment with countless opportunities for personal growth,
            leadership development, and sports excellence.
          </p>
        </div>

        {/* Infinite Scroll */}
        <div className="overflow-hidden relative marquee-container">
          <div className="flex space-x-8 animate-marquee">
            {loopedSchools.map((school, i) => (
              <SchoolCard key={`${school.id}-${i}`} {...school} />
            ))}
          </div>

          {/* Fades */}
          <div className="absolute top-0 left-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 80s linear infinite;
          display: flex;
          width: max-content;
        }

        /* ✅ Pause animation on hover */
        .marquee-container:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
