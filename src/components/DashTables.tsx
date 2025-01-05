// components/tokens-table.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";

const formatNumber = (number: any) => {
  if (!number && number !== 0) return "0";
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(Math.floor(number));
};

type SortConfig = {
  key: string;
  direction: "asc" | "desc" | null;
};

const DashTables = ({ tokens }: { tokens: any[] }) => {
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "",
    direction: null,
  });

  const getSortedData = (data: any[]) => {
    if (!sortConfig.key || !sortConfig.direction) return data;

    return [...data].sort((a, b) => {
      const aValue = sortConfig.key
        .split(".")
        .reduce((obj, key) => obj?.[key], a);
      const bValue = sortConfig.key
        .split(".")
        .reduce((obj, key) => obj?.[key], b);

      if (typeof aValue === "number" && typeof bValue === "number") {
        return sortConfig.direction === "asc"
          ? aValue - bValue
          : bValue - aValue;
      }

      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;

      const comparison = String(aValue).localeCompare(String(bValue));
      return sortConfig.direction === "asc" ? comparison : -comparison;
    });
  };

  const requestSort = (key: string) => {
    setSortConfig((current) => ({
      key,
      direction:
        current.key === key
          ? current.direction === "asc"
            ? "desc"
            : current.direction === "desc"
            ? null
            : "asc"
          : "asc",
    }));
  };

  const getSortIcon = (key: string) => {
    if (sortConfig.key !== key) return <ArrowUpDown className="w-4 h-4 ml-1" />;
    if (sortConfig.direction === "asc")
      return <ArrowUp className="w-4 h-4 ml-1" />;
    if (sortConfig.direction === "desc")
      return <ArrowDown className="w-4 h-4 ml-1" />;
    return <ArrowUpDown className="w-4 h-4 ml-1" />;
  };

  const sortedData = getSortedData(tokens);

  const headers = [
    { key: "chain.imageUrl", label: "Image", sortable: false },
    { key: "name", label: "Token Name", sortable: true },
    { key: "symbol", label: "Ticker", sortable: true },
    { key: "address", label: "Address", sortable: true },
    { key: "marketCap", label: "Market Cap", sortable: true },
    { key: "volume24hUSD", label: "Volume [24h]", sortable: true },
    { key: "holders", label: "Holders", sortable: true },
  ];

  return (
    <table className="w-full">
      <thead>
        <tr className="border-b border-[#353637]">
          {headers.map((header) => (
            <th
              key={header.key}
              className={`text-left py-3 px-4 text-gray-400 font-mono text-sm ${
                header.sortable ? "cursor-pointer hover:text-gray-200" : ""
              }`}
              onClick={() => header.sortable && requestSort(header.key)}
            >
              <div className="flex items-center">
                {header.label}
                {header.sortable && getSortIcon(header.key)}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map((token: any, index: number) => (
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
            <td className="py-4 px-4 text-white font-ppsans">{token.name}</td>
            <td className="py-4 px-4 text-white font-ppsans">{token.symbol}</td>
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
  );
};

export default DashTables;
