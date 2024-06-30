import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa6';
import SectionTitle from '../shared/SectionTitle/SectionTitle';
import ProjectCard from '../ProjectCard/ProjectCard';

const ProjectSection = () => {
    return (
        <div>
            <div>
                <SectionTitle title={"Project"} buttonText={"View all"}></SectionTitle>
            </div>
            <div className='mt-12 flex w-full justify-around'>
                <ProjectCard title={"Traverse"} subTitle={"Tourism Management application"}></ProjectCard>
                <ProjectCard title={"United Ulift"} subTitle={"Volunteer Management website"}></ProjectCard>
                <ProjectCard title={"Klin Craft"} subTitle={"Pottery Item shop website"}></ProjectCard>
            </div>
        </div>
    );
};

export default ProjectSection;