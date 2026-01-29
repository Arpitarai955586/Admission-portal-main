import Image from "next/image";
import Hero from "./components/Hero";
import ExploreColleges from "./components/colleges";
import Category from "./components/category";
import StatsSection from "./components/stats";
import PremiumServices from "./components/Service";
import ProcessSteps from "./components/ProcessSteps";
import StudentStoriesExact from "./components/StudentSuccessStories"; 
import LatestInsights from "./components/LatestInsights";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import UpcomingExams from "./components/exams";
import ExploreProgramsComponent from "./components/ExplorePrograms";

export default function Home() {
  return (
    <div className="bg-[#f8f9fa] w-full">
    
      <Hero />
      <ExploreProgramsComponent/>
      <ExploreColleges />
      <LatestInsights/>
      <UpcomingExams/>
      <Category />
      <StatsSection/>
      <PremiumServices/>
      <ProcessSteps/>
      <StudentStoriesExact/>
      <CTASection/>
      
    </div>
  );
}