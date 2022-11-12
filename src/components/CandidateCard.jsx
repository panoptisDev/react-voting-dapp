import React from "react";
import VoteImage from "../assets/images/vote-image.png";

const CandidateCard = () => {
    return (
        <div className="w-full max-w-[80%] flex max-3sm-screen:flex-col justify-between items-center gap-2 border-4 border-white p-2 bg-[#FF9798] cursor-pointer">
            <div className="w-full flex gap-2 items-center justify-between max-sm-screen:flex-col max-sm-screen:items-start max-sm-screen:gap-2 max-3sm-screen:items-center">
                <p className="text-white text-xl max-2sm-screen:text-xs">
                    Andrew
                </p>

                <p className="text-white text-xl max-2sm-screen:text-xs">
                    25 голосов
                </p>
            </div>

            <button className="nes-btn text-xs p-1 max-2sm-screen:text-[10px]">
                Голосовать
            </button>
        </div>
    );
};

export default CandidateCard;