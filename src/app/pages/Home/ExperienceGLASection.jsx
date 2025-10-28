"use client";

import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

// Data for the feature cards
const features = [
  {
    title: "Innovation at GLA",
    imageUrl:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=2020&auto=format&fit=crop",
  },
  {
    title: "Impact by GLA",
    imageUrl:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    title: "Celebrations at GLA",
    imageUrl:
      "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Collaborations at GLA",
    imageUrl:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop",
  },
];

// Reusable Card Component
const FeatureCard = ({ title, imageUrl }) => {
  return (
    <div className="group relative w-full h-[450px] overflow-hidden">
      {/* Image fills the entire container */}
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />

      {/* Text content positioned at the bottom */}
      <div className="absolute bottom-0 left-0 p-8 text-white">
        <h3 className="text-3xl font-bold mb-4">{title}</h3>
        <Link
          href="#"
          className="inline-flex items-center text-sm font-semibold text-green-300 group-hover:text-yellow-300 transition-colors"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};

export default function ExperienceGLASection() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Top Section: Heading and Description */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="flex items-center gap-6">
            <div className="relative flex-shrink-0 w-28 h-28">
              {/* <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-yellow-400 rounded-full blur-xl opacity-70"></div> */}
              <div className="relative w-full h-full flex items-center justify-center">
                <Quote
                  className="w-full h-full text-green-500 transform -scale-x-100"
                  strokeWidth={1.2}
                />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Experience
              <br />
              GLA University
            </h2>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed">
            GLA University signifies Global Thinkers and Engaged Leaders. The
            professionals who think how the world is for them and others and how
            to make it a better place through positive engagement. Further, they
            embody the spirit of Accepting No Limits, Driving Positive Change
            and Alternative thinking.
          </p>
        </div>

        {/* Bottom Section: Feature Cards Grid with NO GAPS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 p-0">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              imageUrl={feature.imageUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
