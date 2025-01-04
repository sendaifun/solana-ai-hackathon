import React from "react";
import {
  Bot,
  Cpu,
  Brain,
  Zap,
  MessagesSquare,
  Code2,
  Workflow,
  Network,
  GitGraphIcon,
  Volume,
  ChartCandlestick,
  ChartGanttIcon,
  ChartPie,
} from "lucide-react";
import Image from "next/image";
import cornerAbstract from "@/assets/images/svgs/abstract/CornerRect.png";
import { ScrambleText } from "./ui/scramble-text";

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

const Dashboard = () => {
  const stats = [
    {
      title: "Total Market Cap",
      value: "$455,576,202",
      change: 15.8,
      icon: ChartPie,
      color: "text-[#1BE1FF]",
    },
    {
      title: "Total Volume [24h]",
      value: "$116,024,965",
      change: 23.4,
      icon: ChartCandlestick,
      color: "text-[#FFFF00]",
    },
    {
      title: "Total Holders",
      value: "205,967",
      change: -8.2,
      icon: Bot,
      color: "text-[#19FFCE]",
    },
    {
      title: "Projects Count",
      value: "62",
      change: 4.1,
      icon: Brain,
      color: "text-[#1BE1FF]",
    },
  ];

  const tableData = [
    {
      logo: "https://ipfs.io/ipfs/QmTda82KF2HRFwXoq9mwcGha4eS5ncz47rdEZ2MG5Rb8cz",
      ticker: "Davinci",
      tokenName : "da Vinci AI",
      tokenAddress : "23VdJFdmz8dwFxZfQ24k13jVoQEw9RSKYU2sdgocpump",
      marketCap: "$1,000,000",
      circulatingSupply: "1,000,000",
      totalSupply: "1,000,000",
      liquidity: "1,000,000",
      type: "Autonomous",
      status: "Active",
      progress: 82,
      interactions: "124K",
    },
    {
      logo: "https://ipfs.io/ipfs/QmTda82KF2HRFwXoq9mwcGha4eS5ncz47rdEZ2MG5Rb8cz",
      ticker: "Davinci",
      tokenName : "da Vinci AI",
      tokenAddress : "23VdJFdmz8dwFxZfQ24k13jVoQEw9RSKYU2sdgocpump",
      marketCap: "$1,000,000",
      circulatingSupply: "1,000,000",
      totalSupply: "1,000,000",
      liquidity: "1,000,000",
      type: "Autonomous",
      status: "Active",
      progress: 82,
      interactions: "124K",
    },
    {
      logo: "https://ipfs.io/ipfs/QmTda82KF2HRFwXoq9mwcGha4eS5ncz47rdEZ2MG5Rb8cz",
      ticker: "Davinci",
      tokenName : "da Vinci AI",
      tokenAddress : "23VdJFdmz8dwFxZfQ24k13jVoQEw9RSKYU2sdgocpump",
      marketCap: "$1,000,000",
      circulatingSupply: "1,000,000",
      totalSupply: "1,000,000",
      liquidity: "1,000,000",
      type: "Autonomous",
      status: "Active",
      progress: 82,
      interactions: "124K",
    },
  ];

  return (
    <div className="bg-black min-h-screen">
      <div className="max-w-7xl mx-auto p-6">
        {/* Title Section */}
        <div className="mb-8 text-center my-16">
          <h1 className="text-2xl  sm:text-4xl font-relish text-white mb-2">
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
                      Logo
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
                      Circulating Supply
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Total Supply
                    </th>
                    <th className="text-left py-3 px-4 text-gray-400 font-mono text-sm">
                      Liquidity
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#353637] hover:bg-[#1E1E1E] transition-colors duration-200"
                    >
                      <td className="py-4 px-4">
                        <Image
                          src={row.logo}
                          alt={row.logo}
                          width={100}
                          height={100}
                          className="w-12 h-12 rounded-sm"
                        />
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.ticker}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.tokenName}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.tokenAddress}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.marketCap}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.circulatingSupply}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.totalSupply}
                      </td>
                      <td className="py-4 px-4 text-white font-ppsans">
                        {row.liquidity}
                      </td>

                      {/* <td className="py-4 px-4 text-gray-400">
                        <div className="flex items-center gap-2">
                          <Workflow className="w-4 h-4 text-[#1BE1FF]" />
                          {row.track}
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          <Network className="w-4 h-4 text-[#FFFF00]" />
                          <span className="text-gray-400">{row.type}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span
                          className={`px-3 py-1 rounded-full text-xs ${
                            row.status === "Active"
                              ? "bg-[#1BE1FF]/10 text-[#1BE1FF]"
                              : row.status === "Learning"
                              ? "bg-[#FFFF00]/10 text-[#FFFF00]"
                              : row.status === "Optimizing"
                              ? "bg-[#19FFCE]/10 text-[#19FFCE]"
                              : row.status === "Scaling"
                              ? "bg-purple-500/10 text-purple-500"
                              : "bg-gray-500/10 text-gray-500"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="w-full bg-[#353637] rounded-full h-2">
                          <div
                            className="bg-[#1BE1FF] h-2 rounded-full transition-all duration-300"
                            style={{ width: `${row.progress}%` }}
                          />
                        </div>
                      </td> */}
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
};

export default Dashboard;
