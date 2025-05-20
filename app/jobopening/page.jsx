
import HeroSection from "@/components/HeroSection/HeroSection";
import CareersJobList from "@/components/CareersJobList/CareersJobList";


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
        <main>
            <HeroSection title="Job Openings" subtitle="Discover Opportunities. Define Your Future." />

            <CareersJobList Jobs={jobData} />


        </main>
    )
}

export const metadata = {
  title: "Job Opening - CWW",
  description: "Recruitment Company",
};

export default JobOpenings;