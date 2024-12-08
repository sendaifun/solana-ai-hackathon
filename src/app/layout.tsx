import localFont from 'next/font/local';
import type { Metadata } from 'next';
import './globals.css';

const relishGargler = localFont({
  src: '../fonts/relish-gargler-regular.otf',
  variable: '--font-relish',
});

const ppSans = localFont({
  src: '../fonts/PPSupplySans-Regular.otf',
  variable: '--font-ppsans',
});

export const metadata: Metadata = {
  title: 'Solana AI Hackathon',
  description: 'Accelerating the Solana AI Ecosystem',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${relishGargler.variable} ${ppSans.variable}`}>
        {children}
      </body>
    </html>
  );
}
