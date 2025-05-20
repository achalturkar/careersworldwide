import Link from "next/link";

const CareersJobList = ({ Jobs }) => {
    return (
        <div className="flex flex-col gap-6 p-6">
            {Jobs.map((each, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-between items-start bg-white shadow-lg rounded-lg p-6">
                    {/* Left Section */}
                    <div className="w-full md:w-4/5">
                        <h2 className="text-xl font-bold text-blue-900 mb-2">{each.title}</h2>
                        <p className="text-gray-700 mb-4">{each.desc}</p>

                        <div className="flex flex-wrap gap-3">
                            {each.set.map((info, idx) => (
                                <div key={idx} className="bg-gray-100 px-4 py-2 rounded-md text-sm font-medium text-gray-800 shadow">
                                    {info.key}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Section */}
                    <div className="w-full md:w-1/5 mt-4 md:mt-0 flex justify-end">
                        <Link href="/contact" className="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded-md font-semibold">
                            Apply Now
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CareersJobList;
