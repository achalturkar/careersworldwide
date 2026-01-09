import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      className="
        bg-orange-50
        px-4 md:px-10 lg:px-20
        pt-32 md:pt-24
        pb-16
        md:min-h-[95vh]
        flex items-center
      "
    >
      <div className="w-full flex flex-col-reverse md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div
          className="w-full md:w-1/2 text-center md:text-left max-w-xl mx-auto md:mx-0"
          data-aos="fade-up"
        >
          <h1 className="text-3xl md:text-4xl lg:text-3xl font-extrabold text-blue-950 leading-tight">
            Unlocking Your Business Potential
            <span className="block text-orange-400">
              Through Talent Acquisition
            </span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            We deliver end-to-end recruitment solutions that connect businesses
            with the right talent—faster, smarter, and aligned with growth.
          </p>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <Link href="/partnerwithus">
              <button className="px-8 py-3 bg-blue-900 hover:bg-blue-950 transition rounded-full text-white font-semibold text-lg shadow-md">
                Partner With Us
              </button>
            </Link>

            <Link href="/jobopening/">
              <span className="text-blue-900 font-semibold hover:underline cursor-pointer">
                View Open Positions →
              </span>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="w-full md:w-1/2 flex justify-center items-center"
          data-aos="fade-up"
        >
          <div className="relative w-[260px] h-[260px] sm:w-[300px] sm:h-[300px] md:w-[380px] md:h-[380px] lg:w-[420px] lg:h-[420px]">
            <Image
              src="/hero.png"
              alt="Recruitment and talent acquisition solutions"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
