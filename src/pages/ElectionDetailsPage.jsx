import React, { useEffect, useState, useContext } from "react";
import { Context } from "../context";
import { useParams } from "react-router-dom";
import { ethers } from "ethers";
import { getTruncatedAddress, parseCandidates } from "../utils/funcs";
import { ELECTION_CONTRACT_ABI } from "../utils/constants"
import SettingsIcon from "../assets/images/settings-icon.svg";
import CloseIcon from "../components/UI/CloseIcon";
import CandidatesContainer from "../components/CandidatesContainer";
import Header from "../components/Header";
import Modal from "../components/UI/Modal";

const ElectionDetailsPage = () => {

    const {address} = useParams();

    const {state} = useContext(Context);

    const [election, setElection] = useState({
        title: "",
        candidates: [],
        voters: [],
        owner: ""
    });

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [modalState, setModalState] = useState({
        candidate: "",
        voter: ""
    });

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider);

        (async () => {
            const title = await numberContract.electionTitle();
            const candidates = await numberContract.getAllCandidates();
            const voters = await numberContract.getAllVoters();
            const owner = await numberContract.owner();

            setElection({
                ...election,
                title,
                candidates: parseCandidates(candidates),
                voters,
                owner
            });

        })();

    }, []);

    const addCandidate = async (e, candidateName) => {
        e.preventDefault();

        if (candidateName.trim().length) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider.getSigner());

            await numberContract.addCandidate(candidateName).then(val => alert("Added"));

            setModalState({
                ...modalState,
                voter: "",
                candidate: ""
            });
        }
    };

    const addVoter = async (e, voterAddress) => {
        e.preventDefault();

        if (voterAddress.trim().length) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider.getSigner());

            await numberContract.authorizeVoter(voterAddress).then(val => alert("added"));

            setModalState({
                ...modalState,
                voter: "",
                candidate: ""
            });
        };
    };

    const vote = async (candidateID) => {

        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider.getSigner());

        await numberContract.vote(candidateID).then(val => alert("voted"));
    };

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
                
                <CandidatesContainer candidates={election.candidates} electionOwner={election.owner} vote={vote} />
            </div>

            <button className={"nes-btn absolute top-[60px] right-3 cursor-pointer p-0 " + `${state.userAddress === election.owner ? "" : "hidden"}`} onClick={() => setIsModalVisible(true)}>
                <img 
                    src={SettingsIcon} 
                    alt="settings" 
                    className="w-[30px] h-[30px] "
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

                <main className="w-full flex gap-5">
                    <div className="w-[50%] flex flex-col items-center">
                        <p className="mb-[30px]">
                            Голосующие
                        </p>

                        <form action="#" className="flex gap-2 w-full mb-[40px] max-md-screen:flex-col">
                            <input 
                                value={modalState.voter}
                                onChange={(e) => setModalState({...modalState, voter: e.target.value})}
                                type="text"
                                placeholder="Добавить голосующего"
                                className="w-full p-1 border-4 border-black outline-none"
                            />

                            <button className="nes-btn p-0" onClick={(e) => addVoter(e, modalState.voter)}>
                                Добавить
                            </button>
                        </form>

                        <div className="flex flex-col w-full items-center h-full max-h-[300px] min-h-[300px] overflow-y-auto">
                            {
                                !election.voters.length ? <p className="opacity-60 text-center">Голосующих нет нет</p> :
                                election.voters.map(addr => <p>{addr.slice(0, 10)}...{addr.slice(36)}</p>)
                            }
                        </div>
                    </div>

                    <div className="w-[50%] flex flex-col items-center">
                        <p className="mb-[30px]">
                            Кандидаты
                        </p>

                        <form action="#" className="flex gap-2 w-full mb-[40px] max-md-screen:flex-col">
                            <input 
                                value={modalState.candidate}
                                onChange={(e) => setModalState({...modalState, candidate: e.target.value})}
                                type="text"
                                placeholder="Добавить кандидата"
                                className="w-full p-1 border-4 border-black outline-none"
                            />

                            <button className="nes-btn p-0" onClick={(e) => addCandidate(e, modalState.candidate)}>
                                Добавить
                            </button>
                        </form>

                        <div className="flex flex-col gap-3 w-full items-center h-full max-h-[300px] min-h-[300px] overflow-y-auto">
                            {
                                !election.candidates.length ? <p className="opacity-60 text-center">Кандидатов нет</p> :
                                election.candidates.map(candidate => <p>{candidate.name}</p>)
                            }
                        </div>
                    </div>
                </main>
            </Modal>
        </section>
    );
};

export default ElectionDetailsPage;