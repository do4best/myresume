
import { useEffect, useState } from "react";
import Footer from "./footer/footer";
import LeftSide from "./Left/leftSide";

import RightSide from "./Right/RightSide";
import CardStrange from "./Right/cardStrange";

function MainSite() {
    const [showModel,setShowModel] = useState(false)
    useEffect(()=>{
    
          // Simulate a delay to load the component
        const timer = setTimeout(() => {
        
            setShowModel(true); // Update state to show the component
        }, 4000);

        return () => clearTimeout(timer); // Cleanup the timer on component unmount
   
          
    },[])
    return (<>
       
    <div className="container m-auto ">

        <div className="grid grid-cols-1 sm:grid-cols-12">
             {/* Conditionally render CardStrange */}

            <div className="col-span-3">
                <LeftSide/>
            </div>
            <div className="col-span-9"><RightSide /></div>
           
        </div>
    
         <Footer/>
         {showModel && <CardStrange onClose={() => setShowModel(false)} />}
         </div>
          </>);
}

export default MainSite;