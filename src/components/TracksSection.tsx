"use client";

// import React, { useState } from "react";
// import { Trophy, ArrowLeft, ArrowRight } from "lucide-react";

// const trackData = [
//   {
//     id: 1,
//     color: "yellow",
//     title: "Conversational Agents",
//     sponsor: "GSISTER",
//     description:
//       "Build chatgpt or claude-like chat conversational agents — it can be forms like text, voice, or video and ideally either use a Solana wallet or a token on Solana.",
//     prizes: {
//       first: 25000,
//       second: 15000,
//     },
//   },
//   {
//     id: 2,
//     color: "cyan",
//     title: "Agent Aggregators",
//     sponsor: "DIALECT",
//     description:
//       "Build platforms that aggregate and manage multiple AI agents, enabling seamless interaction and coordination between different types of agents.",
//     prizes: {
//       first: 25000,
//       second: 15000,
//     },
//   },
//   // Add more tracks as needed
// ];

// const TracksSection = () => {
//   const [activeTrack, setActiveTrack] = useState(0);
//   const [activeTab, setActiveTab] = useState("Agent Aggregators");

//   const nextTrack = () => {
//     setActiveTrack((prev) => (prev + 1) % trackData.length);
//   };

//   const prevTrack = () => {
//     setActiveTrack((prev) => (prev - 1 + trackData.length) % trackData.length);
//   };

//   return (
//     <div className="bg-black py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Header */}
//         <div className="flex justify-between items-start mb-12">
//           <h2 className="text-5xl font-bold text-white tracking-wider">
//             TRACKS
//           </h2>
//           <p className="text-gray-400 text-right text-lg">
//             Build the coolest AI
//             <br />
//             Agents across 6 Themes
//           </p>
//         </div>

//         {/* Track Navigation Tabs */}
//         <div className="flex space-x-8 mb-12 overflow-x-auto pb-4">
//           <button
//             className="flex items-center space-x-2 text-white opacity-80 hover:opacity-100"
//             onClick={() => setActiveTab("Agent Aggregators")}
//           >
//             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//               <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
//             </svg>
//             <span
//               className={
//                 activeTab === "Agent Aggregators"
//                   ? "text-white"
//                   : "text-gray-400"
//               }
//             >
//               Agent Aggregators
//             </span>
//           </button>

//           <button
//             className="flex items-center space-x-2 text-gray-400 hover:text-white"
//             onClick={() => setActiveTab("Conversational Agents")}
//           >
//             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//               <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
//             </svg>
//             <span>Conversational Agents</span>
//           </button>

//           <button
//             className="flex items-center space-x-2 text-gray-400 hover:text-white"
//             onClick={() => setActiveTab("Agent Tooling")}
//           >
//             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//               <path d="M22 9l-10-7-10 7v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></path>
//             </svg>
//             <span>Agent Tooling</span>
//           </button>

//           <button
//             className="flex items-center space-x-2 text-gray-400 hover:text-white"
//             onClick={() => setActiveTab("Agent Infra")}
//           >
//             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//               <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
//             </svg>
//             <span>Agent Infra</span>
//           </button>

//           <button
//             className="flex items-center space-x-2 text-gray-400 hover:text-white"
//             onClick={() => setActiveTab("DeFi Agents")}
//           >
//             <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
//               <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
//             </svg>
//             <span>DeFi Agents</span>
//           </button>
//         </div>

//         {/* Carousel Section */}
//         <div className="relative">
//           {/* Track Card */}
//           <div className="relative overflow-hidden">
//             {/* Left border accent */}
//             <div
//               className={`absolute left-0 top-0 bottom-0 w-1 bg-${trackData[activeTrack].color}-400`}
//             ></div>

//             <div className="bg-gray-900/70 rounded-lg p-8">
//               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                 {/* Left side */}
//                 <div>
//                   <h3 className="text-3xl font-bold text-white mb-4">
//                     {trackData[activeTrack].title} by
//                     <span className="ml-2 px-3 py-1 bg-gray-800 rounded text-sm">
//                       {trackData[activeTrack].sponsor}
//                     </span>
//                   </h3>

//                   <p className="text-gray-400 mb-8">
//                     {trackData[activeTrack].description}
//                   </p>

//                   <div>
//                     <p className="text-gray-500 mb-4">Supported by</p>
//                     <div className="grid grid-cols-2 gap-6">
//                       <img
//                         src="/api/placeholder/120/40"
//                         alt="Dialect"
//                         className="h-8 opacity-50 hover:opacity-100 transition-opacity"
//                       />
//                       <img
//                         src="/api/placeholder/120/40"
//                         alt="Squads"
//                         className="h-8 opacity-50 hover:opacity-100 transition-opacity"
//                       />
//                       <img
//                         src="/api/placeholder/120/40"
//                         alt="Superteam"
//                         className="h-8 opacity-50 hover:opacity-100 transition-opacity"
//                       />
//                       <img
//                         src="/api/placeholder/120/40"
//                         alt="Tensor"
//                         className="h-8 opacity-50 hover:opacity-100 transition-opacity"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right side */}
//                 <div className="space-y-8">
//                   <div className="flex items-center justify-between gap-4">
//                     <div className="flex items-center gap-3">
//                       <Trophy className="h-6 w-6 text-yellow-400" />
//                       <span className="text-white text-xl">
//                         First Grand Prize
//                       </span>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="w-32 h-2 bg-gray-800 rounded-full">
//                         <div className="w-4/5 h-full bg-gray-600 rounded-full"></div>
//                       </div>
//                       <span className="text-white text-xl font-mono">
//                         ${trackData[activeTrack].prizes.first.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-between gap-4">
//                     <span className="text-white text-xl ml-9">
//                       Second Prize
//                     </span>
//                     <div className="flex items-center gap-4">
//                       <div className="w-32 h-2 bg-gray-800 rounded-full">
//                         <div className="w-3/5 h-full bg-gray-600 rounded-full"></div>
//                       </div>
//                       <span className="text-white text-xl font-mono">
//                         ${trackData[activeTrack].prizes.second.toLocaleString()}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Know More Button */}
//               <div className="mt-8 flex justify-end">
//                 <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
//                   Know More
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Carousel Navigation */}
//           <button
//             onClick={prevTrack}
//             className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
//           >
//             <ArrowLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextTrack}
//             className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700"
//           >
//             <ArrowRight className="w-6 h-6" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TracksSection;

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Trophy, ArrowLeft, ArrowRight } from "lucide-react";

const trackData = [
  {
    id: 1,
    color: "yellow",
    title: "Conversational Agents",
    sponsor: "GSISTER",
    description:
      "Build chatgpt or claude-like chat conversational agents — it can be forms like text, voice, or video and ideally either use a Solana wallet or a token on Solana.",
    prizes: {
      first: 25000,
      second: 15000,
    },
  },
  {
    id: 2,
    color: "cyan",
    title: "Agent Aggregators",
    sponsor: "DIALECT",
    description:
      "Build platforms that aggregate and manage multiple AI agents, enabling seamless interaction and coordination between different types of agents.",
    prizes: {
      first: 25000,
      second: 15000,
    },
  },
  // Add more tracks as needed
];

const AUTOPLAY_DELAY = 5000; // 5 seconds between slides

const TracksSection = () => {
  const [activeTrack, setActiveTrack] = useState(0);
  const [activeTab, setActiveTab] = useState("Agent Aggregators");
  const [isPaused, setIsPaused] = useState(false);

  const nextTrack = useCallback(() => {
    setActiveTrack((prev) => (prev + 1) % trackData.length);
  }, []);

  const prevTrack = useCallback(() => {
    setActiveTrack((prev) => (prev - 1 + trackData.length) % trackData.length);
  }, []);

  // Auto-rotation effect
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextTrack, AUTOPLAY_DELAY);
      return () => clearInterval(timer);
    }
  }, [nextTrack, isPaused]);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-bold text-white tracking-wider">
            TRACKS
          </h2>
          <p className="text-gray-400 text-right text-lg">
            Build the coolest AI
            <br />
            Agents across 6 Themes
          </p>
        </div>

        {/* Track Navigation Tabs */}
        <div className="flex space-x-8 mb-12 overflow-x-auto pb-4">
          <button
            className="flex items-center space-x-2 text-white opacity-80 hover:opacity-100"
            onClick={() => setActiveTab("Agent Aggregators")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span
              className={
                activeTab === "Agent Aggregators"
                  ? "text-white"
                  : "text-gray-400"
              }
            >
              Agent Aggregators
            </span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
            onClick={() => setActiveTab("Conversational Agents")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"></path>
            </svg>
            <span>Conversational Agents</span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
            onClick={() => setActiveTab("Agent Tooling")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M22 9l-10-7-10 7v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2z"></path>
            </svg>
            <span>Agent Tooling</span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
            onClick={() => setActiveTab("Agent Infra")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
            </svg>
            <span>Agent Infra</span>
          </button>

          <button
            className="flex items-center space-x-2 text-gray-400 hover:text-white"
            onClick={() => setActiveTab("DeFi Agents")}
          >
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
            <span>DeFi Agents</span>
          </button>
        </div>

        {/* Carousel Section */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Track Cards Container with transition */}
          <div className="relative overflow-hidden">
            <div
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeTrack * 100}%)` }}
            >
              {trackData.map((track, index) => (
                <div
                  key={track.id}
                  className="w-full flex-shrink-0"
                  style={{ transform: `translateX(${index * 100}%)` }}
                >
                  {/* Track Card Content */}
                  <div className="relative">
                    {/* Left border accent */}
                    <div
                      className={`absolute left-0 top-0 bottom-0 w-1 bg-${track.color}-400`}
                    ></div>

                    <div className="bg-gray-900/70 rounded-lg p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left side */}
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-4">
                            {track.title} by
                            <span className="ml-2 px-3 py-1 bg-gray-800 rounded text-sm">
                              {track.sponsor}
                            </span>
                          </h3>

                          <p className="text-gray-400 mb-8">
                            {track.description}
                          </p>

                          <div>
                            <p className="text-gray-500 mb-4">Supported by</p>
                            <div className="grid grid-cols-2 gap-6">
                              <img
                                src="/api/placeholder/120/40"
                                alt="Dialect"
                                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
                              />
                              <img
                                src="/api/placeholder/120/40"
                                alt="Squads"
                                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
                              />
                              <img
                                src="/api/placeholder/120/40"
                                alt="Superteam"
                                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
                              />
                              <img
                                src="/api/placeholder/120/40"
                                alt="Tensor"
                                className="h-8 opacity-50 hover:opacity-100 transition-opacity"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Right side */}
                        <div className="space-y-8">
                          {/* First Prize */}
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                              <Trophy className="h-6 w-6 text-yellow-400" />
                              <span className="text-white text-xl">
                                First Grand Prize
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="w-32 h-2 bg-gray-800 rounded-full">
                                <div className="w-4/5 h-full bg-gray-600 rounded-full"></div>
                              </div>
                              <span className="text-white text-xl font-mono">
                                ${track.prizes.first.toLocaleString()}
                              </span>
                            </div>
                          </div>

                          {/* Second Prize */}
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-white text-xl ml-9">
                              Second Prize
                            </span>
                            <div className="flex items-center gap-4">
                              <div className="w-32 h-2 bg-gray-800 rounded-full">
                                <div className="w-3/5 h-full bg-gray-600 rounded-full"></div>
                              </div>
                              <span className="text-white text-xl font-mono">
                                ${track.prizes.second.toLocaleString()}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Know More Button */}
                      <div className="mt-8 flex justify-end">
                        <button className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition-colors">
                          Know More
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Carousel Navigation */}
          <button
            onClick={() => {
              prevTrack();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => {
              nextTrack();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-gray-800 rounded-full text-white hover:bg-gray-700 transition-opacity opacity-0 group-hover:opacity-100"
          >
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
