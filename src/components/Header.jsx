import React from "react";
import { Link } from "react-router-dom";
import BurgerMenu from "./UI/BurgerMenu";
import CloseIcon from "./UI/CloseIcon";

const Header = () => {
    return (
        <header className="w-full bg-black mb-[100px]">
            <div className="w-full max-w-[1600px] mx-auto my-0 flex justify-between items-center px-5 py-1">
                <nav className="flex gap-7 items-center py-2 max-md-screen:hidden max-md-screen:top-0 max-md-screen:right-0 max-md-screen:bg-black max-md-screen:flex-col max-md-screen:p-[26px] max-md-screen:pt-[54px] max-md-screen:min-h-full max-md-screen:gap-[40px]">
                    <Link to="/" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        Активные голосования
                    </Link>

                    <Link to="/election-details" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        Создать голосование
                    </Link>

                    <Link to="/about-us" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        О нас
                    </Link>

                    <div className="hidden absolute top-5 right-3">
                        <CloseIcon />
                    </div>
                </nav>

                <button className="nes-btn is-primary text-[12px] py-1 px-2">
                    Войти
                </button>

                <BurgerMenu />
            </div>
        </header>
    );
};

export default Header;