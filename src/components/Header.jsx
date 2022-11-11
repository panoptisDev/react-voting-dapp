import React from "react";

const Header = () => {
    return (
        <header className="w-full bg-black mb-[100px]">
            <div className="w-full max-w-[1600px] mx-auto my-0 flex justify-between items-center px-5 py-1">
                <nav className="flex gap-7 items-center py-2">
                    <a href="#" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        Активные голосования
                    </a>

                    <a href="#" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        Создать голосование
                    </a>

                    <a href="#" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200 no-underline">
                        О нас
                    </a>
                </nav>

                <button className="nes-btn is-primary text-[12px] py-1 px-2">
                    Войти
                </button>
            </div>
        </header>
    );
};

export default Header;