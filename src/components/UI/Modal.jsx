import React from "react";

const Modal = ({isVisible, ...props}) => {
    return (
        <div className={"z-40 absolute top-0 left-0 bg-black bg-opacity-50 w-full min-h-screen flex flex-col justify-center items-center px-3 " + `${isVisible ? "" : "hidden"}`}>
            <div className="border-4 border-black w-full max-w-[1200px] p-2 bg-white">
                {props.children}
            </div>
        </div>
    );
};

export default Modal;