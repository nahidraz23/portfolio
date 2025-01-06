"use client"
import { useEffect } from "react";
import SkillsCard from "../shared/SkillsCard/SkillsCard";
import Aos from 'aos';
import 'aos/dist/aos.css';
import Marquee from "@/components/ui/marquee";
import html5logo from '../../../public/skills/html5.png'
import css3 from '../../../public/skills/css3.png'
import cprogramming from '../../../public/skills/c.png'
import cplusplus from '../../../public/skills/c++.png'
import jslogo from '../../../public/skills/js.png'
import nodejslogo from '../../../public/skills/nodejs.png'
import vercellogo from '../../../public/skills/Vercel.svg'
import nextjslogo from '../../../public/skills/nextjs.png'
import mongodblogo from '../../../public/skills/mongodb.png'
import vscodelogo from '../../../public/skills/vscode.png'
import figmalogo from '../../../public/skills/figma.png'
import reactjslogo from '../../../public/skills/react.png'
import TailwindCSSlogo from '../../../public/skills/TailwindCSS.png'
import expressjslogo from '../../../public/skills/expressjs.png'
import gitlogo from '../../../public/skills/git.png'
import githublogo from '../../../public/skills/github.png'
import firebaselogo from '../../../public/skills/firebase.png'

const SkillSection = () => {
    useEffect(() => {
        Aos.init({
            once: true,
        })
    }, [])

    useEffect(() => {
        Aos.refresh()
    }, [])

    const skills = [
        {
            img: cprogramming,
            name: 'C Programming'
        },
        {
            img: cplusplus,
            name: 'C++'
        },
        {
            img: html5logo,
            name: 'HTML5'
        },
        {
            img: css3,
            name: 'CSS3'
        },
        {
            img: TailwindCSSlogo,
            name: 'TailwindCSS'
        },
        {
            img: jslogo,
            name: 'JavaScript'
        },
        {
            img: reactjslogo,
            name: 'ReactJS'
        },
        {
            img: nextjslogo,
            name: 'NextJS'
        },
        {
            img: nodejslogo,
            name: 'NodeJS'
        },
        {
            img: expressjslogo,
            name: 'ExpressJS'
        },
        {
            img: mongodblogo,
            name: 'MongoDB'
        },
        {
            img: gitlogo,
            name: 'Git'
        },
        {
            img: githublogo,
            name: 'GitHub'
        },
        {
            img: vercellogo,
            name: 'Vercel'
        },
        {
            img: figmalogo,
            name: 'Figma'
        },
        {
            img: vscodelogo,
            name: 'VSCode'
        },
        {
            img: firebaselogo,
            name: 'Firebase'
        },
    ];

    const firstRow = skills.slice(0, skills.length);

    return (
        <div className="mt-0 md:mt-4 lg:m-8">
            <div className="grid grid-cols-1 gap-4" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1500">
                <div className="relative flex h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg">
                    <Marquee pauseOnHover className="[--duration:50s]">
                        {firstRow.map((skill, index) => (
                            <SkillsCard key={index} {...skill} />
                        ))}
                    </Marquee>
                </div>
            </div>
        </div>
    );
};

export default SkillSection;