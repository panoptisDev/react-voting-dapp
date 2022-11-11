import React from "react";

const Header = () => {
    return (
        <header className="w-full flex justify-end items-center bg-transparent mb-[100px] px-5 py-1 top-0 sticky">
            <nav className="flex gap-7 items-center py-2">
                <a href="#" className="text-xs text-white hover:text-[#000] transition-all duration-200">
                    Активные голосования
                </a>

                <a href="#" className="text-xs text-white hover:text-[#000] transition-all duration-200">
                    Создать голосование
                </a>
            </nav>
        </header>
    );
};

export default Header;