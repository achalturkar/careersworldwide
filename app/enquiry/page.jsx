import ContactForm from "@/components/ContactForm/Contact";
import HeroSection from "@/components/HeroSection/HeroSection";

const Enquiry = () =>{

    return(
        <>
        <HeroSection title="Enquiry"/>
        <ContactForm/>
        
        </>
    )
}

export const metadata = {
  title: "Enquiry - CWW",
  description: "Recruitment Company",
};

export default Enquiry;