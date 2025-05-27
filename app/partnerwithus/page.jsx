import PartnerContactForm from "@/components/PartnerContactForm/PartnerContactForm";
import Head from "next/head";

const  PartnerWithUs= () =>{



    return(
        <>
              <Head>
        <title>Partner With Us | Careers Worldwide – Hire Top Talent</title>
        <meta
          name="description"
          content="Partner with Careers Worldwide to hire skilled IT professionals. Fill out the form and start building your dream team today."
        />
        <meta
          name="keywords"
          content="partner with recruitment agency, hire employees, staffing solutions, manpower outsourcing, Careers Worldwide partnership, payroll, permanent"
        />
        <meta name="author" content="Careers Worldwide" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://careersworldwide.in/partnerwithus" />

        {/* Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Partner With Us | Careers Worldwide – Hire Top Talent" />
        <meta property="og:description" content="Connect with Careers Worldwide to fulfill your staffing, outsourcing, and recruitment needs. Join as a partner today." />
        <meta property="og:url" content="https://careersworldwide.in/partnerwithus" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Partner With Us | Careers Worldwide" />
        <meta name="twitter:description" content="Recruit with Careers Worldwide. Fill out the partner form and access top-tier talent for your business." />

        <link rel="icon" href="/favicon.ico" />
      </Head>




        <PartnerContactForm/>
        
        </>
    )
}

export default PartnerWithUs;