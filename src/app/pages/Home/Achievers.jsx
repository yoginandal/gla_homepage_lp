"use client";
import React from "react";
import {
  Star,
  StarHalf,
  ShoppingCart,
  Heart,
  Info,
  Cpu,
  HardDrive,
  MemoryStick,
  Maximize,
} from "lucide-react";

const products = [
  {
    id: 1,
    tagColor: "bg-green-500",
    title: "Prankur Chaturvedi ",
    subtitle: "Assistant Manager, KPMG ",
    image:
      "https://www.gla.ac.in/Uploads/TestimonialImage/87testi_prankur-chaturvedi.webp",
    price: "$199.99",
    oldPrice: "$249.99",
    rating: 4.5,
    reviews: 142,
  },
  {
    id: 2,
    title: "Aashish Bansal ",
    subtitle: "Engineering Group Supervisor, Bechtel India Pvt. Ltd. ",
    image:
      "https://www.gla.ac.in/Uploads/TestimonialImage/68testi_aashish-bansal.webp",
    price: "$179.99",
    oldPrice: "$219.99",
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    tagColor: "bg-red-500",
    title: "Sadhvi Saxena ",
    subtitle:
      "Associate Manager (Business Transformation), Accenture Operations ",
    image:
      "https://www.gla.ac.in/Uploads/TestimonialImage/91testi_sadhavi-saxena.webp",
    price: "$899.99",
    oldPrice: "$1,199.99",
    rating: 5,
    reviews: 256,
  },
  {
    id: 4,
    tagColor: "bg-red-500",
    title: "Sanchit Kumar Garg ",
    subtitle: "Assistant Director General, Ministry of Communication ",
    image:
      "https://www.gla.ac.in/Uploads/TestimonialImage/92testi_sanchit-kumar-garg.webp",
    price: "$899.99",
    oldPrice: "$1,199.99",
    rating: 5,
    reviews: 256,
  },
];

export default function AchieversSection() {
  return (
    <div className="bg-gray-100  py-18 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto mb-14">
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
      Achievers
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
          At GLA University, we are proud of our students for achieving top <br /> positions in public, private and corporate sector.
            </p>
            </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {/* Regular Product Cards */}
          {products.map((p) => (
            <div
              key={p.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-80">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full lg:object-cover sm:object-contain object-fit transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {p.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{p.subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
