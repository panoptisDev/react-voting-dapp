import React from "react";
import ElectionCard from "./ElectionCard";
import Loader from "./UI/Loader";

const ElectionsContainer = ({elections}) => {
    return (
        <div className="w-full px-[10px] flex flex-wrap justify-center gap-[60px] animate-slideup">
            {
                !elections.length ? <Loader /> : 
                elections.map(election => <ElectionCard election={election} key={election.address}/>)
            }
        </div>
    );
};

export default ElectionsContainer;