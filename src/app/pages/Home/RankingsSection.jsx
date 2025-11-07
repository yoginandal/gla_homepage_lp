"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function RankingsSection() {
  const rankings = [
    {
      logo: "/images/wuri.webp",
      rank: "4",
      suffix: "th",
      title: "The WORLD UNIVERSITY RANKINGS for INNOVATION",
      desc: "Amongst all government and private universities in India.",
    },
    {
      logo: "/images/the-world-university-ranking-lpu-2025.webp",
      rank: "5",
      suffix: "th",
      title: "World University Rankings 2026",
      desc: "Among top universities of India.",
    },
    {
      logo: "/images/nirf.webp",
      rank: "31",
      suffix: "st",
      title: "National Institutional Ranking Framework (NIRF)",
      desc: "Amongst all government and private universities in India.",
    },
    {
      logo: "/images/the-impact-2025.webp",
      rank: "2",
      suffix: "nd",
      title: "THE Impact Rankings 2025",
      desc: "Amongst all government and private universities in India.",
    },
  ];

  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-10">
          Rankings & <span className="text-[#1a237e]">Accreditations</span>
        </h2>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-xl overflow-hidden">
          {rankings.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 lg:p-8 border-gray-200 border-b md:border-b-0 md:border-r last:border-none hover:bg-gray-50 transition"
            >
              <div className="h-14 lg:h-16 w-full mb-4 relative flex items-center justify-center">
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={150}
                  height={64}
                  className="object-contain w-auto h-full max-w-full"
                  sizes="(max-width: 1024px) 120px, 150px"
                />
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-gray-900">
                {item.rank}
                <sup className="text-lg lg:text-xl font-semibold align-super">
                  {item.suffix}
                </sup>
              </h3>
              <p className="text-sm text-gray-500 mt-1 px-2">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <Swiper
            modules={[Navigation]}
            slidesPerView={1}
            spaceBetween={16}
            navigation={{
              nextEl: ".swiper-button-next-ranking",
              prevEl: ".swiper-button-prev-ranking",
            }}
            className="!pb-12"
          >
            {rankings.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col items-center justify-center text-center p-6 border border-gray-200 rounded-xl hover:bg-gray-50 transition">
                  <div className="h-14 w-full mb-4 relative flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.title}
                      width={150}
                      height={64}
                      className="object-contain w-auto h-full max-w-full"
                      sizes="100px"
                    />
                  </div>
                  <h3 className="text-4xl font-bold text-gray-900">
                    {item.rank}
                    <sup className="text-lg font-semibold align-super">
                      {item.suffix}
                    </sup>
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 px-2">{item.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button
            className="swiper-button-prev-ranking absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            className="swiper-button-next-ranking absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border-2 border-gray-300 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
}
