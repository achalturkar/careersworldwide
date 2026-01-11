import Script from "next/script";
import { Poppins, Roboto, Montserrat } from "next/font/google";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import TopUpButton from "@/components/TopUpButton/TopUpButton";
import AOSWrapper from "./AOSWrapper";
import "./globals.css";

/* ✅ Single font for performance & SEO */
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const montserrat = Montserrat({ 
  subsets: ['latin'],
   weight: ['300','400','500','600','700'],
    variable: '--font-montserrat',
     display: 'swap' 
    });


const roboto = Roboto({
   subsets: ['latin'], 
  weight: ['400','500','600','700'],
   variable: '--font-roboto', 
   display: 'swap' 
  });


/* ✅ Global SEO Metadata */
export const metadata = {
  title: {
    default: "Careers Worldwide",
    template: "Careers Worldwide | %s ",
  },
  description:
    "Careers Worldwide is a global recruitment and HR consultancy with offices in India and the UK. We specialize in permanent hiring, headhunting, contractual recruitment, and payroll management.",
  robots: "index, follow",
  metadataBase: new URL("https://www.careersworldwide.in"),
  openGraph: {
    title: "Careers Worldwide | Recruitment & Staffing Solutions",
    description:
      "Careers Worldwide is a global recruitment and HR consultancy with offices in India and the UK.",
    url: "https://www.careersworldwide.in/",
    siteName: "Careers Worldwide",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${montserrat.variable} ${roboto.variable} antialiased`}>
        
        {/* ✅ WebSite Schema (Controls Site Name above URL in Google) */}
        <Script
          id="website-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Careers Worldwide",
              "alternateName": "Careers Worldwide",
              "url": "https://www.careersworldwide.in/",
              "inLanguage": "en-IN",
              "publisher": {
                "@type": "Organization",
                "name": "Careers Worldwide",
                "url": "https://www.careersworldwide.in/",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.careersworldwide.in/cww.svg"
                }
              }
            })
          }}
        />

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
