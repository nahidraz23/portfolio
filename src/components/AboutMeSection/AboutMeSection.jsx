"use client";
import Link from "next/link";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const AboutMeSection = () => {
    return (
        <div>
            <div data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000">
                <SectionTitle title={"About-me"}></SectionTitle>
            </div>
            <div className="space-y-2 md:w-1/2" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1300">
                <p>
                    Hello, i’m <strong className="text-white">Nahid Raz</strong>.
                </p>
                <p>
                    I’m a <strong className="text-white">web developer</strong> based in Dhaka, Bangladesh. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </p>
                <p>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I always strive to learn about the newest technologies and frameworks.
                </p>
            </div>
            <div className="mt-6 " data-aos="fade-right" data-aos-delay="200" data-aos-duration="1600">
                <Link href={'/about'} className="">
                    <button className="flex gap-2 items-center border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90">
                        <p className="text-white">Read more</p>
                        <div>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutMeSection;