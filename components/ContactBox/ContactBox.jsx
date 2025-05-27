
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";



const ContactBox = () => {

    const contact = [
        {
            head: "Phone",
            detail: "+91 9850041780/ 8767246552",
            icon: <FaPhoneAlt size={28}/>

        },
        {
            head: "Email",
            detail: "recruitment@careersworldwide.in",
            icon: <IoMdMail size={28} />

        },
        {
            head: "Registered Office Address",
            detail: "Office No 5, 2nd floor, Siddhivinayak towers, Bibvewadi Road, Pune 411037, India",
            icon: <FaLocationDot size={28} />

        }
    ]



    return (

        <div className="px-2">
            {
                contact.map((each, index) => (
                    <div key={index} className="flex justify-start items-center gap-3  md:gap-6 my-4 md:my-8 hover:shadow-sm p-2 rounded-lg">

                        <div className="text-white p-3 bg-blue-950 rounded-full">
                            {each.icon}
                        </div>

                        <div className="flex flex-col justify-start items-start">
                            <h1 className="text-xl font-bold ">{each.head}</h1>
                            <h1 className="text-md font-semibold">{each.detail}</h1>

                        </div>
                    </div>
                ))}

        </div>
    )
}

export default ContactBox;
