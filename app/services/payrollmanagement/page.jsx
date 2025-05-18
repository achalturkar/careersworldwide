
import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";


const PayrollManagement = () => {


    return (
        <>
            <HeroSection title="Payroll Management" subtitle="Accurate Payroll, Simplified and Stress-Free." />
            <ServiceDetail img="/hh.jpg" head="Seamless Payroll Solutions Tailored to Your Business."
            desc="Efficient payroll management is crucial for smooth business operations. At Careers Worldwide, we ensure your employees are paid accurately and on time, while keeping you compliant with all statutory regulations"
            desc2="Our payroll management services handle everything from salary calculations and tax deductions to compliance reporting and timely disbursements. By partnering with us, you can focus on growing your business, while we take care of the complexities of payroll administration with precision and confidentiality"/>

             <ContactButton/>
        
        </>
    )
}

export default PayrollManagement;