import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

import Link from "next/link";
import Image from "next/image";

const ImageComponent = ({ Profile }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-4 md:mx-40   ">
      {Profile.map((each, index) => (
        <div key={index} className="flex flex-col justify-center items-center " data-aos="fade-up">
          <Image
            src={each.img}
            alt={each.name}
            width={150}
            height={150}
            className="rounded-lg "
          />

          <div className="flex gap-3 mt-3 text-black text-xl ">
            <Link href={each.linkedin || "#"}><FaLinkedin className="hover:text-blue-900"/></Link>
            <Link href={each.facebook || "#"}><FaFacebook className="hover:text-blue-900"/></Link>
            <Link href={each.instagram || "#"}><FaInstagram className="hover:text-red-900"/></Link>
            <Link href={each.twitter || "#"}><FaSquareXTwitter className="hover:text-black"/></Link>
          </div>

          <div className="mt-4 text-center">
            <h1 className="text-lg font-bold text-blue-950">{each.name}</h1>
            <h2 className="text-md font-semibold text-gray-700">{each.designation}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageComponent;
