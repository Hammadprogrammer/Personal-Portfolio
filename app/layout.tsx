import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/ui/navbar';
import Footer from '@/components/ui/footer';
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
// 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/portfolio.png" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="relative min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
