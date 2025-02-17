import { useEffect, useRef } from "react";
import { createPortal } from "react-dom"

const Modal = ({children}) => {

    const elRef = useRef(null);
    if(elRef.current == null) {
        elRef.current = document.createElement("div");
    }

    useEffect(() => {
        const modalRoot = document.getElementById("modal");
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    }, [])

    return (
        createPortal(<div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">{children}</div>, elRef.current)
    );
}

export default Modal;
