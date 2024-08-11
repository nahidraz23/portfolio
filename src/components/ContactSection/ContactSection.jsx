"use client";
import { FaArrowRight, FaDiscord, FaLinkedin } from "react-icons/fa6";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Link from "next/link";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ContactSection = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        })
    }, [])

    useEffect(() => {
        Aos.refresh()
    }, [])

    return (
        <div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <SectionTitle
                    title={"Contact"}
                ></SectionTitle>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-0">
                <div data-aos="fade-up" data-aos-delay="150" data-aos-duration="1500">
                    <p className="md:w-2/3 text-left">
                        I am open to exploring new opportunities that align with my skills and interests. Please feel free to reach out if you have any questions or requests.
                    </p>
                </div>
                <div className="border-2 p-4 space-y-3 mt-4 md:mt-0" data-aos="fade-left" data-aos-delay="200" data-aos-duration="2000">
                    <div>
                        <p className="text-white font-semibold">
                            Message here
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaLinkedin></FaLinkedin>
                        <Link target="_blank" href={"https://www.linkedin.com/in/nahidraz23/"}>
                            <p className="hover:text-primary-purple">nahidraz23</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaDiscord></FaDiscord>
                        <p className="hover:text-primary-purple">nahidraz23</p>
                    </div>
                </div>
            </div>
            <div className="mt-6 md:mt-0" data-aos="fade-right" data-aos-delay="200" data-aos-duration="2500">
                <Link href={'/contacts'} className="">
                    <button className="flex gap-2 items-center border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90 hover:font-semibold">
                        <p className="text-white">Get in touch</p>
                        <div>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </button>
                </Link>
            </div>
        </div >
    );
};

export default ContactSection;