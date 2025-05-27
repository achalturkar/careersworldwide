
import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";
import WhyChooseCard from "@/components/WhyChooseCard/WhyChooseCard";
import HandleMove from "@/components/HandleMove/HandleMove";
import Head from "next/head";

const PayrollManagement = () => {

    //    content of why choose us page 
    const content = [
        {
            id: 1,
            head: "End-to-End Payroll Solutions",
            desc: "We manage everything from salary processing and tax deductions to PF, ESIC, and compliance reporting — so you can focus on your core business",

        },
        {
            id: 2,
            head: " 100% Statutory Compliance",
            desc: "Stay worry-free with timely and accurate adherence to all labor laws, government regulations, and tax norms",

        },
        {
            id: 3,
            head: " Timely & Error-Free Processing",
            desc: "Our streamlined systems ensure every employee gets paid on time with zero errors and full transparency",

        },
        {
            id: 4,
            head: " Deep Industry Knowledge",
            desc: "We protect sensitive payroll data with industry-standard encryption and data management practices",

        },
        {
            id: 5,
            head: "Scalable for Teams of Any Size",
            desc: "Whether you're a startup or a large enterprise, our payroll services grow with your organization seamlessly",

        },
        {
            id: 6,
            head: " Dedicated Payroll Experts",
            desc: "A skilled team handles every aspect of your payroll, offering support, insights, and quick resolutions",

        },
    ]


    return (

        <>

            <Head>
                <title>Payroll Management Services | Careers Worldwide</title>
                <meta
                    name="description"
                    content="Careers Worldwide payroll management services handle everything from salary calculations and tax deductions to compliance reporting and timely disbursements. By partnering with us, you can focus on growing your business, while we take care of the complexities of payroll administration with precision and confidentiality"
                />
                <meta
                    name="keywords"
                    content="payroll management, payroll outsourcing, salary processing, tax compliance, payroll services, Careers Worldwide"
                />
                <meta name="author" content="Careers Worldwide" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://careersworldwide.in/services/payrollmanagement" />

                {/* Open Graph (Facebook, LinkedIn) */}
                <meta property="og:title" content="Payroll Management Services | Careers Worldwide" />
                <meta property="og:description" content="Streamline payroll and ensure compliance with expert payroll outsourcing services from Careers Worldwide." />
                <meta property="og:url" content="https://careersworldwide.in/services/payrollmanagement" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://careersworldwide.in/images/pm.webp" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Payroll Management Services | Careers Worldwide" />
                <meta name="twitter:description" content="Careers Worldwide provides professional payroll management services for businesses of all sizes." />
                <meta name="twitter:image" content="https://careersworldwide.in/images/pm.webp" />

                <link rel="icon" href="/favicon.ico" />
            </Head>




            <main>
                {/* hero section define service  */}
                <HeroSection title="Payroll Management" subtitle="Accurate Payroll, Simplified and Stress-Free" />

                {/* describe service  */}
                <ServiceDetail img="/pm.webp" head="Seamless Payroll Solutions Tailored to Your Business."
                    desc="Efficient payroll management is crucial for smooth business operations. At Careers Worldwide, we ensure your employees are paid accurately and on time, while keeping you compliant with all statutory regulations"
                    desc2="Our payroll management services handle everything from salary calculations and tax deductions to compliance reporting and timely disbursements. By partnering with us, you can focus on growing your business, while we take care of the complexities of payroll administration with precision and confidentiality" />

                {/* why choose section  */}
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

        </>
    )
}



export default PayrollManagement;