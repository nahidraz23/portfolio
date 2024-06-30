import Image from "next/image";
import LiveButton from "../shared/LiveButton/LiveButton";
import GitHubButton from "../shared/GitHubButton/GitHubButton";

const ProjectCard = ({ title, src, subTitle }) => {
    return (
        <div className="border-2 w-80">
            <Image src={src} alt="Project thumbnail" className="w-80 h-52 border-b-2"></Image>
            <div className="py-4 px-2 mb-2 border-b-2">
                <p className="text-white text-2xl font-medium">{title}</p>
            </div>
            <div className="space-y-4">
                <p className="px-2">
                    React JavaScript MongoDB Taiwind CSS
                </p>
                <p className="px-2">
                    {
                        subTitle
                    }
                </p>
                <div className="flex gap-4 pl-2 pb-4">
                    <LiveButton name={"Live"}></LiveButton>
                    <GitHubButton name={"GitHub"}></GitHubButton>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;