import Typed from 'react-typed';
import avatar from '../assets/me.jpg';
import { NavProps } from './type';

const Hero = ({ nav, setNav }: NavProps)=>{
    return(
        <div className="text-white" onClick={() => { setNav(false) }}>
            <div className="max-w-[800px] md:mt-[.7rem] mt-[96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
                <div className=''>
                {/*<img src={avatar} className="md:w-[6rem] md:h-[6rem] md:mt-10 w-[70px] h-[70px] mx-auto mt-48 rounded-full hover:scale-2 hover:rotate-90" alt="" />*/}
                </div>
                <p className="text-[#00df9a] font-bold p-2 uppercase">Desenvolvedor de software</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Hello i am , </h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl py-3 font-bold">Mauricio Costa</p>
                    <Typed className="md:text-3xl sm:text-1xl text-xl font-bold" strings={['Desenvolvedor web 😎']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-1xl font-bold-300 text-gray-600'>Hello! i am Maurício Costa, i am developer web currentilly more focussed in front-end development 😎😎</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 p-2 text-black'><a href="https://github.com/mauriciocosta404">Github</a></button>
            </div>
        </div>
    )
}
export default Hero;