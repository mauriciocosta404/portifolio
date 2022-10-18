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
        <div onClick={() => { setNav(false) }} id='details' className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">Maurício</h1>
                <p className='py-4 '>Lorem ipsum dolor sit amet consectetur rem tempore est. Voluptatem non sequi in molestias at accusamus nobis nulla architecto repellat perspiciatis.</p>
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
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Qualities</h6>
                    <ul>
                        <li className='py-2 text-sm '>one-off</li>
                        <li className='py-2 text-sm '>hardworking</li>
                        <li className='py-2 text-sm '>communicative</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Perfil</h6>
                    <ul>
                        <li className='py-2 text-sm '>one-off</li>
                        <li className='py-2 text-sm '>hardworking</li>
                        <li className='py-2 text-sm '>communicative</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Likes</h6>
                    <ul>
                        <li className='py-2 text-sm '>one-off</li>
                        <li className='py-2 text-sm '>hardworking</li>
                        <li className='py-2 text-sm '>communicative</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Likes</h6>
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