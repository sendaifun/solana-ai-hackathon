import {
  Bot,
  Brain,
  Zap,
  Code2,
  ChartCandlestick,
  ChartPie,
} from "lucide-react";
import Image from "next/image";
import { ScrambleText } from "@/components/ui/scramble-text";
import { headers } from "next/headers";
import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";

async function getDashboardData() {
  const host = headers().get("host");
  const protocol = process?.env.NODE_ENV === "development" ? "http" : "https";

  const response = await fetch(`${protocol}://${host}/api/dashboard`, {
    next: { revalidate: 10 }, // Cache for 60 seconds
  });

  if (!response.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return response.json();
}

const TabCorners = () => (
  <>
    <div className="absolute -left-1 -top-1">
      <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
    </div>
    <div className="absolute -right-1 -top-1">
      <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
    </div>
    <div className="absolute -left-1 -bottom-1">
      <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
    </div>
    <div className="absolute -right-1 -bottom-1">
      <Image src={cornerAbstract} alt="Corner" className="w-2 h-2" />
    </div>
  </>
);

const StatsCard = ({ title, value, change, icon: Icon, color }: any) => (
  <div className="relative group bg-[#0f0f0f] p-6 rounded-lg border-2 border-[#353637] transition-all duration-300 hover:border-[#1BE1FF]">
    <TabCorners />
    <div className="flex justify-between align-top">
      <div>
        <p className="text-gray-400 font-mono text-sm mb-2">{title}</p>
        <p className="text-white text-2xl font-ppsans mb-2">{value}</p>
        <div className="flex items-center">
          {change > 0 ? (
            <Zap className="w-4 h-4 text-[#19FFCE] mr-1" />
          ) : (
            <Zap className="w-4 h-4 text-[#FFFF00] mr-1" />
          )}
          <span
            className={`text-sm ${
              change > 0 ? "text-[#19FFCE]" : "text-[#FFFF00]"
            }`}
          >
            {Math.abs(change)}% last 24h
          </span>
        </div>
      </div>
      <div className={`p-4 rounded-lg bg-opacity-10 ${color}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
    </div>
  </div>
);

export default async function DashboardContent() {
  const dashboardData = await getDashboardData();
  const formatNumber = (number: any) => {
    if (!number && number !== 0) return "0";
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
      minimumFractionDigits: 0,
    }).format(Math.floor(number));
  };

  const stats = [
    {
      title: "Total Market Cap",
      value: `$${formatNumber(dashboardData?.stats?.totalMarketCap)}`,
      change: 15.8,
      icon: ChartPie,
      color: "text-[#1BE1FF]",
    },
    {
      title: "Total Volume [24h]",
      value: `$${formatNumber(dashboardData?.stats?.totalVolume24h)}`,
      change: 23.4,
      icon: ChartCandlestick,
      color: "text-[#FFFF00]",
    },
    {
      title: "Total Holders",
      value: formatNumber(dashboardData?.stats?.totalHolders),
      change: -8.2,
      icon: Bot,
      color: "text-[#19FFCE]",
    },
    {
      title: "Projects Count",
      value: formatNumber(dashboardData?.stats?.projectsCount),
      change: 4.1,
      icon: Brain,
      color: "text-[#1BE1FF]",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Title Section */}
        <div className="mb-8 text-center my-16">
          <h1 className="text-2xl sm:text-4xl font-relish text-white mb-2">
            <ScrambleText text="AGENTIC DASHBOARD" />
          </h1>
          <p className="text-gray-400 font-ppsans">
            Tokens projects dashboard from Agentic Hackaton
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Agent Projects Table */}
        <div className="relative bg-[#0f0f0f] border-1 border-[#353637] overflow-hidden">
          <TabCorners />
          <div className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-5 h-5 text-[#1BE1FF]" />
              <h2 className="text-white font-ppsans text-xl">
                Active Agent Projects
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[#353637]">
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Image
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Token Name
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Ticker
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Address
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Market Cap
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Volume [24h]
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Holders
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dashboardData.tokens.map((token: any, index: number) => (
                    <tr
                      key={index}
                      className="border-b border-[#353637] hover:bg-[#1E1E1E] transition-colors duration-200"
                    >
                      <td className="py-4 px-4">
                        {token.chain?.imageUrl ? (
                          <Image
                            src={token.chain.imageUrl}
                            alt={token.name}
                            width={48}
                            height={48}
                            className="w-12 h-12 rounded-sm"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-700 rounded-sm" />
                        )}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {token.name}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {token.symbol}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {token.address}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        ${formatNumber(token.marketCap)}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        ${formatNumber(token.volume24hUSD)}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {formatNumber(token.holders)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
