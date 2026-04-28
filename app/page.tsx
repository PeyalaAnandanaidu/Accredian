import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import AccredianEdge from "@/components/AccredianEdge";
import DomainExpertise from "@/components/DomainExpertise";
import CourseSegmentation from "@/components/CourseSegmentation";
import WhoShouldJoin from "@/components/WhoShouldJoin";
import CATFramework from "@/components/CATFramework";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";   // ← ADD
import CTABanner from "@/components/CTABanner";         // ← ADD

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Clients />
      <AccredianEdge />
      <DomainExpertise />
      <CourseSegmentation />
      <WhoShouldJoin />
      <CATFramework />
      <HowItWorks />
      <FAQ />
      <Testimonials />   {/* ← ADD */}
      <CTABanner />      {/* ← ADD */}
    </>
  );
}