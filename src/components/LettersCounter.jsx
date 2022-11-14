import React from "react";

const LettersCounter = ({curr, max}) => {
    return (
        <div className={curr > max ? "text-red-600" : "text-black"}>
            {curr}/{max}
        </div>
    );
};

export default LettersCounter;