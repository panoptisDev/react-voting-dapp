import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { getTruncatedAddress } from "../utils/funcs";
import { ELECTION_CONTRACT_ABI } from "../utils/constants"
import SettingsIcon from "../assets/images/settings-icon.svg";
import CandidatesContainer from "../components/CandidatesContainer";
import Header from "../components/Header";

const ElectionDetailsPage = () => {

    const {address} = useParams();

    const [election, setElection] = useState({
        title: "",
        candidates: [],
        voters: [],
        owner: ""
    });

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider);

        (async () => {
            const owner = await numberContract.owner();
            const title = await numberContract.electionTitle();
            const candidates = await numberContract.getAllCandidates();

            setElection({
                ...election,
                title,
                candidates,
                owner
            });

        })();

    }, []);

    return (
        <section className="w-full min-h-screen bg-[#FF9798]">
            <div className="w-full min-h-screen election-bg-image">
                <div className="w-full top-0 sticky z-10">
                    <Header />
                </div>

                <div className="w-full flex flex-col items-center mb-[40px]">
                    <h2 className="text-white text-4xl mb-[20px] animate-slideright text-center max-sm-screen:text-3xl max-3sm-screen:text-xl">
                        {election.title}
                    </h2>
                    
                    <a href={"https://goerli.etherscan.io/address/" + address} target="_blank" rel="noreferrer" className="text-black text-2xl transition-all duration-300 animate-slideleft hover:text-black max-3sm-screen:text-xl">
                        {getTruncatedAddress(address)}
                    </a>
                </div>
                
                <CandidatesContainer candidates={election.candidates} />
            </div>

            <button className="nes-btn absolute top-[60px] right-5 cursor-pointer p-0">
                <img 
                    src={SettingsIcon} 
                    alt="settings" 
                    className="w-[30px] h-[30px]"
                    />
                </button>
        </section>
    );
};

export default ElectionDetailsPage;