import React from "react";
import CandidateCard from "./CandidateCard";

const CandidatesContainer = ({candidates}) => {
    return (
        <div className="w-full max-w-[1600px] my-0 mx-auto px-[30px] flex flex-col items-center animate-slideup">
            {
                !candidates.length ? <p className="mt-[36px] text-center">Пока нет кандидатов</p> :
                candidates.map(candidate => <CandidateCard candidate={candidate} />)
            }
        </div>
    );
};

export default CandidatesContainer;