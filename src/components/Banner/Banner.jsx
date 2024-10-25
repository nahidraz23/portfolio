import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Typewriter from 'typewriter-effect';

const Banner = () => {
    const { scrollY } = useScroll()
    const[scroll, setScroll] = useState(0)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScroll(latest)
    })

    return (
        <div className="flex flex-col items-center justify-between md:h-[720px]">
            <div className="flex flex-col gap-8 md:py-32 justify-center py-40">
                <div>
                    <div className="font-semibold text-2xl md:text-8xl md:space-y-5">
                        <p>I am <span className="text-primary-purple">Nahiduzzaman Raz</span></p>
                        <p><span className="text-primary-purple">Nahid Raz</span> in short</p>
                    </div>
                </div>
                <div className="flex gap-2 md:text-4xl">
                    <p>I create</p>
                    <Typewriter
                        options={{
                            strings: ['responsive websites.', ' interactive web experiences.', 'solutions where technology meets creativity.'],
                            autoStart: true,
                            loop: true,
                            cursor: '_',
                            cursorClassName: "Typewriter__cursor",
                            deleteSpeed: 20,
                            delay: 25,
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
            {
                scroll > 0
                    ?
                    <>
                    
                    </>
                    :
                    <div className="flex flex-col items-end md:py-20">
                        <h1>Scroll Down</h1>
                        <div className="">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" async/>
                            <lottie-player src="https://lottie.host/4d7562fe-0e55-4e92-ad54-d5bd04968e01/YOPiOxNsm5.json" background="##000000" speed="1" style={{ width: "100px", height: "100px" }} loop autoplay direction="1" mode="normal"></lottie-player>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Banner;