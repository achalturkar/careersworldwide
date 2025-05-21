import Image from "next/image";
import HandleMove from "../HandleMove/HandleMove";


// to be pointed first section on service pages 
// image and explain about service 
const ServiceDetail = ({ img, head, desc, desc2, alt = "Service Image" }) => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-16 p-4">
            <div  data-aos="fade-right">
                <Image src={img} alt={alt} width={250} height={250} className="rounded-md" />
            </div>
            <div className="max-w-xl text-gray-800 text-md font-semibold   gap-2"  data-aos="fade-left"> 
                <h1 className="mb-2 text-3xl font-extrabold text-blue-950 ">{head}</h1>
                <HandleMove />

                <p className="mb-2">{desc}</p>
                <p>{desc2}</p>
            </div>


        </div>
    );
};

export default ServiceDetail;
