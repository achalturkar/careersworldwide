import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Footers = () => {
    return (
        <>
            <footer className="bg-[#ffffff] text-[#000000]">
                <div className="flex flex-col">
                    <div className="flex  justify-around">
                        <div className="flex">
                            <Image
                                src="/logo1.jpg"
                                alt="CareersWorldWide Logo"
                                width={250}
                                height={250}
                            />
                        </div>

                        <div className="flex gap-50 pr-15">
                            <ul className="grid-cols-3 grid-flow-row auto-rows-auto my-3.5">
                                <h1 className="text-xl font-bold">Recources</h1>
                                <Link href="/Home">
                                    <li className="hover:underline">Home</li>
                                </Link>
                                <Link href="/Services">
                                    <li className="hover:underline">Services</li>
                                </Link>
                                <Link href="/Careers">
                                    <li className="hover:underline">Careers</li>
                                </Link>
                                <Link href="/Contact Us">
                                    <li className="hover:underline">Contact Us</li>
                                </Link>
                            </ul>
                            <ul className="grid-cols-3 grid-flow-row auto-rows-auto my-3.5">
                                <h1 className="text-xl font-bold">About</h1>
                                <Link href="/About Us">
                                    <li className="hover:underline">About Us</li>
                                </Link>
                                <Link href="/How We Work">
                                    <li className="hover:underline">How We Work</li>
                                </Link>
                            </ul>
                            <ul className="grid-cols-3 grid-flow-row auto-rows-auto my-3.5">
                                <h1 className="text-xl font-bold">Services</h1>
                                <Link href="/About Us">
                                    <li className="hover:underline">About Us</li>
                                </Link>
                                <Link href="/How We Work">
                                    <li className="hover:underline">How We Work</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    <div className="flex justify-around mb-4.5 items-center">
                        <div className="flex gap-4 items-center">
                            <Link href="/Home"><FaLinkedin /></Link>
                            <Link href="/Home"><FaInstagram /></Link>
                            <Link href="/Home"><FaFacebook /></Link>
                            <Link href="/Home"><FaWhatsapp /></Link>
                        </div>
                        <div className="content-center">
                            <p>Copyright © 2024 Careers Worldwide. All rights reserved</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footers;
