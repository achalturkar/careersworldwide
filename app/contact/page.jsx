"use client"

import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import HeroSection from "@/components/HeroSection/HeroSection";
// import Map from "@/components/Map/Map";
import ContactForm from "@/components/ContactForm/Contact";
import dynamic from "next/dynamic";
import Head from "next/head";

const Map = dynamic(() => import('@/components/Map/Map'), {
    loading: () => <p>Loading map...</p>,
    ssr: false,
})

const Contact = () => {
    return (

        <>

            <Head>
                <title>Contact Us | Careers Worldwide - Get in Touch for Global Hiring</title>
                <meta
                    name="description"
                    content="Address Office No 5, 2nd floor, Siddhivinayak towers, Bibvewadi Road, Pune 411037, India Phone
+91 9850041780/ 8767246552, Email recruitment@careersworldwide.in"
                />
                <meta
                    name="keywords"
                    content="contact Careers Worldwide, recruitment contact, hiring support, job inquiry, staffing agency, global recruitment, HR consultancy, contract , permanent, pune"
                />
                <meta name="author" content="Careers Worldwide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://careersworldwide.in/contact" />

                {/* Open Graph (for social media sharing) */}
                <meta property="og:title" content="Contact Us | Careers Worldwide - Global Hiring Experts" />
                <meta property="og:description" content="Have questions or need support? Contact Careers Worldwide for recruitment, staffing, and job opportunities worldwide. Email recruitment@careersworldwide.in" />
                <meta property="og:url" content="https://careersworldwide.in/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://careersworldwide.in/images/cup.webp" />
                <meta property="og:site_name" content="Careers Worldwide" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Us | Careers Worldwide - Global Hiring Experts" />
                <meta name="twitter:description" content="Get in touch with Careers Worldwide for recruitment and job-related queries. We're here to assist you. Email recruitment@careersworldwide.in" />
                <meta name="twitter:image" content="https://careersworldwide.in/images/cup.webp" />

                <link rel="icon" href="/favicon.ico" />
            </Head>


            <main>

                <HeroSection title="Contact Us" subtitle="Let’s Connect and Build Something Great Together" />
                <ContactForm />
                <Map />
            </main>

        </>
    );
};

// export const metadata = {
//   title: "Contact - CWW",
//   description: "Recruitment Company",
// };

export default Contact;