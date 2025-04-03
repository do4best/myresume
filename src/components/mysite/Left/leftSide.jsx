import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { IoLogoLinkedin } from "react-icons/io";
import Education from "./Education";
import Lanuguages from "./languages";
import { AiOutlineGlobal } from "react-icons/ai";
function LeftSide() {
    return (<>
    <div className="bg-blue-500 text-black rounded-2xl box-content m-2 shadow-2xl skeleton">    <h1 className="text-2xl p-5">
        <div className="text-3xl font-bold">Meer Afzal</div>
            <div>Jr.Web Developer</div></h1>
            <ul className="ml-5">
                <li className=""><span className="flex items-center p-2 gap-2 "><MdEmail size={20} />
                    <span className="text-xl">afzalshah@gmail.com</span></span></li>
                <li><span className="flex p-2 gap-2 items-center "><MdLocalPhone size={20} />
                    <span className="text-xl">+92320-4522701</span></span></li>
                <li><span className="flex p-2 gap-2 items-center "><MdLocationPin size={20} />
                    <span className="text-xl">Lahore.Pk</span></span></li>
                  <li><span className="flex p-2 gap-2 items-center "><AiOutlineGlobal size={20} />
                    <span className="text-xl">afzalshah@gmail.com</span></span></li>
            </ul>
        
        </div>
        <Education />
        <Lanuguages />
    
    </>);
}

export default LeftSide;