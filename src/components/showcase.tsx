"use client";

import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import Image from "next/image";
import React, { useState } from "react";
// Img SVGs :
import { track } from "@vercel/analytics";
import ongoLogo from "@/assets/images/showcase/ongo.svg";
import { Github, Globe, PlayCircle, Twitter } from "lucide-react";

const ProjectPlaceholder = ({
  name,
  color,
}: {
  name: string;
  color: string;
}) => {
  return (
    <div className="relative w-full h-full bg-[#1E1E1E] flex items-center justify-center overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-[#353637] opacity-20" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#353637] opacity-20" />
        <div className="absolute top-0 left-0 h-full w-[1px] bg-[#353637] opacity-20" />
        <div className="absolute top-0 right-0 h-full w-[1px] bg-[#353637] opacity-20" />

        {/* Diagonal lines */}
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-[#353637] opacity-20 transform -rotate-45" />
        <div className="absolute top-0 right-0 w-16 h-[1px] bg-[#353637] opacity-20 transform rotate-45" />
        <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-[#353637] opacity-20 transform rotate-45" />
        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-[#353637] opacity-20 transform -rotate-45" />
      </div>

      {/* Center content */}
      <div className="relative z-10 p-6 text-center">
        <div
          className="font-mono text-2xl font-bold mb-2 transition-colors duration-300"
          style={{ color }}
        >
          {name.slice(0, 2).toUpperCase()}
        </div>
        <div className="text-gray-400 text-sm font-mono max-w-[80%] mx-auto">
          {name}
        </div>
      </div>

      {/* Corner accents */}
      <div
        className="absolute top-2 left-2 w-3 h-3 transition-colors duration-300"
        style={{
          borderLeft: `2px solid ${color}`,
          borderTop: `2px solid ${color}`,
        }}
      />
      <div
        className="absolute top-2 right-2 w-3 h-3 transition-colors duration-300"
        style={{
          borderRight: `2px solid ${color}`,
          borderTop: `2px solid ${color}`,
        }}
      />
      <div
        className="absolute bottom-2 left-2 w-3 h-3 transition-colors duration-300"
        style={{
          borderLeft: `2px solid ${color}`,
          borderBottom: `2px solid ${color}`,
        }}
      />
      <div
        className="absolute bottom-2 right-2 w-3 h-3 transition-colors duration-300"
        style={{
          borderRight: `2px solid ${color}`,
          borderBottom: `2px solid ${color}`,
        }}
      />
    </div>
  );
};

const tracks = [
  { id: "all", name: "All Projects" },
  { id: "chat", name: "Autonomous Chat" },
  { id: "meme", name: "Meme" },
  { id: "social", name: "Social Influencer" },
  { id: "infra", name: "Agents Infra" },
  { id: "token", name: "Token tooling" },
  { id: "defi", name: "Defi" },
  { id: "trading", name: "Trading" },
];

const projects = [
  {
    id: "Ongo AI",
    name: "Ongo AI",
    image: ongoLogo,
    track: ["chat", "social"],
    description: "Get an expert opinion from Ongo Gablogian",
    githubUrl: "https://github.com/ongo-ai",
    websiteUrl: "https://ongo.ai/",
    team: "Team Alpha",
    twitterUrl: "https://x.com/ongo_ai/status/1869147405414957336",
    submissionUrl: "https://ongo.ai/",
  },
  // Add more projects here
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

const ArrowIcon = () => (
  <div className="flex gap-0">
    <svg
      width="32"
      height="32"
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

const TrackTab = ({ name, isActive, onClick }: any) => (
  <div className="relative">
    <button
      onClick={onClick}
      className={`relative bg-[#1E1E1E] bg-opacity-20 border-2 ${
        isActive ? "border-[#787B7E]/50" : "border-[#353637]"
      } px-6 py-2 font-mono text-sm transition-all duration-300`}
    >
      {/* Corner Decorations */}
      <div className="absolute inset-0">
        {/* Top Left */}
        <div className="absolute -left-2 -top-2">
          <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
        </div>
        {/* Top Right */}
        <div className="absolute -right-2 -top-2">
          <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
        </div>
        {/* Bottom Left */}
        <div className="absolute -left-2 -bottom-2">
          <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
        </div>
        {/* Bottom Right */}
        <div className="absolute -right-2 -bottom-2">
          <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
        </div>
      </div>
      <span
        className={`relative text-nowrap z-10 ${
          isActive ? "text-white" : "text-gray-400"
        }`}
      >
        {name}
      </span>
    </button>
  </div>
);

const ProjectShowcase = () => {
  const [activeTrack, setActiveTrack] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeTrack === "all" || project.track.includes(activeTrack)
  );

  const handleTrackClick = (trackId: string) => {
    setActiveTrack(trackId);
    track("filter_change", { trackId });
  };

  return (
    <div className="bg-black">
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
            <h2 className="text-4xl font-relish text-white mb-2 text-nowrap mx-6">
              PROJECT SHOWCASE
            </h2>
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

        {/* Track Filters */}
        <div className="flex flex-wrap items-center justify-left gap-6 mb-12">
          {tracks.map((track) => (
            <TrackTab
              key={track.id}
              name={track.name}
              isActive={activeTrack === track.id}
              onClick={() => handleTrackClick(track.id)}
            />
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
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
              <div className="relative bg-[#1E1E1E] rounded-lg overflow-hidden">
                {/* Image Container */}
                <div className="aspect-video overflow-hidden border-2 border-[#353637] transition-all duration-300 group-hover:border-[var(--hover-color)]">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={400}
                        height={225}
                        className="z-10 w-full h-full object-cover grayscale brightness-90 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-110 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E1E] via-transparent to-transparent opacity-50 transition-opacity duration-300 group-hover:opacity-30"></div>
                    </>
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#1E1E1E] rounded-lg">
                      <span className="text-[var(--hover-color)] text-2xl font-mono rounded-lg">
                        {project.name.slice(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>

                {/* Info Section */}
                <div className="p-4 z-50">
                  <h3 className="text-white font-mono text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--hover-color)]">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60">
                    {project.description}
                  </p>

                  {/* Team and Links Section */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 text-xs transition-colors duration-300 group-hover:text-[var(--hover-color)] opacity-60">
                        by {project.team}
                      </span>
                      <ArrowIcon />
                    </div>

                    {/* Links Container */}
                    <div className="flex items-center gap-4 pt-2 z-50">
                      {project.websiteUrl && (
                        <a
                          href={project.websiteUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-[var(--hover-color)] transition-colors duration-300"
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
                          className="flex items-center gap-2 text-gray-400 hover:text-[var(--hover-color)] transition-colors duration-300"
                        >
                          <Twitter size={18} />
                          {/* <span className="text-xs font-mono">Website</span> */}
                        </a>
                      )}

                      {project.submissionUrl && (
                        <a
                          href={project.submissionUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-[var(--hover-color)] transition-colors duration-300"
                        >
                          <PlayCircle size={18} />
                          {/* <span className="text-xs font-mono">Website</span> */}
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-[var(--hover-color)] transition-colors duration-300"
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
