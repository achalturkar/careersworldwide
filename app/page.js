import Hero from "@/components/Hero/Hero";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import Image from "next/image";
import Card from "@/components/Card/Card";
import { FaUserTie, FaHandshake, FaMoneyCheckAlt, FaUserCheck } from "react-icons/fa";
import { GiArcheryTarget, GiMountainRoad } from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import DetailImg from "@/components/DetailImg/DetailImg";
import { MdDoubleArrow } from "react-icons/md";
import ThumbSwiper from "@/components/ThumbSwiper/ThumbSwiper";
import SliderLogo from "@/components/SliderLogo/SliderLogo";
import ContactButton from "@/components/ContactButton/ContactButton";
import { FaLightbulb } from "react-icons/fa";
import ServiceDetail from "@/components/ServiceDetail/ServiceDetail";


export const metadata = {
  title: "Careers Worldwid | Recruitment & Staffing Solutions",
  description:
    "Careers Worldwide is a global recruitment and HR consultancy with offices in India and the UK, serving clients since 2010. We specialize in permanent hiring, headhunting, contractual recruitment, and payroll management.",
  alternates: {
    canonical: "https://www.careersworldwide.in/",
  },
};



export default function Home() {


  const service = [
    {
      id: 1,
      head: "Head Hunting",
      desc: "We don't deal only in filling senior positions as the head hunter defines itself.We cater to our client needs wherein the position is called hard-to-fill vacancy at any level...",
      link: "/services/headhunting",
      icon: <FaUserTie />,


    },
    {
      id: 2,
      head: "Contractual Recruitment",
      desc: "Contractual hire is a great option for your temporary and flexible staffing needs.We have got you covered for your project to project needs which we understand are hard to fill in due to candidates asking for permanent roles...",
      link: "/services/recruitmentprocessoutsourcing",
      icon: <FaHandshake />,


    },
    {
      id: 3,
      head: "Payroll Management",
      desc: "we offer professional Payroll management services to simplify your payroll processes and minimize administrative burdens...",
      link: "/services/payrollmanagement",
      icon: <FaMoneyCheckAlt />,


    },
    {
      id: 4,
      head: "Permanent Recruitment",
      desc: "Dedicated talent is required to build a strong foundation, which is what we have realised over the years from our experience in the recruitment field...",
      link: "/services/permanentrecruitment",
      icon: <FaUserCheck />,


    },

  ]

  const planData = [
    {
      icon: <GiMountainRoad />,
      title: "Our Mission",
      desc: "Careers Worldwide is dedicated to empowering organizations by providing complete HR, manpower, and training solutions. Our mission is to deliver skilled professionals who align with our clients’ goals through a simple yet effective recruitment process. We aim to support every stage of hiring and training with personalized, professional assistance."
    },
    {
      icon: <FaLightbulb />,
      title: "Our Vision",
      desc: "We strive to be a globally recognized leader in recruitment and HR consultancy by connecting the right talent with the right opportunities. Our vision is to build a future where organizations thrive through strategic talent acquisition and where professionals achieve their career aspirations seamlessly."
    },
    {
      icon: <IoDiamond />,
      title: "Our Value",
      desc: "At the core of our work is a strong belief in integrity, excellence, innovation, and commitment to client satisfaction. We value building lasting relationships through ethical practices, continuous improvement, and a customer-first approach in every service we deliver."
    },
    {
      icon: <GiArcheryTarget />,
      title: "Our Goal",
      desc: "Our goal is to help companies grow with the right talent by offering technology-driven recruitment and consultancy services. We aim to expand our reach, strengthen our candidate database, and continue placing top professionals in key roles across industries and regions."
    },

  ]

  const logos = [
    {
      img: "/logo/dlogo.png"
    },
    {
      img: "/logo/logo.png"
    },
    {
      img: "/logo/globant.svg"
    },
    {
      img: "/logo/jdg.jpg"
    },
    {
      img: "/logo/es.png"
    },
    {
      img: "/logo/ts.png"
    },
    {
      img: "/logo/ll.png"
    },
    {
      img: "/logo/pp.png"
    },
    {
      img: "/logo/fc.svg"
    },
    {
      img: "/logo/v.svg"
    },
    {
      img: "/logo/tc.webp"
    },
    {
      img: "/logo/logos.png"
    },

  ]


  return (

    <>

      <main>


        {/* <Carousal Hero={hero}/> */}

        {/* Hero section */}
        <Hero />

        {/* Number Achieve Section */}
        <NumberCounter />


        {/* about company section  */}
        <section>
          <ServiceDetail img="/hh.webp" head="Who We Are?"
            desc="Careers Worldwide is a global recruitment and HR consultancy with offices in India and the UK, serving clients since 2010. We specialize in permanent hiring, headhunting, contractual recruitment, and payroll management. Trusted by over 60+ enterprise clients, our technology-backed approach helps businesses scale with the right people"
            desc2="We combine global reach with local expertise, offering end-to-end staffing solutions tailored to each client’s needs. Whether you're hiring for a niche role or scaling rapidly, Careers Worldwide delivers talent that fits"


          />
        </section>

        {/* Services display Section */}
        <section className="flex flex-col p-4 md:p-8">
          <div className="leading-tight" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-blue-900" >What We Offer</h3>
            <div className="border w-36 my-1"></div>
            <div className="flex justify-start items-center ">
              <h2 className="text-3xl text-orange-400 font-extrabold  ">Our Services </h2>
              <MdDoubleArrow className="text-3xl text-orange-400 font-extrabold" />
            </div>
          </div>
          <Card Detail={service} />
        </section>

        {/* Detail Expertise  Section */}
        <section className="bg-[url('/polygon.svg')] bg-cover bg-no-repeat">
          <DetailImg />
        </section>

        {/* logo slider */}

        <section className="flex flex-col p-4 md:p-8 ">
          <div className="leading-tight" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-blue-900">Trusted By the Best</h3>
            <div className="border w-46 my-1"></div>
            <div className="flex justify-start items-center ">
              <h2 className="text-3xl text-orange-400 font-extrabold  ">Our Clients </h2>
              <MdDoubleArrow className="text-3xl text-orange-400 font-extrabold" />
            </div>
          </div>
          <SliderLogo logo={logos} />
        </section>

        {/* Foundation section Section */}
        <section className="flex flex-col p-4 md:p-8 ">
          <div className="leading-tight" data-aos="fade-right">
            <h3 className="text-lg font-semibold text-blue-900">What Drive Us</h3>
            <div className="border w-36 my-1"></div>
            <div className="flex justify-start items-center mb-8">
              <h2 className="text-3xl text-orange-400 font-extrabold  ">Our Foundation </h2>
              <MdDoubleArrow className="text-3xl text-orange-400 font-extrabold" />
            </div>
          </div>
          <ThumbSwiper planData={planData} />
        </section>

        <ContactButton />

      </main>

    </>

  );


}


