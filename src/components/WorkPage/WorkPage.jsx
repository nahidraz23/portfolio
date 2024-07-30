import ProjectCard from "../ProjectCard/ProjectCard";
import TraverseCover from "../../../public/images/Traverse.png";
import UnitedUplift from "../../../public/images/United_Uplift.png";
import KlinCraft from "../../../public/images/KlinCraft.png";
import siyaahahtravel from "../../../public/images/siyaahahtravel.png";

const WorkPage = () => {
    return (
        <div className="">
            <div>
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>Projects</p>
                <small>List of my projects</small>
            </div>
            <div>
                <div>
                    <p className="font-medium text-3xl text-white mt-12"><span className="text-primary-purple">#</span>Complete apps</p>
                </div>
                <div className="mt-12 flex flex-col md:flex-row w-full justify-around items-center gap-3">
                    <ProjectCard
                        title={"Traverse"}
                        subTitle={"Tourism Management application"}
                        src={TraverseCover}
                        tech={"React JavaScript MongoDB TailwindCSS"}
                        liveLink={"https://traverse-decaf.web.app/"}
                        gitLink={"https://github.com/nahidraz23/traverse-client"}
                    ></ProjectCard>
                    <ProjectCard
                        title={"United Ulift"}
                        subTitle={"Volunteer Management website"}
                        src={UnitedUplift}
                        tech={"React JavaScript MongoDB TailwindCSS"}
                        liveLink={"https://united-uplift.web.app/"}
                        gitLink={"https://github.com/nahidraz23/united-uplift-client"}
                    ></ProjectCard>
                    <ProjectCard
                        title={"Klin Craft"}
                        subTitle={"Pottery Item shop website"}
                        src={KlinCraft}
                        tech={"React JavaScript MongoDB TailwindCSS"}
                        liveLink={"https://klin-craft.web.app/"}
                        gitLink={"https://github.com/nahidraz23/klin-craft-client"}
                    ></ProjectCard>
                </div>
            </div>
            <div>
                <div>
                    <p className="font-medium text-3xl text-white mt-12"><span className="text-primary-purple">#</span>Landing page</p>
                </div>
                <div className="mt-12 flex flex-col md:flex-row w-full justify-around items-center gap-3">
                    <ProjectCard
                        title={"Siyaahah Travel"}
                        subTitle={"Tourism Landing Page"}
                        src={siyaahahtravel}
                        tech={"HTML5 CSS"}
                        liveLink={"https://nahidraz23.github.io/Siyaahah-Travel/"}
                        gitLink={"https://github.com/nahidraz23/Siyaahah-Travel"}
                    ></ProjectCard>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;