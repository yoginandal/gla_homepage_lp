"use client";

import { Play } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, GraduationCap, Globe2 } from "lucide-react";
import {  Autoplay } from "swiper/modules";
export default function TopCollegesSection() {
  const videos = [
    {
      id: 1,
      thumbnail: "/images/DSC00868_11zon_11zon.webp",
      title: "Startups at Masters' Union",
      desc: "From idea to execution, a sneak peek into the businesses incubated at Masters' Union.",
      youtubeLink: "https://youtu.be/HeMNPaGtRr4?si=Cs7SO6ZB1oANY2_3",
    },
    {
      id: 2,
      thumbnail: "/images/DSC03401_11zon_11zon.webp",
      title: "Entrepreneurship Journey",
      desc: "Stories of founders who built impactful startups with guidance and mentorship.",
      youtubeLink: "https://youtu.be/nxK5lTHIOJE?si=WQrSxCfs8RKftMSd",
    },
    {
      id: 3,
      thumbnail: "/images/IMG-20251104-WA0002_2_11zon.webp",
      title: "Innovation Lab Showcase",
      desc: "Students demonstrate their cutting-edge prototypes in the Masters' Union lab.",
      youtubeLink: "https://youtu.be/zkb_rvucL9Q?si=r0kuzHwUzX_AQrfF",
    },
    {
      id: 4,
      thumbnail: "/images/IMG-20251104-WA0003_3_11zon.webp",
      title: "Leadership & Impact",
      desc: "How Masters' Union shapes business leaders through real-world projects.",
      youtubeLink: "https://youtu.be/1_fUdYLLjUk?si=E3dPHU1HU2u7JHUY",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(1); // 2nd image active by default

  return (
    <section className="bg-white py-18 flex justify-center">
      <style jsx global>{`
        .swiper-slide {
          z-index: 10 !important;
        }
        .swiper-slide-active {
          z-index: 100 !important;
          transform: scale(1) !important;
          filter: blur(0) !important;
          opacity: 1 !important;
        }
        .swiper-slide-next {
          z-index: 5 !important;
          transform: scale(0.9) translateX(1.5rem) !important;
          filter: blur(3px) !important;
          opacity: 0.6 !important;
        }
        .swiper-slide-prev {
          z-index: 5 !important;
          transform: scale(0.9) translateX(-1.5rem) !important;
          filter: blur(3px) !important;
          opacity: 0.6 !important;
        }
        .swiper-slide:not(.swiper-slide-active):not(.swiper-slide-next):not(.swiper-slide-prev) .slide-content {
          transform: scale(0.9) !important;
          filter: blur(3px) !important;
          opacity: 0.6 !important;
        }
        .swiper-slide-active .slide-content {
          transform: scale(1) !important;
          filter: blur(0) !important;
          opacity: 1 !important;
          box-shadow: none !important;
        }
        .swiper-slide-next .slide-content {
          transform: scale(0.9) translateX(1rem) !important;
          filter: blur(3px) !important;
          opacity: 0.6 !important;
        }
        .swiper-slide-prev .slide-content {
          transform: scale(0.9) translateX(-1rem) !important;
          filter: blur(3px) !important;
          opacity: 0.6 !important;
        }
          
      `}</style>
      <div className="relative bg-zinc-950 max-w-7xl w-full rounded-2xl px-4 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between md:space-x-10">
          {/* Left: Swiper */}
          <div className="w-full md:w-[55%]">
            <Swiper
              modules={[Pagination,Autoplay]}
              slidesPerView={1.6}
              centeredSlides={true}
              initialSlide={3}
              spaceBetween={-80}
              speed={1200}
              loop={true}
              autoplay={{
                delay: 2000, // 3 seconds between slides
                disableOnInteraction: false, // keeps autoplay running after swipe
              }}
              pagination={{
                clickable: true,
                bulletClass:
                  "swiper-pagination-bullet !bg-gray-500 !opacity-70 !mx-1",
                bulletActiveClass: "!bg-white !opacity-100",
              }}
              onSlideChange={(swiper) => {
                const realIndex = swiper.realIndex;
                setActiveIndex(realIndex);
              }}
              className="w-full pb-10"
              style={{ position: 'relative' }}
            >
              {videos.map((video, index) => {
                return (
                <SwiperSlide 
                  key={video.id}
                  className="swiper-slide-custom"
                >
                  <div
                    className="relative h-[420px] md:h-[500px] rounded-2xl overflow-hidden transition-all duration-700 slide-content"
                  >
                    <Link
                      href={video.youtubeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <Image
                        src={video.thumbnail}
                        alt={video.title}
                        fill
                        className="object-cover"
                      />
                      {/* Overlay Play Button */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition-all">
                        <div className="bg-white text-black rounded-full p-4 shadow-md">
                          <Play size={36} />
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              )})}
            </Swiper>
          </div>

          {/* Right: Text Content */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-lg w-full md:w-[45%] mt-10 md:mt-0 z-30">
  <p className="text-gray-400 line-through text-lg">University Life</p>

  <h2 className="text-3xl md:text-4xl font-serif italic text-gray-900 transition-all duration-500">
    {videos[activeIndex].title}
  </h2>

  <p className="mt-4 text-gray-600 leading-relaxed transition-all duration-500">
    {videos[activeIndex].desc}
  </p>

  <div className="mt-6 space-y-4 text-gray-500 text-sm">
    <div className="flex items-start gap-3">
      <GraduationCap className="text-blue-600 w-5 h-5 mt-0.5" />
      <p>
        Experience the vibrant campus culture where innovation meets inspiration.
      </p>
    </div>

    <div className="flex items-start gap-3">
      <Globe2 className="text-green-600 w-5 h-5 mt-0.5" />
      <p>
        Watch students showcase their creativity, leadership, and global perspective.
      </p>
    </div>
  </div>

  <Link
    href={videos[activeIndex].youtubeLink}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 bg-black text-white rounded-full px-6 py-3 mt-6 text-lg hover:bg-gray-800 transition"
  >
    <ArrowRight size={18} /> Watch on YouTube
  </Link>
 
</div>

        </div>
      </div>
    </section>
  );
}
