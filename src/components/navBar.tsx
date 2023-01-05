import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import avatar from '../assets/avatar.png';

interface NavProps{
    nav:boolean;
    setNav(nav:boolean):void;
}

const NavBar=({nav,setNav}:NavProps)=>{
    
    return(
        <div id="home" className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="flex w-full text-3xl font-bold text-[#00df9a]">Maurício <img src={avatar} className="w-[40px] ml-2 h-[40px] rounded-full" alt="" /></h1>
            <ul className="hidden md:flex" onClick={()=>{setNav(false)}}>
                <li className="p-4" >
                    <a href="#home">
                        Home
                    </a>   
                </li>
                <li className="p-4">
                    <a href="#about">
                        About
                    </a>
                </li>
                <li className="p-4">
                    <a href="#newsletter">
                        Newsletter
                    </a>
                </li>
                <li className="p-4">
                    <a href="#tecnologies">
                        Tecnologies
                    </a>
                </li>
                <li className="p-4">
                    <a href="#projects">
                        Projects
                    </a>
                </li>
                <li className="p-4">
                    <a href="#details">
                        Details
                    </a>
                </li>
            </ul>
            <div onClick={()=>setNav(!nav)} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'z-auto fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500':'fixed left-[100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">Maurício</h1>
                <ul className="uppercase p-4 ">
                    <li className="p-4 border-b border-gray-600">
                        <a href="#home">
                            Home
                        </a>   
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#about">
                            About
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#newsletter">
                            Newsletter
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#tecnologies">
                            Tecnologies
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#projects">
                            Projects
                        </a>
                    </li>
                    <li className="p-4">
                        <a href="#details">
                            Details
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;