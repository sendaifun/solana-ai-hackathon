import dialectLogo from "@/assets/images/logos/DialectLogo.svg";
import superteamLogo from "@/assets/images/logos/SendWhiteLogo.svg";
import solanaFndnImg from "@/assets/images/logos/SolanaFoundationLogo.svg";
import squadsLogo from "@/assets/images/logos/SquadsLogo.svg";
import tensorLogo from "@/assets/images/logos/TensorLogo.svg";
import { Trophy } from "lucide-react";
import Image from "next/image";

const Section3 = () => {
  return (
    <div className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <h2 className="text-5xl font-relishGargler text-white tracking-wider">
            GRAND PRIZE
          </h2>
          <p className="text-gray-400 text-right text-lg font-PPSans">
            Build the best overall AI
            <br />
            Agents to win the Grand Prize
          </p>
        </div>

        {/* Prize Card */}
        <div className="relative">
          {/* Cyan border on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400"></div>

          <div className="bg-gray-900/70 rounded-lg p-8">
            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left side */}
              <div>
                <h3 className="text-6xl font-relishGargler font-bold text-white mb-6">
                  $40,000
                </h3>
                <div className="flex items-center gap-3 mb-12">
                  <span className="text-gray-300">Main Track by</span>
                  <Image
                    src={solanaFndnImg}
                    alt="Solana Foundation"
                    className="h-6"
                  />
                </div>

                {/* Supporters section */}
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
                    <span className="text-white text-xl">
                      First Grand Prize
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-2 bg-gray-800">
                      <div className="w-full h-full bg-gray-600"></div>
                    </div>
                    <span className="text-white text-xl font-relishGargler">
                      $25,000
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
                      $15,000
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
