
import HeroSection from "@/components/HeroSection/HeroSection";
import CareersJobList from "@/components/CareersJobList/CareersJobList";


export const metadata = {
  title: "Job Openings",
  description:
    "Find the latest job openings at Careers Worldwide. Apply now for IT, contract, freelance, permanent, and payroll positions across top industries.",
  alternates: {
    canonical: "https://www.careersworldwide.in/jobopening/",
  },
 
};


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
      { key: "Employment Type: Full Time" }
    ]
  },
  {
    title: "UI/UX Designer",
    desc: "Creative individual with Figma/Adobe XD experience for mobile and web apps.",
    set: [
      { key: "Location: Remote" },
      { key: "Experience: 1-3 years" },
      { key: "Skills: Figma, Adobe XD, User Research" },
      { key: "Employment Type: Full Time" }
    ]
  },
  {
    title: "Salesforce Developer",
    desc: "Seeking a Salesforce Developer to design, develop, and customize Salesforce applications to meet business requirements.",
    set: [
      { key: "Location: Pune / Bangalore" },
      { key: "Experience: 5-8 years" },
      { key: "Skills: Salesforce, Apex, Lightning, SOQL" },
      { key: "Employment Type: Full Time" }
    ]
  },
  {
    title: "Oracle PL/SQL Developer",
    desc: "Looking for an Oracle Developer responsible for database development, performance tuning, and complex query handling.",
    set: [
      { key: "Location: Pune" },
      { key: "Experience: 4-7 years" },
      { key: "Skills: Oracle, PL/SQL, Performance Tuning" },
      { key: "Employment Type: Contract" }
    ]
  },
  {
    title: "SAP Functional Consultant",
    desc: "We are hiring an SAP Functional Consultant to analyze business processes and configure SAP modules accordingly.",
    set: [
      { key: "Location: Pune / Remote" },
      { key: "Experience: 4-6 years" },
      { key: "Skills: SAP MM / SD / FICO, Business Analysis" },
      { key: "Employment Type: Contract" }
    ]
  },
  {
    title: ".NET Developer",
    desc: "Experienced .NET Developer required to build scalable enterprise applications using Microsoft technologies.",
    set: [
      { key: "Location: Pune" },
      { key: "Experience: 5-8 years" },
      { key: "Skills: C#, ASP.NET, Web API, SQL Server" },
      { key: "Employment Type: Full Time" }
    ]
  },
  
   {
    title: "Senior DevOps Engineer",
    desc: "We are seeking a Senior DevOps Engineer to design, implement, and manage scalable CI/CD pipelines and cloud infrastructure.",
    set: [
      { key: "Location: Pune / Bangalore / Remote" },
      { key: "Experience: 5-8 years" },
      { key: "Skills: AWS, Docker, Kubernetes, Jenkins, Terraform" },
      { key: "Employment Type: Contract" }
    ]
  },
  {
    title: "AWS Cloud Engineer",
    desc: "Looking for an AWS Cloud Engineer responsible for cloud infrastructure design, deployment, and optimization.",
    set: [
      { key: "Location: Pune / Remote" },
      { key: "Experience: 3-6 years" },
      { key: "Skills: AWS EC2, S3, Lambda, IAM, CloudWatch" },
      { key: "Employment Type: Contract" }
    ]
  },
  {
    title: "NetSuite Functional Consultant",
    desc: "We are seeking a NetSuite Consultant to implement, configure, and support NetSuite ERP solutions.",
    set: [
      { key: "Location: Remote" },
      { key: "Experience: 4-7 years" },
      { key: "Skills: NetSuite ERP, Financial Modules, Customization" },
      { key: "Employment Type: Full Time" }
    ]
  },
  {
    title: "DevOps Engineer",
    desc: "Hiring a DevOps Engineer to manage CI/CD pipelines, cloud infrastructure, and deployment automation.",
    set: [
      { key: "Location: Pune / Remote" },
      { key: "Experience: 3-6 years" },
      { key: "Skills: AWS, Docker, Kubernetes, Jenkins" },
      { key: "Employment Type: Contract" }
    ]
  },
   {
    title: "Senior Java Full Stack Developer",
    desc: "Hiring a Full Stack Developer with strong backend expertise and modern frontend exposure.",
    set: [
      { key: "Location: Pune" },
      { key: "Experience: 4-7 years" },
      { key: "Skills: Java, Spring Boot, React, REST APIs, PostgreSQL" },
      { key: "Employment Type: Contract" }
    ]
  },
];



    return (

        <>
           

            <main>
                <HeroSection title="Job Openings" subtitle="Discover Opportunities. Define Your Future." />

                <CareersJobList Jobs={jobData} />


            </main>

        </>
    )
}



export default JobOpenings;