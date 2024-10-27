"use client"
import Image from 'next/image';
import React from 'react';
import logo from '../../../app/icon.ico'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
// import footerbg from '../../../../public/images/footerbg.svg'

const Footer = () => {

    return (
        <div className='md:mt-36 footer-bg'>
            <hr className='border-1 border-white' />
            <div className='container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between'>
                <div className='space-y-4'>
                    <div className='flex flex-col items-center gap-2'>
                        <div>
                            <Image src={logo} alt='Nahid Raz logo' className='w-8'></Image>
                            {/* <h1 className="text-xl font-fira-code text-white">Nahid Raz</h1> */}
                        </div>
                        <p>nzamanraz@gmail.com</p>
                    </div>
                    <div>
                        <p className='text-white text-center md:text-left'>Web Developer <span className='text-primary-purple'>|</span> MERN</p>
                    </div>
                </div>
                <div className=''>
                    {/* <p className='text-2xl font-medium text-white'>Media</p> */}
                    <div className='flex items-center gap-4 pt-1'>
                        {/* GitHub logo */}
                        <Link target='_blank' href={"https://github.com/nahidraz23"} >
                            <FaGithub className='text-2xl hover:text-purple-600'></FaGithub>
                        </Link>

                        {/* Linkdein */}
                        <Link target='_blank' href="https://www.linkedin.com/in/nahidraz23/">
                            <FaLinkedin className='text-2xl '></FaLinkedin>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='mt-6 text-center pb-8'>
                <p>Copyright <span className='text-white'>&copy;</span>2024. Made by <span className='text-white'>Nahid Raz</span></p>
            </div>
        </div>
    );
};

export default Footer;