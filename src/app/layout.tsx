import type { Metadata as NextMetaData } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

export type Metadata = NextMetaData & {
  version: string;
};
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'SchoolApp',
  description:
    'A comprehensive educational platform designed to streamline school management, enhance student engagement, and facilitate communication between teachers, parents, and administrators.',
  version: '1.0.0',
  keywords:
    'school, education, student, teacher, parent, admin, management, communication, engagement, dashboard, app, schoolapp, limon, monayem, hossain, limon00001',
  authors: [
    { name: 'Monayem Hossain Limon', url: 'https://github.com/Limon00001' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
