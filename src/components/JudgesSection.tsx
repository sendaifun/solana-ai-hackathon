import React from "react";

const judges = [
  {
    id: 1,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 2,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 3,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 4,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 5,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 6,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 7,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 8,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 9,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
  {
    id: 10,
    name: "Tarun Chitra",
    role: "Partner @DragonFly",
    image: "/api/placeholder/400/400",
  },
];

const JudgesSection = () => {
  return (
    <div className="bg-black py-20">
      <div className="w-full mx-auto px-4">
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
            <h2 className="text-4xl font-relishGargler text-white mb-2">
              JUDGED AND MENTORED
            </h2>
            <p className="text-2xl text-white font-PPSans">
              by top Crypto x AI Leaders:
            </p>
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

        {/* Judges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {judges.map((judge) => (
            <div key={judge.id} className="relative">
              <div className="aspect-square overflow-hidden rounded-lg border border-gray-800">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover grayscale brightness-90"
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <div>
                  <h3 className="text-white font-mono text-sm">{judge.name}</h3>
                  <p className="text-gray-500 font-mono text-xs">
                    {judge.role}
                  </p>
                </div>
                <div className="ml-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 5L19 19M19 5L5 19"
                      stroke="#353637"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JudgesSection;
