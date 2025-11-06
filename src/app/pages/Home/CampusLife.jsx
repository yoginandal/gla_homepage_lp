"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const schools = [
  { id: 1, name: "B.Tech (CSE / AIML)", image: "/images/IMG-20251104-WA0001_1_11zon.webp" },
  { id: 2, name: "BCA", image: "/images/IMG-20251104-WA0002_2_11zon.webp" },
  { id: 3, name: "BBA", image: "/images/IMG-20251104-WA0003_3_11zon.webp" },
  { id: 4, name: "MBA", image: "/images/DSC03935_11zon_11zon.webp" },
  
];

const SchoolCard = ({ name, image }) => (
  <div className="shrink-0 w-[260px] sm:w-[300px] md:w-full rounded-lg overflow-hidden shadow-xl bg-slate-900 hover:scale-[1.02] transition-transform duration-300">
    <div className="relative h-52 w-full">
      <Image src={image} alt={name} fill className="object-cover" sizes="(min-width: 640px) 300px, 260px" />
    </div>
    <div className="p-5">
      <h3 className="text-lg sm:text-xl font-bold text-white mb-3 min-h-[40px]">{name}</h3>
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
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 320;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our <span className="text-green-600">Programs</span>
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            GLA University fosters a vibrant campus life that encourages creativity in all its forms—be it art, music,
            drama, or dance. Students experience a dynamic environment with countless opportunities for personal growth,
            leadership development, and sports excellence.
          </p>
        </div>

        {/* Desktop: Grid Layout | Mobile: Manual Scroll with Buttons */}
        <div className="relative">
          {/* Desktop Grid Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
            {schools.map((school) => (
              <SchoolCard key={school.id} {...school} />
            ))}
          </div>

          {/* Mobile Manual Scroll */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => scroll("left")}
              className="p-2 bg-slate-800 text-white rounded-full mr-2 active:scale-95 shadow-md"
            >
              <ChevronLeft />
            </button>

            <div
              ref={scrollRef}
              className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth snap-x snap-mandatory"
            >
              {schools.map((school) => (
                <div key={school.id} className="snap-start">
                  <SchoolCard {...school} />
                </div>
              ))}
            </div>

            <button
              onClick={() => scroll("right")}
              className="p-2 bg-slate-800 text-white rounded-full ml-2 active:scale-95 shadow-md"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
