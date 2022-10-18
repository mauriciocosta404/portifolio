import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">Maurício</h1>
                <p className='py-4 '>Lorem ipsum dolor sit amet consectetur rem tempore est. Voluptatem non sequi in molestias at accusamus nobis nulla architecto repellat perspiciatis.</p>
                <div className='flex md:w-[75%] my-6 justify-between'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagram size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
            <div className='lg:col-span-2 flex justify-between mt-6'>
                <div>
                    <h6 className='font-medium text-gray-400'>Qualities</h6>
                    <ul>
                        <li className='py-2 text-sm '>Pontual</li>
                        <li className='py-2 text-sm '>Esforçado</li>
                        <li className='py-2 text-sm '>Comunicativo</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Perfil</h6>
                    <ul>
                        <li className='py-2 text-sm '>Pontual</li>
                        <li className='py-2 text-sm '>Esforçado</li>
                        <li className='py-2 text-sm '>Comunicativo</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Likes</h6>
                    <ul>
                        <li className='py-2 text-sm '>Pontual</li>
                        <li className='py-2 text-sm '>Esforçado</li>
                        <li className='py-2 text-sm '>Comunicativo</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-medium text-gray-400'>Likes</h6>
                    <ul>
                        <li className='py-2 text-sm '>Pontual</li>
                        <li className='py-2 text-sm '>Esforçado</li>
                        <li className='py-2 text-sm '>Comunicativo</li>
                        <li className='py-2 text-sm '>Flexible</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Footer;