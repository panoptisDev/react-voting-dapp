import React from "react";

const Header = () => {
    return (
        <header className="w-full flex justify-between items-center bg-black mb-[100px] px-5 py-1 top-0 sticky">
            <button className="p-2 bg-white text-black">
                    Подключить
            </button>

            <nav className="flex gap-7 items-center">
                <a href="#" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200">
                    Активные голосования
                </a>

                <a href="#" className="text-xs text-white hover:text-[#bb6bd9] transition-all duration-200">
                    Создать голосование
                </a>
            </nav>
        </header>
    );
};

export default Header;