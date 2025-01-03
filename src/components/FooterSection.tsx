"use client";

import React from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";
import solanaAIHackathonLogo from "@/assets/images/logos/HackathonLogo.svg";
import sendAILogo from "@/assets/images/logos/SendAI.svg";
import juiceBoxLogo from "@/assets/images/logos/JuiceBox.svg";
import patternBottom from "@/assets/images/svgs/bgs/pattern.svg";

const Footer = () => {
  const navigation = {
    hackathon: [
      { name: "Tracks", href: "/#tracks", openInNewTab: false },
      { name: "FAQs", href: "/faq#faqs" },
    ],
    getStarted: [
      {
        name: "Ideas",
        href: "https://www.sendai.fun/ideas",
        openInNewTab: true,
      },
      {
        name: "Resources",
        href: "/resources",
        openInNewTab: true,
      },
      {
        name: "Find a Team",
        href: "https://t.me/solana_ai_hackathon/19",
        openInNewTab: true,
      },
    ],
    organizers: [
      { name: "Sponsors", href: "/#sponsors" },
      { name: "SendAI", href: "https://www.sendai.fun", openInNewTab: true },
    ],
  };

  const handleNavClick = (section: string, itemName: string, isExternal: boolean) => {
    track('footer_navigation_click', {
      section,
      itemName,
      linkType: isExternal ? 'external' : 'internal'
    });
  };

  const handleLogoClick = (logoName: string) => {
    track('footer_logo_click', {
      logoName
    });
  };

  const handleJuiceboxClick = () => {
    track('juicebox_link_click', {
      location: 'footer'
    });
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
                onClick={() => handleLogoClick('solana_hackathon')}
              />
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <span className="font-PPSans text-white">//powered by</span>
              <Image
                src={sendAILogo}
                alt="SendAI"
                width={80}
                height={20}
                className="opacity-50"
                onClick={() => handleLogoClick('sendai')}
              />
            </div>
          </div>

          <div className="flex justify-between items-top flex-wrap gap-20">
            <div>
              <h3 className="text-white mb-4">Hackathon</h3>
              <ul className="space-y-3">
                {navigation.hackathon.map((item) => (
                  <li key={item.name}>
                    <a
                      target={item?.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                      onClick={() => handleNavClick('hackathon', item.name, item.openInNewTab || false)}
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
                      target={item?.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                      onClick={() => handleNavClick('get_started', item.name, item.openInNewTab || false)}
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
                      target={item?.openInNewTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      href={item.href}
                      className="text-gray-500 hover:text-gray-400"
                      onClick={() => handleNavClick('organizers', item.name, item.openInNewTab || false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 flex lg:flex-row justify-between items-center gap-4">
          <div className="text-gray-600 font-PPSans">
            Twenty&apos;24 Solana AI Hackathon
            <br />© All Rights Reserved
          </div>
          <div className="flex gap-2">
            <a 
              href="https://x.com/juicebox_it"
              onClick={handleJuiceboxClick}
            >
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
            </a>
            <div className="w-1 border-r border-[#787B7E] bg-[#787B7E]"></div>
          </div>
        </div>
        <Image src={patternBottom} alt="Decorative Dots" className="mt-12" />
      </div>
    </footer>
  );
};

export default Footer;