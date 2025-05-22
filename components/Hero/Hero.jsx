import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="min-h-[92vh] md:min-h-[70vh] lg:min-h-[92vh] max-h-[92vh] pt-28 bg-white w-full flex flex-col px-4 py-8  md:gap-2 md:flex-row md:items-center md:px-8 lg:px-16 lg-py-20">
      {/* Hero Description */}
      <div
        className="w-full md:w-1/2 flex flex-col justify-center items-center gap-3 md:items-start md:gap-6 text-center md:text-left"
        data-aos="fade-up"
      >
        <h1 className="font-black text-2xl md:text-4xl lg:text-5xl leading-tight">
          Unlocking Your Business's Potential Through Talent Acquisition
        </h1>
        <p className="font-medium text-lg text-gray-700 leading-tight">
          Our recruitment solutions connect you with the right people—fast, efficient, and tailored to your needs.
        </p>
        <Link href="/partnerwithus">
          <button className="px-6 py-3 bg-blue-900 hover:bg-blue-950 transition-all rounded-xl text-white font-bold text-lg">
            Partner With Us
          </button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center"  data-aos="fade-up">
        <div className="relative w-[340px] h-[340px] sm:w-[350px] sm:h-[350px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
          <Image
            src="/hero.png"
            alt="hero image"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
