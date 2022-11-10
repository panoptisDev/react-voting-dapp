import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/UI/SearchBar";
import ElectionsContainer from "../components/ElectionsContainer";

const ActiveElectionsPage = () => {
    return (
        <section className="relative">
            <div className="w-full">
                <Header />
            </div>

            <div className="w-full flex justify-between px-[30px] items-center mb-[120px]">
                <h2 className="text-white text-4xl">
                    Активные голосования
                </h2>

                <SearchBar />
            </div>

            <ElectionsContainer />
        </section>
    );
};

export default ActiveElectionsPage;