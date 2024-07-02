import React from "react";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";
import TraverseCover from "../../../public/images/Traverse.png";
import UnitedUplift from "../../../public/images/United_Uplift.png";
import KlinCraft from "../../../public/images/KlinCraft.png";

const ProjectSection = () => {
  return (
    <div>
      <div>
        <SectionTitle
          title={"Projects"}
          buttonText={"View all"}
        ></SectionTitle>
      </div>
      <div className="mt-12 flex w-full justify-around">
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
    </div>
  );
};

export default ProjectSection;
