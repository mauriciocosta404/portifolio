import avatar from '../assets/avatar.png';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaLinkedin,
    FaTwitterSquare
} from 'react-icons/fa';
 
interface NavProps {
    nav: boolean;
    setNav(nav: boolean): void;
}

const Footer = ({ nav, setNav }: NavProps) => {
    return (
        <div onClick={() => { setNav(false) }} id='details' className="max-w-[1240px] mx-auto py-10 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
            <h1 className="flex w-full text-3xl font-bold text-[#00df9a]">Maurício <img src={avatar} className="w-[40px] ml-2 h-[40px] rounded-full" alt="" /></h1>
                <p className='py-4 '>I'm currently studying Frontend development and some other technologies that complement this process, such as HTML, CSS, JS, TS, React, Next, Node, Git and GitHub, some CSS Frameworks like Tailwind, scss . My goal is to become a competent, relevant professional in the technology area.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30}/>
                    <a href="https://www.linkedin.com/in/mauricio-costa-216bb1235">
                        <FaLinkedin size={30}/>
                    </a>
                    <FaTwitterSquare size={30}/>
                    <a href="https://github.com/menezescosta">
                        <FaGithubSquare size={30}/>
                    </a>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 lg:flex justify-between mt-6'>
                <div className='lg:ml-8'>
                    <h6 className='my-5 font-bold text-gray-400'>Perfil</h6>
                    <ul>
                        <li className='py-2 text-sm '>email:mc611641@gmail.com</li>
                        <li className='py-2 text-sm '>whatsapp:941692901</li>
                        <li className='py-2 text-sm '>telefone:943377863</li>
                        <li className='py-2 text-sm '></li>
                    </ul>
                </div>
                <div>
                    <h6 className='my-5 font-bold text-gray-400'>Qualities</h6>
                    <ul>
                        <li className='py-2 text-sm '>one-off</li>
                        <li className='py-2 text-sm '>hardworking</li>
                        <li className='py-2 text-sm '>communicative</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='my-5 font-bold text-gray-400'>Likes</h6>
                    <ul>
                        <li className='py-2 text-sm '>one-off</li>
                        <li className='py-2 text-sm '>hardworking</li>
                        <li className='py-2 text-sm '>communicative</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
      
            </div>
        </div>
    )
}
export default Footer;