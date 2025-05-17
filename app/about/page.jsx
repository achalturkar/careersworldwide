import HeroSection from "@/components/HeroSection/HeroSection";


const About = () => {

 

  return (



    <div className="mt-26">

      <HeroSection title="About Us" img="/abc.jpg" />


      
      <div className="h-full bg-green-200">
        <h1 className="text-5xl text-center ">About</h1>

      </div>

    </div>

  )


}

export const metadata = {
  title: "About Us- CWW - Pune",
  description: "Recruitment Company",
};

export default About;