import ProjectCard from "../ProjectCard/ProjectCard";
import TraverseCover from "../../../public/images/Traverse.png";
import UnitedUplift from "../../../public/images/United_Uplift.png";
import KlinCraft from "../../../public/images/KlinCraft.png";

const WorkPage = () => {
    return (
        <div className="">
            <div>
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>Projects</p>
                <small>List of my projects</small>
            </div>
            <div>

            </div>
            <div>
                <div>
                    <p className="font-medium text-3xl text-white mt-12"><span className="text-primary-purple">#</span>Complete-apps</p>
                </div>
                <div className="mt-12 flex flex-col md:flex-row w-full justify-around items-center gap-3">
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
        </div>
    );
};

export default WorkPage;