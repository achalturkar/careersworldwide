
import HeroSection from "@/components/HeroSection/HeroSection";
import CareersJobList from "@/components/CareersJobList/CareersJobList";
import Head from "next/head";


const JobOpenings = () => {

    const jobData = [


        {
            title: "HR Executive - Recruitment",
            desc: "We are seeking an enthusiastic HR Executive to manage and execute the end-to-end recruitment process, coordinate with hiring managers, and help in building a strong workforce.",
            set: [
                { key: "Location: Pune" },
                { key: "Experience: 1-3 years" },
                { key: "Skills: Recruitment, Screening, Interview Coordination, Onboarding" },
                { key: "Employment Type: Full Time" },
                { key: "Education: Any Graduate / MBA in HR preferred" }
            ]
        },
        {
            title: "Java Developer",
            desc: "We are looking for an experienced Java Developer with Spring Boot and REST API knowledge.",
            set: [
                { key: "Location: Pune" },
                { key: "Experience: 2-5 years" },
                { key: "Skills: Java, Spring Boot, REST APIs, PostgreSQL" },
                { key: "Employment Type: Full Time" },
            ],
        },
        {
            title: "UI/UX Designer",
            desc: "Creative individual with Figma/Adobe XD experience for mobile and web apps.",
            set: [
                { key: "Location: Remote" },
                { key: "Experience: 1-3 years" },
                { key: "Skills: Figma, Adobe XD, User Research" },
                { key: "Employment Type: Contract" },
            ],
        },
    ];

    return (

        <>
            <Head>
                <title>Job Openings | Careers Worldwide - Apply Now</title>
                <meta
                    name="description"
                    content="Find the latest job openings at Careers Worldwide. Apply now for IT, contract, and freelance, permanent, payroll positions across top industries."
                />
                <meta
                    name="keywords"
                    content="Careers Worldwide jobs, latest job openings, IT jobs, contract jobs,  remote jobs, apply online, Job Opening"
                />
                <meta name="author" content="Careers Worldwide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://careersworldwide.in/jobopening" />

                {/* Open Graph */}
                <meta property="og:title" content="Job Openings | Careers Worldwide - Apply Now" />
                <meta property="og:description" content="View current job opportunities with Careers Worldwide. Start your career with us today." />
                <meta property="og:url" content="https://careersworldwide.in/jobopening" />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Job Openings | Careers Worldwide" />
                <meta name="twitter:description" content="Careers Worldwide is hiring for IT. Apply now and grow your career." />

                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <HeroSection title="Job Openings" subtitle="Discover Opportunities. Define Your Future." />

                <CareersJobList Jobs={jobData} />


            </main>

        </>
    )
}



export default JobOpenings;