import tecnologiesImage from "../mock/technologiesMock";
import { NavProps } from "./type";

const Tecnologies = ({ nav, setNav }: NavProps) => {
    return (
        <div onClick={() => { setNav(false) }} id='tecnologies' className=' w-full  bg-white'>
            <div className="max-w-[1240px] mx-auto grid grid-cols-8 py-16 px-4">
                {
                    tecnologiesImage.map(({src,alt})=>(
                        <img src={src} alt={alt}/>
                    ))
                }
            </div>
        </div>
    )
}
export default Tecnologies;