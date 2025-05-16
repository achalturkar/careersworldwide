import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
    return (
        <div className="bg-white pt-32 pb-16 px-4 min-h-screen flex justify-center items-start">
            <div className="w-full max-w-7xl bg-gradient-to-br from-20% from-cyan-200 via-33% via-cyan-50 to-80% to-cyan-400 border border-black/10 shadow-2xl rounded-3xl p-6 md:p-12">
                {/* Heading */}
                <div className="flex items-center justify-center mb-10">
                    <h1 className="text-4xl md:text-5xl font-semibold text-center">Contact Us</h1>
                </div>

                {/* Main Content */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-10">
                    {/* Form Section */}
                    <div className="flex justify-center items-center w-full md:w-1/2">
                        <form className="mx-auto">
                            <label htmlFor="fname" className="block text-black text-xl font-semibold mb-2">Full Name</label>
                            <input
                                type="text"
                                id="fname"
                                name="fname"
                                placeholder="Enter Full Name"
                                className="w-auto shadow appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                            />

                            <label htmlFor="email" className="block text-black text-xl font-semibold mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter Email Id"
                                className="w-auto shadow appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
                            />

                            <label htmlFor="phoneno" className="block text-black text-xl font-semibold mb-2">Phone Number</label>
                            <input
                                type="tel"
                                id="phoneno"
                                name="phoneno"
                                placeholder="Enter Phone Number"
                                className="w-auto shadow appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
                            />

                            <label htmlFor="remarks" className="block text-black text-xl font-semibold mb-2">Remarks</label>
                            <textarea 
                                id="remarks" 
                                name="remarks" 
                                rows="4" 
                                cols="30" 
                                className="w-auto shadow appearance-none border rounded py-2.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6" 
                                placeholder="Remarks"
                            />
                            
                            

                            <div className="flex justify-center">
                                <button
                                    className="bg-[#00C951] hover:bg-[#00c903] text-white font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Vertical Divider for md+ */}
                    <div className="hidden md:block h-[510px] w-px bg-black mx-6"></div>

                    {/* Map Section */}
                    <div className="w-full md:w-1/2">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0954740649245!2d73.85722257426472!3d18.479334082606265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb5063234b3b%3A0xaa4b220fdceebe48!2sSiddhivinayak%20Tower!5e0!3m2!1sen!2sin!4v1747294856034!5m2!1sen!2sin"
                            className="w-full h-[250px] border-0 rounded-md shadow-lg"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                        <div className="space-y-2">
                            <div className="flex items-center space-x-2 mt-4.5">
                                <IoCallOutline className="mt-1 text-black" />
                                <span className="text-black">9850041780</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-4.5">
                                <MdOutlineEmail className="mt-1 text-black" />
                                <span className="text-black">recruitment@careersworldwide.in</span>
                            </div>
                            <div className="flex items-center space-x-2 mt-4.5">
                                <IoLocationOutline className="mt-1 text-black" />
                                <span className="text-black">Office No 5, 2nd floor, Siddhivinayak towers, Bibvewadi Road, Pune 411037, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;