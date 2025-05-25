import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import HeroSection from "@/components/HeroSection/HeroSection";
import Map from "@/components/Map/Map";
import ContactForm from "@/components/ContactForm/Contact";

const Contact = () => {
    return (

        <main>

            <HeroSection title="Contact Us" subtitle="Let’s Connect and Build Something Great Together" />
            <ContactForm />
             <Map />
        </main>
    );
};

export const metadata = {
  title: "Contact - CWW",
  description: "Recruitment Company",
};

export default Contact;