import Laptop from '../assets/js.jpg';

interface NavProps {
    nav: boolean;
    setNav(nav: boolean): void;
}

const Analytics = ({ nav, setNav }: NavProps)=>{
 return(
     <div onClick={() => { setNav(false) }} id='about' className=" w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#00df9a]'>MAURICIO ANTÓNIO DA COSTA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>About my job as front-end</h1>
                    <p className='text-justify'>I'm a Frontend Developer, ambitious, hyperfocused and looking to grow in the area. I've always been a self-taught student/researcher in several areas (I reap many benefits to this day) but now I'm pointing out everything I have and dedicating myself to the fullest in the digital field.</p>
                    <button className='bg-black text-[#00df9a] w-[200px] rounded-md mx-auto  md:mx-0 font-medium my-6 p-2'><a href="https://github.com/menezescosta">Github</a></button>
                </div>
            </div>
        </div>
    );
}
export default Analytics;