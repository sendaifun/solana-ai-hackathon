"use client";

import React from "react";
import headAbstract from "@/assets/images/svgs/abstract/SponsorsTitleHeader.svg";
import Image from "next/image";
import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import sponsor1 from "@/assets/images/logos/DialectLogo.svg";
import sendAILogo from "@/assets/images/logos/SendAI.svg";
import sponsorBottomL from "@/assets/images/svgs/abstract/SponsorBottomL.svg";
import sponsorBottomR from "@/assets/images/svgs/abstract/SponsorBottomR.svg";

// Framed SVG imports :

import adrenaLogo from "@/assets/images/framed-svgs/adrenaLogo.svg";
import arciumLogo from "@/assets/images/framed-svgs/arciumLogo.svg";
import assisterrLogo from "@/assets/images/framed-svgs/assisterrLogo.svg";
import colosseumLogo from "@/assets/images/framed-svgs/colosseumLogo.svg";
import crossmintLogo from "@/assets/images/framed-svgs/crossmintLogo.svg";
import dynamicLogo from "@/assets/images/framed-svgs/dynamicLogo.svg";
import heliusLogo from "@/assets/images/framed-svgs/heliusLogo.svg";
import hologramLogo from "@/assets/images/framed-svgs/hologramLogo.svg";
import ionetLogo from "@/assets/images/framed-svgs/ionetLogo.svg";
import juiceboxLogo from "@/assets/images/framed-svgs/juiceboxLogo.svg";
import jupiterLogo from "@/assets/images/framed-svgs/jupiterLogo.svg";
import kuzcoLogo from "@/assets/images/framed-svgs/kuzcoLogo.svg";
import meteoraLogo from "@/assets/images/framed-svgs/meteoraLogo.svg";
import mhventuresLogo from "@/assets/images/framed-svgs/mhventuresLogo.svg";
import multicoincapLogo from "@/assets/images/framed-svgs/multicoincapLogo.svg";
import solanaFndnLogo from "@/assets/images/framed-svgs/solanaFndnLogo.svg";
import stGermanyLogo from "@/assets/images/framed-svgs/stGermany.svg";
import stIndiaLogo from "@/assets/images/framed-svgs/stIndiaLogo.svg";
import stNigeriaLogo from "@/assets/images/framed-svgs/stNigeriaLogo.svg";
import stTurkeyLogo from "@/assets/images/framed-svgs/stTurkeyLogo.svg";
import stUKLogo from "@/assets/images/framed-svgs/stUK.svg";
import stVietnamLogo from "@/assets/images/framed-svgs/stVietnamLogo.svg";
import switchboardLogo from "@/assets/images/framed-svgs/switchboardLogo.svg";
import ai16zLogo from "@/assets/images/framed-svgs/ai16zLogo.svg";
import orcaLogo from "@/assets/images/framed-svgs/orcaLogo.svg";
import paladinLogo from "@/assets/images/framed-svgs/paladinLogo.svg";
import emblemvaultLogo from "@/assets/images/framed-svgs/emblemvaultLogo.svg";
import litProtocolLogo from "@/assets/images/framed-svgs/litProtocolLogo.svg";
import dainLogo from "@/assets/images/framed-svgs/dainLogo.svg";

const sponsors = {
  main: [
    {
      id: "solana1",
      name: "Solana Foundation",
      image: solanaFndnLogo,
    },
    { id: "ai16z", name: "ai16z", image: ai16zLogo },
  ],
  supportedBy: [
    // { id: "jito", name: "JITO", image: jitoLogo },
    { id: "jupiter", name: "Jupiter", image: jupiterLogo },
    { id: "helius", name: "Helius", image: heliusLogo },
    { id: "multicoincap", name: "Multicoin Capital", image: multicoincapLogo },
    { id: "assisterr", name: "Assisterr", image: assisterrLogo },
    { id: "ionet", name: "Io.net", image: ionetLogo },
    { id: "mhventures", name: "MH Ventures", image: mhventuresLogo },
    { id: "dynamic", name: "Dynamic", image: dynamicLogo },
  ],
  autonomousChatAgents: [
    { id: "assisterr", name: "Assisterr", image: assisterrLogo },
  ],
  socialAndInfluencerAgent: [
    { id: "hologram", name: "Hologram", image: hologramLogo },
  ],
  agentsInfra: [{ id: "kuzco", name: "Kuzco", image: kuzcoLogo }],
  supportedByAgentsInfra: [
    { id: "arcium", name: "Arcium", image: arciumLogo },
    { id: "dain", name: "Dain", image: dainLogo },
    { id: "litProtocol", name: "Lit Protocol", image: litProtocolLogo },
  ],
  agentTokenTooling: [{ id: "meteora", name: "Meteora", image: meteoraLogo }],
  tokenToolingSupportedBy: [
    { id: "emblemvault", name: "Emblem Vault", image: emblemvaultLogo },
  ],

  defiAgents: [{ id: "adrena", name: "Adrena", image: adrenaLogo }],
  supportedByDefiAgents: [
    { id: "switchboard", name: "Switchboard", image: switchboardLogo },
    { id: "orca", name: "Orca", image: orcaLogo },
  ],
  tradingAgents: [{ id: "paladin", name: "Paladin", image: paladinLogo }],
  supportedByTradingAgents: [
    { id: "crossmint", name: "Crossmint", image: crossmintLogo },
  ],
  communityPartners: [
    { id: "stGermany", name: "Superteam Germany", image: stGermanyLogo },
    { id: "stIndia", name: "Superteam India", image: stIndiaLogo },
    { id: "stNigeria", name: "Superteam Nigeria", image: stNigeriaLogo },
    { id: "stTurkey", name: "Superteam Turkey", image: stTurkeyLogo },
    { id: "stUK", name: "Superteam UK", image: stUKLogo },
    { id: "stVietnam", name: "Superteam Vietnam", image: stVietnamLogo },
  ],

  poweredby: [
    {
      id: "SendAI",
      name: "Send AI",
      image: sendAILogo,
    },
  ],
};

const SponsorCard = ({ image, name }: { image: string; name: string }) => (
  <div className="relative bg-[#1E1E1E] bg-opacity-20 border-2 border-[#353637] flex items-center justify-center">
    {/* Corner Decorations */}
    <div className="absolute inset-0">
      {/* Top Left */}
      <div className="absolute -left-2 -top-2">
        <Image src={cornerAbstract} alt="Corner" className="w-4 h-4" />
      </div>
      {/* Top Right */}
      <div className="absolute -right-2 -top-2">
        <Image
          src={cornerAbstract}
          alt="Corner"
          className="w-4 h-4 rotate-90"
        />
      </div>
      {/* Bottom Left */}
      <div className="absolute -left-2 -bottom-2">
        <Image
          src={cornerAbstract}
          alt="Corner"
          className="w-4 h-4 -rotate-90"
        />
      </div>
      {/* Bottom Right */}
      <div className="absolute -right-2 -bottom-2">
        <Image
          src={cornerAbstract}
          alt="Corner"
          className="w-4 h-4 rotate-180"
        />
      </div>
    </div>
    <div className="p-8 h-24 flex items-center justify-center">
      <Image
        src={image}
        alt={name}
        className="max-h-full max-w-full object-contain opacity-75"
      />
    </div>
  </div>
);

const SponsorsSection = () => {
  return (
    <>
      <div className="bg-black">
        <div className="flex flex-col items-center bg-black">
          <div className="w-full max-w-7xl px-4 flex flex-col items-center">
            {/* Title */}
            <div className="flex gap-4 bg-black items-center justify-center">
              <Image src={headAbstract} alt="Sponsor" className=" mx-8" />
              <div className="font-relishGargler text-4xl text-white text-nowrap mx-4">
                {" "}
                Supported By:
              </div>
              <Image src={headAbstract} alt="Sponsor" className=" mx-8" />
            </div>

            {/* main Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md  tracking-wider font-PPSans my-8">
                MAIN SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.main.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Supported By Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                MAIN TRACKS SUPPORTED BY
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.supportedBy.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Autonomous Chat Agents Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                AUTONOMOUS CHAT AGENTS SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.autonomousChatAgents.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                SOCIAL AND INFLUENCER AGENT{" "}
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.socialAndInfluencerAgent.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Agents Infra Support Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                AGENTS INFRA SUPPORTED BY
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.supportedByAgentsInfra.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Agent Token Tooling Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                AGENT TOKEN TOOLING SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.agentTokenTooling.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Token Tooling Supported By */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                TOKEN TOOLING SUPPORTED BY
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.tokenToolingSupportedBy.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* DeFi Agents Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                DEFI AGENTS SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.defiAgents.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* DeFi Agents Supported By */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                DEFI AGENTS SUPPORTED BY
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.supportedByDefiAgents.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Community Partners */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                COMMUNITY PARTNERS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.communityPartners?.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Distribution Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                POWERED BY
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.poweredby.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <Image
            src={sponsorBottomL}
            alt="Sponsor"
            className=" mx-8 w-24 md:w-auto"
          />
          <Image
            src={sponsorBottomR}
            alt="Sponsor"
            className=" mx-8 w-24 md:w-auto"
          />
        </div>
      </div>
    </>
  );
};

export default SponsorsSection;
