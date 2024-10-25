import Link from "next/link";
import nahidraz from '../../../public/images/nahidrazcover.png'
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Typewriter from 'typewriter-effect';

const Banner = () => {

    ;

    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-semibold text-3xl mt-6 md:mt-0">
                        <p>I am <span className="text-primary-purple">Nahiduzzaman Raz</span></p>
                        <p><span className="text-primary-purple">Nahid Raz</span> in short</p>
                    </div>
                </div>
                <div className="flex gap-2 text-xl">
                    <p>I create</p>
                    <Typewriter
                        options={{
                            strings: ['responsive websites.', ' interactive web experiences.', 'solutions where technology meets creativity.'],
                            autoStart: true,
                            loop: true,
                            cursor: '_',
                            cursorClassName: "Typewriter__cursor"
                        }} />
                </div>
                <div className="flex gap-4">
                    <div>
                        <Link href={'/contacts'}>
                            <button className="flex items-center gap-1 text-white border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90 hover:text-white hover:font-semibold">
                                <IoIosCall></IoIosCall>
                                Contact Me
                            </button>
                        </Link>
                    </div>
                    <div>
                        <a href='/Nahiduzzaman_Raz_Resume.pdf' className="" rel="noopener noreferrer" download>
                            <button className="text-white flex items-center gap-2 border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90 hover:text-white hover:font-semibold">
                                <p className="text-white">Resume</p>
                                <FaDownload className=""></FaDownload>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <Image src={nahidraz} alt="Nahid Raz" className="border-b-2 border-primary-purple drop-shadow-2xl"></Image>
            </div>
        </div>
    );
};

export default Banner;