 <div ref={modelRef} onClose={closeModel} className="card card-border bg-base-100 w-96">
        {/* <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"> */}
  {/* <div className="card-body"> */}
    <button onClick={onClose} className="place-self-end"><IoMdClose size={30}/></button>
    {/* <h2 className="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div> */}
  <dialog id="my_modal_2" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click outside to close</p>
  </div>
  <form method="dialog" className="modal-backdrop">
    <button>close</button>
  </form>
</dialog>
</div>
{/* </div> */}
    