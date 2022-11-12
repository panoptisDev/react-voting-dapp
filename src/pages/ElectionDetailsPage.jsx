import React from "react";
import CandidatesContainer from "../components/CandidatesContainer";
import Header from "../components/Header";

const ElectionDetailsPage = () => {
    return (
        <section className="w-full min-h-screen bg-[#FF9798]">
            <div className="w-full min-h-screen election-bg-image">
                <Header />

                <div className="w-full flex flex-col items-center mb-[40px]">
                    <h2 className="text-white text-4xl mb-[20px] animate-slideright text-center max-sm-screen:text-3xl max-3sm-screen:text-xl">
                        Кто съел деда?
                    </h2>
                    <a href="https://goerli.etherscan.io/" target="_blank" className="text-black text-2xl transition-all duration-300 animate-slideleft hover:text-black max-3sm-screen:text-xl">
                        0x2A1...81a
                    </a>
                </div>
                
                <CandidatesContainer />
            </div>
        </section>
    );
};

export default ElectionDetailsPage;