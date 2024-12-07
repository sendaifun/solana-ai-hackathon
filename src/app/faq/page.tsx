import FAQSection from "@/components/FaqSection";
import Footer from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NavbarComp from "@/components/Navbar";
import PartnershipSection from "@/components/PartnershipSection";
import React from "react";

const page = () => {
  return (
    <>
      <NavbarComp />
      <HeroSection />
      <PartnershipSection />
      <FAQSection />
      <Footer />
    </>
  );
};

export default page;
