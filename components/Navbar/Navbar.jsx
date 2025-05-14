'use client';

import { useState } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="fixed top-0  w-full z-50 font-poppins bg-gradient-to-r from-blue-900 to-orange-500">
      {/* Top contact bar */}
      <div className="text-white flex justify-end gap-6 px-4 py-1 text-sm">
        <div className="flex items-center gap-2">
          <IoCall className="size-4" />
          <p>9850041780</p>
        </div>
        <div className="flex items-center gap-2">
          <MdEmail className="size-4" />
          <p>recruitment@careersworldwide.in</p>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white text-black flex items-center justify-between px-2 md:justify-around py-2  ">
        {/* Logo */}
        <Link href="/">
          <Image src="/cww.svg" width={150} height={150} alt="Logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-6 font-bold">
          <Link href="/"><li className="hover:text-blue-900">HOME</li></Link>
          <Link href="/about"><li className="hover:text-orange-400">ABOUT US</li></Link>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-900" onClick={() => setServicesOpen(!servicesOpen)}>
              SERVICES <FaChevronDown size={12} />
            </div>
            {/* Dropdown */}
            <ul className="absolute top-6 left-0 bg-white shadow-md rounded-md text-sm w-40 hidden group-hover:block z-10">
              <li className="p-2 hover:bg-gray-100"><Link href="/services/it">IT Services</Link></li>
              <li className="p-2 hover:bg-gray-100"><Link href="/services/non-it">Non-IT Services</Link></li>
              <li className="p-2 hover:bg-gray-100"><Link href="/services/payroll">Payroll Services</Link></li>
            </ul>
          </li>

          <Link href="/howwework"><li className="hover:text-blue-900">HOW WE WORK</li></Link>
          <Link href="/careers"><li className="hover:text-blue-900">CAREERS</li></Link>
          <Link href="/contact"><li className="hover:text-blue-900">CONTACT US</li></Link>
        </ul>

        <button className="hidden md:block p-2 bg-green-500 rounded-lg text-white font-semibold">Enquiry</button>

        {/* toggle for mobile */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`md:hidden fixed top-0 right-0 h-full w-64 bg-white text-black p-4 transform transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-4">
          <Image src="/cww.svg" width={100} height={40} alt="Logo" />
          <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-4 font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}><li>HOME</li></Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}><li>ABOUT US</li></Link>

          {/* Services dropdown in mobile */}
          <li className="cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
            <div className="flex justify-between items-center">
              SERVICES <FaChevronDown size={12} />
            </div>
            {servicesOpen && (
              <ul className="pl-4 text-sm mt-2 space-y-1">
                <li><Link href="/services/it" onClick={() => setMenuOpen(false)}>IT Services</Link></li>
                <li><Link href="/services/non-it" onClick={() => setMenuOpen(false)}>Non-IT Services</Link></li>
                <li><Link href="/services/payroll" onClick={() => setMenuOpen(false)}>Payroll Services</Link></li>
              </ul>
            )}
          </li>

          <Link href="/howwework" onClick={() => setMenuOpen(false)}><li>HOW WE WORK</li></Link>
          <Link href="/careers" onClick={() => setMenuOpen(false)}><li>CAREERS</li></Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}><li>CONTACT US</li></Link>
          <button className="mt-4 p-2 bg-green-500 rounded-lg text-white">Enquiry</button>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
