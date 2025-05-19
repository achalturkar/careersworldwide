
import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import HandleMove from "@/components/HandleMove/HandleMove";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";


const ContractualRecruitment = () => {


    //   content for why choose us section 
    const content = [
        {
            id: 1,
            head: " Access to Ready Talent Pool",
            desc: "We maintain an active database of pre-vetted professionals ready to step in at short notice, saving you time and effort ",

        },
        {
            id: 2,
            head: "Quick Turnaround Time",
            desc: "Our streamlined hiring process ensures you get the right candidates exactly when you need them — without delays ",

        },
        {
            id: 3,
            head: "Flexible Engagement Models",
            desc: "Whether it’s short-term, project-based, or seasonal work, we tailor contracts to suit your business needs and budget",

        },
        {
            id: 4,
            head: "Transparent & Hassle-Free Contracts",
            desc: "We manage documentation, contracts, onboarding, and exit processes — all legally compliant and audit-ready",

        },
        {
            id: 5,
            head: "Cost-Effective Staffing Solutions",
            desc: "Reduce long-term hiring costs with our flexible workforce model that delivers high value without overhead",

        },
        {
            id: 6,
            head: "Industry-Specific Expertise",
            desc: "From IT to non-IT roles, we understand the nuances of contractual hiring across sectors and customize our approach accordingly",

        },
    ]


    return (
        <main>

            {/* HeroSection for define service Heading */}
            <HeroSection title="Contractual Recruitment" subtitle="Flexible Staffing Solutions for Every Project" />

            {/* describe service */}
            <ServiceDetail img="/hh.jpg" head="Delivering Skilled Talent, Exactly When You Need It"
                desc="Contractual hire is a great option for your temporary and flexible staffing needs. We have got you covered for your project-to-project needs which we understand are hard to fill in due to candidates asking for permanent roles."
                desc2="At Careers Worldwide, we bridge the gap between urgent project demands and the talent market by offering skilled professionals ready to contribute on flexible terms. Our extensive network ensures that you have access to reliable candidates who can seamlessly integrate into your teams, helping you maintain productivity without the long-term commitment." />

            {/* why choose this service  */}
            <section className="flex flex-col px-2 md:px-20 justify-start items-start gap-3 md:gap-4 my-4 md:my-20">
                <div className=" flext flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold text-blue-950 ">Why Choose Us?</h1>
                    <HandleMove className="items-center" />
                </div>

                <div className="md:px-8">
                    <WhyChooseCard Choose={content} />
                </div>
            </section>

            {/* contact button  */}
            <ContactButton />

        </main>
    )
}

export default ContractualRecruitment;