import rect from '../assets/skills/reactjs.png';
import html from '../assets/skills/html5.png';
import css from '../assets/skills/css3.png';
import js from '../assets/skills/js.png';
import next from '../assets/skills/nextjs.png';
import node from '../assets/skills/nodejs.png';
import git from '../assets/skills/git.png';
import figma from '../assets/skills/figma.png';

const Tecnologies = () => {
    return (
        <div className='w-full  bg-white'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-8 py-16 px-4">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={js} alt="" />
                <img src={rect} alt="" />
                <img src={next} alt="" />
                <img src={node} alt="" />
                <img src={git} alt="" />
                <img src={figma} alt="" />
        </div>
        </div>
    )
}
export default Tecnologies;