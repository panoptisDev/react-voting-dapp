import React from "react";

const ElectionCard = () => {
    return (
        <div className="bg-black border-8 border-black w-full max-w-[250px] cursor-pointer transition-all duration-300 hover:translate-y-[-3px] hover:shadow-[10px_9px_0px_#000] max-sm-screen:pointer-events-none">
            <div className="w-full bg-black mb-1 flex justify-between">
                <div className="w-fit flex gap-2 items-center">
                    <div className="w-1 h-1 p-1 rounded-full border-[1px] border-white bg-transparent"></div>
                    <div className="w-1 h-1 p-1 rounded-full border-[1px] border-white bg-transparent"></div>
                    <div className="w-1 h-1 p-1 rounded-full border-[1px] border-white bg-transparent"></div>
                </div>

                <p className="text-white text-xs">
                    0x2a...4b7
                </p>
            </div>

            <img 
                src="https://media.giphy.com/media/3ohs7HdhQA4ffttvrO/giphy.gif" 
                alt="vote" 
                className="w-full h-[220px] mb-2"
            />

            <div className="p-1">
                <p className="text-white text-[13px] mb-3">Кто съел деда?</p>
                <p className="text-white text-[9px]">10.11.2022</p>
            </div>
        </div>
    );
};

export default ElectionCard;