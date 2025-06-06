import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";
import HandleMove from "@/components/HandleMove/HandleMove";
import Head from "next/head";


const PermanentRecruitment = () => {


    // content for why choose us section
    const content = [
        {
            id: 1,
            head: "Specialized Talent Acquisition",
            desc: "We identify and attract top-tier candidates who align with your company culture, goals, and long-term vision",

        },
        {
            id: 2,
            head: "Robust Candidate Database",
            desc: "With an active pool of 1200+ IT professionals and growing networks across industries, we bring you the right talent faster",

        },
        {
            id: 3,
            head: "Domain-Specific Expertise",
            desc: "Our recruitment specialists understand industry demands — from IT to non-IT — ensuring you get the most relevant candidates",

        },
        {
            id: 4,
            head: " Thorough Screening & Evaluation",
            desc: "Every candidate undergoes multi-stage vetting, including skill assessments, background checks, and culture-fit interviews",

        },
        {
            id: 5,
            head: "Time & Cost Efficiency",
            desc: "Our focused hiring process minimizes your recruitment cycle and reduces hiring costs without compromising on quality",

        },
        {
            id: 6,
            head: "Long-Term Partnership Approach",
            desc: "We don’t just fill roles — we build partnerships by providing reliable support even after onboarding",

        },
    ]



    return (

        <>


            <Head>
                <title>Permanent Recruitment Services | Careers Worldwide</title>
                <meta
                    name="description"
                    content="At Careers Worldwide, we focus on long-term success by matching your company with committed professionals who align with your culture and goals. Our rigorous screening and personalized approach ensure you hire not just for the role but for the future, helping you create teams that drive innovation and stability"
                />
                <meta
                    name="keywords"
                    content="permanent recruitment, full-time hiring, permanent staffing, long-term employees, Careers Worldwide"
                />
                <meta name="author" content="Careers Worldwide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://careersworldwide.in/services/permanentrecruitment" />

                {/* Open Graph (LinkedIn, Facebook) */}
                <meta property="og:title" content="Permanent Recruitment Services | Careers Worldwide" />
                <meta property="og:description" content="Get access to the best full-time talent through our permanent staffing solutions tailored for your business needs." />
                <meta property="og:url" content="https://careersworldwide.in/services/permanentrecruitment" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://careersworldwide.in/images/pr.webp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Permanent Recruitment Services | Careers Worldwide" />
                <meta name="twitter:description" content="Looking for long-term employees? Careers Worldwide helps you hire top full-time professionals through permanent recruitment." />
                <meta name="twitter:image" content="https://careersworldwide.in/images/pr.webp" />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>

                {/* hero section for heading service  */}
                <HeroSection title="Permanent Recruitment" subtitle="Building Strong Foundations with Dedicated Talent" />

                {/* describe service  */}
                <ServiceDetail img="/pr.webp" head="Connecting You to Professionals Who Grow With Your Vision"
                    desc="Dedicated talent is required to build a strong foundation, which is what we have realised over the years from our experience in the recruitment field. With an active database of over 1200+ IT candidates, we are here to serve you with your permanent recruitment needs"
                    desc2="At Careers Worldwide, we focus on long-term success by matching your company with committed professionals who align with your culture and goals. Our rigorous screening and personalized approach ensure you hire not just for the role but for the future, helping you create teams that drive innovation and stability"
                />
                {/* why  choose us section  */}
                <section className="flex flex-col px-2 md:px-20 justify-start items-start gap-3 md:gap-4 my-4 md:my-20">

                    <div className=" flext flex-col justify-center items-center">
                        <h1 className="text-3xl font-bold text-blue-950 ">Why Choose Us?</h1>
                        <HandleMove className="items-center" />
                    </div>

                    <div className="md:px-8">
                        <WhyChooseCard Choose={content} />
                    </div>
                </section>


                {/* contact section  */}
                <ContactButton />

            </main>

        </>
    )
}



export default PermanentRecruitment;