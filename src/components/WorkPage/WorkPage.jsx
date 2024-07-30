import ProjectCard from "../ProjectCard/ProjectCard";
import TraverseCover from "../../../public/images/Traverse.png";
import UnitedUplift from "../../../public/images/United_Uplift.png";
import KlinCraft from "../../../public/images/KlinCraft.png";
import siyaahahtravel from "../../../public/images/siyaahahtravel.png";
import hockeys from "../../../public/images/hockeys.png";
import ticketsolution from "../../../public/images/ticketsolution.png";

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
                        tech={"ReactJS TailwindCSS NodeJS ExpressJS MongoDB"}
                        liveLink={"https://traverse-decaf.web.app/"}
                        gitLink={"https://github.com/nahidraz23/traverse-client"}
                    ></ProjectCard>
                    <ProjectCard
                        title={"United Ulift"}
                        subTitle={"Volunteer Management website"}
                        src={UnitedUplift}
                        tech={"ReactJS TailwindCSS NodeJS ExpressJS MongoDB"}
                        liveLink={"https://united-uplift.web.app/"}
                        gitLink={"https://github.com/nahidraz23/united-uplift-client"}
                    ></ProjectCard>
                    <ProjectCard
                        title={"Klin Craft"}
                        subTitle={"Pottery Item shop website"}
                        src={KlinCraft}
                        tech={"ReactJS TailwindCSS ExpressJS MongoDB"}
                        liveLink={"https://nahidraz23.github.io/ticket-solution/"}
                        gitLink={"https://github.com/nahidraz23/ticket-solution"}
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
                    <ProjectCard
                        title={"Hockey's"}
                        subTitle={"Sports Club Landing Page"}
                        src={hockeys}
                        tech={"HTML5 TailwindCSS"}
                        liveLink={"https://nahidraz23.github.io/hockeys/"}
                        gitLink={"https://github.com/nahidraz23/hockeys"}
                    ></ProjectCard>
                    <ProjectCard
                        title={"Ticket Solution"}
                        subTitle={"Online Ticket System"}
                        src={ticketsolution}
                        tech={"HTML5 TailwindCSS JavaScript"}
                        liveLink={"https://nahidraz23.github.io/Siyaahah-Travel/"}
                        gitLink={"https://github.com/nahidraz23/Siyaahah-Travel"}
                    ></ProjectCard>
                </div>
            </div>
        </div>
    );
};

export default WorkPage;