'use client';

import { useState, useEffect } from "react";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false)
  const [showTopBar, setShowTopBar] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowTopBar(currentScrollY < 50 || currentScrollY < lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (


    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 to-orange-500">
      {/* Top contact bar */}
      <div className={`transition-all duration-300 ${showTopBar ? "opacity-100" : "opacity-0 h-0 overflow-hidden"} text-white flex justify-end gap-3 px-2 py-1 md:gap-6 px-4 text-xs md:text-sm`}>
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
      <nav className=" bg-white text-black flex items-center justify-between px-2 md:justify-around   ">
        {/* Logo */}
        <Link href="/">
          <Image src="/cww.svg" width={150} height={150} alt="Logo" />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-6 font-bold">
          <Link href="/"><li className="hover:text-blue-900">HOME</li></Link>
          <Link href="/about"><li className="hover:text-blue-900">ABOUT US</li></Link>

          <li className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-blue-900" onClick={() => setServicesOpen(!servicesOpen)}>
              SERVICES
            </div>
            {/* Dropdown */}
            <ul className="absolute top-6 left-var(40%) bg-white shadow-md rounded-md text-md w-68 hidden group-hover:block z-10">
              <li className="p-1 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/headhunting">Head Hunting</Link></li>
              <li className="p-1 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/contractualrecruitment">Contractual Recruitment</Link></li>
              <li className="p-1 hover:bg-gray-100 hover:text-blue-900"><Link href="/services/payrollmanagement">Payroll Management</Link></li>
              <li className="p-1 hover:bg-gray-100 hover:text-blue-900"><Link href="/services/permanentrecruitment">Permanent Recruitment</Link></li>
            </ul>
          </li>

          <Link href="/howwework"><li className="hover:text-blue-900">HOW WE WORK</li></Link>
          <Link href="/expertise"><li className="hover:text-blue-900">EXPERTISE</li></Link>
          <Link href="/contact"><li className="hover:text-blue-900">CONTACT US</li></Link>
        </ul>
        <Link href="/jobopening">
          <div className="cursor-pointer hidden lg:block p-2 bg-blue-900 hover:bg-blue-950 rounded-xl text-white font-bold" >JOB OPENING</div>
        </Link>

        {/* toggle for mobile */}
        <button className="lg:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`lg:hidden  fixed top-0 right-0 h-full  bg-[url('/blob.svg')] object-cover bg-no-repeat text-black p-4 transform transition-transform duration-300 z-40 ${menuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex justify-between items-center mb-4">
          <Image src="/cww.svg" width={150} height={150} alt="Logo" className="ml-12" />
          <FiX className="text-2xl cursor-pointer" onClick={() => setMenuOpen(false)} />
        </div>

        <ul className="flex flex-col gap-4 font-semibold">
          <Link href="/" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">HOME</li></Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">ABOUT US</li></Link>

          {/* Services dropdown in mobile */}
          <li className="cursor-pointer" onClick={() => setServicesOpen(!servicesOpen)}>
            <div className="flex justify-between items-center">
              SERVICES <FaChevronDown size={12} />
            </div>
            {servicesOpen && (
              <ul className="pl-4 text-md mt-2 ">
                <li className="p-2 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/headhunting " onClick={() => setMenuOpen(false)}>Head Hunting</Link></li>
                <li className="p-2 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/contractualrecruitment" onClick={() => setMenuOpen(false)}>Contractual Recruitment</Link></li>
                <li className="p-2 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/payrollmanagement" onClick={() => setMenuOpen(false)}>Payroll Management</Link></li>
                <li className="p-2 hover:bg-gray-100 hover:text-blue-900 "><Link href="/services/permanentrecruitment" onClick={() => setMenuOpen(false)}>Permanent Recruitment</Link></li>
              </ul>
            )}
          </li>

          <Link href="/howwework" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">HOW WE WORK</li></Link>
          <Link href="/expertise" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">EXPERTISE</li></Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)}><li className="hover:text-blue-900 ">CONTACT US</li></Link>
          <Link href="/jobopening" onClick={() => setMenuOpen(false)}>
            <div className=" cursor-pointer mt-4 p-2 bg-blue-900 hover:bg-blue-950 rounded-lg text-white text-center " >JOB OPENING</div>
          </Link>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
