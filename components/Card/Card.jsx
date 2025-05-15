import Link from "next/link";

const Card = ({ Detail }) => {

    return (

       
        <ul className=" gap-4 p-3 flex flex-col flex-wrap  md:flex-row justify-center items-start ">
            {Detail.map((each) => (
                <li key={each.id}>
                    <div className="  p-3 flex flex-col justify-center items-start bg-gray-100 w-full rounded-lg shadow-lg  md:w-68 md:h-102 overflow-hidden hover:shadow-2xl hover:bg-white">
                        {/* service image */}
                        <div className="h-2/11 ">
                           <div className="bg-blue-300 items-center  rounded-full p-3"> {each.img} </div>

                        </div>
                        {/* service heading and description */}
                        <div className="h-8/11 gap-1">
                            <h1 className="font-bold text-xl text-blue-950 h-2/7">{each.head}</h1>
                            <p className="text-md h-5/7 mb-2">{each.desc}</p>

                        </div>
                        {/* read more link */}
                        <div className="h-1.5/11">
                            <Link href={each.link}>
                                <div className="p-2 font-bold text-center text-md bg-orange-400 rounded-full hover:bg-orange-500 text-white">
                                    Read More
                                </div>
                            </Link>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    )
}

export default Card;