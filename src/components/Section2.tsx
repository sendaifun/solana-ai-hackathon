import Image from "next/image";
import React from "react";
import connectImg from "@/assets/images/svgs/bgs/abstract.png";
import prizesImg from "@/assets/images/svgs/bgs/abstract3.png";
import opportunitiesImg from "@/assets/images/svgs/bgs/abstract2.png";
const PreviewCards = () => {
  return (
    <div className="bg-black w-full py-20">
      <div className="mx-auto px-4 flex flex-col md:flex-row justify-around gap-8 w-full">
        {/* Connect Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-cyan-400 rounded-lg opacity-75"></div>
          <div className="relative w-full md:w-[240px] lg:w-[400px] bg-black rounded-lg">
            <div className="absolute -top-8 left-0 bg-cyan-400 px-4 py-1 rounded-t text-black font-mono">
              Connect
            </div>
            <div className="relative">
              <Image
                src={connectImg}
                alt="Connect"
                className="w-full brightness-75 rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <p className="text-xl font-light leading-tight">
                  Expert Sessions, 1:1 Mentorship,
                  <br />
                  and Exclusive Networking
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Prizes Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-yellow-400 rounded-lg opacity-75"></div>
          <div className="relative w-full md:w-[240px] lg:w-[400px] bg-black rounded-lg">
            <div className="absolute -top-8 left-0 bg-yellow-400 px-4 py-1 rounded-t text-black font-mono">
              Prizes
            </div>
            <div className="relative">
              <Image
                src={prizesImg}
                alt="Prizes"
                className="w-full brightness-75 rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <p className="text-xl font-light leading-tight">
                  $100,000+ in Prize Pool
                  <br />
                  across 6 Themed Tracks
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Opportunities Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-emerald-400 rounded-lg opacity-75"></div>
          <div className="relative w-full md:w-[240px] lg:w-[400px] bg-black rounded-lg">
            <div className="absolute -top-8 left-0 bg-emerald-400 px-4 py-1 rounded-t-md text-black font-mono">
              Opportunities
            </div>
            <div className="relative">
              <Image
                src={opportunitiesImg}
                alt="Opportunities"
                className="h-full w-full object-cover brightness-75 rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                <p className="text-xl font-light leading-tight">
                  Access to VC/Angel Funding for
                  <br />
                  Top-Selected Teams
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewCards;
