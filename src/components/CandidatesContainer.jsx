import React from "react";
import CandidateCard from "./CandidateCard";

const CandidatesContainer = ({candidates, electionOwner, vote}) => {
    return (
        <div className="w-full max-w-[1600px] my-0 mx-auto px-[30px] flex flex-col items-center animate-slideup">
            {
                !candidates.length ? <p className="mt-[36px] text-center">Пока нет кандидатов</p> :
                candidates.map((candidate, index) => <CandidateCard candidate={candidate} vote={() => vote(index)} electionOwner={electionOwner} key={candidate.id} />)
            }
        </div>
    );
};

export default CandidatesContainer;