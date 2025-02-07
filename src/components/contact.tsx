import { NavProps } from "./type";

const Contact=({ nav, setNav }: NavProps)=>{
    return(
        <div onClick={() => { setNav(false) }} className="p-5" >
            <h2 className="text-center text-3xl font-bold text-[#00df9a] p-5">Contacte</h2>
            <div className="m-auto max-w-screen-md p-6">
                <div className="flex flex-wrap gap-5">
                    <input className="w-[100%] lg:w-[350px] h-12 rounded-md p-3" placeholder="Name" type="text" />
                    <input className="w-[100%] lg:w-[350px]  h-12 rounded-md p-3" placeholder="Email" type="text" />
                </div>
                <textarea className="w-[100%] h-40 my-6 rounded-md p-3 "  placeholder="Message..." name="" id="" ></textarea>
                <button className="bg-[#00df9a] text-black w-[100%] md:w-[200px] rounded-md font-medium px-6 py-3">Submit</button>
            </div>
        </div>
    )
}

export default Contact;