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
import Loader from "../components/UI/Loader";

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

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const numberContract = new ethers.Contract(address, ELECTION_CONTRACT_ABI, provider);

        setIsLoading(true);

        (async () => {
            setIsLoading(true);

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

            setIsLoading(false);

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

    return isLoading ? <Loader /> : (
        <section className="w-full min-h-screen bg-[#FF9798]">
            <div className="w-full min-h-screen election-bg-image">
                <div className="sticky top-0 z-10 w-full">
                    <Header />
                </div>

                <div className="w-full flex flex-col items-center mb-[40px]">
                    <h2 className="text-white text-4xl mb-[20px] animate-slideright text-center max-sm-screen:text-3xl max-3sm-screen:text-xl">
                        {election.title}
                    </h2>
                    
                    <a href={"https://goerli.etherscan.io/address/" + address} target="_blank" rel="noreferrer" className="text-2xl text-black transition-all duration-300 animate-slideleft hover:text-black max-3sm-screen:text-xl">
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
                        Voting settings
                    </p>

                    <button onClick={() => setIsModalVisible(false)}>
                        <CloseIcon />
                    </button>
                </header>

                <main className="flex w-full gap-5">
                    <div className="w-[50%] flex flex-col items-center">
                        <p className="mb-[30px]">
                            Voters
                        </p>

                        <form action="#" className="flex gap-2 w-full mb-[40px] max-md-screen:flex-col">
                            <input 
                                value={modalState.voter}
                                onChange={(e) => setModalState({...modalState, voter: e.target.value})}
                                type="text"
                                placeholder="Add voter"
                                className="w-full p-1 border-4 border-black outline-none"
                            />

                            <button className="p-0 nes-btn" onClick={(e) => addVoter(e, modalState.voter)}>
                                Добавить
                            </button>
                        </form>

                        <div className="flex flex-col w-full items-center h-full max-h-[300px] min-h-[300px] overflow-y-auto">
                            {
                                !election.voters.length ? <p className="text-center opacity-60">Голосующих нет нет</p> :
                                election.voters.map(addr => <p>{addr.slice(0, 10)}...{addr.slice(36)}</p>)
                            }
                        </div>
                    </div>

                    <div className="w-[50%] flex flex-col items-center">
                        <p className="mb-[30px]">
                            Candidates
                        </p>

                        <form action="#" className="flex gap-2 w-full mb-[40px] max-md-screen:flex-col">
                            <input 
                                value={modalState.candidate}
                                onChange={(e) => setModalState({...modalState, candidate: e.target.value})}
                                type="text"
                                placeholder="Add candidate"
                                className="w-full p-1 border-4 border-black outline-none"
                            />

                            <button className="p-0 nes-btn" onClick={(e) => addCandidate(e, modalState.candidate)}>
                                Add
                            </button>
                        </form>

                        <div className="flex flex-col gap-3 w-full items-center h-full max-h-[300px] min-h-[300px] overflow-y-auto">
                            {
                                !election.candidates.length ? <p className="text-center opacity-60">Кандидатов нет</p> :
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