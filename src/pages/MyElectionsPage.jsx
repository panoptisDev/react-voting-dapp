import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/UI/SearchBar";
import ElectionsContainer from "../components/ElectionsContainer";

const MyElectionsPage = () => {
    return (
        <section className="w-full min-h-screen bg-[#7FFF5B] pb-[30px]">
            <div className="w-full top-0 sticky z-10">
                <Header />
            </div>

            <div className="w-full max-w-[1440px] mx-auto my-0 flex justify-between px-[30px] items-center mb-[120px] max-md-screen:flex-col max-md-screen:items-center">
                <h2 className="text-white text-4xl animate-slideright max-md-screen:mb-[40px] max-md-screen:text-center max-sm-screen:text-2xl">
                    Мои голосования
                </h2>

                <div className="w-fit animate-slideleft flex justify-end max-md-screen:justify-center">
                    <SearchBar />
                </div>
            </div>

            <ElectionsContainer />
        </section>
    );
};

export default MyElectionsPage;