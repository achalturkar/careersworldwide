import { IoShieldCheckmarkSharp } from "react-icons/io5";


const Steps = ({ Content }) => {

    return (
        <div className="p-8 md:px-20">

            {
                Content.map((each) => (
                    <div key={each.step} className="">
                        <div className="w-full flex flex-col md:flex-row p-4 gap-2 md:gap-8 h-full">
                            <h1 className="text-center text-white text-xl font-bold bg-orange-300 p-3  rounded-xl flex justify-center items-center h-1/4"> Steps {each.step} </h1>
                            <div className="md:w-3/4 " >
                                <h1 className="text-2xl font-bold text-blue-950">{each.head}</h1>
                                <h2 className="text-lg font-semibold leading-tight">{each.subhead}</h2>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5"/> {each.desc1}</p>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5"/> {each.desc2}</p>
                                <p className="text-md font-semibold gap-4 flex flex-row items-center"><IoShieldCheckmarkSharp className="text-green-400 size-5"/> {each.desc3}</p>
                               
                               

                            </div>
                        </div>

                    </div>
                ))
            }


        </div>
    )
}

export default Steps;