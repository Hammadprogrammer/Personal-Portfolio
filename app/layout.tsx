import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
import AnimatedBackground from '@/components/ui/animated-background';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Muhammad Hammad - Professional Fullstack Developer',
  description:
    'Professional portfolio of Muhammad Hammad, a skilled fullstack developer specializing in modern web technologies, React, Next.js, and Node.js development.',
  keywords:
    'fullstack developer, web developer, React, Next.js, Node.js, JavaScript, TypeScript, portfolio',
  authors: [{ name: 'Muhammad Hammad' }],
  creator: 'Muhammad Hammad',
  openGraph: {
    title: 'Muhammad Hammad - Professional Fullstack Developer',
    description: 'Professional portfolio showcasing modern web development expertise',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* ✅ Google Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        {/* ✅ Single favicon (from /public/favicon.ico) */}
        <link rel="icon" href="/portfolio.png" />
      </head>
      <body className="antialiased">
        <AnimatedBackground />
        <Navbar />
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
