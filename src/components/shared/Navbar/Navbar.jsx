"use client"
import React from 'react';
import logo from '../../../app/icon.ico'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {

   const pathName = usePathname();

    const navLinks = [
        {
            title: "Home",
            path: '/'
        },
        {
            title: "Work",
            path: '/work'
        },
        {
            title: "About-Me",
            path: '/about'
        },
        {
            title: "Contacts",
            path: '/contacts'
        }
    ]

    return (
        <div className="navbar md:py-8">
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
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-6 shadow">
                        {
                             navLinks.map(link => <Link className={`p-2 md:p-0 ${pathName === link.path && 'text-white font-bold border-b-2 border-primary-purple'}`} key={link.path} href={link.path}>{link.title}</Link>)
                        }
                    </ul>
                </div>
                <div className='flex items-center gap-2 font-bold text-white'>
                    <div>
                        <Image src={logo} alt='Nahid Raz logo' className='md:w-8'></Image>
                    </div>
                    <Link href={'/'} className="md:text-3xl font-fira-code text-white">Nahid Raz</Link>
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-8 md:text-xl">
                    {
                       navLinks.map(link => <Link key={link.path} href={link.path} className={`${pathName === link.path && 'text-white font-bold border-b-2 border-primary-purple'}`}>{link.title}</Link>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;