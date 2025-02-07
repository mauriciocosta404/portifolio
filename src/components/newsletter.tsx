import { NavProps } from "./type";

const Newsletter = ({ nav, setNav }: NavProps)=>{
    return(
        <div onClick={() => { setNav(false) }} id="newsletter" className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Desejas saber mais sobre mim?</h1>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" name="" id="" placeholder="Enter your email"/>
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md ml-4 font-medium my-6 px-6 py-3'>enviar</button>
                    </div>
                    <p>Desejas saber mais sobre mim??<span className="text-[#00df9a]"> entre em contacto.</span></p>
                </div>
            </div>
         </div>
    )
}
export default Newsletter;