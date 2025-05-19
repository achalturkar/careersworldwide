
import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";

const ContractualRecruitment = () => {


    return (
        <main>
            <HeroSection title="Contractual Recruitment" subtitle="Flexible Staffing Solutions for Every Project" />

            <ServiceDetail img="/hh.jpg" head="Delivering Skilled Talent, Exactly When You Need It"
                desc="Contractual hire is a great option for your temporary and flexible staffing needs. We have got you covered for your project-to-project needs which we understand are hard to fill in due to candidates asking for permanent roles."
                desc2="At Careers Worldwide, we bridge the gap between urgent project demands and the talent market by offering skilled professionals ready to contribute on flexible terms. Our extensive network ensures that you have access to reliable candidates who can seamlessly integrate into your teams, helping you maintain productivity without the long-term commitment." />

               <ContactButton/>

        </main>
    )
}

export default ContractualRecruitment;