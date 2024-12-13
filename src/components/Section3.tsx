"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import PrizeCard from "./ui/PrizeCard";
import SectionHeading from "./ui/SectionHeading";

import adrenaLogo from "@/assets/images/framed-svgs/adrenaLogo.svg";
import ai16zLogo from "@/assets/images/framed-svgs/ai16zLogo.svg";
import arciumLogo from "@/assets/images/framed-svgs/arciumLogo.svg";
import crossmintLogo from "@/assets/images/framed-svgs/crossmintLogo.svg";
import dainLogo from "@/assets/images/framed-svgs/dainLogo.svg";
import dynamicLogo from "@/assets/images/framed-svgs/dynamicLogo.svg";
import emblemvaultLogo from "@/assets/images/framed-svgs/emblemvaultLogo.svg";
import heliusLogo from "@/assets/images/framed-svgs/heliusLogo.svg";
import hologramLogo from "@/assets/images/framed-svgs/hologramLogo.svg";
import ionetLogo from "@/assets/images/framed-svgs/ionetLogo.svg";
import jitoLogo from "@/assets/images/framed-svgs/jitoLogo.svg";
import jupiterLogo from "@/assets/images/framed-svgs/jupiterLogo.svg";
import kuzcoLogo from "@/assets/images/framed-svgs/kuzcoLogo.svg";
import litProtocolLogo from "@/assets/images/framed-svgs/litProtocolLogo.svg";
import meteoraLogo from "@/assets/images/framed-svgs/meteoraLogo.svg";
import mhventuresLogo from "@/assets/images/framed-svgs/mhventuresLogo.svg";
import multicoincapLogo from "@/assets/images/framed-svgs/multicoincapLogo.svg";
import orcaLogo from "@/assets/images/framed-svgs/orcaLogo.svg";
import paladinLogo from "@/assets/images/framed-svgs/paladinLogo.svg";
import solanaFndnLogo from "@/assets/images/framed-svgs/solanaFndnLogo.svg";
import switchboardLogo from "@/assets/images/framed-svgs/switchboardLogo.svg";
import assistrrLogo from "@/assets/images/framed-svgs/assisterrLogo.svg";
import zerebroLogo from "@/assets/images/framed-svgs/zerebroLogo.svg";
import dolosLogo from "@/assets/images/framed-svgs/dolosLogo.svg";
import hAIyezLogo from "@/assets/images/framed-svgs/haiyezLogo.svg";
import aethirLogo from "@/assets/images/framed-svgs/aethirLogo.svg";
import privyLogo from "@/assets/images/framed-svgs/privyLogo.svg";
import animocaLogo from "@/assets/images/framed-svgs/animoca.svg";
import tarsLogo from "@/assets/images/framed-svgs/tars.svg";
import frankImg from "@/assets/images/judges/frank.svg";

const adrenaLogoComp = () => <Image src={adrenaLogo} alt="Adrena Logo" />;

const ai16zLogoComp = () => (
  <Image src={ai16zLogo} className="w-24 object-contain" alt="AI16Z Logo" />
);

const assistrLogoComp = () => <Image src={assistrrLogo} alt="Assistr Logo" />;

const dynamicLogoComp = () => <Image src={dynamicLogo} alt="Dynamic Logo" />;

const heliusLogoComp = () => <Image src={heliusLogo} alt="Helius Logo" />;

const hologramLogoComp = () => <Image src={hologramLogo} alt="Hologram Logo" />;

const ionetLogoComp = () => <Image src={ionetLogo} alt="Ionet Logo" />;

const jitoLogoComp = () => <Image src={jitoLogo} alt="Jito Logo" />;

const jupiterLogoComp = () => <Image src={jupiterLogo} alt="Jupiter Logo" />;

const kuzcoLogoComp = () => <Image src={kuzcoLogo} alt="Kuzco Logo" />;

const meteoraLogoComp = () => <Image src={meteoraLogo} alt="Meteora Logo" />;

const mhventuresLogoComp = () => (
  <Image src={mhventuresLogo} alt="MH Ventures Logo" />
);

const multicoincapLogoComp = () => (
  <Image src={multicoincapLogo} alt="Multicoin Capital Logo" />
);

const paladinLogoComp = () => <Image src={paladinLogo} alt="Paladin Logo" />;

const solanaFndnLogoComp = () => (
  <Image src={solanaFndnLogo} alt="Solana Foundation Logo" />
);

const arciumLogoComp = () => <Image src={arciumLogo} alt="Arcium Logo" />;

const dainLogoComp = () => <Image src={dainLogo} alt="Dain Logo" />;

const litProtocolLogoComp = () => (
  <Image
    src={litProtocolLogo}
    alt="Lit Protocol Logo"
    className="w-8 h-8 object-contain"
  />
);

const emblemvaultLogoComp = () => (
  <Image src={emblemvaultLogo} alt="Emblem Vault Logo" />
);

const switchboardLogoComp = () => (
  <Image src={switchboardLogo} alt="Switchboard Logo" />
);

const orcaLogoComp = () => <Image src={orcaLogo} alt="Orca Logo" />;

const crossmintLogoComp = () => (
  <Image src={crossmintLogo} alt="Crossmint Logo" />
);

const zerebroLogoComp = () => (
  <Image className="w-32 object-contain" src={zerebroLogo} alt="Zerebro Logo" />
);
const dolosLogoComp = () => (
  <Image className="w-24 object-contain" src={dolosLogo} alt="Zerebro Logo" />
);
const AethirLogoComp = () => (
  <Image className="w-24 object-contain" src={aethirLogo} alt="aethir Logo" />
);
const hAIyezLogoComp = () => (
  <Image className="w-24 object-contain" src={hAIyezLogo} alt="hAIyez Logo" />
);

const privyLogoComp = () => (
  <Image className="w-24 object-contain" src={privyLogo} alt="Privy Logo" />
);
const animocaLogoComp = () => (
  <Image className="w-24 object-contain" src={animocaLogo} alt="Privy Logo" />
);

const tarsLogoComp = () => (
  <Image className="w-24 object-contain" src={tarsLogo} alt="Privy Logo" />
);

const FrankLogoComp = () => (
  <Image
    className="w-14 rounded-lg object-contain filter grayscale"
    src={frankImg}
    alt="Privy Logo"
  />
);

const grandPrizeSupporters = [
  { component: jitoLogoComp },
  { component: jupiterLogoComp },
  { component: zerebroLogoComp },
  { component: dolosLogoComp },
  { component: heliusLogoComp },
  { component: multicoincapLogoComp },
  { component: animocaLogoComp },
  { component: assistrLogoComp },
  { component: ionetLogoComp },
  { component: mhventuresLogoComp },
  { component: dynamicLogoComp },
  { component: privyLogoComp },
  { component: tarsLogoComp },
];
const autonomoschatSupporters = [{ component: assistrLogoComp }];
// const socialnInfluencerAgentsSupporters = [{ component: "" }];
const agentsInfraSupporters = [
  { component: arciumLogoComp },
  { component: dainLogoComp },
  { component: litProtocolLogoComp },
];
const agentTokenToolingSupporters = [{ component: emblemvaultLogoComp }];
const defiAgentsSupporters = [
  { component: switchboardLogoComp },
  { component: orcaLogoComp },
];
const tradingAgentsSupporters = [{ component: crossmintLogoComp }];

const trackTabs = [
  {
    title: "Autonomous Chat Agents",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M21 15C21 15.5304 20.7893 16.0391 20.4142 16.4142C20.0391 16.7893 19.5304 17 19 17H7L3 21V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V15Z" />
      </svg>
    ),
  },
  {
    title: "Meme Agents",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" />
      </svg>
    ),
  },
  {
    title: "Social and Influencer Agents",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
  {
    title: "Agents Infra",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M22 12H2M22 12L16 6M22 12L16 18" />
      </svg>
    ),
  },
  {
    title: "Agent Token Tooling",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" />
      </svg>
    ),
  },
  {
    title: "DeFi Agents",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" />
      </svg>
    ),
  },
  {
    title: "Trading Agents",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" />
      </svg>
    ),
  },
];

const tracksPrizeData = [
  {
    totalPrize: "$15,000",
    mainSponsor: {
      title: "Track",
      logo: assistrLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$10,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    // supporters: autonomoschatSupporters,
    accentColor: "#1BE1FF",
    title: "Agent Aggregators",
    description: `Build chat-based agents (e.g., a ChatGPT or Perplexity-style interface):

— Connect to Social/Apps
— Make it actionable 
— Orchestrate 600+ live models/agents via API

these can be 1:1 text, audio, or video-based.`,
  },

  {
    totalPrize: "$15,000",
    mainSponsor: {
      title: "Track",
      logo: hAIyezLogoComp,
    },
    mainSponsor2: {
      title: "Track",
      logo: AethirLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$10,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    // supporters: ,
    accentColor: "#A855F7",
    title: "Meme Agents",
    description:
      "Make the most fun and unhinged AI agent ever. Whoever makes the judges laugh the hardest, wins.",
  },
  {
    totalPrize: "$15,000",
    mainSponsor: {
      title: "Track",
      logo: hologramLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$10,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    // supporters: socialnInfluencerAgentsSupporters,
    accentColor: "#FF1B1B",
    title: "Conversational Agents",
    description: `Build public-facing agents (e.g., truth_terminal); these can be 1 to many text, audio, or video-based agents.

- Create 3D avatars/custom voices
- Generate autonomous text-to-video
- Integrate Livestream on X`,
  },
  {
    totalPrize: "$27,500",
    mainSponsor: {
      title: "Track",
      logo: kuzcoLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$15,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$7,500",
        progressPercentage: 60,
      },
      {
        title: "3rd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    supporters: agentsInfraSupporters,
    accentColor: "#00FF85",
    title: "Agent Tooling",
    description:
      "Build the next-gen infra or frameworks for AI Agents on Solana (eg. Eliza) –– these can also be tools like Proof of Sentience or workflow automations.",
  },
  {
    totalPrize: "$20,000",
    mainSponsor: {
      title: "Track",
      logo: meteoraLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$15,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    supporters: agentTokenToolingSupporters,
    accentColor: "#A855F7",
    title: "Agent Infra",
    description:
      "Build tools for AI agents to launch and manage token liquidity — covering token&apos;s lifecycle: from fair token launches to liquidity provision (and locking), and stake-to-earn mechanisms.",
  },
  {
    totalPrize: "$27,500",
    mainSponsor: {
      title: "Track",
      logo: adrenaLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$15,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$7,500",
        progressPercentage: 60,
      },
      {
        title: "3rd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    supporters: defiAgentsSupporters,
    accentColor: "#F59E0B",
    title: "DeFi Agents",
    description:
      "Build DeFi agents which can interact and manage positions across Solana DeFi protocols like lending/borrowing, perps trading, staking, and more.",
  },
  {
    totalPrize: "$20,000",
    mainSponsor: {
      title: "Track",
      logo: paladinLogoComp,
    },
    prizes: [
      {
        title: "1st Prize",
        amount: "$15,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "2nd Prize",
        amount: "$5,000",
        progressPercentage: 60,
      },
    ],
    supporters: tradingAgentsSupporters,
    accentColor: "#F59E0B",
    title: "DeFi Agents",
    description:
      "Build AI Agents specifically for spot trading (for eg. agents copy trading analysing specific cluster of wallets) –– the quality of trading strategies and medium of execution matters.",
  },
];

const Section3 = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoSwitching, setIsAutoSwitching] = useState(true);

  useEffect(() => {
    if (!isAutoSwitching) return;

    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % trackTabs.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isAutoSwitching]);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setIsAutoSwitching(false);
  };

  const grandPrizeData = {
    totalPrize: "$110,000",
    mainSponsor: {
      title: "Main Track",
      logo: solanaFndnLogoComp,
    },
    mainSponsor2: {
      title: "Main Track",
      logo: ai16zLogoComp,
    },
    mainSponsor3: {
      title: "Main Track",
      logo: FrankLogoComp,
    },
    prizes: [
      {
        title: "First Main Prize",
        amount: "$60,000",
        progressPercentage: 100,
        showTrophy: true,
      },
      {
        title: "Second Prize",
        amount: "$30,000",
        progressPercentage: 60,
      },
      {
        title: "Third Prize",
        amount: "$20,000",
        progressPercentage: 60,
      },
    ],
    description: "Build the best overall AI Agent product",
    supporters: grandPrizeSupporters,
    accentColor: "#1BE1FF",
  };

  return (
    <div className="bg-black" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6 flex flex-col gap-16 md:gap-24">
        <div className="w-full flex flex-col gap-8 md:gap-12">
          <SectionHeading
            title="MAIN PRIZE"
            subtitle={[
              "Build the best overall AI",
              "Agents to win the Main Prize",
            ]}
          />
          <PrizeCard {...grandPrizeData} isInView={isInView} />
        </div>
        <div className="w-full flex flex-col gap-8 md:gap-12" id="tracks">
          <SectionHeading
            title="TRACKS"
            subtitle={["Build the coolest AI", " Agents across 6 Themes"]}
          />
          <div className="flex flex-col gap-12">
            <div className="flex space-x-12 overflow-x-scroll scrollbar-hide">
              {trackTabs.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => handleTabClick(index)}
                  className={cn(
                    "group flex items-center gap-2.5 py-2 transition-colors duration-200",
                    activeTab === index
                      ? "text-white"
                      : "text-[#878A8C] hover:text-gray-300"
                  )}
                >
                  <span
                    className={cn(
                      "transition-colors duration-200",
                      activeTab === index
                        ? "text-white"
                        : "text-[#878A8C] group-hover:text-gray-300"
                    )}
                  >
                    {tab.icon}
                  </span>
                  <span className="text-sm md:text-lg font-ppsans whitespace-nowrap">
                    {tab.title}
                  </span>
                </button>
              ))}
            </div>
            <div className="relative min-h-[360px]">
              {tracksPrizeData.map((track, index) => (
                <motion.div
                  key={index}
                  className="absolute w-full"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{
                    opacity: activeTab === index ? 1 : 0,
                    x: activeTab === index ? 0 : 20,
                    pointerEvents: activeTab === index ? "auto" : "none",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <PrizeCard
                    {...track}
                    isInView={isInView && activeTab === index}
                  />
                </motion.div>
              ))}
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
