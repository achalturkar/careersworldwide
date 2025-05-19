import ContactButton from "@/components/ContactButton/ContactButton";
import HandleMove from "@/components/HandleMove/HandleMove";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";

const HeadHunting = () => {


    return (
        <main>

            <HeroSection title="Head Huntings" subtitle="We don’t just fill positions — we find leaders who drive success. " />

            <ServiceDetail img="/hh.jpg" head="Specialists in Finding Exceptional People"
                desc="We don't deal only in filling senior positions as the head hunter defines itself.We cater to our client needs wherein the position is called 'hard-to-fill vacancy' at any level.Capturing the
             attention of the high-calibre candidates one requires a smarter way of hunting. That's where our headhunting comes into play."
                desc2="At Careers Worldwide, our approach to recruitment focuses on precision and personalization. We specialize in connecting companies with top-tier talent that’s not actively seeking job opportunities — the kind of professionals who are already making an impact but are open 
               to the right move. We engage these passive candidates through strategic research, direct communication, and a deep understanding of your business needs."
            />

           <ContactButton />

        </main>
    )
}

export default HeadHunting;