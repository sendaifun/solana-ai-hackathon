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
  description: '10th - 23rd Dec. global hackathon. $100k+ in prizes',
  openGraph: {
    title: 'Solana AI Hackathon',
    description: '10th - 23rd Dec. global hackathon. $100k+ in prizes',
    url: 'https://solanaaihackathon.com',
    siteName: 'Solana AI Hackathon',
    images: [
      {
        url: '/og.jpeg',
        width: 1200,
        height: 630,
        alt: 'Solana AI Hackathon',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solana AI Hackathon',
    description: '10th - 23rd Dec. global hackathon. $100k+ in prizes',
    images: ['/og.jpeg'],
  },
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
