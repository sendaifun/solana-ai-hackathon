"use client";

import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
// Img SVGs :
import { track } from "@vercel/analytics";
import ongoLogo from "@/assets/images/showcase/ongo.svg";
import { ChevronDown, Github, Globe, PlayCircle, Twitter } from "lucide-react";

const tracks = [
  { id: "all", name: "All Projects" },
  { id: "sak", name: "Solana Agent Kit" },
  { id: "chat", name: "Autonomous Chat Agents" },
  { id: "social", name: "Social and Influencer Agents" },
  { id: "meme", name: "Meme Agents" },
  { id: "infra", name: "Agents Infra" },
  { id: "token", name: "Agents Token tooling" },
  { id: "defi", name: "Defi Agents" },
  { id: "trading", name: "Trading Agents" },
];

const getColors = (index: number): string => {
  switch (index % 4) {
    case 0:
      return "#1BE1FF"; // Cyan
    case 1:
      return "#FFFF00"; // Yellow
    case 2:
      return "#19FFCE"; // Mint/Green
    case 3:
      return "#FFFF00"; // Yellow
    default:
      return "#787B7E";
  }
};

const ArrowIcon = ({ size }: { size: number }) => (
  <div className="flex gap-0">
    <svg
      width={size || 32}
      height={size || 32}
      viewBox="0 0 45 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300 text-[#787B7E] group-hover:text-[var(--hover-color)]"
    >
      <path
        d="M1.44057 44.4354L0.530273 43.525L21.4415 22.6138L0.530273 1.70261L1.44057 0.792236L23.2621 22.6138L1.44057 44.4354Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <path
        d="M22.8008 44.4354L21.9033 43.525L42.8146 22.6138L21.9033 1.70261L22.8008 0.792236L44.6223 22.6138L22.8008 44.4354Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  </div>
);

const TrackDropdown = ({ activeTrack, onTrackSelect }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const activeTrackName =
    tracks.find((track) => track.id === activeTrack)?.name || "All Projects";

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative bg-[#1E1E1E]  border-2 border-[#353637] px-6 py-2 font-mono text-sm transition-all duration-300 w-[240px] flex items-center justify-between"
      >
        {/* Corner Decorations */}
        <div className="absolute inset-0">
          <div className="absolute -left-2 -top-2">
            <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
          </div>
          <div className="absolute -right-2 -top-2">
            <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
          </div>
          <div className="absolute -left-2 -bottom-2">
            <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
          </div>
          <div className="absolute -right-2 -bottom-2">
            <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
          </div>
        </div>
        <span className="relative z-10 text-white transition-colors duration-300">
          {activeTrackName}
        </span>
        <ChevronDown
          className={`relative ml-4 z-10 w-4 h-4 text-white transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-50 w-[240px] mt-2 bg-[#1E1E1E] border-2 border-[#353637] shadow-xl">
          {/* Corner Decorations */}
          <div className="absolute inset-0">
            <div className="absolute -left-2 -top-2">
              <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
            </div>
            <div className="absolute -right-2 -top-2">
              <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
            </div>
            <div className="absolute -left-2 -bottom-2">
              <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
            </div>
            <div className="absolute -right-2 -bottom-2">
              <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
            </div>
          </div>
          <div className="relative z-10">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => {
                  onTrackSelect(track.id);
                  setIsOpen(false);
                }}
                className={`w-full px-6 py-2 text-left font-mono text-sm transition-colors duration-200
                      ${
                        track.id === activeTrack
                          ? "text-white bg-[#353637]"
                          : "text-gray-400 hover:text-white hover:bg-[#353637]"
                      }`}
              >
                {track.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const getTrackId = (trackName: string) => {
  return tracks.find((t) => t.name === trackName)?.id || "all";
};

const ProjectShowcase = () => {
  const [activeTrack, setActiveTrack] = useState("all");

  const [projects, setProjects] = useState<any>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      const response = await fetch("/api/projects");
      const data = await response.json();
      setProjects(data);
      setLoading(false);
    };
    loadProjects();
  }, []);

  const filteredProjects = projects.filter((project: any) => {
    if (activeTrack === "all") return true;
    const trackName = tracks.find((t) => t.id === activeTrack)?.name;
    return project?.track.includes(trackName || "");
  });
  const handleTrackClick = (trackName: string) => {
    const trackId = getTrackId(trackName);
    setActiveTrack(trackId);
    track("filter_change", { trackId });
  };
  if (loading) {
    return (
      <>
        <div className="bg-black h-screen flex items-center justify-center text-white font-relish text-2xl animate-pulse">Its Agentic Apps szn</div>
      </>
    );
  }
  return (
    <div className="bg-black h-full">
      <div className="max-w-7xl w-full mx-auto px-4 py-16">
        {/* Title with decorative lines */}
        <div className="flex items-center justify-center gap-4 mb-16 mx-16">
          <div className="flex-1">
            <div className="flex gap-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`left-${i}`}
                  className="w-[2px] h-6 bg-[#787B7E]"
                ></div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <div className="">
              <h2 className="text-4xl font-relish text-white mb-2 text-nowrap mx-6">
                EXPLORE AGENTIC APPS ON SOLANA
              </h2>
              <h2 className="text-2xl font-ppsans text-white mb-2 text-nowrap mx-6">
                Built on Solana AI Hackathon, powered by SendAI
              </h2>
            </div>
          </div>

          <div className="flex-1">
            <div className="flex gap-8 justify-end">
              {[...Array(8)].map((_, i) => (
                <div
                  key={`right-${i}`}
                  className="w-[2px] h-6 bg-[#787B7E]"
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Track Filter Dropdown */}
        <div className="flex justify-center mb-12">
          <TrackDropdown
            activeTrack={activeTrack}
            onTrackSelect={(trackId: any) => {
              setActiveTrack(trackId);
              track("filter_change", { trackId });
            }}
          />
        </div>

        {/* Projects Grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {filteredProjects.map((project: any, index: number) => (
            <div
              key={project.id}
              className="relative group w-96"
              style={
                {
                  "--hover-color": getColors(index),
                } as React.CSSProperties
              }
            >
              {/* Card Container */}
              <div className="relative bg-[#0f0f0f] rounded-lg overflow-hidden h-[520px]">
                {/* Image Container */}
                <div className="aspect-video overflow-hidden border-2 border-[#353637] transition-all duration-300 group-hover:border-[var(--hover-color)]">
                  {project?.image ? (
                    <>
                      <Image
                        src={project?.image}
                        alt={project.name}
                        width={400}
                        height={225}
                        className="z-10 w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#0f0f0f] rounded-lg">
                      <span className="text-[var(--hover-color)] text-2xl font-mono rounded-lg">
                        {project.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-4 z-50">
                  <h3 className="text-white font-ppsans text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 font-ppsans text-sm mb-4 transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60">
                    {project.description?.slice(0, 100)}
                  </p>

                  {/* Team and Links Section */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      {/* <span className="text-gray-500 text-xs transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60">
                        by {project.team}
                      </span> */}
                      {/* <ArrowIcon /> */}
                    </div>

                    <div className="flex flex-col gap-4 cursor-pointer">
                      {project.track.map((trackName: string, idx: number) => (
                        <div
                          key={idx}
                          onClick={() => handleTrackClick(trackName)}
                          className="flex align-middle items-center gap-4"
                        >
                          <span className="border-y border-gray-500/50 hover:border-[var(--hover-color)] p-1 text-gray-500 text-xs transition-colors duration-300 hover:text-[var(--hover-color)] opacity-60">
                            {trackName}
                          </span>
                          <ArrowIcon size={24} />
                        </div>
                      ))}
                    </div>

                    {/* Links Container */}
                    <div className="flex items-center gap-4 pt-2 z-50">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-500 hover:text-[var(--hover-color)] transition-colors duration-300"
                        >
                          <Globe size={18} />
                          {/* <span className="text-xs font-mono">Website</span> */}
                        </a>
                      )}

                      {project.twitterUrl && (
                        <a
                          href={project.twitterUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-500 hover:text-[var(--hover-color)] transition-colors duration-300"
                        >
                          <Twitter size={18} />
                          {/* <span className="text-xs font-mono">Website</span> */}
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-500 hover:text-[var(--hover-color)] transition-colors duration-300"
                        >
                          <Github size={18} />
                          {/* <span className="text-xs font-mono">GitHub</span> */}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
