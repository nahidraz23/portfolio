const SkillsCard = ({title, tech}) => {
    return (
        <div className="border-2 border-primary-gray ">
            <div className="border-b-2 bg-white opacity-50">
                <h1 className="p-2 text-black font-semibold">{title}</h1>
            </div>
            <div className="p-2">
                {
                    tech
                }
            </div>
        </div>
    );
};

export default SkillsCard;