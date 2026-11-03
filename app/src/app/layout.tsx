import type { Metadata } from 'next';
import '@/index.css';
import { AppShell } from '@/components/layout/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.outmanelbouhali.online'),
  title: {
    default: 'Full Stack Web & Mobile App Development | Outman Elbouhali',
    template: '%s',
  },
  description:
    'Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation.',
  authors: [{ name: 'Outman Elbouhali', url: 'https://www.outmanelbouhali.online' }],
  creator: 'Outman Elbouhali',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.outmanelbouhali.online',
    siteName: 'Outman Elbouhali',
    title: 'Full Stack Web & Mobile App Development | Outman Elbouhali',
    description:
      'Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation.',
    images: [
      {
        url: 'https://www.outmanelbouhali.online/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Outman Elbouhali - Full Stack Web & Mobile App Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full Stack Web & Mobile App Development | Outman Elbouhali',
    description:
      'Independent Full Stack Developer specializing in custom web development, Flutter cross-platform mobile apps, Django APIs, and n8n workflow automation.',
    creator: '@oelbouha',
    images: ['https://www.outmanelbouhali.online/opengraph-image'],
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
