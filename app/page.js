import Hero from "@/components/Hero/Hero";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import Image from "next/image";
import Card from "@/components/Card/Card";
import { MdPersonSearch } from "react-icons/md";
import { RiContractFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";
import DetailImg from "@/components/DetailImg/DetailImg";
import { MdDoubleArrow } from "react-icons/md";
import ThumbSwiper from "@/components/ThumbSwiper/ThumbSwiper";
import SliderLogo from "@/components/SliderLogo/SliderLogo";




export default function Home() {

  const service = [
    {
      id: 1,
      head: "Head Hunting",
      desc: "We don't deal only in filling senior positions as the head hunter defines itself.We cater to our client needs wherein the position is called hard-to-fill vacancy at any level...",
      link: "/services/headhunting",
      icon: <MdPersonSearch />


    },
    {
      id: 2,
      head: "Contractual Recruitment",
      desc: "Contractual hire is a great option for your temporary and flexible staffing needs.We have got you covered for your project to project needs which we understand are hard to fill in due to candidates asking for permanent roles...",
      link: "/services/recruitmentprocessoutsourcing",
      icon: <RiContractFill />


    },
    {
      id: 3,
      head: "Payroll Management",
      desc: "we offer professional Payroll management services to simplify your payroll processes and minimize administrative burdens...",
      link: "/services/payrollmanagement",
      icon: <FaHandshake />


    },
    {
      id: 4,
      head: "Permanent Recruitment",
      desc: "Dedicated talent is required to build a strong foundation, which is what we have realised over the years from our experience in the recruitment field...",
      link: "/services/permanentrecruitment",
      icon: <PiOfficeChairFill />


    },

  ]

  const planData = [
    {
      title: "Our Mission",
      desc: "Careers Worldwide is dedicated to empowering organizations by providing complete HR, manpower, and training solutions. Our mission is to deliver skilled professionals who align with our clients’ goals through a simple yet effective recruitment process. We aim to support every stage of hiring and training with personalized, professional assistance."
    },
    {
      title: "Our Vision",
      desc: "We strive to be a globally recognized leader in recruitment and HR consultancy by connecting the right talent with the right opportunities. Our vision is to build a future where organizations thrive through strategic talent acquisition and where professionals achieve their career aspirations seamlessly."
    },
    {
      title: "Our Value",
      desc: "At the core of our work is a strong belief in integrity, excellence, innovation, and commitment to client satisfaction. We value building lasting relationships through ethical practices, continuous improvement, and a customer-first approach in every service we deliver."
    },
    {
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
      img: "/logo/jade.svg"
    },
    {
      img: "/logo/ast.svg"
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
      img: "/logo/tc.webp"
    },
   
  ]


  return (
    <main>

      {/* Hero section */}
      <Hero />

      {/* Number Achieve Section */}
      <NumberCounter />

      {/* Services display Section */}
      <section className="flex flex-col p-4 md:p-8">
        <div className="leading-tight">
          <h3 className="text-lg font-semibold text-blue-900">What We Offers</h3>
          <div className="border w-36 my-1"></div>
          <div className="flex justify-start items-center ">
            <h1 className="text-3xl text-orange-400 font-extrabold  ">Our Services </h1>
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

      <SliderLogo logo={logos} />

      {/* Foundation section Section */}
      <section className="flex flex-col p-4 md:p-8 ">
        <div className="leading-tight">
          <h3 className="text-lg font-semibold text-blue-900">What Drive Us</h3>
          <div className="border w-36 my-1"></div>
          <div className="flex justify-start items-center mb-8">
            <h1 className="text-3xl text-orange-400 font-extrabold  ">Our Foundation </h1>
            <MdDoubleArrow className="text-3xl text-orange-400 font-extrabold" />
          </div>
        </div>
        <ThumbSwiper planData={planData} />
      </section>






    </main>
  );
}
