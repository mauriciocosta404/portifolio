import { AiOutlineClose,AiOutlineMenu } from "react-icons/ai";
import { NavProps } from "./type";

const NavBar=({nav,setNav}:NavProps)=>{
    
    return(
        <div id="home" className="text-white flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
            <h1 className="flex w-full text-3xl font-bold text-[#00df9a] font-mono">Maurício</h1>
            <ul className="hidden md:flex" onClick={()=>{setNav(false)}}>
                <li className="p-4" >
                    <a href="#home">
                        Início
                    </a>   
                </li>
                <li className="p-4">
                    <a href="#about">
                        Sobre
                    </a>
                </li>
                <li className="p-4">
                    <a href="#newsletter">
                        Newsletter
                    </a>
                </li>
                <li className="p-4">
                    <a href="#tecnologies">
                        Tecnologias
                    </a>
                </li>
                <li className="p-4">
                    <a href="#projects">
                        Projectos
                    </a>
                </li>
                <li className="p-4">
                    <a href="#details">
                        Detalhes
                    </a>
                </li>
            </ul>
            <div onClick={()=>setNav(!nav)} className='block md:hidden cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20}/>}
            </div>
            <div className={nav ? 'z-50 fixed left-0 top-0 w-[60%] border-r border-r-gray-900 h-full bg-[#000300] ease-in-out duration-500':'fixed left-[100%]'}>
                <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4 font-mono">Maurício</h1>
                <ul className="uppercase p-4 ">
                    <li className="p-4 border-b border-gray-600">
                        <a href="#home">
                            Início
                        </a>   
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#about">
                            Sobre
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#newsletter">
                            Newsletter
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#tecnologies">
                            Tecnologias
                        </a>
                    </li>
                    <li className="p-4 border-b border-gray-600">
                        <a href="#projects">
                            Projectos
                        </a>
                    </li>
                    <li className="p-4">
                        <a href="#details">
                            Detalhes
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default NavBar;