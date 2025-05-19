import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import HandleMove from "@/components/HandleMove/HandleMove";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";

const About = () => {

  //   content for why choose us section 

    const content = [
        {
            id: 1,
            head: " Specialized Search for Hard-to-Fill Roles",
            desc: "We focus on hard-to-fill vacancies across all levels — not just senior executives — ensuring you find talent where others can't. ",

        },
        {
            id: 2,
            head: " Access to Passive Candidates",
            desc: "Our network and research tools help reach out to top-tier professionals who aren't actively job hunting but are open to the right opportunity. ",

        },
        {
            id: 3,
            head: "Discreet and Confidential Hiring Process",
            desc: "For sensitive leadership or transition roles, we ensure complete confidentiality and professionalism throughout the hiring journey.",

        },
        {
            id: 4,
            head: " Deep Industry Knowledge",
            desc: "Our recruiters understand industry-specific challenges and know where to find talent that fits both the job and your company culture. ",

        },
        {
            id: 5,
            head: "Customized Head Hunting Strategy",
            desc: "Each search is tailored with market mapping, competitor analysis, and a curated engagement strategy — so you don’t waste time on irrelevant profiles. ",

        },
        {
            id: 6,
            head: "Faster Turnaround Times",
            desc: "We accelerate the executive hiring process while ensuring every candidate is thoroughly vetted and aligned with your goals. ",

        },
    ]

  return (



    <main className="mt-26">

      <HeroSection title="About Us" img="/abc.jpg" />


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