import { useEffect, useState } from "react";
import WorkExperince from "./WorkExperince";
import { FaLightbulb, FaRegLightbulb } from "react-icons/fa6";

function RightSide() {
    const [dark,setDark] = useState(localStorage.getItem("theme")|| 'light')
    useEffect(()=>{
        localStorage.setItem("theme",dark)
        
        document.querySelector("html").setAttribute("data-theme",dark)
    },[dark])
    const toggleTheme = () => {
        setDark(dark === 'light' ? 'dark' : 'light');
    };

    return (<>
    
        <div> <span className="absolute right-25 mt-5" onClick={toggleTheme}>{!dark === 'light'?<FaRegLightbulb size={30}/>:<FaLightbulb size={30}/>}</span>
            <h1 className="text-2xl p-5">CAREER OBJECTIVE</h1>
            <p className="p-5">
Software engineer with a proven ability to adapt in both self-starting and
collaborative environments while staying focused on achieving high quality
results under strict deadlines. I determined to exercise my skill in your organization if a chance is given.
            </p>
            <WorkExperince/>
        
        </div></>);
}

export default RightSide;