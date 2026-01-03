import Head from 'next/head';
import { Poppins, Montserrat, Roboto, Geist, Geist_Mono } from 'next/font/google';
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import AOSWrapper from "./AOSWrapper";
import "./globals.css";

const poppins = Poppins({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-poppins', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['300','400','500','600','700'], variable: '--font-montserrat', display: 'swap' });
const roboto = Roboto({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-roboto', display: 'swap' });
const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>Careers Worldwide | Recruitment & Staffing Solution</title>
        <meta name="description" content="Careers Worldwide is a global recruitment and HR consultancy with offices in India and the UK. We specialize in permanent hiring, headhunting, contractual recruitment, and payroll management." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Careers Worldwide | Recruitment & Staffing Solution" />
        <meta property="og:site_name" content="Careers Worldwide" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.careersworldwide.in/" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={`${poppins.variable} ${montserrat.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AOSWrapper>
          <Navbar />
          {children}
          <Footer />
          <TopUpButton />
        </AOSWrapper>
      </body>
    </html>
  );
}
