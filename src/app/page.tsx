import { relishGargler } from "@/assets/fonts/fonts-custom";
import HeroSection from "@/components/HeroSection";
import NavbarComp from "@/components/Navbar";
import PreviewCards from "@/components/Section2";

export default function Home() {
  return (
    <>
      {/* <div className={`${relishGargler.variable} font-relishGargler`}>Solana AI Hackathon</div> */}
      <div className="flex flex-col">
        <NavbarComp />
        <HeroSection />
        <PreviewCards />
      </div>
    </>
  );
}
