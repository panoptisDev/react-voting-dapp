import React from "react";
import ZoomImage from "../../assets/images/zoom-image.svg";

const SearchBar = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="bg-white border-[4px] border-black flex gap-2 w-full max-w-[400px] shadow-[10px_9px_0px_#000]">
            <img 
                src={ZoomImage} 
                alt="zoom" 
            />

            <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                type="text" 
                name="search" 
                className="bg-transparent outline-none w-full"
                placeholder="Поиск..."
            />
        </div>
    );
};

export default SearchBar;