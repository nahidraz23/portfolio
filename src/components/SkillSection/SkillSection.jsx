import SectionTitle from "../shared/SectionTitle/SectionTitle";
import SkillsCard from "../shared/SkillsCard/SkillsCard";

const SkillSection = () => {
    return (
        <div>
            <div>
                <SectionTitle title={"Skills"}></SectionTitle>
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
                    tech={"HTML CSS NodeJS"}
                ></SkillsCard>
                <SkillsCard
                    title={'Frameworks'}
                    tech={"TaiwindCSS React ExpressJS"}
                ></SkillsCard>
                <SkillsCard
                    title={'Tools'}
                    tech={"VSCode Figma Git GitHub Vercel Firebase"}
                ></SkillsCard>
            </div>
        </div>
    );
};

export default SkillSection;