"use client";

import lLines from "@/assets/images/svgs/abstract/LLines.svg";
import rLines from "@/assets/images/svgs/abstract/Rlines.svg";
import hackLogoBig from "@/assets/images/svgs/bgs/HeroAIHackText.svg";
import Image from "next/image";
import sendAILogo from "@/assets/images/logos/SendAI.svg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-PPSans">

      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] opacity-20" />
      </div>


      <div className="absolute top-32 left-8">
        <div className="border-2 border-cyan-400 p-2 w-48">
          <div className="bg-cyan-400/10 p-1">
            <span className="text-cyan-400 font-mono">DeFi Agents</span>
          </div>
          <div className="mt-2">
            <img
              src="/api/placeholder/180/120"
              alt="DeFi Agents"
              className="w-full"
            />
          </div>
          <div className="mt-2 bg-cyan-400/10 p-1">
            <span className="text-cyan-400 font-mono">Agent Tooling</span>
          </div>
        </div>
      </div>


      <div className="absolute top-32 right-8">
        <div className="border-2 border-yellow-400 p-2 w-48">
          <div className="bg-yellow-400/10 p-1">
            <span className="text-yellow-400 font-mono">dates</span>
          </div>
          <div className="p-4 text-center">
            <span className="text-xl font-mono">
              9th to
              <br />
              23rd
              <br />
              dec
            </span>
          </div>
        </div>
      </div>


      <div className="flex flex-col items-center justify-center min-h-screen px-4">

        <div className="flex flex-col items-center space-y-6 max-w-4xl w-full text-center">
          <Image
            src={hackLogoBig}
            alt="Hackathon Logo"
            className="w-full h-auto"
            width={200}
            height={60}
          />


          <div className="font-PPSans text-lg mt-8 flex gap-4 ">
            <Image src={lLines} alt="Solana Logo" className="w-24" />
            <span className="opacity-80">
              global · $100k+ in prizes · build ai agents on solana
            </span>
            <Image src={rLines} alt="Solana Logo" className="w-24" />
          </div>


          <button className="mt-8 bg-white text-black px-8 py-3 rounded-md font-medium hover:bg-gray-200 transition-colors flex items-center space-x-2">
            <span>Join the Hackathon</span>

          </button>
        </div>


        <div className="absolute bottom-8 flex items-center opacity-50">
          <span className="font-PPSans">//powered by</span>
          <Image src={sendAILogo} alt="SendAI Logo" className="h-6" />
        </div>
      </div>


      <div className="absolute bottom-32 right-8">
        <div className="border-2 border-cyan-400 p-2 w-48">
          <div className="bg-cyan-400/10 p-1">
            <span className="text-cyan-400 font-mono">Agent Aggregators</span>
          </div>
          <div className="mt-2">
            <img
              src="/api/placeholder/180/120"
              alt="Social Agents"
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
