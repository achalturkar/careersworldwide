import CareersJobList from "@/components/CareersJobList/CareersJobList";
import HeroSection from "@/components/HeroSection/HeroSection";
import Head from "next/head";


const Careers = () => {

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
        <title>Careers | Careers Worldwide - Join Our Growing Team</title>
        <meta
          name="description"
          content="Explore current job openings at Careers Worldwide. Join our team and be a part of a leading recruitment company delivering global hiring solutions."
        />
        <meta
          name="keywords"
          content="Careers Worldwide jobs, join our team, recruitment company hiring, HR careers, work at Careers Worldwide, job openings, it jobs "
        />
        <meta name="author" content="Careers Worldwide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://careersworldwide.in/careers" />

        {/* Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Careers | Careers Worldwide - Join Our Growing Team" />
        <meta property="og:description" content="Check out exciting career opportunities with Careers Worldwide. Work with industry experts and build your future in recruitment and HR." />
        <meta property="og:url" content="https://careersworldwide.in/careers" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Careers Worldwide" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers | Careers Worldwide - Join Our Growing Team" />
        <meta name="twitter:description" content="We're hiring! Discover job opportunities at Careers Worldwide and grow with a top recruitment consultancy." />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <HeroSection title="Careers" subtitle="Join a Team Where Your Growth is Our Priority." img="/abc.jpg" />


        <CareersJobList Jobs={jobData} />




      </main>

    </>
  )
}


export default Careers;