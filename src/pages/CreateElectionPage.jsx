import React from "react";
import Header from "../components/Header";
import LettersCounter from "../components/LettersCounter";

const CreateElectionPage = () => {
    return (
        <section className="w-full min-h-screen bg-[#F2C94C]">
            <div className="w-full top-0 sticky z-10">
                <Header />
            </div>

            <div className="w-full flex justify-center mb-[60px]">
                <h2 className="text-white text-4xl text-center animate-slideright max-2sm-screen:text-2xl">
                    Новое голосование
                </h2>
            </div>

            <div className="w-full flex justify-center px-[10px]">
                <form className="w-full max-w-[1000px] flex flex-col items-center gap-[30px] animate-slideup">
                    <div className="flex gap-3">
                        <input 
                            type="text" 
                            placeholder="Название..."
                            className="w-full text-2xl max-2sm-screen:text-xl bg-transparent outline-none border-b-2 border-b-white placeholder:text-white placeholder:text-opacity-50"
                        />

                        <LettersCounter curr={0} max={24}/>
                    </div>

                    <button className="nes-btn p-1 max-3sm-screen:text-xs">
                        Создать
                    </button>
                </form>
            </div>
        </section>
    );
};

export default CreateElectionPage;