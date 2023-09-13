import { forwardRef, useImperativeHandle, useState } from "react";

function Modal (props,ref) {

    const [openModal, setOpenModal] = useState(false);

    useImperativeHandle(ref, ()=> ({
        openModal: () => setOpenModal(true)
    }))


    if(!openModal) return null;
   
    return <div className="bordered">
        <p>This is a Modal!</p>
        <button onClick={() => setOpenModal(false)}> Close </button>
    </div>
   
}

export default forwardRef( Modal);
