import React, { useContext, useState, useMemo } from "react";
import { Context } from "../context";
import Header from "../components/Header";
import SearchBar from "../components/UI/SearchBar";
import ElectionsContainer from "../components/ElectionsContainer";

const ActiveElectionsPage = () => {

    const {state} = useContext(Context);

    const [searchQuery, setSearchQuery] = useState("");

    const activeElections = useMemo(() => {
        return state.elections.filter(election => {
            if (election.title.toLowerCase().includes(searchQuery.toLowerCase().trim())) {
                return election;
            }
        });
    }, [state.elections, searchQuery]);

    return (
        <section className="w-full min-h-screen bg-[#58127b] pb-[30px]">
            <div className="sticky top-0 z-10 w-full">
                <Header />
            </div>

            <div className="w-full max-w-[1440px] mx-auto my-0 flex justify-between px-[30px] items-center mb-[120px] max-md-screen:flex-col max-md-screen:items-center">
                <h2 className="text-white text-4xl animate-slideright max-md-screen:mb-[40px] max-md-screen:text-center max-sm-screen:text-2xl">
                    Active votes
                </h2>

                <div className="flex justify-end w-fit animate-slideleft max-md-screen:justify-center">
                    <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                </div>
            </div>

            <ElectionsContainer elections={activeElections} />
        </section>
    );
};

export default ActiveElectionsPage;