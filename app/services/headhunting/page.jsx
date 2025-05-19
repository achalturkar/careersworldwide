import ContactButton from "@/components/ContactButton/ContactButton";
import HandleMove from "@/components/HandleMove/HandleMove";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";


const HeadHunting = () => {

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
        <main>

            {/* HeroSection for define service Heading */}
            <HeroSection title="Head Hunting" subtitle="We don’t just fill positions — we find leaders who drive success" />

            {/* describe service */}
            <ServiceDetail img="/hh.jpg" head="Specialists in Finding Exceptional People"
                desc="We don't deal only in filling senior positions as the head hunter defines itself.We cater to our client needs wherein the position is called 'hard-to-fill vacancy' at any level.Capturing the
             attention of the high-calibre candidates one requires a smarter way of hunting. That's where our headhunting comes into play."
                desc2="At Careers Worldwide, our approach to recruitment focuses on precision and personalization. We specialize in connecting companies with top-tier talent that’s not actively seeking job opportunities — the kind of professionals who are already making an impact but are open 
               to the right move. We engage these passive candidates through strategic research, direct communication, and a deep understanding of your business needs."
            />

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

            {/* contact button  */}
            <ContactButton />

        </main>
    )
}

export default HeadHunting;