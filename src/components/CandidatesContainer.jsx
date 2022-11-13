import React from "react";
import CandidateCard from "./CandidateCard";

const CandidatesContainer = () => {
    return (
        <div className="w-full max-w-[1600px] my-0 mx-auto px-[30px] flex flex-col items-center animate-slideup">
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
            <CandidateCard />
        </div>
    );
};

export default CandidatesContainer;