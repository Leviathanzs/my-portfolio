'use client'
import { useState } from 'react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-white bg-opacity-5 py-4 fixed top-0 w-full z-10 px-30">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-white text-lg font-semibold ms-2">My Website</h1>
                <button className="text-3xl md:hidden cursor-pointer me-2" onClick={toggleMenu}>
                    &#9776;
                </button>
                <ul className="hidden md:flex space-x-6">
                    <li><a href="#" className="text-white p-2 hover:text-gray-300">Home</a></li>
                    <li><a href="#" className="text-white p-2 hover:text-gray-300">Projects</a></li>
                    <li><a href="#" className="text-white bg-purple-950 p-2 rounded hover:text-gray-300">Contact Me</a></li>
                </ul>
            </div>
            <div className={`absolute top-0 bg-black w-full text-5xl flex-col justify-center origin-top animate-open-menu ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
                <button className="text-8xl self-end px-6" onClick={toggleMenu}>
                    &times;
                </button>
                <nav className="flex flex-col min-h-screen items-center py-8" aria-label="mobile">
                    <a href="#" className="w-full text-center py-6 hover:opacity-90">Home</a>
                    <a href="#" className="w-full text-center py-6 hover:opacity-90">Projects</a>
                    <a href="#" className="w-full text-center py-6 hover:opacity-90">Contact Me</a>
                </nav>
            </div>
        </nav>
    );
}

export default Navbar;
