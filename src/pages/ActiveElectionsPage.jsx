import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/UI/SearchBar";
import ElectionsContainer from "../components/ElectionsContainer";

const ActiveElectionsPage = () => {
    return (
        <section className="w-ful pb-[30px]">
            <div className="w-full top-0 sticky z-10">
                <Header />
            </div>

            <div className="w-full max-w-[1440px] mx-auto my-0 flex justify-between px-[30px] items-center mb-[120px]">
                <h2 className="text-white text-4xl animate-slideright">
                    Активные голосования
                </h2>

                <div className="animate-slideleft">
                    <SearchBar />
                </div>
            </div>

            <ElectionsContainer />
        </section>
    );
};

export default ActiveElectionsPage;