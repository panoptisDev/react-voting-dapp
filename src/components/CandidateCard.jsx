import React, { useContext } from "react";
import { Context } from "../context";

const CandidateCard = ({candidate, electionOwner, vote}) => {

    const {state} = useContext(Context);

    return (
        <div className="w-full max-w-[80%] flex max-3sm-screen:flex-col justify-between items-center gap-2 border-4 border-white p-2 bg-[#FF9798] cursor-pointer mb-4">
            <div className="flex items-center justify-between w-full gap-2 max-sm-screen:flex-col max-sm-screen:items-start max-sm-screen:gap-2 max-3sm-screen:items-center">
                <p className="text-xl text-white max-2sm-screen:text-xs">
                    {candidate.name}
                </p>

                <p className="text-xl text-white max-2sm-screen:text-xs">
                    {candidate.votes} voice(-s)
                </p>
            </div>

            <button onClick={vote} className={"nes-btn text-xs p-1 max-2sm-screen:text-[10px] " + `${state.userAddress === electionOwner ? "hidden" : ""}`}>
                Vote
            </button>
        </div>
    );
};

export default CandidateCard;