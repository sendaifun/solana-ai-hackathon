import Image from "next/image";
import React from "react";
import connectImg from "@/assets/images/svgs/bgs/abstract.png";
import prizesImg from "@/assets/images/svgs/bgs/abstract3.png";
import opportunitiesImg from "@/assets/images/svgs/bgs/abstract2.png";

const PreviewCards = () => {
  
  const cards = [
    {
      title: "Connect",
      color: "#1BE1FF",
      image: connectImg,
      description: "Expert Sessions, 1:1 Mentorship,\nand Exclusive Networking"
    },
    {
      title: "Prizes",
      color: "#FFFF00",
      image: prizesImg,
      description: "$100,000+ in Prize Pool\nacross 6 Themed Tracks"
    },
    {
      title: "Opportunities",
      color: "#19FFCE",
      image: opportunitiesImg,
      description: "Access to VC/Angel Funding for\nTop-Selected Teams"
    }
  ];

  return (
    <div className="bg-black w-full py-20">
      {/* Container with horizontal scroll on mobile */}
      <div className="flex md:justify-center overflow-x-auto md:overflow-x-visible">
        <div className="flex gap-8 mx-2 md:flex-row md:justify-around md:gap-16 pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {cards.map((card, index) => (
            <div 
              key={card.title}
              className="flex-none snap-center md:flex-1 mt-8"
            >
              {/* Card Container */}
              <div className="relative group w-[280px] md:w-[240px] lg:w-[320px]">
                {/* Glowing border using the specific hex color */}
                <div 
                  className="absolute -inset-0.5 rounded-lg opacity-75"
                  style={{ backgroundColor: card.color }}
                ></div>
                
                <div className="relative bg-black rounded-lg">
                  {/* Title Tab with specific hex color */}
                  <div 
                    className="absolute -top-8 left-0 px-4 py-1 rounded-t text-black font-mono z-10"
                    style={{ backgroundColor: card.color }}
                  >
                    {card.title}
                  </div>
                  
                  {/* Image and Content */}
                  <div className="relative">
                    <Image
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[200px] md:h-[180px] lg:h-[220px] object-cover brightness-75 rounded-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                      <p className="text-lg md:text-xl font-light leading-tight whitespace-pre-line">
                        {card.description}
                      </p>
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

export default PreviewCards;