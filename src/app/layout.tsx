import { relishGargler } from "@/assets/fonts/fonts-custom";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Solana AI Hackathon",
  description: "Accelerating the Solana AI Ecosystem",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${relishGargler.variable}`}>
        {children}
      </body>
    </html>
  );
}
