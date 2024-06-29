import Image from 'next/image';
import React from 'react';
import logo from '../../app/icon.ico'

const Footer = () => {
    return (
        <div>
            <hr className='border-1 border-primary-gray' />
            <div>
                <div  className='flex items-center gap-2'>
                    <div>
                        <Image src={logo} alt='Nahid Raz logo'></Image>
                    </div>
                    <h1 className="text-xl font-fira-code">Nahid Raz</h1>
                </div>
                <div>

                </div>
            </div>
        </div>
    );
};

export default Footer;