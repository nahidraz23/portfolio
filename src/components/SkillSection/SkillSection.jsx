"use client"
import { useEffect } from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SkillsCard from "../shared/SkillsCard/SkillsCard";
import Aos from 'aos';
import 'aos/dist/aos.css';

const SkillSection = () => {
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
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000">
                <SectionTitle title={"Skills"}></SectionTitle>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1500">
                <SkillsCard
                    title={'Languages'}
                    tech={"C C++ JavaScript"}
                ></SkillsCard>
                <SkillsCard
                    title={'Databases'}
                    tech={"MongoDB MySQL"}
                ></SkillsCard>
                <SkillsCard
                    title={'Other'}
                    tech={"HTML CSS React NodeJS"}
                ></SkillsCard>
                <SkillsCard
                    title={'Frameworks'}
                    tech={"TailwindCSS ExpressJS NextJS"}
                ></SkillsCard>
                <SkillsCard
                    title={'Tools'}
                    tech={"VSCode Figma Git GitHub Vercel Firebase"}
                ></SkillsCard>
            </div>
        </div>
    );
};

export default SkillSection;