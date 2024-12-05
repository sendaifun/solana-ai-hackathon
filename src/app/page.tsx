import GetStartedSection from "@/components/GetStartedSection";
import HeroSection from "@/components/HeroSection";
import JudgesSection from "@/components/JudgesSection";
import NavbarComp from "@/components/Navbar";
import PreviewCards from "@/components/Section2";
import Section3 from "@/components/Section3";
import SponsorSection from "@/components/SponsorSection";
import TracksSection from "@/components/TracksSection";

export default function Home() {
  return (
    <>
      {/* <div className={`${relishGargler.variable} font-relishGargler`}>Solana AI Hackathon</div> */}
      <div className="flex flex-col">
        <NavbarComp />
        <HeroSection />
        <PreviewCards />
        <Section3 />
        <TracksSection />
        <GetStartedSection />
        <JudgesSection />
        <SponsorSection />
      </div>
    </>
  );
}
