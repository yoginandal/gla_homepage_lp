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

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
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

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

export default function StatShowcase() {
  return (
    <section className="relative py-24 md:py-32 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Large Hero Text with Text Shadow */}
        <div className="text-center mb-20">
          <h2
            className="text-8xl md:text-9xl lg:text-[12rem] font-black tracking-tight leading-none"
            style={{
              color: "#f5f5f5",
              textShadow: `
                3px 3px 0px rgba(0, 0, 0, 0.03),
                6px 6px 0px rgba(0, 0, 0, 0.02),
                9px 9px 0px rgba(0, 0, 0, 0.015),
                12px 12px 0px rgba(0, 0, 0, 0.01)
              `,
            }}
          >
            GLA NOIDA
          </h2>
        </div>

        {/* Stats Grid with Green/Yellow Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              {/* Number - Green Color */}
              <div className="mb-4">
                <span className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-green-600 block">
                  <CountUp
                    end={stat.value}
                    duration={2500}
                    suffix={stat.suffix}
                  />
                </span>
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
