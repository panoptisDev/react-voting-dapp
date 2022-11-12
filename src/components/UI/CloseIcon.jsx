import React from "react";

const CloseIcon = () => {
    return (
        <div className="relative cursor-pointer">
            <div className="w-[20px] h-1 bg-white rotate-[45deg]"></div>
            <div className="w-[20px] h-1 bg-white rotate-[-45deg] absolute top-0 left-0"></div>
        </div>
    );
};

export default CloseIcon;