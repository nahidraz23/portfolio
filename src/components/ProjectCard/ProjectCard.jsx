import Image from "next/image";
import ShinyButton from "@/components/ui/shiny-button";
import { BorderBeam } from "@/components/ui/border-beam";

const ProjectCard = ({ title, src, subTitle, liveLink, gitLink, tech }) => {
    return (
        <div className="relative border-[1px] border-white/20 flex py-6 w-96 md:h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
            <div>
                <Image src={src} alt="Project thumbnail" className=" w-80 h-52 rounded-md"></Image>
            </div>
            <div className="py-4 px-2 mb-2 border-b-2 border-white">
                <p className="text-white text-2xl font-medium">{title}</p>
            </div>
            <div className="space-y-4 w-80">
                <p className="px-2 text-white text-center">
                    {
                        subTitle
                    }
                </p>
                <p className="px-2 text-center text-primary-purple">
                    {tech}
                </p>
                <div className="flex justify-between">
                    <a href={liveLink} target="_blank">
                        <ShinyButton>Live</ShinyButton>
                    </a>
                    <a href={gitLink} target="_blank">
                        <ShinyButton>GitHub</ShinyButton>
                    </a>
                </div>
            </div>
            <BorderBeam size={250} duration={12} delay={9} />
        </div>
    );
};

export default ProjectCard;