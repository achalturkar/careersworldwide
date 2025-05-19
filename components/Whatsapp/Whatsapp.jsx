"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa";


const Whatsapp = () => {
    const phoneNumber = "919359647748"; // Replace with your number (with country code, no +)
    const message = "Hello, I'm interested in your services!";

    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    return (
        <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-12 right-6 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-3 rounded-full shadow-lg z-50"
        >
            <FaWhatsapp className="text-white font-bold size-8"/>
        </a>
    );
};

export default Whatsapp;
