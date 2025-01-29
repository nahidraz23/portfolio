"use client"
import React, { useState } from 'react';
import logo from '../../../app/icon.ico'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useMotionValueEvent, useScroll } from 'framer-motion'

const Navbar = () => {
    const pathName = usePathname();
    const [scrollValue, setScrollValue] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const { scrollY } = useScroll();
    console.log("scroll value", scrollValue);

    useMotionValueEvent(scrollY, "change", (latest) => {
        // console.log("Page scroll: ", latest)
        setScrollValue(latest)
    })

    const navLinks = [
        {
            title: "HOME",
            path: '/'
        },
        {
            title: "WORK",
            path: '/work'
        },
        {
            title: "ABOUT",
            path: '/about'
        },
        {
            title: "CONTACT",
            path: '/contacts'
        }
    ]

    return (
        // <div className={` md:py-8 border-b-2 border-white sticky top-0 `}>
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                 <svg
        //                     xmlns="http://www.w3.org/2000/svg"
        //                     className="h-5 w-5"
        //                     fill="none"
        //                     viewBox="0 0 24 24"
        //                     stroke="currentColor">
        //                     <path
        //                         strokeLinecap="round"
        //                         strokeLinejoin="round"
        //                         strokeWidth="2"
        //                         d="M4 6h16M4 12h8m-8 6h16" />
        //                 </svg>
        //             </div>
        //             <ul
        //                 tabIndex={0}
        //                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 p-6 shadow">
        //                 {
        //                     navLinks.map(link => <Link className={`p-2 md:p-0 ${pathName === link.path && 'text-white font-bold border-b-2 border-primary-purple'}`} key={link.path} href={link.path}>{link.title}</Link>)
        //                 }
        //             </ul>
        //         </div>
        //         <div className='flex items-center gap-2 font-bold text-white w-full'>
        //             <div>
        //                 <Link href={'/'}>
        //                     <Image src={logo} alt='Nahid Raz logo' className='w-6 md:w-10'></Image>
        //                 </Link>
        //             </div>
        //             <Link href={'/'} className=" text-xl font-fira-code text-white md:hidden">Nahid Raz</Link>
        //         </div>
        //     </div>
        //     <div className="navbar-end hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1 space-x-8 md:text-xl">
        //             {
        //                 navLinks.map(link => <Link key={link.path} href={link.path} className={`${pathName === link.path && 'text-white font-bold border-b-2 border-primary-purple'}`}>{link.title}</Link>)
        //             }
        //         </ul>
        //     </div>
        // </div>
        <nav className="relative shadow">
            <div className="container px-6 py-5 border-b-2 border-white mx-auto md:flex">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className='flex items-center gap-2 font-bold text-white w-full'>
                        <div>
                            <Link href={'/'}>
                                <Image src={logo} alt='Nahid Raz logo' className='w-6 md:w-10'></Image>
                            </Link>
                        </div>
                        <Link href={'/'} className=" text-xl font-fira-code text-white md:hidden">Nahid Raz</Link>
                    </div>
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`absolute top-20 md:top-0 inset-x-0 z-20 w-full px-6 py-4 bg-gray-700 md:bg-transparent md:relative md:opacity-100 md:translate-x-0 md:flex md:items-center md:justify-between transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full md:opacity-100'
                        }`}
                >
                    <div className="flex flex-col md:flex-row justify-end w-full gap-10">
                        {
                            navLinks.map(link => <Link key={link.path} href={link.path} className={`${pathName === link.path && 'text-white font-bold border-b-2 border-primary-purple'}`}>{link.title}</Link>)
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;