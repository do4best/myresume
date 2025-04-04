
import Footer from "./footer/footer";
import LeftSide from "./Left/leftSide";
import MainNaveBar from "./MainNaveBar";
import RightSide from "./Right/RightSide";

function MainSite() {
    return (<>
    <div className="container m-auto ">
    
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-3">
                <LeftSide/>
            </div>
            <div className="col-span-9"><RightSide /></div>
           
        </div>
         <Footer/>
         </div>
    </>);
}

export default MainSite;