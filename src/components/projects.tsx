import { FaGithub } from 'react-icons/fa';
import { projectsMock } from '../mock/projectsMock';
import { NavProps } from './type';

const Projects=({nav,setNav}:NavProps)=>{
    return(
        <div id='projects' className="w-full  bg-white p-6">
            <h1 className="w-full text-3xl font-bold text-center text-[#00df9a]">Projectos</h1>
            <div className="flex flex-wrap justify-center gap-7">
                {projectsMock.map(({imageSrc,name,projectLink,description})=>
                    <div className='mt-5 relative  rounded-[12px] w-[300px] h-[350px] p-5 border-solid border-2 border-[#00df9a]'>
                        <a href={projectLink} className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                        <img src={imageSrc} className="rounded-[12px] h-[150px] mx-auto" alt="" />
                        <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>{name}</h2>
                        <p className='text-[#ccc] lg:text-1xl text-justify'>{description}</p>
                    </div>
                )}
            </div>
        </div>
    )   
}
export default Projects;