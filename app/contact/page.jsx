import ContactClient from "@/components/ContactClient/ContactClient";
import HeroSection from "@/components/HeroSection/HeroSection";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Careers Worldwide for recruitment and staffing services. Call +91 9689003720 or email recruitment@careersworldwide.in. Office in Pune, India.",
  alternates: {
    canonical: "https://www.careersworldwide.in/contact",
  },
};

export default function ContactPage() {
  return (
    <main>
      <HeroSection
        title="Contact Us"
        subtitle="Let’s Connect and Build Something Great Together"
      />
      <ContactClient />
    </main>
  );
}
