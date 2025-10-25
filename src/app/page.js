import HeroSlider from "@/app/pages/Home/heroSlider";
import EducationHero from "@/app/pages/Home/EducationHero";
import RankingSection from "@/app/pages/Home/RankingSection";
import VisionSection from "@/app/pages/Home/VisionSection";
import ProgramsShowcase from "@/app/pages/Home/ProgramShowcase";
import WhatSetUsApart from "@/app/pages/Home/WhatSetUsApart";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <EducationHero />
      <RankingSection />
      <VisionSection />
      <ProgramsShowcase />
      <WhatSetUsApart />
    </div>
  );
}
