const SkillsCard = ({title, tech}) => {
    return (
        <div className="border-2 border-primary-gray">
            <div className="border-b-2">
                <h1 className="p-2 text-white font-semibold">{title}</h1>
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