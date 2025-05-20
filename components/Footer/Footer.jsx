import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-slate-200 px-6 py-16"> 
      <div className="max-w-7xl mx-auto flex flex-col gap-12 lg:grid lg:grid-cols-4 mb-10"> 
        {/* Logo and Subscription */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6"> 
          <Image src="/cww.svg" alt="Careers Worldwide Logo" width={160} height={160} />
          <div>
            <h2 className="font-bold text-lg flex items-center gap-2 text-white mb-2"> 
              📩 Stay updated!
            </h2>
            <p className="text-sm mb-3 text-slate-300">Get the latest job openings and hiring trends in your inbox.</p> 
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md bg-slate-700 border border-slate-600 text-slate-200 placeholder-slate-400 w-48 focus:ring-orange-500 focus:border-orange-500" 
              />
              <button className="bg-orange-400 text-white px-4 py-2 rounded-r-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50"> 
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Resources */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 text-white">Resources</h3> 
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-blue-300 text-slate-300">Home</Link></li> 
            <li><Link href="/careers" className="hover:text-blue-300 text-slate-300">Careers</Link></li>
            <li><Link href="/jobopening" className="hover:text-blue-300 text-slate-300">Job Openings</Link></li>
            <li><Link href="/contact" className="hover:text-blue-300 text-slate-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* About */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 text-white">About</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-300 text-slate-300">About Us</Link></li>
            <li><Link href="/howwework" className="hover:text-blue-300 text-slate-300">How We Work</Link></li>
            <li><Link href="/expertise" className="hover:text-blue-300 text-slate-300">Expertise</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="text-center lg:text-left">
          <h3 className="text-lg font-bold mb-4 text-white">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/about" className="hover:text-blue-300 text-slate-300">Head Hunting</Link></li>
            <li><Link href="/howwework" className="hover:text-blue-300 text-slate-300">Contractual Recruitment</Link></li>
            <li><Link href="/How We Work" className="hover:text-blue-300 text-slate-300">Payroll Management</Link></li>
            <li><Link href="/How We Work" className="hover:text-blue-300 text-slate-300">Permanent Recruitment</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-700"> 
        <div className="flex gap-5 text-2xl text-slate-300"> 
          <Link href="#" className="hover:text-blue-300"><FaInstagram /></Link> 
          <Link href="#" className="hover:text-blue-300"><FaFacebook /></Link>
          <Link href="#" className="hover:text-blue-300"><FaLinkedin /></Link>
          <Link href="#" className="hover:text-blue-300"><FaWhatsapp /></Link>
        </div>
        <p className="text-sm text-center sm:text-left text-slate-400"> 
          © 2025 Careers Worldwide. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;