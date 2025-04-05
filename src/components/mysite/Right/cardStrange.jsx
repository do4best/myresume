import { useEffect, useRef } from "react";
import { IoMdClose } from "react-icons/io";

function CardStrange({onClose}) {
    const modelRef = useRef();
    useEffect(()=>{
          // Open the dialog when the component is mounted
          if (modelRef.current) {
            modelRef.current.showModal();}
            return () => {
                if (modelRef.current) {
                    modelRef.current.close();
                }
            };

    },[])
    const closeModel=(e)=>{
        if(modelRef.current === e.target){
            onClose()
        }
    }
    return ( <>
    <div className="fixed inset-0 bg-blue bg-opacity-30 backdrop-blur-sm flex justify-center items-center">

  
<dialog ref={modelRef} onClick={closeModel} className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={onClose}>✕</button>
    </form>
    <h3 className="font-bold text-xl text-teal-600">Thank You Visiting my Site!</h3>
    <p className="py-4">Click on ✕ button to close</p>
  </div>
</dialog>
</div>
   </> );
}

export default CardStrange;