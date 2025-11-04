"use client";

import Link from "next/link";
import {
  FileText,
  BookOpen,
  Users,
  Microscope,
  ArrowRight,
} from "lucide-react";

const researchCards = [
  {
    id: 1,
    icon: FileText,
    title: "Sponsored Research Projects",
    link: "#",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Our Research Areas",
    link: "#",
  },
  {
    id: 3,
    icon: Users,
    title: "Research Advisory Council",
    link: "#",
  },
  {
    id: 4,
    icon: Microscope,
    title: "Research Labs at GLA",
    link: "#",
  },
];

export default function ResearchSection() {
  return (
    <section className="relative py-16 md:py-20 bg-black overflow-hidden">
      {/* Dotted Grid Pattern Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Two Large Circular Arc Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[120vw] max-w-[1400px] h-[120vw] max-h-[1400px] rounded-full border-2 border-dotted border-white/15"
          style={{ bottom: "-60%" }}
        />
        <div
          className="absolute left-1/2 -translate-x-1/2 w-[140vw] max-w-[1700px] h-[140vw] max-h-[1700px] rounded-full border-2 border-dotted border-white/15"
          style={{ bottom: "-55%" }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-8 max-w-7xl relative z-10">
        {/* Header Section */}
        <div className="max-w-6xl mx-auto mb-16">
          {/* Centered container for the Shield/D Shape and Overlapping Text */}
          <div className="relative mb-8 h-[300px] flex justify-center items-center">
            {/* The visual block (shape and text) container */}
            <div className="relative w-[350px] md:w-[450px] lg:w-[550px]">
              {/* D-Shape Background */}
              <div
                className="absolute left-0 top-0 bg-yellow-500 shadow-2xl"
                style={{
                  borderRadius: "8px 8px 50% 50% / 8px 8px 50% 50%",
                  width: "180px",
                  height: "200px",
                  zIndex: 0,
                }}
              />

              {/* Text overlaying the D-shape */}
              <div className="relative z-10 w-[350px] md:w-[450px] lg:w-[550px] pt-8 pl-4 md:pl-8 [text-shadow:2px_2px_8px_rgba(0,0,0,0.3)]">

                <h2 className="text-3xl md:text-4xl lg:text-5xl  text-white leading-tight ">
                  <span className="block text-left pl-12 md:pl-20 font-medium lg:pl-[5.8rem]
                  ">
                    Our
                  </span>
                  <span className="block text-left font-bold">Research &</span>
                  <span className="block text-left pl-12 md:pl-20 lg:pl-[5.8rem] font-bold">
                    Innovations
                  </span>
                </h2>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/90 text-lg leading-relaxed max-w-4xl mx-auto mb-8">
              Research and innovation thrive at the heart of our academic
              pursuits at GLA University. Our world-class faculty and
              cutting-edge facilities foster groundbreaking discoveries across
              diverse fields. We foster a culture of curiosity, creativity, and
              collaboration, resulting in discoveries and solutions that address
              real-world challenges. Our commitment to excellence drives us to
              be at the forefront of research-driven innovation, making a
              meaningful impact on society and the world at large.
            </p>

            <Link
              href="#"
              className="group inline-flex items-center gap-2 text-white font-semibold text-lg hover:text-green-400 transition-colors"
            >
              Learn More
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.id}
                href={card.link}
                className="group relative bg-black border-2 border-white/30 rounded-xl p-8 hover:border-green-500 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-black" />
                  </div>
                </div>
                <h3 className="text-white font-semibold text-lg mb-4 min-h-[56px] leading-tight">
                  {card.title}
                </h3>
                <div className="absolute bottom-6 right-6">
                  <ArrowRight className="w-6 h-6 text-green-500 group-hover:text-yellow-500 transition-colors" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
