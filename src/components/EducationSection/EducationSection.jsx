"use client";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const EducationSection = () => {

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
                    title={"Education"}
                ></SectionTitle>
            </div>
            <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
                <div>
                    <p className="md:text-2xl text-white font-semibold">United International University - <span className="font-normal">Ongoing</span></p>
                    <small>BSc in Computer Science and Engineering</small>
                </div>

            </div>
        </div>
    );
};

export default EducationSection;