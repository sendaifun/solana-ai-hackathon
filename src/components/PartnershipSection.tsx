"use client";
import sponsorBottomR from "@/assets/images/svgs/abstract/SponsorBottomR.svg";
import Image from "next/image";

export default function PartnershipSection() {
  return (
    <div className="w-full bg-black py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-relishGargler text-white leading-tight">
            LOOKING TO SPONSOR
            <br />
            THE HACKATHON?
          </h2>
        </div>

        <div className="space-y-6">
          <p className="text-white/90 text-lg leading-relaxed font-PPSans">
            Leading founders, developers, and investors from the Solana
            ecosystem join the Solana AI Hackathon as judges and contributors.
            Many of Solana's top companies have sponsored past hackathons,
            ensuring builders enjoy a seamless and enriching experience.
          </p>

          <button className="bg-white text-black px-8 py-3 rounded-lg hover:bg-white/90 transition-colors">
            Get in Touch!
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <Image
          src={sponsorBottomR}
          alt="Sponsor"
          className="mx-8 w-24 md:w-auto"
        />
      </div>
    </div>
  );
}
