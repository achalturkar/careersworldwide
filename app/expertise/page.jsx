import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ExpertiseCard from "@/components/ExpertiseCard/ExpertiseCard";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import Head from "next/head";

const Expertise = () => {


    const expertiseData = [
        {
            head: "Software Development",
            skill: [
                { set: "Salesforce Developers" },
                { set: "Mobile App Developers (Android / iOS)" },
                { set: "SharePoint Developers / Architects" },
                { set: "Dot Net / Full Stack Developers" },
                { set: "Oracle (Admin, Developer)" }
            ]
        },
        {
            head: "Automation & Testing",
            skill: [
                { set: "RPA (UI Path, Automation Anywhere, Blue Prism)" },
                { set: "Manual & Automation Testers" },
                { set: "Performance / UFT / Functional / Cloud Testers" }
            ]
        },
        {
            head: "PLM & CAD",
            skill: [
                { set: "PLM (Windchill, 3DS Enovia, Teamcenter, ARAS)" },
                { set: "CAD (Catia, Creo, Autodesk, eCAD, mCAD)" }
            ]
        },
        {
            head: "Cloud, DevOps & Security",
            skill: [
                { set: "DevOps and Cloud Professionals" },
                { set: "Information Security Analysts" },
                { set: "Systems / Network Admins & Engineers" }
            ]
        },
        {
            head: "User Experience",
            skill: [
                { set: "UX Designers" },
                { set: "UX Architects" },
                { set: "Information Architects" }
            ]
        },
        {
            head: "Systems & ALM",
            skill: [
                { set: "System Engineers (SysML, Matlab, C++, Simulink)" },
                { set: "ALM Tools (IBM Rational, Polarion, Codebeamer, HP ALM, PTC Integrity)" }
            ]
        }
    ];


    return (

        <>


            <Head>
                <title>Our Expertise | Careers Worldwide - Recruitment Across Industries</title>
                <meta
                    name="description"
                    content="At Careers Worldwide, we pride ourselves on delivering skilled professionals across a wide range of domains. Our extensive talent pool and deep understanding of industry needs enable us to connect businesses with candidates who are not only qualified but also a perfect cultural and technical fit. From emerging technologies to legacy systems, our expertise spans all crucial areas of modern enterprise"
                />
                <meta
                    name="keywords"
                    content="Careers Worldwide expertise, IT recruitment,  contract staffing, payroll outsourcing, recruitment services, talent acquisition, oracle, salesforce, java fullstack, .net fullstack, development"
                />
                <meta name="author" content="Careers Worldwide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://careersworldwide.in/expertise" />

                {/* Open Graph (Social Sharing) */}
                <meta property="og:title" content="Our Expertise | Careers Worldwide - Industry-Specific Recruitment" />
                <meta property="og:description" content="Discover how Careers Worldwide delivers expert staffing solutions It industry in wide range of domain salesforce, oracle, App development, Fullstack" />
                <meta property="og:url" content="https://careersworldwide.in/expertise" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://careersworldwide.in/images/pl.webp" />
                <meta property="og:site_name" content="Careers Worldwide" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Our Expertise | Careers Worldwide - Industry-Specific Recruitment" />
                <meta name="twitter:description" content="We specialize in providing recruitment solutions for IT, freelancing, and full-time roles globally." />
                <meta name="twitter:image" content="https://careersworldwide.in/images/pl.webp" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="mt-26">



                <HeroSection title="Expertise" subtitle="Delivering Domain-Ready Talent, When and Where You Need It" img="/exp.jpg" />


                <section>
                    <ServiceDetail img="/pl.webp" head="Our Expertise"
                        desc="At Careers Worldwide, we pride ourselves on delivering skilled professionals across a wide range of domains. Our extensive talent pool and deep understanding of industry needs enable us to connect businesses with candidates who are not only qualified but also a perfect cultural and technical fit.
From emerging technologies to legacy systems, our expertise spans all crucial areas of modern enterprise"

                    />
                </section>


                <ExpertiseCard Expertise={expertiseData} />


                <ContactButton />


            </main>

        </>


    )
};



export default Expertise;