import Laptop from '../assets/js.jpg';
import { NavProps } from './type';

const Analytics = ({ nav, setNav }: NavProps)=>{

 return(
     <div onClick={() => { setNav(false) }} id='about' className=" w-full bg-white py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} alt="laptop" className='w-[500px] mx-auto my-4'/>
                <div className='flex flex-col justify-center '>
                    <p className='text-[#00df9a]'>MAURICIO ANTÓNIO DA COSTA</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Sobre mim</h1>
                    <p className='text-justify'>Sou Desenvolvedor Web, ambicioso, hiperfocado e buscando crescer na área. Sempre fui um estudante/pesquisador autodidata em diversas áreas (colho muitos benefícios até hoje) mas agora estou apontando tudo que tenho e me dedicando ao máximo na área digital.</p>
                    <a className='text-center bg-black text-[#00df9a] w-[200px] rounded-md mx-auto  md:mx-0 font-medium my-6 p-2'  href={require('../assets/resume/resume2.pdf')} download='resume2.pdf'>baixar CV</a>
                </div>
            </div>
        </div>
    );
}
export default Analytics;