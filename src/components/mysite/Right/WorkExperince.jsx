import {MdDateRange, MdLocationPin } from "react-icons/md";
import { LinkPreview } from "@dhaiwat10/react-link-preview";
function WorkExperince() {
    return (<>
        <section>
        <h1 className="text-2xl first-letter:underline p-5">Work Experience</h1>
        
        <p className="ml-5">I have developed this  <a href="https://movie-project-olive.vercel.app" target="_blank" className=" font-bold text-accent hover:bg-orange-400 hover:underline">project</a>  <LinkPreview url="https://movie-project-olive.vercel.app" width={'400px'}/>using React Js with tailwind and tried to exercise all the
knowledge which is needed to demonstrate this demo which is still need some make up.
i compassion to built commercials websites. I will try my best to be fruit full for your
            company if a chance is give.</p>
        </section>
         <div className="divider"></div>
        <section>
            <div className="pl-5">
            <h1 className="text-xl first-letter:underline ">Web Master</h1>
            <h1 className=" first-letter:underline pt-2 "><LinkPreview url="https://www.raviscientifictraders.com/"/><a href="https://www.raviscientifictraders.com/" target="_blank" className="text-accent hover:underline">Ravi Scientific Traders</a></h1>
     
            </div>
            <div className="flex align-center ml-2 sm:ml-5 mt-3"><MdDateRange size={20} /><p className="ml-2 sm:ml-5">August 2017 - January,2025</p><span className="ml-2 sm:ml-60 flex align-center "><MdLocationPin size={20} /> Lahore,Pk</span></div>
            <ul className="p-5">
            <li>I was a web master as this site is built in Word Press and i only manipulate
                    the template.</li>
                <li>Responsible for the items designing in PS and upload them.</li></ul></section>
         <div className="divider"></div>
          <section>
            <div className="pl-5">
            <h1 className="text-xl first-letter:underline ">Web Master</h1>
            <h1 className=" first-letter:underline pt-2 "><a href="https://www.anmolscientific.com/" target="_blank" className="text-accent hover:underline">Anmol Scientific Co.</a></h1>
     
            </div>
            <div className="flex align-center ml-2 sm:ml-5 mt-3"><MdDateRange size={20} /><p className="ml-2 sm:ml-5">August 2017 - January,2024</p><span className="ml-5 sm:ml-60 flex align-center "><MdLocationPin size={20} /> Lahore,Pk</span></div>
            <ul className="p-5">
            <li>Being a web master i manage another website using Word Press</li>
            </ul></section>
        <div className="divider"></div>
        <section>
            <div className="pl-5">
            <h1 className="text-xl first-letter:underline ">Front End Developer</h1>
            <h1 className=" first-letter:underline pt-2 "><a href="" target="_blank" className="text-accent hover:underline">T Jay Mobiles.</a></h1>
     
            </div>
            <div className="flex align-center ml-2 sm:ml-5 mt-3"><MdDateRange size={20} /><p className="ml-2 sm:ml-5">July 2004 - January,2005</p><span className="ml-5 sm:ml-65 flex align-center "><MdLocationPin size={20} /> Lahore,Pk</span></div>
            <ul className="p-5">
            <li>Developed user interfaces with pure HTML4, and CSS3 using Tables,
which improved user satisfaction by 61%.</li>
            </ul></section>
        
        
        
    </>    );
}

export default WorkExperince;