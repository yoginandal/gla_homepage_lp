"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Palette, Users, Trophy } from "lucide-react";

const campusActivities = [
  {
    id: 1,
    title: "Arts and Culture",
    icon: Palette,
    description:
      "GLA University fosters creativity in all its forms — be it art, music, drama, or dance. Our vibrant cultural scene provides endless opportunities to explore and express yourself.",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=1400&auto=format&fit=crop&q=80",
    gradient: "from-purple-600 to-fuchsia-600",
  },
  {
    id: 2,
    title: "Campus Life",
    icon: Users,
    description:
      "Experience the dynamic campus life at GLA University with countless opportunities for personal growth, leadership development, and memorable experiences.",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1400&auto=format&fit=crop&q=80",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: 3,
    title: "Sports and Athletics",
    icon: Trophy,
    description:
      "GLA University provides excellent sporting facilities and programs, encouraging students to maintain an active lifestyle while competing at various levels.",
    image:
      "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1400&auto=format&fit=crop&q=80",
    gradient: "from-green-600 to-emerald-600",
  },
];

export default function CampusLife() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Simple Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">
            Campus Life at GLA Noida
          </h2>
          <p className="text-2xl md:text-3xl text-slate-600 font-light">
            A vibrant ecosystem of learning and growth
          </p>
        </div>

        {/* Three Column Grid - All Equal */}
        <div className="grid md:grid-cols-3 gap-8">
          {campusActivities.map((activity) => {
            const Icon = activity.icon;
            return (
              <Card
                key={activity.id}
                className="group relative overflow-hidden border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Large Image - 400px */}
                <div className="relative h-[400px] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transform group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url(${activity.image})` }}
                  />
                  {/* Gradient Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent`}
                  />

                  {/* Floating Icon */}
                  <div className="absolute top-6 left-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${activity.gradient} flex items-center justify-center shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
                      {activity.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 bg-white">
                  <p className="text-lg text-slate-600 leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  <Button
                    className={`w-full bg-gradient-to-r ${activity.gradient} hover:opacity-90 text-white text-base font-semibold shadow-lg group/btn`}
                    size="lg"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
