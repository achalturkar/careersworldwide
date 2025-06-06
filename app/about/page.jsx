import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import HandleMove from "@/components/HandleMove/HandleMove";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import Image from "next/image";
import ImageComponent from "@/components/ImageComponent/ImageComponent";
import { FaLinkedin } from "react-icons/fa";
import Head from "next/head";

const About = () => {

  //   content for why choose us section 

  const content = [
    {
      id: 1,
      head: "15+ Years of Proven Success",
      desc: "Since 2010, we’ve successfully delivered recruitment, training, and HR consulting services to 40+ enterprise clients, building a reputation for reliability and results ",

    },
    {
      id: 2,
      head: "Global Presence with Local Expertise",
      desc: "With offices in both India and the UK, we offer international reach while understanding regional hiring nuances, ensuring the perfect match between talent and opportunity",

    },
    {
      id: 3,
      head: "Technology-Driven Hiring Solutions",
      desc: "Our tech-enabled screening and vetting systems ensure precise shortlisting and faster turnaround times without compromising on quality",

    },
    {
      id: 4,
      head: "Specialized Talent Acquisition Across Domains",
      desc: "From Salesforce and DevOps to CAD/PLM and UI/UX, our domain-specific recruiters understand complex roles and deliver niche talent quickly",

    },
    {
      id: 5,
      head: "1200+ Qualified Candidates in Active Database",
      desc: "We maintain a dynamic database of thoroughly screened professionals across multiple skill areas, ready to be placed on demand",

    },
    {
      id: 6,
      head: "Personalized & Ethical Approach",
      desc: "We believe in building long-term partnerships through transparent communication, dedicated support, and tailored recruitment strategies that prioritize client needs",

    },
  ];


  const profile = [

    {
      img: "/ii.jpeg",
      name: "Prasanna Yadav",
      designation: "Founder",
      linkedin: "https://www.linkedin.com/in/prasanna-yadav-16723b72/"
    }
  ]



  return (


    <>

      <Head>
        <title>About Us | Careers Worldwide - Global Recruitment Experts</title>
        <meta
          name="description"
          content="Careers Worldwide is complete Human Resources, Manpower & Training solution provider with offices in India and UK. We have established our operations in year 2010 and since have been working with many esteemed organizations and brands as successful recruitment partners. Our professional team is offering every possible assistance at every stage of operations in recruitment, training, and consultancy."
        />
        <meta
          name="keywords"
          content="about Careers Worldwide, recruitment company, global hiring, staffing agency, IT recruitment, contractual, freelancing, permanent job, HR consultancy"
        />
        <meta name="author" content="Careers Worldwide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://careersworldwide.in/about" />

        {/* Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:title" content="About Us | Careers Worldwide - Global Recruitment Experts" />
        <meta property="og:description" content="Careers Worldwide is complete Human Resources, Manpower & Training solution provider with offices in India and UK. We have established our operations in year 2010 and since have been working with many esteemed organizations and brands as successful recruitment partners." />
        <meta property="og:url" content="https://careersworldwide.in/about" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://careersworldwide.in/images/abouts.webp" />
        <meta property="og:site_name" content="Careers Worldwide" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | Careers Worldwide - Global Recruitment Experts" />
        <meta name="twitter:description" content="Get to know Careers Worldwide, a recruitment agency helping professionals and businesses grow across continents." />
        <meta name="twitter:image" content="https://careersworldwide.in/images/about-twitter.jpg" />

        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main className="mt-26">

        <HeroSection title="About Us" subtitle="Committed to excellence in recruitment, training, and consultancy" img="/abc.jpg" />



        {/* about company section  */}
        <section>
          <ServiceDetail img="/abouts.webp" head="About Careers Worldwide"
            desc="Careers Worldwide is complete Human Resources, Manpower & Training
solution provider with offices in India and UK. We have established our operations in
year 2010 and since have been working with many esteemed organizations and brands
as successful recruitment partners. Our professional team is offering every possible
assistance at every stage of operations in recruitment, training, and consultancy."
            desc2="We have designed simple and effective screening process which will help you with the
most suitable and quality professionals with prerequisite skills you are looking for. Our
comprehensive database has qualified applicants which enable you to recruit the best.
"
          />
        </section>


        <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 p-4 md:p-12 max-w-6xl mx-auto">

          <div className="w-full md:w-1/2 text-gray-800 text-md font-semibold space-y-4 md:text-left">
            <h1 className="text-3xl font-extrabold text-blue-950 text-start">Your Needs</h1>
            <HandleMove />

            <p>
              Whether your company is transitioning and needs a new C-level executive or is adding a
              new department and want a manager with niche industry experience, Careers Worldwide
              offers consulting Services, Permanent Hiring, Headhunting and a Contractual Hiring that
              are coupled with our technology-assisted vetting system that helps us find the right
              talent every time.
            </p>

            <p>
              More than 60+ enterprise customers trust Careers Worldwide to find and hire the right
              talent on their behalf. We have an active database of over 1200 qualified candidates in
              Information Technology Field of expertise and we are constantly placing our top
              candidates in managerial, c-level, and board level positions. In addition to our team of
              analysts dedicated to carefully select and assess each individual, our research team
              stays on top of emerging developments in the recruiting world to make sure that we can
              offer compelling hiring solutions paired with the best technology and customer service.
            </p>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/exp.webp"
              alt="needs"
              width={300}
              height={250}
              className="rounded-xl object-contain"
            />
          </div>

        </section>




        <section className="flex flex-col px-2 md:px-20  gap-3 md:gap-4 my-4 md:my-20">

          <div className=" flext flex-col justify-center items-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold text-blue-950 ">Meet Our Team</h1>
            <HandleMove className="items-center" />
          </div>

          <div>
            <ImageComponent Profile={profile} />
          </div>
        </section>




        {/* why choose this service  */}
        <section className="flex flex-col px-2 md:px-20 justify-start items-start gap-3 md:gap-4 my-4 md:my-16">

          <div className=" flext flex-col justify-center items-center" data-aos="fade-right">
            <h1 className="text-3xl font-bold text-blue-950 ">Why Choose Us?</h1>
            <HandleMove className="items-center" />
          </div>

          <div>
            <WhyChooseCard Choose={content} />
          </div>
        </section>


        <ContactButton />

      </main>

    </>


  )


}


export default About;