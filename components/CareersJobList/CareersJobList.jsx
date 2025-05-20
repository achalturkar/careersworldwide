


const CareersJobList = ({ Jobs }) => {

    return (
        <div>
            {
                Jobs.map((each, index) => (
                    <div key={index}>

                        <div>
                            <div>
                                <h1 className="">{each.title}</h1>
                                <p className="">{each.desc}</p>


                            </div>

                            <div>
                               {each.set.map((info, index)=>(<div key={index}> </div>))}



                            </div>


                        </div>

                        <div>

                            <Link href="/contact">Apply Now</Link>


                        </div>



                    </div>
                ))

            }




        </div>
    )
}

export default CareersJobList;