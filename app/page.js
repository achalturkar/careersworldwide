import Hero from "@/components/Hero/Hero";
import NumberCounter from "@/components/NumberCounter/NumberCounter";
import Image from "next/image";
import Card from "@/components/Card/Card";
import { MdPersonSearch } from "react-icons/md";
import { RiContractFill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
import { PiOfficeChairFill } from "react-icons/pi";




export default function Home() {

  const service = [
    {
      id: 1,
      head: "Head Hunting",
      desc: "We don't deal only in filling senior positions as the head hunter defines itself.We cater to our client needs wherein the position is called hard-to-fill vacancy at any level",
      link: "/services/headhunting",
      img: <MdPersonSearch />


    },
    {
      id: 2,
      head: "Contractual Recruitment",
      desc: "Contractual hire is a great option for your temporary and flexible staffing needs.We have got you covered for your project to project needs which we understand are hard to fill in due to candidates asking for permanent roles.",
      link: "/services/recruitmentprocessoutsourcing",
      img: <RiContractFill />


    },
    {
      id: 3,
      head: "Payroll Management",
      desc: "we offer professional Payroll management services to simplify your payroll processes and minimize administrative burdens.",
      link: "/services/payrollmanagement",
      img: <FaHandshake />


    },
    {
      id: 4,
      head: "Permanent Recruitment",
      desc: "Dedicated talent is required to build a strong foundation, which is what we have realised over the years from our experience in the recruitment field",
      link: "/services/permanentrecruitment",
      img: <PiOfficeChairFill />


    },
    {
      id: 5,
      head: "Recruitment Process Outsourcing",
      desc: "Charter your HR department with cost effective, flexible and customisable RPO services to sure perfection in hiring the right talent in any time frame.",
      link: "/services/recruitmentprocessoutsourcing",
      img: <FaFileCode />


    },
  ]


  return (
    <main>

      <Hero />

      <NumberCounter />


      <section className="flex flex-col p-4">
        <div className="leading-tight">
          <h3 className="text-lg">What We Offers</h3>
          <h1 className="text-3xl text-orange-400 font-extrabold ">Our Services</h1>
        </div>
        <Card Detail={service} />
      </section>





    </main>
  );
}
