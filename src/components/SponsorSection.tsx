"use client";

import React from "react";
import headAbstract from "@/assets/images/svgs/abstract/SponsorsTitleHeader.svg";
import Image from "next/image";
import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import sponsor1 from "@/assets/images/logos/DialectLogo.svg";
import sendAILogo from "@/assets/images/logos/SendAI.svg";
import sponsorBottomL from "@/assets/images/svgs/abstract/SponsorBottomL.svg";
import sponsorBottomR from "@/assets/images/svgs/abstract/SponsorBottomR.svg";
const sponsors = {
  grand: [
    {
      id: "solana1",
      name: "Solana Foundation",
      image: sponsor1,
    },
    { id: "dialect1", name: "Dialect", image: sponsor1 },
    { id: "bags1", name: "Bags", image: sponsor1 },
    {
      id: "superteam1",
      name: "Superteam Vietnam",
      image: sponsor1,
    },
    { id: "squads1", name: "Squads", image: sponsor1 },
    {
      id: "tensor1",
      name: "Tensor Foundation",
      image: sponsor1,
    },
  ],
  track: [
    {
      id: "solana2",
      name: "Solana Foundation",
      image: sponsor1,
    },
    { id: "dialect2", name: "Dialect", image: sponsor1 },
    { id: "bags2", name: "Bags", image: sponsor1 },
    {
      id: "superteam2",
      name: "Superteam Vietnam",
      image: sponsor1,
    },
    { id: "squads2", name: "Squads", image: sponsor1 },
    {
      id: "tensor2",
      name: "Tensor Foundation",
      image: sponsor1,
    },
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

            {/* Grand Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md  tracking-wider font-PPSans my-8">
                GRAND SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.grand.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Track Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                TRACK SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.track.map((sponsor) => (
                  <div
                    key={sponsor.id}
                    className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
                  >
                    <SponsorCard image={sponsor.image} name={sponsor.name} />
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Sponsors */}
            <div className="w-full flex flex-col items-center">
              <h3 className="text-white text-md tracking-wider font-PPSans my-8">
                SUPPORTING SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.track.map((sponsor) => (
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
                DISTRIBUTION SPONSORS
              </h3>
              <div className="w-full flex flex-wrap justify-center gap-4">
                {sponsors.track.map((sponsor) => (
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
          <Image src={sponsorBottomL} alt="Sponsor" className=" mx-8" />
          <Image src={sponsorBottomR} alt="Sponsor" className=" mx-8" />
        </div>
      </div>
    </>
  );
};

export default SponsorsSection;
