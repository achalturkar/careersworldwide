import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
 
  return (
    <footer className="relative bg-[#000D28] text-blue-950 px-6 py-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/md.png"
          alt="Background"
          fill
          className="object-cover opacity-90 "
        />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col gap-12 mb-10">
        {/* Logo and Subscription */}
        <div className="flex flex-col md:flex-row justify-around items-center gap-6">
          <div className="flex flex-col items-center gap-2 w-100 px-2" data-aos="fade-right">
            <Link href="/">
              <Image src="/cww.svg" alt="Careers Worldwide Logo" width={160} height={160} className="" />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed text-center">
              Careers Worldwide is a leading recruitment and staffing firm
              offering tailored hiring solutions across IT
            </p>
          </div>
          <div data-aos="fade-left">
            <h2 className="font-bold text-lg flex items-center gap-2 text-white mb-2">
              📩 Stay updated!
            </h2>
            <p className="text-sm mb-3 text-slate-300">Get the latest job openings and hiring trends in your inbox.</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md bg-slate-800 border border-slate-600 text-slate-200 placeholder-slate-400 w-48 focus:ring-orange-500 focus:border-orange-500"
              />
              <button className="bg-orange-400 text-white px-4 py-2 rounded-r-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col md:flex-row justify-around text-slate-200">
          {/* Resources */}
          <div className="mb-6 md:mb-2" data-aos="fade-up">
            <h3 className="text-lg font-bold mb-2 text-white">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-orange-400">Home</Link></li>
              <li><Link href="/about" className="hover:text-orange-400">About Us</Link></li>
              <li><Link href="/howwework" className="hover:text-orange-400">How We Work</Link></li>
              <li><Link href="/expertise" className="hover:text-orange-400">Expertise</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="mb-6 md:mb-2" data-aos="fade-up">
            <h3 className="text-lg font-bold mb-2 text-white">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/headhunting" className="hover:text-orange-400">Head Hunting</Link></li>
              <li><Link href="/services/contractualrecruitment" className="hover:text-orange-400">Contractual Recruitment</Link></li>
              <li><Link href="/services/payrollmanagement" className="hover:text-orange-400">Payroll Management</Link></li>
              <li><Link href="/services/permanentrecruitment" className="hover:text-orange-400">Permanent Recruitment</Link></li>
            </ul>
          </div>

          {/* Careers */}
          <div className="mb-6 md:mb-2" data-aos="fade-up">
            <h3 className="text-lg font-bold mb-2 text-white">Careers</h3>
            <ul className="space-y-2">
              <li><Link href="/careers" className="hover:text-orange-400">Careers</Link></li>
              <li><Link href="/jobopening" className="hover:text-orange-400">Job Openings</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="mb-6 md:mb-2" data-aos="fade-up">
            <h3 className="text-lg font-bold mb-2 text-white">Contact</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="hover:text-orange-400">Contact us</Link></li>
              <li><Link href="/partnerwithus" className="hover:text-orange-400">Partner With Us</Link></li>
            </ul>
          </div>
        </div>
      </div>

      

      {/* Social Media & Copyright */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-700">
        <div className="flex gap-5 text-2xl text-slate-300">
          <Link href="https://www.linkedin.com/company/careersworldwide/" className="hover:text-blue-400"><FaLinkedin /></Link>
          <Link href="#" className="hover:text-pink-400"><FaInstagram /></Link>
          <Link href="#" className="hover:text-blue-400"><FaFacebook /></Link>
          <Link href="#" className="hover:text-green-400"><FaWhatsapp /></Link>
        </div>
        <p className="text-sm text-center sm:text-left text-slate-400">
          © {new Date().getFullYear()} Careers Worldwide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
