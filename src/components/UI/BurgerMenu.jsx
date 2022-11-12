import React from "react";

const BurgerMenu = ({...props}) => {
    return (
        <div className="hidden flex-col gap-1 cursor-pointer max-md-screen:flex my-[7px]" {...props}>
            <div className="w-[25px] h-1 bg-white"></div>
            <div className="w-[25px] h-1 bg-white"></div>
            <div className="w-[25px] h-1 bg-white"></div>
        </div>
    );
};

export default BurgerMenu;