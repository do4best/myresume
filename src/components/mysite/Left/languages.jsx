import { MdCastForEducation, MdDateRange, MdLocationPin } from "react-icons/md";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import { FaReact } from "react-icons/fa6";
import { BsCalendarDate } from "react-icons/bs";
import { BiLogoDjango } from "react-icons/bi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { DiJava, DiMongodb, DiMysql, DiPhp, DiPython } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import RangeFinder from "./rangeFinder";
function Languages() {
    return (<>
    
           <div className="ml-5 mt-10">
            <h1 className="text-3xl first-letter:underline ml-3">Skills</h1>
             <ul >
                            <li className=""><span className="flex items-center p-2 gap-2 "><AiOutlineJavaScript size={20} />
                                <span className="text-xl">Java Script</span></span>
                                <RangeFinder myValue={5}/></li>
                            <li><span className="flex p-1  items-center "><IoLogoHtml5 size={10} /><IoLogoCss3 size={10}/>
                                <span className="text-xl ml-2">HTML5 / CSS3/Tailwind/DaisyUi</span></span> <RangeFinder myValue={5}/></li>
                            <li><span className="flex p-2 gap-2 items-center "><FaReact size={20} />
                    <span className="text-xl">React JS</span></span>
                    <RangeFinder myValue={7}/></li>
                <li><span className="flex p-1 items-center "><BiLogoDjango size={10} /><DiPython size={10} />
                    <span className="text-xl">Django / Pthon</span></span>
                    <RangeFinder myValue={3}/></li>
                <li><span className="flex p-1  items-center "><DiMongodb size={10} /><DiMysql size={10}/>
                                <span className="text-xl">MongoDb / Mysql</span></span>
                                <RangeFinder myValue={3}/></li>
                             <li><span className="flex p-1  items-center "><SiTypescript size={10} /><DiPhp size={10}/>
                    <span className="text-xl">TypeScript / PHP</span></span>
                    <RangeFinder myValue={3}/></li>
                <li><span className="flex p-1  items-center "><DiJava size={10} />
                                <span className="text-xl">Java / C++/C</span></span>
                                <RangeFinder myValue={2}/></li>
                    </ul>
                    </div>
    </>);
}

export default Languages;