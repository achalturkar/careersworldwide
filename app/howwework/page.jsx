
import ContactButton from "@/components/ContactButton/ContactButton";
import HeroSection from "@/components/HeroSection/HeroSection";
import Steps from "@/components/Steps/Steps";
import Whatsapp from "@/components/Whatsapp/Whatsapp";

const HowWeWork = () => {

    const content = [
        {
            step: 1,
            head: "Understanding Client Needs ",
            subhead: "We begin with a detailed consultation to understand your hiring goals, role requirements, and success criteria to ensure alignment from the start. ",
            desc1: "Define role expectations ",
            desc2: "Set hiring objectives ",
            desc3: "Align on success benchmarks ",
        },
        {
            step: 2,
            head: "Market Research ",
            subhead: "Our team studies market trends, industry demands, and salary benchmarks to identify and attract top talent effectively. ",
            desc1: " Industry analysis ",
            desc2: "Talent pool mapping ",
            desc3: "Database and insights review ",
        },
        {
            step: 3,
            head: "Candidate Identification ",
            subhead: "We apply advanced sourcing strategies including social media, job boards, and referrals to find the right candidates. ",
            desc1: "Social and professional platforms ",
            desc2: "Internal and external databases ",
            desc3: "Referral networks ",
        },
        {
            step: 4,
            head:"Screening & Evaluation",
            subhead: "Every candidate is carefully screened using competency-based interviews and behavioral assessments. ",
            desc1: "Resume shortlisting ",
            desc2: "Initial assessments ",
            desc3: "Personality & skill evaluation ",
        },
        {
            step: 5,
            head: "Shortlisting & Presentation ",
            subhead: "We share a shortlist of the most qualified candidates, including detailed profiles and assessment summaries. ",
            desc1: "Candidate comparison reports ",
            desc2: "Strength and suitability analysis ",
            desc3: "Resume and assessment brief ",
        },
        {
            step: 6,
            head: "Client Interviews & Feedback",
            subhead: "We arrange interviews, ensure coordination, and collect feedback from both candidates and clients for transparency. ",
            desc1: "Interview scheduling ",
            desc2: " Feedback sharing ",
            desc3: "Interview outcome tracking",
        },
        {
            step: 7,
            head: "Reference Checks",
            subhead: "Before final selection, we verify each candidate's background, work ethics, and achievements through reference checks. ",
            desc1: "Work history validation ",
            desc2: " Peer and supervisor checks",
            desc3: "Credential confirmation",
        },
        {
            step: 8,
            head: "Offer & Negotiation",
            subhead: "We facilitate job offers and manage negotiations to create a mutually beneficial agreement. ",
            desc1: "Salary and role discussions ",
            desc2: "Offer letter guidance",
            desc3: "Acceptance follow-through",
        },
        {
            step: 9,
            head: "Onboarding & Follow-up",
            subhead: "We support smooth onboarding and continue to assist both clients and candidates post-placement.",
            desc1: "Onboarding coordination",
            desc2: "Day-one support ",
            desc3: " Periodic check-ins",
        },
        {
            step: 10,
            head: "Continuous Improvement",
            subhead: "We gather insights and feedback to improve our process and deliver even better results in future engagements. ",
            desc1: " Client & candidate surveys ",
            desc2: " Quality improvement actions ",
            desc3: "Process optimization",
        },
    ]


    return (
        <main>
            <HeroSection title="How We Work" subtitle="A transparent, structured, and proven approach to finding the right talent" />


            <Steps Content={content} />


            <ContactButton />
   
          <Whatsapp />

        </main>
    )
}

export default HowWeWork;