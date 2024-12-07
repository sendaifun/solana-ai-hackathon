"use client";

import { useEffect, useState } from "react";
import { Trophy } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

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

const TrackCard = ({ data }: { data: (typeof trackData)[number] }) => (
  <Card className="relative w-full bg-gray-900/70 border-none">
    <div
      className={cn(
        "absolute inset-0 bg-gradient-to-r rounded-lg",
        data.gradient
      )}
    />
    <div
      className={cn("absolute left-0 top-0 bottom-0 w-1", data.borderColor)}
    />
    <CardContent className="p-8 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side */}
        <div>
          <h3 className="text-6xl font-bold text-white mb-6">{data.amount}</h3>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-gray-300">Main Track by</span>
            <div className="h-6 w-24 bg-gray-700" />
          </div>
          <div>
            <p className="text-gray-500 mb-4">Supported by</p>
            <div className="grid grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-8 bg-gray-700" />
              ))}
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
              <span className="text-white text-xl">
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
              <span className="text-white text-xl">
                ${data.prizes.second.toLocaleString()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

const TracksSection = () => {
  const [activeTrack, setActiveTrack] = useState(0);

  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl text-white tracking-wider">
            {trackData[activeTrack].title}
          </h2>
          <p className="text-gray-400 text-right text-lg">
            {trackData[activeTrack].subtitle[0]}
            <br />
            {trackData[activeTrack].subtitle[1]}
          </p>
        </div>

        {/* Carousel */}
        <Carousel
          opts={{
            loop: true,
          }}
          className="w-full"
          onSelect={(index: any) => setActiveTrack(index)}
        >
          <CarouselContent>
            {trackData.map((track, index) => (
              <CarouselItem key={track.id}>
                <TrackCard data={track} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        {/* Carousel Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {trackData.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTrack(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === activeTrack
                  ? `w-8 ${trackData[index].borderColor}`
                  : "bg-gray-600 hover:bg-gray-500"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TracksSection;
