
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/projects/taskManager.jpg'; 
import project2 from '../assets/projects/restaurante.png';
import project3 from '../assets/projects/awax.png';
import project4 from '../assets/projects/streamming.png';
import project5 from '../assets/projects/clima.png';
import project6 from '../assets/projects/calculadora.png';
import project7 from '../assets/projects/iAmHere.png';
import project8 from '../assets/projects/financa.png';

interface NavProps {
    nav: boolean;
    setNav(nav: boolean): void;
}

const Projects=({nav,setNav}:NavProps)=>{

    return(
        <div id='projects' className="w-full  bg-white p-6">
            <h1 className="w-full text-3xl font-bold text-center text-[#00df9a]">Projects</h1>
            <div className="flex flex-wrap justify-center gap-7">
                <div className='mt-5 relative  rounded-[12px] max-w-[300px] h-100 p-5 border-solid border-2 border-[#00df9a]'>
                    <a href="https://github.com/mauriciocosta404/tasks-maneger-nextjs-typescript-nodejs-mysql.git" className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] h-100 p-5 relative border-solid border-2 border-[#00df9a] '>
                    <a href="https://github.com/mauriciocosta404/projecto-restaurante.git" className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project2} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Mauriciadas</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a restaurant manager, personal project. Made with html, css and javascript.</p>
                </div>
                <div className='mt-5 rounded-[12px] relative max-w-[300px] h-100 p-5 border-solid border-2 border-[#00df9a] '>
                    <a href="https://github.com/mauriciocosta404/menezescosta-projecto-awax-next.js-typescript.git" className='flex items-center mb-5 gap-1 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project3} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Awax</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a clone of interface, Personal project. Made with next.js, styled-components, typescript.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] relative h-100 p-5 border-solid border-2 border-[#00df9a] '>
                    <a href="" className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project4} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Streamming</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a music streamming, personal project. Made with html, css, api-rest.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] relative h-100 p-5 border-solid border-2 border-[#00df9a] '>
                    <a href="https://github.com/mauriciocosta404/Clima-js-API" className='flex items-center mb-5 gap-1 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project5} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Clima Api</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a weather controller, personal project. Made with html, css, javascript, api-rest.</p>
                </div>
                <div className='mt-5 rounded-[12px] relative max-w-[300px] h-100 p-5 border-solid border-2 border-[#00df9a] '>
                    <a href="https://github.com/mauriciocosta404/Calculadora-js.git" className='flex items-center mb-5 gap-1 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project6} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Calculadora</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a calculator, personal project. Made with html, css, javascript.</p>
                </div>
                <div className='mt-5 rounded-[12px] relative max-w-[300px] h-100 p-5 border-solid border-2 border-[#00df9a] '>
                <a href="https://github.com/mauriciocosta404/iAmHere-react-native.git" className='flex items-center gap-1 mb-5 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project7} className="rounded-[12px] m-auto" width={70} alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>IAmHere</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a participant manager, made following rocketseat. Made with react-native and typescript.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] h-100 relative p-5 border-solid border-2 border-[#00df9a] '>
                    <a href="https://github.com/mauriciocosta404/Gestor-financeiro-react-js" className='flex items-center mb-5 gap-1 absolute right-[-10px] rounded-md p-2 w-[130px] text-1xl bg-[#00df9a]'><FaGithub/>open project</a>
                    <img src={project8} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Financiada</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a finace manager, Pessoal project. Made with react.js, styled-components.</p>
                </div>
            </div>
        </div>
    )

    
}
export default Projects;