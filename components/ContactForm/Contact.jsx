
import Image from "next/image";

const ContactForm = () =>{

    return(
        <div>

            <div className=" bg-[url('/image.png)] bg-cover bg-center h-screen mt-32">
             <Image
                src="/image.png"
                height={250}
                width={250}
                alt=""
                />
                   <h1 className="text-5xl">blavkmmks sss ss m</h1>
            </div>
            <form action="">
                <label htmlFor="firstname" className="block mb-1 ">First</label>
                    <input type="text"
                        id="firstname"
                        name="firstname"
                        placeholder="Enter Your Firstname"
                        className="border border-gray-700 rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
 

            </form>
        
        
        
        </div>
    )


}

export default ContactForm;