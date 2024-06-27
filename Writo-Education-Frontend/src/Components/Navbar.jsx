import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import img from '../assets/image.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="">
            <nav className="flex justify-between items-center w-full max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="flex items-center gap-2">
                    <Link to="/"><img className="w-16 cursor-pointer" src={img} alt="Writo Education Logo" /></Link>
                    <span className="font-semibold hidden md:block text-xl item1">Writo Education</span>
                </div>
                <div
                    className={`nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 ${menuOpen ? 'top-[9%]' : 'top-[-100%]'} md:w-auto w-full flex items-center px-5 bg-white md:bg-transparent`}
                >
                    <ul className="flex md:flex-row flex-col md:items-center items-center md:gap-[4vw] gap-8 w-full">
                        <li>
                            <a className="nav-item text-xl" href="#">Writo</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="/mentor/home">Mentorship</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="/community">Community</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="#">Careers</a>
                        </li>
                        <li>
                            <a className="nav-item text-xl" href="/blogs">Blogs</a>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-2 md:gap-6">
                    <button className="border border-[#04362B] border-double rounded-lg text-white bg-[#04362B] px-3 md:px-5 py-1 md:py-2 hover:bg-white hover:text-[#04362B]">Log in</button>
                    <button className="border border-[#04362B] border-double rounded-lg text-[#04362B] px-3 md:px-5 py-1 md:py-2 hover:bg-[#04362B] hover:text-white">Sign in</button>
                    {menuOpen ? (
                        <FaTimes onClick={toggleMenu} className="text-2xl md:text-3xl cursor-pointer md:hidden" />
                    ) : (
                        <FaBars onClick={toggleMenu} className="text-2xl md:text-3xl cursor-pointer md:hidden" />
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
