"use client";
import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import TraverseCover from "../../../public/images/Traverse.png";
import UnitedUplift from "../../../public/images/United_Uplift.png";
import KlinCraft from "../../../public/images/KlinCraft.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const ProjectSection = () => {  
  return (
    <div >
      <div data-aos="fade-right" data-aos-duration="1000">
        <SectionTitle
          title={"Projects"}
          buttonText={"View all"}
        ></SectionTitle>
      </div>
      <div className="mt-12 flex flex-col md:flex-row w-full justify-around items-center gap-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
        <ProjectCard
          title={"Traverse"}
          subTitle={"Tourism Management application"}
          src={TraverseCover}
          liveLink={"https://traverse-decaf.web.app/"}
          gitLink={"https://github.com/nahidraz23/traverse-client"}
        ></ProjectCard>
        <ProjectCard
          title={"United Ulift"}
          subTitle={"Volunteer Management website"}
          src={UnitedUplift}
          liveLink={"https://united-uplift.web.app/"}
          gitLink={"https://github.com/nahidraz23/united-uplift-client"}
        ></ProjectCard>
        <ProjectCard
          title={"Klin Craft"}
          subTitle={"Pottery Item shop website"}
          src={KlinCraft}
          liveLink={"https://klin-craft.web.app/"}
          gitLink={"https://github.com/nahidraz23/klin-craft-client"}
        ></ProjectCard>
      </div>
      <div className="flex justify-center md:hidden">
        <Link href={'/work'}>
          <button className='font-medium text-white mt-6 px-2 py-1 flex items-center gap-2 border-2 border-primary-purple hover:border-white hover:scale-90 hover:font-semibold'>
            <p>Browse all</p>
            <FaArrowRight></FaArrowRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
