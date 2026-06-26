import type { Metadata } from 'next';
import { Lato } from 'next/font/google';
import './globals.css';

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MKH Collective — CPG Consulting',
  description:
    'Data-driven consulting for consumer packaged goods brands across growth, procurement, and operations.',
  openGraph: {
    title: 'MKH Collective',
    description: 'Strategy That Moves the Shelf.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
