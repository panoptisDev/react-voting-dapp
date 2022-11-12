import React, { useState } from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./UI/BurgerMenu";
import CloseIcon from "./UI/CloseIcon";

const Header = () => {

    const [isMenuVisible, setIsMenuVisible] = useState(false);

    return (
        <header className="w-full bg-black mb-[100px]">
            <div className="w-full max-w-[1600px] mx-auto my-0 flex justify-between items-center px-5 py-1">
                <nav className={`flex gap-7 items-center max-md-screen:absolute max-md-screen:p-5 max-md-screen:pt-[50px] max-md-screen:min-h-screen max-md-screen:top-0 max-md-screen:right-0 max-md-screen:bg-black max-md-screen:w-[300px] max-md-screen:flex-col max-md-screen:z-30 ${isMenuVisible ? "max-md-screen:flex" : "max-md-screen:hidden"}`}>
                    <Link to="/" className="text-xs text-white hover:text-[#fff] transition-all duration-200">
                        Активные голосования
                    </Link>

                    <Link to="/my-elections" className="text-xs text-white hover:text-[#fff] transition-all duration-200">
                        Мои голосования
                    </Link>

                    <Link to="/create-election" className="text-xs text-white hover:text-[#fff] transition-all duration-200">
                        Создать голосование
                    </Link>

                    <Link to="/about-us" className="text-xs text-white hover:text-[#fff] transition-all duration-200">
                        О нас
                    </Link>

                    <div className="hidden max-md-screen:block absolute top-5 right-3" onClick={() => setIsMenuVisible(false)}>
                        <CloseIcon />
                    </div>
                </nav>

                <button className="nes-btn is-primary text-[12px] py-1 px-2">
                    Войти
                </button>

                <BurgerMenu onClick={() => setIsMenuVisible(true)}/>
            </div>
        </header>
    );
};

export default Header;