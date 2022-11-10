import React from "react";
import ElectionCard from "./ElectionCard";

const ElectionsContainer = () => {
    return (
        <div className="w-full px-[10px] flex flex-wrap justify-center gap-[60px]">
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
            <ElectionCard />
        </div>
    );
};

export default ElectionsContainer;