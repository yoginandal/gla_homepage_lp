"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Array of images for the slider
const sliderImages = [
  "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop",
];

export default function QualityEducationSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play functionality for the slider
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []);

  return (
    <section className="bg-white py-20 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: Static Text Content */}
          <div className="space-y-6 text-left lg:pr-8">
            <p className="text-lg font-medium text-gray-700 drop-shadow-sm">
              Imparting
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-tight drop-shadow-sm">
              Quality
              <br />
              Education<span className="text-emerald-600">.</span>
            </h2>
            <div className="pt-4">
              <h3 className="text-2xl font-semibold text-emerald-800">
                We have the <span className="text-gray-900">Best Faculty</span>
              </h3>
              <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                Our university&apos;s faculty are world-renowned for expanding
                the boundaries of knowledge while educating the generation of
                thinkers and doers. They are all highly qualified, all of whom
                are doctorates from reputed premier institutions from around the
                globe.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Image Slider with Asymmetrical Border */}
          <div className="relative w-full max-w-lg mx-auto h-auto">
            {/* The asymmetrical green border with gradient background */}
            <div className="relative bg-linear-to-br from-green-500 via-green-400 to-yellow-400 p-3">
              <div className="bg-white p-3">
                {/* The image container with top padding */}
                <div className="relative w-full h-[400px] sm:h-[450px] overflow-hidden pt-8">
                  {sliderImages.map((src, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentIndex ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <Image
                        src={src}
                        alt={`Education feature ${index + 1}`}
                        fill
                        className="object-cover grayscale"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Slider dots */}
            <div className="absolute bottom-[-30px] left-1/2 -translate-x-1/2 flex gap-2">
              {sliderImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
                    index === currentIndex
                      ? "bg-emerald-700"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
