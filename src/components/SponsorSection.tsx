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
import jitoLogo from "@/assets/images/framed-svgs/jitoLogo.svg";
import delphiDigitalLogo from "@/assets/images/framed-svgs/delphicapLogo.svg";
import superhostsLogo from "@/assets/images/framed-svgs/superhostsLogo.svg";
import zerebroLogo from "@/assets/images/framed-svgs/zerebroLogo.svg";
import dolosLogo from "@/assets/images/framed-svgs/dolosLogo.svg";
import aethirLogo from "@/assets/images/framed-svgs/aethirLogo.svg";
import haiyezLogo from "@/assets/images/framed-svgs/haiyezLogo.svg";
import cookieLogo from "@/assets/images/framed-svgs/cookieLogo.svg";
import privyLogo from "@/assets/images/framed-svgs/privyLogo.svg";
import animocaLogo from "@/assets/images/framed-svgs/animoca.svg";
import buildidfyLogo from "@/assets/images/framed-svgs/buildify.svg";
import stFranceLogo from "@/assets/images/framed-svgs/stFrance.svg";
import fourPillarsLogo from "@/assets/images/framed-svgs/4pillars.svg";
import tarsLogo from "@/assets/images/framed-svgs/tars.svg";
import frankImgBW from "@/assets/images/judges/frankBW.svg";

const sponsors = {
  poweredby: [
    {
      id: "SendAI",
      name: "Send AI",
      image: sendAILogo,
    },
  ],
};

const latestSponsorHeirarchy1 = [
  { id: "ai16z", name: "ai16z", image: ai16zLogo },
  { id: "solana fndn", name: "Solana Foundation", image: solanaFndnLogo },
  { id: "Frank", name: "Frank", image: frankImgBW },
];

const latestSponsorHeirarchy2 = [
  { id: "assisterr", name: "Assisterr", image: assisterrLogo },
  { id: "hologram", name: "Hologram", image: hologramLogo },
  { id: "kuzco", name: "Kuzco", image: kuzcoLogo },
  { id: "meteora", name: "Meteora", image: meteoraLogo },
  { id: "adrena", name: "Adrena", image: adrenaLogo },
  { id: "paladin", name: "Paladin", image: paladinLogo },
  { id: "aethir", name: "Aethir", image: aethirLogo },
  { id: "haiyez", name: "Haiyez", image: haiyezLogo },
];

const latestSponsorHeirarchy3 = [
  { id: "jito", name: "Jito", image: jitoLogo },
  { id: "jupiter", name: "Jupiter", image: jupiterLogo },
  { id: "Zerebro", name: "Zerebro", image: zerebroLogo },
  { id: "dolos", name: "Dolos", image: dolosLogo },
  { id: "helius", name: "Helius", image: heliusLogo },
  { id: "multicoincap", name: "Multicoin Capital", image: multicoincapLogo },
  { id: "animoca", name: "Animoca", image: animocaLogo },
  { id: "ionet", name: "Io.net", image: ionetLogo },
  { id: "mhventures", name: "MH Ventures", image: mhventuresLogo },
  { id: "dynamic", name: "Dynamic", image: dynamicLogo },
  { id: "arcium", name: "Arcium", image: arciumLogo },
  { id: "dain", name: "Dain", image: dainLogo },
  { id: "litProtocol", name: "Lit Protocol", image: litProtocolLogo },
  { id: "emblemvault", name: "Emblem Vault", image: emblemvaultLogo },
  { id: "switchboard", name: "Switchboard", image: switchboardLogo },
  { id: "orca", name: "Orca", image: orcaLogo },
  { id: "crossmint", name: "Crossmint", image: crossmintLogo },
  { id: "privy", name: "Privy", image: privyLogo },
  { id: "tars", name: "Tars", image: tarsLogo },
];

// const latestSponsorHeirarchy4 = [
//   { id: "arcium", name: "Arcium", image: arciumLogo },
//   { id: "dain", name: "Dain", image: dainLogo },
//   { id: "litProtocol", name: "Lit Protocol", image: litProtocolLogo },
//   { id: "emblemvault", name: "Emblem Vault", image: emblemvaultLogo },
//   { id: "switchboard", name: "Switchboard", image: switchboardLogo },
//   { id: "orca", name: "Orca", image: orcaLogo },
//   { id: "crossmint", name: "Crossmint", image: crossmintLogo },
// ];

const latestSponsorHeirarchy5 = [
  { id: "stNigeria", name: "Superteam Nigeria", image: stNigeriaLogo },
  { id: "stTurkey", name: "Superteam Turkey", image: stTurkeyLogo },
  { id: "stVietnam", name: "Superteam Vietnam", image: stVietnamLogo },
  { id: "stIndia", name: "Superteam India", image: stIndiaLogo },
  { id: "stGermany", name: "Superteam Germany", image: stGermanyLogo },
  { id: "stUK", name: "Superteam UK", image: stUKLogo },
  { id: "stFrance", name: "Superteam France", image: stFranceLogo },
  { id: "juicebox", name: "JuiceBox", image: juiceboxLogo },
  { id: "colosseum", name: "Colosseum", image: colosseumLogo },
  { id: "superhosts", name: "Superhosts", image: superhostsLogo },
  { id: "delphiDigital", name: "Delphi Digital", image: delphiDigitalLogo },
  { id: "cookie", name: "Cookie DAO", image: cookieLogo },
  { id: "buildidfy", name: "Buildidfy", image: buildidfyLogo },
  { id: "fourpillars", name: "4 Pillars", image: fourPillarsLogo },
];

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
      <div className="bg-black" id="sponsors">
        <div className="flex flex-col items-center bg-black">
          <div className="w-full max-w-7xl px-4 flex flex-col items-center">
            {/* Title */}
            <div className="flex gap-4 bg-black items-center justify-center my-8">
              <Image src={headAbstract} alt="Sponsor" className=" mx-8" />
              <div className="font-relishGargler text-4xl text-white text-nowrap mx-4">
                {" "}
                Supported By:
              </div>
              <Image src={headAbstract} alt="Sponsor" className=" mx-8" />
            </div>

            <div className="w-full flex flex-col items-center my-4">
              <h3 className="text-white text-md  tracking-wider font-PPSans my-8">
                MAIN SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {latestSponsorHeirarchy1.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-center my-4">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                TRACKS SPONSORS{" "}
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {latestSponsorHeirarchy2.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full flex flex-col items-center my-4">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                SUPPORTING SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {latestSponsorHeirarchy3.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>
{/* 
            <div className="w-full flex flex-col items-center my-4">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                SUPPORTING SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {latestSponsorHeirarchy3.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div> */}

            <div className="w-full flex flex-col items-center my-4">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                DISTRIBUTION PARTNERS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {latestSponsorHeirarchy5.map((sponsor) => (
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
            <div className="w-full flex flex-col items-center my-4">
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
