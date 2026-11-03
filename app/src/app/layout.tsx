import type { Metadata } from 'next';
import '@/index.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.outmanelbouhali.online'),
  title: {
    default: 'Outman Elbouhali | Full Stack Web & Mobile Developer',
    template: '%s',
  },
  description:
    'Full stack developer building web and mobile apps with React, Next.js and Flutter. I help startups and SaaS teams build, launch and scale their MVP fast.',
  authors: [{ name: 'Outman Elbouhali', url: 'https://www.outmanelbouhali.online' }],
  creator: 'Outman Elbouhali',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.outmanelbouhali.online',
    siteName: 'Outman Elbouhali',
    title: 'Outman Elbouhali | Full Stack Web & Mobile Developer',
    description:
      'Full stack developer building web and mobile apps with React, Next.js and Flutter. I help startups and SaaS teams build, launch and scale their MVP fast.',
    images: [
      {
        url: 'https://www.outmanelbouhali.online/og.png',
        width: 1200,
        height: 630,
        alt: 'Outman Elbouhali | Full Stack Web & Mobile Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Outman Elbouhali | Full Stack Web & Mobile Developer',
    description:
      'Full stack developer building web and mobile apps with React, Next.js and Flutter. I help startups and SaaS teams build, launch and scale their MVP fast.',
    creator: '@oelbouha',
    images: ['https://www.outmanelbouhali.online/og.png'],
  },
  icons: {
    icon: '/images/icon.png',
    apple: '/images/icon.png',
  },
  verification: {
    google: 'EcGE3PdZqpQEjizvuyJ01sP8p88JIfv2eGNQnAwFs38',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
