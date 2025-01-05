// app/api/dashboard/route.ts
import { NextResponse } from "next/server";
import axios from "axios";

const SHEETS_CONFIG = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_SHEETS_API_KEY!,
  spreadsheetId: process.env.NEXT_PUBLIC_SPREADSHEET_ID!,
  range: process.env.NEXT_PUBLIC_SHEET_RANGE || "Sheet1!A:I",
};

const DEFAULT_TOKEN_DATA: any = {
  chain: { id: "", name: "", symbol: "", imageUrl: "" },
  address: "",
  name: "",
  symbol: "",
  decimals: 0,
  logoURI: "",
  spamStatus: "",
  marketCap: 0,
  circulatingSupply: 0,
  totalSupply: 0,
  liquidity: 0,
  holders: 0,
  volume24hUSD: 0,
  volume24hUSDChangePercentage: 0,
  trades24h: 0,
  trades24hChangePercentage: 0,
  uniqueWallets24h: 0,
  uniqueWallets24hChangePercentage: 0,
  top10HoldersPercent: 0,
  mintable: false,
  freezable: false,
  mutableMetadata: false,
  ownershipRenounced: false,
  updateAuthority: "",
};

async function fetchSheetData() {
  const response = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${SHEETS_CONFIG.spreadsheetId}/values/${SHEETS_CONFIG.range}?key=${SHEETS_CONFIG.apiKey}`
  );

  if (!response.ok) throw new Error("Failed to fetch sheet data");

  const data = await response.json();
  if (!data.values?.length) return [];

  return data.values
    .slice(1)
    .map((row: string[]) => ({
      name: row[0]?.trim() || "",
      address: row[8]?.trim() || "",
    }))
    .filter((project: any) => project.address);
}

async function fetchTokenData(address: string, projectName?: string) {
  if (!address) return DEFAULT_TOKEN_DATA;

  try {
    const { data } = await axios.get(
      `https://api.phantom.app/tokens/v1/solana:101/address/${address}`
    );

    return {
      ...data.data,
      projectName,
      chain: {
        id: data.data.chain?.id ?? "",
        name: data.data.chain?.name ?? "",
        symbol: data.data.chain?.symbol ?? "",
        imageUrl: data.data?.logoURI ?? "",
      },
    };
  } catch {
    return { ...DEFAULT_TOKEN_DATA, projectName };
  }
}

export async function GET() {
  try {
    // Fetch sheet data
    const projects = await fetchSheetData();

    // Fetch all token data in parallel
    const tokensData = await Promise.all(
      projects.map((project : any) => fetchTokenData(project.address, project.name))
    );

    // Calculate aggregated stats
    const validTokensData = tokensData.filter((token) => token.marketCap > 0);
    const validTokensCount = validTokensData.length;

    let stats = {
      totalMarketCap: 0,
      totalVolume24h: 0,
      totalHolders: 0,
      averageMarketCap: 0,
      projectsCount: 0,
    };

    if (validTokensCount > 0) {
      const totalMarketCap = validTokensData.reduce(
        (sum, token) => sum + token.marketCap,
        0
      );

      stats = {
        totalMarketCap,
        totalVolume24h: validTokensData.reduce(
          (sum, token) => sum + token.volume24hUSD,
          0
        ),
        totalHolders: validTokensData.reduce(
          (sum, token) => sum + token.holders,
          0
        ),
        averageMarketCap: totalMarketCap / validTokensCount,
        projectsCount: validTokensCount,
      };
    }

    // Return both tokens data and stats in a single response
    return NextResponse.json({
      tokens: tokensData,
      stats,
    });
  } catch (error) {
    console.error("Dashboard API Error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
