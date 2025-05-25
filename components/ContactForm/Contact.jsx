"use client";
import Image from "next/image";
import { useState } from "react";
import {
    FaPhone,
    FaEnvelope,
    FaMapMarkerAlt,
    FaFacebook,
    FaLinkedin,
    FaInstagram,
} from "react-icons/fa";
import HandleMove from "../HandleMove/HandleMove";
import ContactBox from "../Carousal/ContactBox";

const ContactForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        msg: "",
    });

    const [success, setSuccess] = useState(false);

    const handleRequest = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
        setSuccess(true);
        setForm({
            name: "",
            email: "",
            phone: "",
            msg: "",
        })

    };

    // bg-[url(/city.webp)]

    return (
        <section className=" w-full h-auto bg-no-repeat bg-cover bg-center">
            <div className=" bg-white/60 p-6 md:px-60 w-full">
                <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                    {/* Contact Info */}
                    <div className=" space-y-4 flex-1">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-4xl font-extrabold text-blue-950">
                                Get in Touch
                            </h2>
                            <HandleMove />

                        </div>

                        <ContactBox />

                    </div>

                    {/* Contact Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="bg-white/90 p-6 rounded-lg shadow-lg w-full max-w-md flex-1"
                    >
                        <h1 className="text-lg font-semibold text-blue-950 text-center mb-2">Let’s Connect and Build Something Great Together</h1>
                        {success && (
                            <p className="text-green-600 text-center font-semibold mb-4">
                                Message sent successfully!
                            </p>
                        )}

                        <div className="mb-4">
                            <label htmlFor="name" className="block font-semibold mb-1">
                                Name <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={form.name}
                                onChange={handleRequest}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block font-semibold mb-1">
                                Email Address <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={form.email}
                                onChange={handleRequest}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="phone" className="block font-semibold mb-1">
                                Mobile Number <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={form.phone}
                                onChange={handleRequest}
                                required
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="msg" className="block font-semibold mb-1">
                                Message
                            </label>
                            <textarea
                                name="msg"
                                id="msg"
                                value={form.msg}
                                onChange={handleRequest}
                                rows={4}
                                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500 transition"
                            />
                        </div>

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded w-full font-semibold transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
