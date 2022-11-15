import React from "react";
import FeedbackForm from "../components/FeedbackForm";
import Header from "../components/Header";

const AboutUsPage = () => {
    return (
        <section className="w-full min-h-screen bg-blue-300">
            <div className="w-full top-0 sticky z-10">
                <Header />
            </div>

            <div className="w-full flex justify-center mb-[30px]">
                <h2 className="text-4xl animate-slideright text-center max-3sm-screen:text-2xl">
                    VoteChain v1.0
                </h2>
            </div>

            <div className="w-full max-w-[1440px] my-0 mx-auto px-[120px] flex justify-center mb-[60px] max-2sm-screen:px-[30px]">
                <p className="text-center leading-8 animate-slideleft max-2sm-screen:text-xl max-3sm-screen:text-xs">
                    VoteChain - это open-source платформа свободного голосования, основанная на технологии блокчейн.
                    Цель проекта - сделать систему электронных голосований максимально открытой и честной.
                    Поэтому, если у вас есть предложения по улучшению нашего сервиса, напишите нам и, может быть, мы 
                    подумаем над вашими идеями :)
                </p>
            </div>

            <div className="w-full flex justify-center mb-[60px] animate-slideup px-[10px]">
                <FeedbackForm />
            </div>

            <footer className="w-full max-w-[1440px] flex justify-end my-0 mx-auto p-2">
                <p className="text-xs">Сделано с <i className="nes-icon is-small heart"></i> в Хакасии</p>
            </footer>
        </section>
    );
};

export default AboutUsPage;