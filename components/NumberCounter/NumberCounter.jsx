"use client"
import CountUp from "react-countup";

const NumberCounter = () => {

    return (
        <section className="bg-[url('/c1.svg')] text-white p-16 bg-cover bg-no-repeat ">

            <div className="grid grid-cols-1 md:grid-cols-4  md:px-32 flex items-center space-y-4">

                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={15}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Year Of Experience</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={100}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Clients Serve </p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={15}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Year Of Experience</p>
                </div>
                <div className="flex flex-col justify-center items-center gap-2">
                    <p className="text-3xl font-bold ">
                        <CountUp
                            start={0}
                            end={15}
                            enableScrollSpy={true}
                            scrollSpyOnce="true "
                            suffix="+"
                        >
                            {({ countUpRef }) => <span ref={countUpRef} />}
                        </CountUp>
                    </p>
                    <div className="border border-2 bg-orange-500 w-24 "></div>
                    <p className="text-xl font-bold ">Year Of Experience</p>
                </div>
               
            </div>
        </section>
    )

}

export default NumberCounter;