import project1 from '../assets/projects/taskManager.jpg'; 

interface NavProps {
    nav: boolean;
    setNav(nav: boolean): void;
}

const Projects=({nav,setNav}:NavProps)=>{
    return(
        <div className="w-full  bg-white p-6">
            <h1 className=" w-full text-3xl text-center text-[#00df9a]">Projects</h1>
            <div className="flex flex-wrap justify-center gap-5">
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
                <div className='mt-5 rounded-[12px] max-w-[300px] p-5 border-solid border-2 border-[#00df9a] '>
                    <img src={project1} className="rounded-[12px]" alt="" />
                    <h2 className='w-full font-bold border-b-2 py-2  border-[#00df9a]'>Encode</h2>
                    <p className='text-[#ccc] lg:text-1xl text-justify'>this is a task manager, ordered by Genilson Araújo. Made with next.js, styled-components, typescript, node.js and mysql.</p>
                </div>
            </div>
        </div>
    )
}
export default Projects;