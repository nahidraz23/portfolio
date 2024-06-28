import React from 'react';
import logo from '../../../app/icon.ico'
import Image from 'next/image';

const Navbar = () => {

    const navLinks = (
        <div className='font-fira-code flex flex-col md:flex-row gap-8 '>
            <li>Home</li>
            <li>Works</li>
            <li>About-Me</li>
            <li>Contacts</li>
        </div>
    )
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-2 font-bold text-white'>
                    <div>
                        <Image src={logo} alt='Nahid Raz logo'></Image>
                    </div>
                    <h1 className="text-xl font-fira-code">Nahid Raz</h1>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;