"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const programData = {
  "All Programs": { subcategories: [] },
  "Undergraduate Programs": {
    subcategories: [
      "B.Tech",
      "B.A./BBA",
      "B.A. LL.B",
      "BBA LL.B",
      "B.A. LL.B (Hons.)",
      "BBA LL.B (Hons.)",
      "Bachelor of Journalism and Mass Communication",
      "B.Tech in Computation & Media",
      "Bachelors in Design Program",
      "4-Year BBA (Hons.) in Hospitality Management",
      "BBA Entrepreneurship & Family Business",
    ],
  },
  "Postgraduate Programs": {
    subcategories: ["M.Tech", "MBA", "M.A.", "LL.M", "M.Sc", "M.Des"],
  },
  "Ph.D. Programs": {
    subcategories: ["Engineering", "Management", "Law", "Design", "Sciences"],
  },
};

export default function ProgramFinder() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showSubcategoryDropdown, setShowSubcategoryDropdown] = useState(false);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
    setShowCategoryDropdown(false);
  };

  const handleSubcategorySelect = (subcategory) => {
    setSelectedSubcategory(subcategory);
    setShowSubcategoryDropdown(false);
  };

  const currentSubcategories =
    programData[selectedCategory]?.subcategories || [];

  return (
    <section className="relative py-10 md:py-14 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-8xl">
        {/* Scroll-based Animation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative bg-white shadow-2xl rounded-2xl lg:rounded-none lg:rounded-r-[200px] xl:rounded-r-[300px] overflow-visible hover:scale-[1.01] transition-transform duration-500">
            {/* Gradient D-shape */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-br from-green-500 via-lime-400 to-yellow-400 rounded-r-[200px] xl:rounded-r-[300px]" />

            <div className="grid lg:grid-cols-2 items-stretch relative">
              {/* Left Section */}
              <div className="relative z-10 px-8 md:px-16 py-14 flex items-center overflow-visible">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.4 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-8 max-w-lg w-full"
                >
                  {/* Header */}
                  <div className="space-y-3">
                    <p className="text-lg text-slate-600 font-medium">
                      Let us help you
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                      <span className="text-slate-900">Find your </span>
                      <span className="text-green-600">program</span>
                    </h2>
                  </div>

                  {/* Category Dropdown */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowCategoryDropdown(!showCategoryDropdown);
                        setShowSubcategoryDropdown(false);
                      }}
                      className="w-full px-6 py-4 bg-slate-100 rounded-lg text-left flex items-center justify-between hover:bg-slate-200 transition-all duration-300"
                    >
                      <span
                        className={
                          selectedCategory
                            ? "text-slate-900 font-medium"
                            : "text-slate-500"
                        }
                      >
                        {selectedCategory || "All Programs"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${
                          showCategoryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {showCategoryDropdown && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.25 }}
                          className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-30"
                        >
                          {Object.keys(programData).map((category) => (
                            <button
                              key={category}
                              onClick={() => handleCategorySelect(category)}
                              className={`w-full px-6 py-3 text-left hover:bg-green-50 transition-colors ${
                                selectedCategory === category
                                  ? "bg-green-600 text-white hover:bg-green-600"
                                  : "text-slate-700"
                              }`}
                            >
                              {category}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Subcategory Dropdown */}
                  <div className="relative overflow-visible">
                    <button
                      onClick={() => {
                        if (currentSubcategories.length > 0) {
                          setShowSubcategoryDropdown(!showSubcategoryDropdown);
                          setShowCategoryDropdown(false);
                        }
                      }}
                      disabled={
                        !selectedCategory || currentSubcategories.length === 0
                      }
                      className={`w-full px-6 py-4 rounded-lg text-left flex items-center justify-between transition-all duration-300 ${
                        selectedCategory && currentSubcategories.length > 0
                          ? "bg-white border-2 border-slate-900 hover:bg-slate-50 cursor-pointer"
                          : "bg-slate-100 border-2 border-transparent opacity-50 cursor-not-allowed"
                      }`}
                    >
                      <span
                        className={
                          selectedSubcategory
                            ? "text-slate-900 font-medium"
                            : "text-slate-500"
                        }
                      >
                        {selectedSubcategory || "Select a specific program"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${
                          showSubcategoryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {showSubcategoryDropdown &&
                        currentSubcategories.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.25 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-xl z-[9999] max-h-[140px] overflow-y-auto"
                          >
                            {currentSubcategories.map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={() =>
                                  handleSubcategorySelect(subcategory)
                                }
                                className={`w-full px-6 py-3 text-left hover:bg-green-50 transition-colors ${
                                  selectedSubcategory === subcategory
                                    ? "bg-green-600 text-white hover:bg-green-600"
                                    : "text-slate-700"
                                }`}
                              >
                                {subcategory}
                              </button>
                            ))}
                          </motion.div>
                        )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              </div>

              {/* Right Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="relative hidden lg:block min-h-[480px] overflow-hidden rounded-r-[200px] xl:rounded-r-[300px]"
              >
                <div className="absolute inset-0 flex items-end justify-start pl-22">
                  <img
                    src="/images/young-beautiful-college-student-with-backpack-and-holding-book-isolated-on-the-transparent-background.png"
                    alt="Student"
                    className="h-[440px] w-auto object-contain object-bottom drop-shadow-xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
