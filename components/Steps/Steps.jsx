import { IoShieldCheckmarkSharp } from "react-icons/io5";


const Steps = ({ Content }) => {

    return (
        <div className="p-2 md:px-20 flex flex-col justify-center items-center ">

            {
                Content.map((each) => (
                        <div key={each.step} className="w-full flex justify-center items-center flex-col md:flex-row p-2 md:p-4 gap-1 md:gap-12 h-full bg-gray-100 rounded-xl my-2 ">
                            <div className="flex flex-col justify-center items-center gap-1 md:gap-2 ">
                                <h1 className="text-center text-white text-xl font-bold bg-blue-950 p-4 h-6 w-6 rounded-full flex justify-center items-center h-1/4 ">  {each.step} </h1>
                                <h1 className="text-xl font-bold ">Step</h1>
                            </div>
                            <div className="md:w-3/4 " >
                                <h1 className="text-2xl font-bold text-blue-950 text-center md:text-start">{each.head}</h1>
                                <h2 className="text-md font-semibold leading-tight mb-1">{each.subhead}</h2>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5" /> {each.desc1}</p>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5" /> {each.desc2}</p>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5" /> {each.desc3}</p>
                            </div>
                        </div>
                ))
            }


        </div>
    )
}

export default Steps;