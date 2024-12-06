// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { Trophy } from "lucide-react";
// import Image from "next/image";
// import dialectLogo from "@/assets/images/logos/DialectLogo.svg";
// import superteamLogo from "@/assets/images/logos/SendWhiteLogo.svg";
// import solanaFndnImg from "@/assets/images/logos/SolanaFoundationLogo.svg";
// import squadsLogo from "@/assets/images/logos/SquadsLogo.svg";
// import tensorLogo from "@/assets/images/logos/TensorLogo.svg";

// const trackData = [
//   {
//     id: 1,
//     title: "TRACKS",
//     subtitle: ["Build the best overall AI", "Agents to win the Grand Prize"],
//     amount: "$40,000",
//     borderColor: "bg-yellow-400",
//     prizes: { first: 25000, second: 15000 }
//   },
//   {
//     id: 2,
//     title: "TRACKS",
//     subtitle: ["Build the coolest AI", "Agents across 6 Themes"],
//     amount: "$40,000",
//     borderColor: "bg-cyan-400",
//     prizes: { first: 25000, second: 15000 }
//   }
// ];

// const TracksSection = () => {
//   const [activeTrack, setActiveTrack] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);

//   const nextTrack = useCallback(() => {
//     setActiveTrack((prev) => (prev + 1) % trackData.length);
//   }, []);

//   useEffect(() => {
//     if (!isPaused) {
//       const timer = setInterval(nextTrack, 5000);
//       return () => clearInterval(timer);
//     }
//   }, [nextTrack, isPaused]);

//   const track = trackData[activeTrack];

//   return (
//     <div className="bg-black py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-12">
//           <h2 className="text-5xl font-relishGargler text-white tracking-wider">
//             {track.title}
//           </h2>
//           <p className="text-gray-400 text-right text-lg font-PPSans">
//             {track.subtitle[0]}
//             <br />
//             {track.subtitle[1]}
//           </p>
//         </div>

//         {/* Prize Card */}
//         <div className="relative"
//              onMouseEnter={() => setIsPaused(true)}
//              onMouseLeave={() => setIsPaused(false)}>
//           {/* Colored border on the left */}
//           <div className={`absolute left-0 top-0 bottom-0 w-1 ${track.borderColor}`}></div>

//           <div className="bg-gray-900/70 rounded-lg p-8">
//             {/* Main content grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//               {/* Left side */}
//               <div>
//                 <h3 className="text-6xl font-relishGargler font-bold text-white mb-6">
//                   {track.amount}
//                 </h3>
//                 <div className="flex items-center gap-3 mb-12">
//                   <span className="text-gray-300">Main Track by</span>
//                   <Image src={solanaFndnImg} alt="Solana Foundation" className="h-6" />
//                 </div>

//                 {/* Supporters section */}
//                 <div>
//                   <p className="text-gray-500 mb-4">Supported by</p>
//                   <div className="grid grid-cols-2 gap-6">
//                     <Image src={dialectLogo} alt="Dialect" className="h-8 text-white" />
//                     <Image src={squadsLogo} alt="Squads" className="h-8 text-white" />
//                     <Image src={superteamLogo} alt="Superteam" className="h-8 text-white" />
//                     <Image src={tensorLogo} alt="Tensor" className="h-8 text-white" />
//                   </div>
//                 </div>
//               </div>

//               {/* Right side */}
//               <div className="space-y-8">
//                 {/* First Prize */}
//                 <div className="flex items-center justify-between gap-4">
//                   <div className="flex items-center gap-3">
//                     <Trophy className="h-6 w-6 text-white" />
//                     <span className="text-white text-xl">First Grand Prize</span>
//                   </div>
//                   <div className="flex items-center gap-4">
//                     <div className="w-32 h-2 bg-gray-800">
//                       <div className="w-full h-full bg-gray-600"></div>
//                     </div>
//                     <span className="text-white text-xl font-relishGargler">
//                       ${track.prizes.first.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>

//                 {/* Second Prize */}
//                 <div className="flex items-center justify-between gap-4">
//                   <span className="text-white text-xl ml-9">Second Prize</span>
//                   <div className="flex items-center gap-4">
//                     <div className="w-32 h-2 bg-gray-800">
//                       <div className="w-3/5 h-full bg-gray-600"></div>
//                     </div>
//                     <span className="text-white text-xl font-relishGargler">
//                       ${track.prizes.second.toLocaleString()}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TracksSection;

// "use client";

// import React, { useState, useEffect, useCallback } from "react";
// import { Trophy } from "lucide-react";
// import Image from "next/image";
// import dialectLogo from "@/assets/images/logos/DialectLogo.svg";
// import superteamLogo from "@/assets/images/logos/SendWhiteLogo.svg";
// import solanaFndnImg from "@/assets/images/logos/SolanaFoundationLogo.svg";
// import squadsLogo from "@/assets/images/logos/SquadsLogo.svg";
// import tensorLogo from "@/assets/images/logos/TensorLogo.svg";

// const trackData = [
//  {
//    id: 1,
//    title: "TRACKS",
//    subtitle: ["Build the best overall AI", "Agents to win the Grand Prize"],
//    amount: "$40,000",
//    borderColor: "bg-yellow-400",
//    prizes: { first: 25000, second: 15000 }
//  },
//  {
//    id: 2,
//    title: "TRACKS",
//    subtitle: ["Build the coolest AI", "Agents across 6 Themes"],
//    amount: "$40,000",
//    borderColor: "bg-cyan-400",
//    prizes: { first: 25000, second: 15000 }
//  }
// ];

// const TracksSection = () => {
//  const [activeTrack, setActiveTrack] = useState(0);
//  const [isPaused, setIsPaused] = useState(false);

//  const nextTrack = useCallback(() => {
//    setActiveTrack((prev) => (prev + 1) % trackData.length);
//  }, []);

//  useEffect(() => {
//    if (!isPaused) {
//      const timer = setInterval(nextTrack, 5000);
//      return () => clearInterval(timer);
//    }
//  }, [nextTrack, isPaused]);

//  return (
//    <div className="bg-black py-20 overflow-hidden">
//      <div className="max-w-7xl mx-auto px-4">
//        {/* Header */}
//        <div className="flex justify-between items-start mb-12">
//          <h2 className="text-5xl font-relishGargler text-white tracking-wider">
//            {trackData[activeTrack].title}
//          </h2>
//          <p className="text-gray-400 text-right text-lg font-PPSans">
//            {trackData[activeTrack].subtitle[0]}
//            <br />
//            {trackData[activeTrack].subtitle[1]}
//          </p>
//        </div>

//        {/* Cards Container */}
//        <div className="relative flex gap-4 -mr-32"
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}>
//          {/* Current Slide */}
//          <div className="flex-shrink-0 w-full">
//            <div className="relative">
//              {/* Border */}
//              <div className={`absolute left-0 top-0 bottom-0 w-1 ${trackData[activeTrack].borderColor}`}></div>

//              <div className="bg-gray-900/70 rounded-lg p-8">
//                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                  {/* Left side */}
//                  <div>
//                    <h3 className="text-6xl font-relishGargler font-bold text-white mb-6">
//                      {trackData[activeTrack].amount}
//                    </h3>
//                    <div className="flex items-center gap-3 mb-12">
//                      <span className="text-gray-300">Main Track by</span>
//                      <Image src={solanaFndnImg} alt="Solana Foundation" className="h-6" />
//                    </div>

//                    {/* Supporters */}
//                    <div>
//                      <p className="text-gray-500 mb-4">Supported by</p>
//                      <div className="grid grid-cols-2 gap-6">
//                        <Image src={dialectLogo} alt="Dialect" className="h-8 text-white" />
//                        <Image src={squadsLogo} alt="Squads" className="h-8 text-white" />
//                        <Image src={superteamLogo} alt="Superteam" className="h-8 text-white" />
//                        <Image src={tensorLogo} alt="Tensor" className="h-8 text-white" />
//                      </div>
//                    </div>
//                  </div>

//                  {/* Right side */}
//                  <div className="space-y-8">
//                    {/* First Prize */}
//                    <div className="flex items-center justify-between gap-4">
//                      <div className="flex items-center gap-3">
//                        <Trophy className="h-6 w-6 text-white" />
//                        <span className="text-white text-xl">First Grand Prize</span>
//                      </div>
//                      <div className="flex items-center gap-4">
//                        <div className="w-32 h-2 bg-gray-800">
//                          <div className="w-full h-full bg-gray-600"></div>
//                        </div>
//                        <span className="text-white text-xl font-relishGargler">
//                          ${trackData[activeTrack].prizes.first.toLocaleString()}
//                        </span>
//                      </div>
//                    </div>

//                    {/* Second Prize */}
//                    <div className="flex items-center justify-between gap-4">
//                      <span className="text-white text-xl ml-9">Second Prize</span>
//                      <div className="flex items-center gap-4">
//                        <div className="w-32 h-2 bg-gray-800">
//                          <div className="w-3/5 h-full bg-gray-600"></div>
//                        </div>
//                        <span className="text-white text-xl font-relishGargler">
//                          ${trackData[activeTrack].prizes.second.toLocaleString()}
//                        </span>
//                      </div>
//                    </div>
//                  </div>
//                </div>
//              </div>
//            </div>
//          </div>

//          {/* Teaser Slide */}
//          <div className="flex-shrink-0 w-1/4 opacity-50">
//            <div className="relative">
//              <div className={`absolute left-0 top-0 bottom-0 w-1 ${
//                trackData[(activeTrack + 1) % trackData.length].borderColor
//              }`}></div>
//              <div className="bg-gray-900/70 rounded-lg p-8">
//                <h3 className="text-4xl font-relishGargler font-bold text-white mb-6">
//                  {trackData[(activeTrack + 1) % trackData.length].amount}
//                </h3>
//              </div>
//            </div>
//          </div>
//        </div>
//      </div>
//    </div>
//  );
// };

// export default TracksSection;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Trophy } from "lucide-react";
import Image from "next/image";
import dialectLogo from "@/assets/images/logos/DialectLogo.svg";
import superteamLogo from "@/assets/images/logos/SendWhiteLogo.svg";
import solanaFndnImg from "@/assets/images/logos/SolanaFoundationLogo.svg";
import squadsLogo from "@/assets/images/logos/SquadsLogo.svg";
import tensorLogo from "@/assets/images/logos/TensorLogo.svg";

const trackData = [
  {
    id: 1,
    title: "TRACKS",
    subtitle: ["Build the best overall AI", "Agents to win the Grand Prize"],
    amount: "$40,000",
    borderColor: "bg-yellow-400",
    gradient: "from-yellow-400/20 via-yellow-400/10 to-transparent",
    prizes: { first: 25000, second: 15000 },
  },
  {
    id: 2,
    title: "TRACKS",
    subtitle: ["Build the coolest AI", "Agents across 6 Themes"],
    amount: "$40,000",
    borderColor: "bg-cyan-400",
    gradient: "from-cyan-400/20 via-cyan-400/10 to-transparent",
    prizes: { first: 25000, second: 15000 },
  },
];

const TrackCard = ({
  data,
  isTeaser = false,
}: {
  data: any;
  isTeaser?: boolean;
}) => (
  <div className="relative">
    {/* Gradient Background */}
    <div
      className={`absolute inset-0 bg-gradient-to-r ${data.gradient} rounded-lg`}
    />

    {/* Border */}
    <div className={`absolute left-0 top-0 bottom-0 w-1 ${data.borderColor}`} />

    <div className="bg-gray-900/70 rounded-lg p-8 relative">
      {!isTeaser ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left side */}
          <div>
            <h3 className="text-6xl font-relishGargler font-bold text-white mb-6">
              {data.amount}
            </h3>
            <div className="flex items-center gap-3 mb-12">
              <span className="text-gray-300">Main Track by</span>
              <Image
                src={solanaFndnImg}
                alt="Solana Foundation"
                className="h-6"
              />
            </div>

            <div>
              <p className="text-gray-500 mb-4">Supported by</p>
              <div className="grid grid-cols-2 gap-6">
                <Image
                  src={dialectLogo}
                  alt="Dialect"
                  className="h-8 text-white"
                />
                <Image
                  src={squadsLogo}
                  alt="Squads"
                  className="h-8 text-white"
                />
                <Image
                  src={superteamLogo}
                  alt="Superteam"
                  className="h-8 text-white"
                />
                <Image
                  src={tensorLogo}
                  alt="Tensor"
                  className="h-8 text-white"
                />
              </div>
            </div>
          </div>

          {/* Right side */}
          <div className="space-y-8">
            {/* First Prize */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-white" />
                <span className="text-white text-xl">First Grand Prize</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-gray-800">
                  <div className="w-full h-full bg-gray-600"></div>
                </div>
                <span className="text-white text-xl font-relishGargler">
                  ${data.prizes.first.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Second Prize */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-white text-xl ml-9">Second Prize</span>
              <div className="flex items-center gap-4">
                <div className="w-32 h-2 bg-gray-800">
                  <div className="w-3/5 h-full bg-gray-600"></div>
                </div>
                <span className="text-white text-xl font-relishGargler">
                  ${data.prizes.second.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-4xl font-relishGargler font-bold text-white mb-6">
            {data.amount}
          </h3>
        </div>
      )}
    </div>
  </div>
);

const TracksSection = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTrack = useCallback(() => {
    setActiveTrack((prev) => (prev + 1) % trackData.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextTrack, 5000);
      return () => clearInterval(timer);
    }
  }, [nextTrack, isPaused]);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-relishGargler text-white tracking-wider">
            {trackData[activeTrack].title}
          </h2>
          <p className="text-gray-400 text-right text-lg font-PPSans">
            {trackData[activeTrack].subtitle[0]}
            <br />
            {trackData[activeTrack].subtitle[1]}
          </p>
        </div>

        {/* Cards Container */}
        <div className="relative">
          <div
            className="overflow-x-auto scrollbar-hide"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="flex gap-4 pb-4">
              {/* Main Card */}
              <div className="flex-shrink-0 w-[calc(100%-300px)]">
                <TrackCard data={trackData[activeTrack]} />
              </div>

              {/* Teaser Card */}
              <div className="flex-shrink-0 w-[300px] opacity-50 hover:opacity-75 transition-opacity">
                <TrackCard
                  data={trackData[(activeTrack + 1) % trackData.length]}
                  isTeaser={true}
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute -right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
            <div className="h-px w-8 bg-gray-600"></div>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-gray-600 animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
