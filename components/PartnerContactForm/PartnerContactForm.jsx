"use client";

import { useState } from "react";

const PartnerContactForm = () => {
    const [formData, setFormData] = useState({
        companyName: "",
        contactPersonName: "",
        email: "",
        phone: "",
        website: "",
        location: "",
        hiringType: "",
        message: "",
        file: null,
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        // For file input
        if (name === "file") {
            setFormData({
                ...formData,
                [name]: files[0],
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }


    };

    const handleSubmit = (e) => {
        e.preventDefault();


    };

    return (
        <div className="mt-32 px-4 md:px-20 flex flex-col md:flex-row justify-center items-start gap-10">
            {/* Left section */}
            <div className="relative h-[700px] w-full md:w-1/2 bg-[url('/handshake.webp')] bg-cover bg-no-repeat rounded-xl shadow-lg flex justify-center items-center">
                <div className="bg-black bg-opacity-50 p-6 rounded-xl text-center">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Let's Work Together</h1>
                    <p className="text-white">Partner with us for your hiring needs.</p>
                </div>
            </div>

            {/* Right section */}
            <div className="w-full md:w-1/2 bg-white p-6 rounded-xl shadow-xl">
                <h2 className="text-2xl font-bold mb-4 text-blue-900 text-center">Partner Contact Form</h2>
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Company Name */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="companyName">Company Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Contact Person */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="contactPersonName">Contact Person Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="contactPersonName"
                            name="contactPersonName"
                            value={formData.contactPersonName}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="email">Email <span className="text-red-500">*</span></label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Phone */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="phone">Mobile Number <span className="text-red-500">*</span></label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Website */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="website">Company Website</label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="location">Company Location <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="location"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            required
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Hiring Type */}
                    <div>
                        <label className="block mb-1 font-semibold" htmlFor="hiringType">Hiring Type</label>
                        <select
                            name="hiringType"
                            id="hiringType"
                            value={formData.hiringType}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Type of Hiring</option>
                            <option value="IT">IT</option>
                            <option value="Contractual">Contractual</option>
                            <option value="Freelance">Freelance</option>
                            <option value="Executive Search">Executive Search</option>
                            <option value="Payroll Management">Payroll Management</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    {/* Message */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold" htmlFor="message">Add Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Describe your hiring requirements..."
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* File Upload */}
                    <div className="md:col-span-2">
                        <label className="block mb-1 font-semibold" htmlFor="file">Attachment (Optional)</label>
                        <input
                            type="file"
                            id="file"
                            name="file"
                            onChange={handleChange}
                            accept=".pdf,.doc,.docx"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        {formData.file && (
                            <p className="text-sm text-gray-500 mt-1">Selected: {formData.file.name}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition duration-300"
                        >
                            Submit Hiring Request
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PartnerContactForm;
