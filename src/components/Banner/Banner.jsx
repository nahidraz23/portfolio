import { useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaDownload } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import ShimmerButton from "@/components/ui/shimmer-button";

const Banner = () => {
    const { scrollY } = useScroll()
    const [scroll, setScroll] = useState(0)

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScroll(latest)
    })

    return (
        <div className=" flex flex-col items-center justify-between md:h-[720px]">
            <div className="flex flex-col gap-8 md:py-16 justify-center py-40">
                <div>
                    <div className="font-semibold text-2xl md:text-8xl md:space-y-5">
                        <p className="text-lg md:text-4xl font-light"><span>Hi, I am</span></p>
                        <p><span className="font-normal font-monoton text-primary-purple tracking-widest custom"><span className="text-white font-monoton">N</span>ahiduzzaman <span className="text-white font-monoton">R</span>az</span></p>
                        <p><span className="text-primary-purple font-monoton font-normal tracking-widest custom"><span className="text-white font-monoton">N</span>ahid <span className="text-white font-monoton">R</span>az</span> <span className="line-through text-2xl md:text-5xl font-light"> in short</span></p>
                    </div>
                </div>
                <div className="md:text-2xl font-light">
                    <Typewriter
                        options={{
                            strings: ['I create responsive websites.', 'I create interactive web experiences.', 'I create solutions where technology meets creativity.'],
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
                            <ShimmerButton className="shadow-2xl flex gap-2">
                                <IoIosCall></IoIosCall>
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Contact Me
                                </span>
                            </ShimmerButton>

                        </Link>
                    </div>
                    <div>
                        <a href='/Nahiduzzaman_Raz_Resume.pdf' className="" rel="noopener noreferrer" download>
                            <ShimmerButton className="shadow-2xl flex gap-2">
                                <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                                    Get Resume
                                </span>
                                <FaDownload className=""></FaDownload>
                            </ShimmerButton>
                        </a>
                    </div>
                </div>
            </div>
            {
                scroll > 0
                    ?
                    <div className="flex flex-col items-end md:py-20 opacity-30 ease-linear">
                        <div className="">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" async />
                            <lottie-player src="https://lottie.host/3fd9ebcf-7ae3-4cb3-9fb4-0eea7c68a276/dEEyruQ6wP.json" background="##000000" speed="1" style={{ width: "50px", height: "100px" }} loop autoplay direction="1" mode="normal"></lottie-player>
                        </div>
                    </div>
                    :
                    <div className="flex flex-col items-end md:py-20">
                        <div className="">
                            <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" async />
                            <lottie-player src="https://lottie.host/3fd9ebcf-7ae3-4cb3-9fb4-0eea7c68a276/dEEyruQ6wP.json" background="##000000" speed="1" style={{ width: "50px", height: "100px" }} loop autoplay direction="1" mode="normal"></lottie-player>
                        </div>
                    </div>
            }
        </div>
    );
};

export default Banner;