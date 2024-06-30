import Image from 'next/image';
import React from 'react';
import logo from '../../app/icon.ico'
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <hr className='border-1 border-primary-gray' />
            <div className='container mx-auto mt-8 flex justify-between'>
                <div className='space-y-4'>
                    <div className='flex items-center gap-2'>
                        <div>
                            <Image src={logo} alt='Nahid Raz logo'></Image>
                        </div>
                        <h1 className="text-xl font-fira-code text-white">Nahid Raz</h1>
                        <p>nzamanraz@gmail.com</p>
                    </div>
                    <div>
                        <p className='text-white'>Web Developer | MERN</p>
                    </div>
                </div>
                <div className=''>
                    <p className='text-2xl font-medium text-white'>Media</p>
                    <div className='flex items-center gap-2 pt-1'>
                        {/* GitHub logo */}
                        <a href="">
                            <FaGithub className='text-2xl hover:text-purple-600'></FaGithub>
                        </a>
                        {/* Linkdein */}
                        <a href="">
                            
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