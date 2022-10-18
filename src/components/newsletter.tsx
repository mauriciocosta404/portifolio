const Newsletter=()=>{
    return(
         <div id="newsletter" className="w-full py-16 text-white px-4">
            <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3"> 
                <div className="lg:col-span-2 my-4">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Do you like my portifólio?</h1>
                    <p>Sign up to my newsletter and stay up to date.</p>
                </div>
                <div className="my-4">
                    <div className="flex flex-col sm:flex-row items-center justify-between w-full ">
                        <input className="p-3 flex w-full rounded-md text-black" type="email" name="" id="" placeholder="Enter your email"/>
                        <button className='bg-[#00df9a] text-black w-[200px] rounded-md ml-4 font-medium my-6 px-6 py-3'>Notice me</button>
                    </div>
                    <p>I care about about clean code, Read my <span className="text-[#00df9a]">privacy policy.</span></p>
                </div>
            </div>
         </div>
    )
}
export default Newsletter;