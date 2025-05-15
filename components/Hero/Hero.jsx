import Image from "next/image";
const Hero = () => {
  return (
    <div className="pt-28 bg-white h-screen w-full flex flex-col px-4 py-8 md:flex-row md:items-center md:px-8 lg:px-16">
      {/* Hero Description */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center gap-3 md:items-start  md:gap-6 text-center md:text-left" data-aos="fade-left">
        <h1 className="font-black text-2xl md:text-4xl lg:text-5xl   leading-tight`">
          Unlocking Your Business's Potential Through Talent Acquisition
        </h1>
        <p className="font-medium text-lg text-gray-700 leading-tight md:">
          Our recruitment solutions connect you with the right people—fast, efficient, and tailored to your needs.
        </p>
        <button className="px-6 py-3 bg-green-500 hover:bg-green-600 transition-all rounded-xl text-white font-bold text-lg">
          Enquiry
        </button>
      </div>

      {/* Hero Image */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
        <Image
          src="/image.png"
          width={370}
          height={370}
          alt="hero image"
          className="mx-auto object-cover"
                  />
      </div>
    </div>
  );
};

export default Hero;
