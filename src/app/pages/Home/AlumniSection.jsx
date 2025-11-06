"use client";
import { Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function AlumniSection() {
  return (
    <section className="bg-white py-12 md:py-16 px-4 sm:px-8 lg:px-12 overflow-hidden">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase text-gray-600 text-sm font-semibold tracking-wide"
        >
          Alumni
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-black"
        >
          GLA <span className="bg-gradient-to-r from-green-600 to-lime-400 bg-clip-text text-transparent">Alumni</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-gray-500 mt-3 text-base sm:text-lg"
        >
          GLA University testifies its excellence with some of the inspirational
          success stories of our alumni.
        </motion.p>
      </div>

      {/* Divider with icon */}
      <div className="relative mt-8 mb-10 max-w-2xl mx-auto">
        <hr className="border-t border-gray-200" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 bg-green-600 rounded-full flex items-center justify-center text-white shadow-md">
            <Quote className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-8 md:gap-12">
        {/* Salary Box */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0 md:border-r border-gray-200 pr-0 md:pr-10 text-center md:text-left"
        >
          <h3 className="text-5xl sm:text-6xl font-black text-yellow-400 leading-none">
            19.30
            <span className="text-base sm:text-lg align-top ml-1 text-black font-bold">LPA</span>
          </h3>
          <p className="text-gray-500 mt-1 font-medium">Package by VMware</p>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 leading-relaxed text-base sm:text-lg"
        >
          <p>
            I had always heard about the amazing hostel stories and thanks to{" "}
            <span className="text-green-600 font-semibold">GLA</span> for giving
            me some unforgettable hostel memories. The home-like environment and
            tongue-tickling food in the mess made the stay easy and comfortable.
          </p>
          <p className="mt-3">
            My memories outweighed my luggage. The excellent learning at{" "}
            <span className="text-green-600 font-semibold">GLA</span> helped me
            get placed in the technical team of VMware with a whopping package of{" "}
            <span className="font-bold text-yellow-400">₹19.3 LPA</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
