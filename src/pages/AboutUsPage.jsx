import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import Header from "../components/Header";

const AboutUsPage = () => {
    return (
        <section className="w-full min-h-screen bg-blue-300">
            <div className="sticky top-0 z-10 w-full">
                <Header />
            </div>

            <div className="w-full flex justify-center mb-[30px]">
                <h2 className="text-4xl text-center animate-slideright max-3sm-screen:text-2xl">
                    VoteChain v1.0
                </h2>
            </div>

            <div className="w-full max-w-[1440px] my-0 mx-auto px-[120px] flex justify-center mb-[60px] max-2sm-screen:px-[30px]">
                <p className="leading-8 text-center animate-slideleft max-2sm-screen:text-xl max-3sm-screen:text-xs">
                    VoteChain - is an open-source free voting platform based on blockchain technology.
                    The goal of the project is to make the electronic voting system as open and honest as possible.
                    Therefore, if you have suggestions for improving our service, write to us and maybe we
                    Let's think about your ideas :)
                </p>
            </div>

            <div className="w-full flex justify-center mb-[60px] animate-slideup px-[10px]">
                <FeedbackForm />
            </div>

            <footer className="w-full max-w-[1440px] flex justify-end my-0 mx-auto p-2">
                <p className="text-xs">Made with <i className="nes-icon is-small heart"></i> in Scandinavia</p>
            </footer>
        </section>
    );
};

export default AboutUsPage;