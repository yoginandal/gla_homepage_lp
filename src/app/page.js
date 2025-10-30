import HeroSlider from "@/app/pages/Home/heroSlider";
import EducationHero from "@/app/pages/Home/EducationHero";
import RankingSection from "@/app/pages/Home/RankingSection";
import VisionSection from "@/app/pages/Home/VisionSection";
import ProgramsShowcase from "@/app/pages/Home/ProgramShowcase";
import WhatSetUsApart from "@/app/pages/Home/WhatSetUsApart";
import CampusLife from "@/app/pages/Home/CampusLife";
import CampusEvents from "@/app/pages/Home/CampusEvents";
import StatShowcase from "@/app/pages/Home/StatShowcase";
import RecruiterShowcase from "@/app/pages/Home/RecruiterShowcase";
import ExperienceGLASection from "@/app/pages/Home/ExperienceGLASection";
import ResearchSection from "@/app/pages/Home/ResearchSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSlider />
      <EducationHero />
      <CampusLife />
      <ProgramsShowcase />
      <WhatSetUsApart />
      <ExperienceGLASection />
      <ResearchSection />
      <StatShowcase />
      <RecruiterShowcase />
      <RankingSection />
      <VisionSection />
      <CampusEvents />
    </div>
  );
}
