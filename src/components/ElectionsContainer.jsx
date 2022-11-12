import React, { useContext } from "react";
import { Context } from "../context";
import ElectionCard from "./ElectionCard";

const ElectionsContainer = () => {

    const {state} = useContext(Context);

    return (
        <div className="w-full px-[10px] flex flex-wrap justify-center gap-[60px] animate-slideup">
            {
                state.elections.map(election => <ElectionCard election={election} key={election.id}/>)
            }
        </div>
    );
};

export default ElectionsContainer;