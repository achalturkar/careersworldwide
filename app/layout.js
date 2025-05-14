import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { Poppins, Roboto, Montserrat } from 'next/font/google';
import Footer from "@/components/Footer/Footer";


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

export const metadata = {
  title: "Careers Worldwide - Pune",
  description: "Recruitment Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${montserrat.variable} antialiased`}
      >

        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
