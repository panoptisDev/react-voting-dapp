import React, { useState, useContext } from "react";
import { ContractFactory, ethers } from "ethers";
import FirestoreService from "../Services/FirestoreService";
import { MAX_ELECTION_TITLE_LENGTH, ELECTION_CONTRACT_ABI, ELECTION_CONTRACT_BYTE_CODE } from "../utils/constants";
import { getCurrentDate } from "../utils/funcs";
import { Context } from "../context";
import Header from "../components/Header";
import LettersCounter from "../components/LettersCounter";

const CreateElectionPage = () => {

    const {state} = useContext(Context);

    const [electionTitle, setElectionTitle] = useState("");
    const [candidateName, setCandidateName] = useState("");
    const [candidates, setCandidates] = useState([]);

    const addCandidate = (e) => {
        e.preventDefault();

        const newCandidate = {
            id: Date.now(),
            name: candidateName,
        };

        setCandidates([
            ...candidates,
            newCandidate
        ]);

        setCandidateName("");
    };

    const removeCandidatre = (e, id) => {
        e.preventDefault();
        setCandidates(state => state.filter((candidate) => candidate.id !== id));
    };

    const deployElectionSmartContract = async (e, title) => {
        e.preventDefault();

        if (title.trim().length) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            const factory = new ContractFactory(
                ELECTION_CONTRACT_ABI, 
                ELECTION_CONTRACT_BYTE_CODE, 
                provider.getSigner()
            );

            const electionSmartContract = await factory.deploy(title);

            setElectionTitle("");

            electionSmartContract.deployed().then(contract => {
                const newElection = {
                    title: title,
                    address: contract.address,
                    owner: state.userAddress,
                    date: getCurrentDate(),
                    gif: "https://media.giphy.com/media/cPl6Fw5GSRWcrWMyDK/giphy.gif"
                };

                FirestoreService.addElection(newElection);
            });
        }
    };

    return (
        <section className="w-full min-h-screen bg-orange-300">
            <div className="w-full top-0 sticky z-10">
                <Header />
            </div>

            <div className="w-full flex justify-center mb-[60px]">
                <h2 className="text-white text-4xl text-center animate-slideright max-2sm-screen:text-2xl">
                    Новое голосование
                </h2>
            </div>

            <div className="w-full flex justify-center px-[10px]">
                <form className="w-full max-w-[1000px] flex flex-col items-center gap-[60px] animate-slideup">
                    <div className="flex gap-6">
                        <input 
                            value={electionTitle}
                            onChange={(e) => setElectionTitle(e.target.value)}
                            type="text" 
                            placeholder="Название..."
                            className="w-full text-2xl max-2sm-screen:text-xl bg-transparent outline-none border-b-2 border-b-white placeholder:text-white placeholder:text-opacity-50"
                        />

                        <LettersCounter 
                            curr={electionTitle.length} 
                            max={MAX_ELECTION_TITLE_LENGTH}
                        />
                    </div>

                    <div className="flex gap-6 items-center">
                        <input 
                            value={candidateName}
                            onChange={(e) => setCandidateName(e.target.value)}
                            type="text" 
                            placeholder="Имя кандидата..."
                            className="w-full text-2xl max-2sm-screen:text-xl bg-transparent outline-none border-b-2 border-b-white placeholder:text-white placeholder:text-opacity-50"
                        />

                        {/* <LettersCounter 
                            curr={candidateName.length} 
                            max={16}
                        /> */}

                        <button className="nes-btn is-success py-1 px-2 text-xl max-3sm-screen:text-xs" onClick={addCandidate}>
                            +
                        </button>
                    </div>

                    <div className="flex flex-col items-center max-h-[200px] overflow-y-auto gap-6 w-[50%]">
                        {
                            !candidates.length ? <p>Пока нет кандидатов</p> :
                            candidates.map((candidate) => <div className="text-xl border-4 p-2 border-white w-full flex justify-between items-center">{candidate.name} <button onClick={(e) => removeCandidatre(e, candidate.id)} className="nes-btn is-error p-0 text-xl max-3sm-screen:text-xs">x</button></div>)
                        }
                    </div>
                    

                    <button 
                        className="nes-btn p-1 max-3sm-screen:text-xs"
                        onClick={(e) => deployElectionSmartContract(e, electionTitle)}
                    >
                        Создать
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateElectionPage;