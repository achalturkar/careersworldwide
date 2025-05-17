import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[url('/bottomwave2.svg')] bg-cover bg-center bg-no-repeat text-black px-6 py-12">
                <div className="max-w-7xl mx-auto flex flex-col gap-10 lg:grid lg:grid-cols-4 mb-8">
                    {/* Logo and Subscription */}
                    <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 mr-5">
                        <Image src="/cww.svg" alt="Careers Worldwide Logo" width={160} height={160} />
                        <div>
                            <h2 className="font-bold text-lg flex items-center gap-2">
                                📩 Stay updated!
                            </h2>
                            <p className="text-sm mb-2">Get the latest job openings and hiring trends in your inbox.</p>
                            <div className="flex">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="px-3 py-2 rounded-l-md border border-gray-400 w-48"
                                />
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Resources */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-bold mb-3">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link href="/Home" className="hover:text-orange-600">Home</Link></li>
                            <li><Link href="/Home" className="hover:text-orange-600">Careers</Link></li>
                            <li><Link href="/Careers" className="hover:text-orange-600">Job Openings</Link></li>
                            <li><Link href="/Contact Us" className="hover:text-orange-600">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-bold mb-3">About</h3>
                        <ul className="space-y-2">
                            <li><Link href="/About Us" className="hover:text-orange-600">About Us</Link></li>
                            <li><Link href="/How We Work" className="hover:text-orange-600">How We Work</Link></li>
                            <li><Link href="/expertise" className="hover:text-orange-600">Expertise</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-bold mb-3">Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="hover:text-orange-600">Head Hunting</Link></li>
                            <li><Link href="/howwework" className="hover:text-orange-600">Contractual Recruitment</Link></li>
                            <li><Link href="/How We Work" className="hover:text-orange-600">Payroll Management</Link></li>
                            <li><Link href="/How We Work" className="hover:text-orange-600">Permanent Recruitment</Link></li>
                        </ul>
                    </div>
                </div>


                {/* Bottom Row */}
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex gap-4 text-2xl text-black">
                        <Link href="#"><FaInstagram /></Link>
                        <Link href="#"><FaFacebook /></Link>
                        <Link href="#"><FaLinkedin /></Link>
                        <Link href="#"><FaWhatsapp /></Link>
                    </div>
                    <p className="text-sm text-center sm:text-left text-black">
                        © 2025 Careers Worldwide. All rights reserved.
                    </p>
                </div>
            </footer>
    );
};

export default Footer;