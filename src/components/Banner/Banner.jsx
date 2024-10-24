import Link from "next/link";
import nahidraz from '../../../public/images/nraz.png'
import Image from "next/image";
import { FaDownload } from "react-icons/fa6";

const Banner = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row items-center justify-around">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-semibold text-3xl mt-6 md:mt-0">
                        <p>I am <span className="text-primary-purple">Nahiduzzaman Raz</span></p>
                        <p><span className="text-primary-purple">Nahid Raz</span> in short</p>
                    </div>
                </div>
                <div>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                </div>
                <div className="flex gap-4">
                    <div>
                        <Link href={'/contacts'}><button className="text-white border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90 hover:text-white hover:font-semibold">Contact me</button></Link>
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