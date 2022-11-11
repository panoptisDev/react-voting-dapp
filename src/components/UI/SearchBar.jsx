import React from "react";
import ZoomImage from "../../assets/images/zoom-image.svg";

const SearchBar = () => {
    return (
        <div className="bg-white border-[4px] border-black flex gap-2 w-full max-w-[450px]">
            <img 
                src={ZoomImage} 
                alt="zoom" 
            />

            <input 
                type="text" 
                name="search" 
                className="bg-transparent outline-none w-full"
                placeholder="Поиск..."
            />
        </div>
    );
};

export default SearchBar;