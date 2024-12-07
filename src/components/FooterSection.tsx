"use client";

import React from "react";
import Image from "next/image";
import solanaAIHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";
import sendAILogo from "@/assets/images/logos/SendAI.svg";
import juiceBoxLogo from "@/assets/images/logos/JuiceBox.svg";
import patternBottom from "@/assets/images/svgs/bgs/pattern.svg";

const Footer = () => {
  const navigation = {
    hackathon: [
      { name: "Tracks", href: "#" },
      { name: "Prizes", href: "#" },
      { name: "FAQs", href: "#" },
    ],
    getStarted: [
      { name: "Ideas", href: "#" },
      { name: "Resources", href: "#" },
      { name: "Find a Team", href: "#" },
    ],
    organizers: [
      { name: "Sponsors", href: "#" },
      { name: "SendAI", href: "#" },
    ],
  };

  return (
    <footer className="bg-[#111111] pt-20 pb-8">
      <div className="mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <Image
                src={solanaAIHackathonLogo}
                alt="Solana Logo"
                width={150}
                height={30}
                className="brightness-100"
              />
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="font-PPSans">//powered by</span>
              <Image
                src={sendAILogo}
                alt="SendAI"
                width={80}
                height={20}
                className="opacity-50"
              />
            </div>
          </div>

          <div className="flex justify-between items-center flex-wrap gap-20">
            <div>
              <h3 className="text-white mb-4">Hackathon</h3>
              <ul className="space-y-3">
                {navigation.hackathon.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Get Started</h3>
              <ul className="space-y-3">
                {navigation.getStarted.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Organisers</h3>
              <ul className="space-y-3">
                {navigation.organizers.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className=" pt-8 flex lg:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 font-PPSans">
            Twenty&apos;24 Solana AI Hackathon
            <br />© All Rights Reserved
          </div>
          <div className="flex gap-2">
            <div className="flex flex-col justify-right items-center gap-2 text-gray-600 font-PPSans">
              <span>crafted with</span>
              <div className="flex gap-2">
                <span>crates of</span>
                <Image
                  src={juiceBoxLogo}
                  alt="Juicebox"
                  width={80}
                  height={20}
                  className="opacity-50"
                />
              </div>
            </div>
            <div className="w-1 border-r border-[#787B7E] bg-[#787B7E]"></div>
          </div>
        </div>
        <Image src={patternBottom} alt="Decorative Dots" className="mt-12" />
      </div>
    </footer>
  );
};

export default Footer;
