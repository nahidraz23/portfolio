import Image from 'next/image';
import React from 'react';
import logo from '../../../app/icon.ico'
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='md:mt-36'>
            <hr className='border-1 border-primary-gray' />
            <div className='container mx-auto mt-8 flex flex-col md:flex-row items-center justify-between'>
                <div className='space-y-4'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Image src={logo} alt='Nahid Raz logo'></Image>
                        </div>
                        <h1 className="text-xl font-fira-code text-white">Nahid Raz</h1>
                        <p>nzamanraz@gmail.com</p>
                    </div>
                    <div>
                        <p className='text-white text-center md:text-left'>Web Developer <span className='text-primary-purple'>|</span> MERN</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-2xl font-medium text-white'>Media</p>
                    <div className='flex items-center gap-2 pt-1'>
                        {/* GitHub logo */}
                        <a target='_blank' href={"https://github.com/nahidraz23"} >
                            <FaGithub className='text-2xl text-purple-600'></FaGithub>
                        </a>

                        {/* Linkdein */}
                        <a target='_blank' href="https://www.linkedin.com/in/nahidraz23/">
                            <FaLinkedin className='text-2xl hover:text-blue-500'></FaLinkedin>
                        </a>
                    </div>
                </div>
            </div>
            <div className='mt-12 text-center pb-8'>
                <p>© Copyright 2024. Made by <span className='text-white'>Nahid Raz</span></p>
            </div>
        </div>
    );
};

export default Footer;