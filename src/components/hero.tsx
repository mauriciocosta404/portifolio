import Typed from 'react-typed';

const Hero=()=>{
    return(
        <div className="text-white">
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">GROW WITH DATA</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl py-3 font-bold">Fast, flexible, powerfull for</p>
                    <Typed className="md:text-3xl sm:text-1xl text-xl font-bold" strings={['Mauricio Fullstack']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-1xl font-bold-300 text-gray-600'>Monitor your data analytics to increase revenue for BTB,BTC, & SCSS plataforms</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 p-2 text-black'>Get Started</button>
            </div>
        </div>
    )
}
export default Hero;