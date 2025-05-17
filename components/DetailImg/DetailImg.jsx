import Image from "next/image";

const DetailImg = () => {

    const competencies=[
        {
            id:1,
            core: "Market Intelligence"
        },
        {
            id:2,
            core: "Strategic Marketing"
        },
        {
            id:3,
            core: "Social Media Connect"
        },
        {
            id:4,
            core: "Talent Assessment "
        },
        {
            id:5,
            core: "Proactive Approach "
        },
        {
            id:6,
            core: "Strong Networking  "
        },
        {
            id:7,
            core: "Resilience & Adaptability  "
        },
        {
            id:8,
            core: "Effective Communication "
        },
        {
            id:9,
            core: "Creative Sourcing Techniques"
        },
        {
            id:10,
            core: "Innovative Recruitment Solutions"
        }
    ]
    return (

        <div className="flex flex-col md:flex-row justify-center items-center p-3 md:p-12 mx-4 md:mx-32 gap-8  md:gap-16">

            <div>
                <Image
                    src="/m.jpg"
                    width={300}
                    height={300}
                    alt="desc Image"
                    className="rounded-xl h-100px w-auto md:h-300px"

                />
            </div>

            <div>
                <div className="">
                    <h1 className="text-2xl md:text-4xl font-black text-blue-950 ">Driven by Excellence, Powered by Expertise</h1>
                    <div className="border w-32 my-2"></div>
                    <p className=" ">Our core strengths fuel smart hiring decisions and long-term success.</p>
                    
                </div>

                <div>
                    <ul className="pl-8 text-md font-semibold leading-4 mt-4 ">
                       
                       {
                        competencies.map((each)=>(
                            <li key={each.id} className="relative pl-8 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-3 before:h-3 before:bg-[url('/check.webp')]
                            before:bg-contain before:bg-no-repeat hover:before:scale-125 hover:before:w-4 hover:before:h-4 transition-transform mb-4">
                                <h1>{each.core}</h1>
                            </li>
                        ))
                       }
                       
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DetailImg;