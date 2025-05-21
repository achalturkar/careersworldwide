


const WhyChooseCard = ({ Choose }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                Choose.map((each, index) => (
                    <div key={index} className="flex flex-row justify-center items-center gap-8 bg-blue-50 hover:bg-white p-4 rounded-2xl"  data-aos="fade-up">
                        <h1 className="text-3xl font-bold  text-blue-950  text-center">0{each.id}</h1>

                        <div className="">
                            <h1 className="text-xl font-bold text-blue-950">{each.head}</h1>
                            <p className="text-md font-semibold">{each.desc}</p>
                        </div>

                    </div>
                ))}




        </div>
    )

}

export default WhyChooseCard;