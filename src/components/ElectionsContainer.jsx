import React, { useContext } from "react";
import { Context } from "../context";
import Loader from "./UI/Loader";
import ElectionCard from "./ElectionCard";

const ElectionsContainer = ({elections}) => {

    const {state} = useContext(Context);

    return (
        <div className="w-full px-[10px] flex flex-wrap justify-center gap-[60px] animate-slideup">
            {
                state.isElectionsFetching ? <Loader /> : !elections.length ? <p>Голосований не найдено</p> : 
                elections.map(election => <ElectionCard election={election} key={election.address}/>)
            }
        </div>
    );
};

export default ElectionsContainer;