import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import HandleMove from "@/components/HandleMove/HandleMove";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import Image from "next/image";

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
  ]

  return (



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


      <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 p-4 md:p-20 md:mx-44">

        <div className="max-w-xl text-gray-800 text-md font-semibold   gap-2">

          <h1 className="mb-2 text-3xl font-extrabold text-blue-950">Your Needs</h1>
          <HandleMove />

          <p className="mb-2">
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

        <div className="w-1/2">

          <Image src="/exp.webp" alt="needs" width={300} height={250} className="rounded-xl" />



        </div>



      </section>

      {/* why choose this service  */}
      <section className="flex flex-col px-2 md:px-20 justify-start items-start gap-3 md:gap-4 my-4 md:my-20">

        <div className=" flext flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-blue-950 ">Why Choose Us?</h1>
          <HandleMove className="items-center" />
        </div>

        <div>
          <WhyChooseCard Choose={content} />
        </div>
      </section>


      <ContactButton />

    </main>

  )


}

export const metadata = {
  title: "About Us- CWW - Pune",
  description: "Recruitment Company",
};

export default About;