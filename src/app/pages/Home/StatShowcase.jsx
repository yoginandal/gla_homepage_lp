"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 1500, label: "Placements", suffix: "+" },
  { value: 400, label: "Companies", suffix: "+" },
  { value: 1000, label: "Publications", suffix: "+" },
  { value: 80, label: "Awards", suffix: "+" },
];

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = countRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      setCount(Math.floor(end * percentage));

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [isVisible, end, duration]);

  // The span now just returns the values. Styling is handled by the parent.
  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function StatShowcase() {
  return (
    <section className="relative py-16 md:py-20 bg-linear-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-size-[4rem_4rem]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Large Hero Text with updated Text Shadow */}
        <div className="text-center mb-12 md:mb-16 overflow-hidden">
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] xl:text-[8rem] font-black tracking-tight leading-none px-4"
            style={{
              color: "#f5f5f5",
              textShadow: `
                0px 4px 0px rgba(0, 0, 0, 0.1),
                0px 8px 0px rgba(0, 0, 0, 0.08),
                0px 12px 0px rgba(0, 0, 0, 0.06),
                0px 16px 0px rgba(0, 0, 0, 0.04)
              `,
            }}
          >
            GLA PLACEMENT
          </h2>
        </div>

        {/* Stats Grid with Green/Yellow Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Number - Font size and color applied here */}
              <div className="mb-4 text-green-600 font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
                {/* <CountUp
                  end={stat.value}
                  duration={2500}
                  suffix={stat.suffix}
                /> */}
                {stat.value}
                {stat.suffix}
              </div>

              {/* Divider Line - Changes to Yellow on Hover */}
              <div className="w-full h-0.5 bg-slate-900 mb-4 group-hover:bg-yellow-500 transition-colors duration-300"></div>

              {/* Label */}
              <div className="text-lg md:text-xl font-semibold text-slate-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
