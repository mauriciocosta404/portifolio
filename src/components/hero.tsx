import Typed from 'react-typed';
import avatar from '../assets/avatar.png';
interface NavProps {
    nav: boolean;
    setNav(nav: boolean): void;
}

const Hero = ({ nav, setNav }: NavProps)=>{
    return(
        <div className="text-white" onClick={() => { setNav(false) }}>
            <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center">
                <div className=''>
                    <img src={avatar} className="md:w-[100px] md:h-[100px] md:mt-10 w-[70px] h-[70px] mx-auto mt-48 rounded-full hover:scale-2 hover:rotate-90" alt="" />
                </div>
                <p className="text-[#00df9a] font-bold p-2 uppercase">front-end developer react.js</p>
                <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Front End Developer</h1>
                <div>
                    <p className="md:text-5xl sm:text-4xl text-xl py-3 font-bold">React.js ,React-native , Typescript</p>
                    <Typed className="md:text-3xl sm:text-1xl text-xl font-bold" strings={['Mauricio Front-End 😎']} typeSpeed={120} backSpeed={140} loop/>
                </div>
                <p className='md:text-1xl font-bold-300 text-gray-600'>Hello! i am Maurício Costa, i am developer web currentilly more focussed in front-end development 😎😎</p>
                <button className='bg-[#00df9a] w-[200px] rounded-md mx-auto font-medium my-6 p-2 text-black'><a href="https://github.com/mauriciocosta404">Github</a></button>
            </div>
        </div>
    )
}
export default Hero;