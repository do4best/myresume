import { MdCastForEducation,MdDateRange,MdLocationPin } from "react-icons/md";

function Education() {
    return (<>
        <div>
    
     <ul className="ml-5 mt-10">
                    <li className=""><span className="flex items-center p-2 gap-2 "><MdCastForEducation size={20} />
                        <span className="text-xl">Graduation,PU</span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><MdDateRange size={20} />
                        <span className="text-xl">1997,September-1999 March</span></span></li>
                    <li><span className="flex p-2 gap-2 items-center "><MdLocationPin size={20} />
                        <span className="text-xl">Lahore.Pk</span></span></li>
                     
            </ul>
        </div>
         <div className="divider"></div>
    </>);
}

export default Education;