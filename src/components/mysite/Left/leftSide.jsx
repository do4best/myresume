import { MdEmail, MdLocalPhone, MdLocationPin } from "react-icons/md";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Education from "./Education";
import Languages from "./languages";
import { AiOutlineGlobal } from "react-icons/ai";
function LeftSide() {
    return (<>
    <div className="bg-blue-500 text-white rounded-2xl box-content m-2 shadow-2xl skeleton ">    <h1 className="text-2xl p-5">
        <div className="text-3xl font-bold">Meer Afzal</div>
            <div>Jr.Web Developer</div></h1>
            <ul className="ml-5">
                <li className=""><span className="flex items-center p-2 gap-2 "><MdEmail size={20} />
                    <span className="text-xl text-wrap"><a href="mailto:afzalshah319@gmail.com">afzalshah319@gmail.com</a></span></span></li>
                <li><span className="flex p-2 gap-2 items-center "><MdLocalPhone size={20} />
                    <span className="text-xl">+92320-4522701</span></span></li>
                <li><span className="flex p-2 gap-2 items-center "><MdLocationPin size={20} />
                    <span className="text-xl">Lahore.Pk</span></span></li>
                  <li><span className="flex p-2 gap-2 items-center "><AiOutlineGlobal size={20} />
                    <span className="text-xl"><a href="https://myresume-rho-six.vercel.app/" target="_blank">My Site</a></span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><FaLinkedin size={20} />
                    <span className="text-xl"><a href="https://www.linkedin.com/in/meer-afzal-b29932a3/" target="_blank">My Linkedin</a></span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><FaGithub size={20} />
                    <span className="text-xl"><a href="https://github.com/do4best" target="_blank">My GitHub</a></span></span></li>
            </ul>
        
        </div>
        <Education />
        <Languages />
    
    </>);
}

export default LeftSide;