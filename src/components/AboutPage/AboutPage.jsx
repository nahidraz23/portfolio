import React from 'react';
import SkillsCard from '../shared/SkillsCard/SkillsCard';

const AboutPage = () => {
    return (
        <div className='space-y-6 md:space-y-12'>
            <div>
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>About-me</p>
                <p className='text-white mt-4'>Who am i?</p>
            </div>
            <div className="space-y-6 md:w-1/2">
                <p>
                    Hello, i’m <strong className='text-white'>Nahid Raz</strong>.
                </p>
                <p>
                    I’m a <strong className='text-white'>web developer</strong> based in Bangladesh. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </p>
                <p>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I always strive to learn about the newest technologies and frameworks.
                </p>
                <p>
                    My eventual <strong className='text-white'>career goal</strong> is to become a qualified and experienced <strong className='text-white'>software engineer</strong>.
                </p>
            </div>
            <div className='space-y-6 md:space-y-12'>
                <div>
                    <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">#</span>Skills</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
            <div className='space-y-6'>
                <div>
                    <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">#</span>My-fun-facts</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 md:mt-12 gap-4'>
                    <p className='border-2 p-2'>I like winter more than summer</p>
                    <p className='border-2 p-2'>I often bike with my friends</p>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;