'use client';

import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins, Roboto, Montserrat } from 'next/font/google';
import Footer from "@/components/Footer/Footer";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import Head from 'next/head';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
});
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
});
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-roboto',
  display: 'swap',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <TopUpButton />
      </body>
    </html>
  );
}
