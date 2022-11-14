import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { getTruncatedAddress } from "../utils/funcs";
import { ELECTION_CONTRACT_ABI } from "../utils/constants"
import SettingsIcon from "../assets/images/settings-icon.svg";
import CloseIcon from "../components/UI/CloseIcon";
import CandidatesContainer from "../components/CandidatesContainer";
import Header from "../components/Header";
import Modal from "../components/UI/Modal";

const ElectionDetailsPage = () => {

    const {address} = useParams();

    const [election, setElection] = useState({
        title: "",
        candidates: [],
        voters: [],
        owner: ""
    });

    const [isModalVisible, setIsModalVisible] = useState(false);

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

            <button className="nes-btn absolute top-[60px] right-3 cursor-pointer p-0" onClick={() => setIsModalVisible(true)}>
                <img 
                    src={SettingsIcon} 
                    alt="settings" 
                    className="w-[30px] h-[30px]"
                />
            </button>

            <Modal isVisible={isModalVisible}>
                <header className="w-full flex justify-between mb-[40px]">
                    <p>
                        Настройки голосования
                    </p>

                    <button onClick={() => setIsModalVisible(false)}>
                        <CloseIcon />
                    </button>
                </header>

                <main className="w-full">
                    <div className="w-[50%] flex flex-col items-center">
                        <p className="mb-[30px]">
                            Голосующие
                        </p>

                        <form action="#" className="flex gap-2 w-full mb-[40px] max-md-screen:flex-col">
                            <input 
                                type="text"
                                placeholder="Добавить голосующего"
                                className="w-full p-1 border-4 border-black outline-none"
                            />

                            <button className="nes-btn p-0">
                                Добавить
                            </button>
                        </form>

                        <div className="flex flex-col w-full items-center h-full max-h-[300px] min-h-[300px] overflow-y-auto">
                            {/* // election.voters.map(voter => <VoterCard />) */}
                            <p className="opacity-60 text-center">Голосующих нет</p>
                        </div>
                    </div>

                    <div>

                    </div>
                </main>
            </Modal>
        </section>
    );
};

export default ElectionDetailsPage;