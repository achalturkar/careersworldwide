import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ExpertiseCard from "@/components/ExpertiseCard/ExpertiseCard";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";

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
    )
};

export const metadata = {
  title: "Expertise - CWW",
  description: "Recruitment Company",
};

export default Expertise;