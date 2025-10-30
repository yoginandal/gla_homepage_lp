"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

// Program data structure
const programData = {
  "All Programs": {
    subcategories: [],
  },
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
    <section className="relative py-16 md:py-20 bg-slate-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Main Container - Square on Mobile, D-Shape on Desktop */}
        <div className="relative">
          {/* Container with Responsive Border Radius */}
          <div className="relative bg-white shadow-2xl rounded-2xl lg:rounded-none lg:rounded-r-[200px] xl:rounded-r-[300px]">
            {/* Green-Yellow Gradient D-Shape Background (Desktop Only) */}
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-1/2 bg-linear-to-br from-green-500 via-green-400 to-yellow-400 rounded-r-[200px] xl:rounded-r-[300px]" />

            <div className="grid lg:grid-cols-2 items-stretch relative">
              {/* Left Side - Form Content */}
              <div className="relative z-10 px-8 md:px-16 py-16 md:py-24 flex items-center overflow-visible">
                <div className="space-y-8 max-w-lg w-full">
                  {/* Header */}
                  <div className="space-y-4">
                    <p className="text-lg text-slate-600 font-medium">
                      Let us help you
                    </p>
                    <h2 className="text-5xl md:text-6xl font-bold leading-tight">
                      <span className="text-slate-900">Find your </span>
                      <span className="text-green-600">program</span>
                    </h2>
                  </div>

                  {/* Dropdown 1 - Program Category */}
                  <div className="relative">
                    <button
                      onClick={() => {
                        setShowCategoryDropdown(!showCategoryDropdown);
                        setShowSubcategoryDropdown(false);
                      }}
                      className="w-full px-6 py-4 bg-slate-100 rounded-lg text-left flex items-center justify-between hover:bg-slate-200 transition-colors"
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

                    {/* Category Dropdown */}
                    {showCategoryDropdown && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-xl z-30 max-h-64 overflow-y-auto">
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
                      </div>
                    )}
                  </div>

                  {/* Dropdown 2 - Specific Program */}
                  <div className="relative">
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
                      className={`w-full px-6 py-4 rounded-lg text-left flex items-center justify-between transition-colors ${
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
                        {selectedSubcategory || "Part-time Ph.D. Rules"}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-slate-600 transition-transform ${
                          showSubcategoryDropdown ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Subcategory Dropdown */}
                    {showSubcategoryDropdown &&
                      currentSubcategories.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-xl z-30 max-h-80 overflow-y-auto">
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
                        </div>
                      )}
                  </div>
                </div>
              </div>

              {/* Right Side - Student Image (Desktop Only) */}
              <div className="relative hidden lg:block min-h-[600px] overflow-hidden rounded-r-[200px] xl:rounded-r-[300px]">
                <div className="absolute inset-0 flex items-end justify-start pl-4">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/063/405/522/small/young-beautiful-college-student-with-backpack-and-holding-book-isolated-on-the-transparent-background-png.png"
                    alt="Student"
                    className="h-[520px] w-auto object-contain object-bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
