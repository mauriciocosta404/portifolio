import avatar from '../assets/avatar.png';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare
} from 'react-icons/fa';
import { NavProps } from './type';
 
const Footer = ({ nav, setNav }: NavProps) => {
    return (
        <div onClick={() => { setNav(false) }} id='details' className="max-w-[1340px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
            <h1 className="flex w-full text-3xl font-bold text-[#00df9a]">Maurício</h1>
                <p className='py-4 text-justify'>Atualmente, estou estudando desenvolvimento Frontend e outras tecnologias que complementam esse processo, como HTML, CSS, JavaScript, TypeScript, React, Next.js, Node.js, Git e GitHub, além de frameworks CSS como Tailwind e SASS. Meu objetivo é me tornar um profissional competente e relevante na área de tecnologia, contribuindo com soluções inovadoras e de alta qualidade.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30}/>
                    <a href="https://www.linkedin.com/in/mauricio-costa-216bb1235">
                        <FaLinkedin size={30}/>
                    </a>
                    <FaTwitterSquare size={30}/>
                    <a href="https://github.com/mauriciocosta404/Calculadora-js.git">
                        <FaGithubSquare size={30}/>
                    </a>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
               <div className='lg:ml-8'>
                    <h6 className='my-5 font-bold text-gray-400'>Perfil</h6>
                    <ul>
                        <li className='py-2 text-sm '>email: mc611641@gmail.com</li>
                        <li className='py-2 text-sm '>whatsapp: +244 921129586</li>
                        <li className='py-2 text-sm '>telefone: +244 921129586</li>
                        <li className='py-2 text-sm '></li>
                    </ul>
                </div>
                <div>
                    <h6 className='my-5 font-bold text-gray-400'>Links rápidos</h6>
                    <ul>
                        <li className='py-2 text-sm '>Início</li>
                        <li className='py-2 text-sm '>Sobre</li>
                        <li className='py-2 text-sm '>Tecnologias</li>
                        <li className='py-2 text-sm '>Projectos</li>
                    </ul>
                </div>
        </div>
    )
}
export default Footer;
