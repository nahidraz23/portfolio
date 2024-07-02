import SectionTitle from "../shared/SectionTitle/SectionTitle";

const EducationSection = () => {
    return (
        <div>
            <div>
                <SectionTitle
                    title={"Education"}
                ></SectionTitle>
            </div>
            <div>
                <div>
                    <p className="md:text-2xl text-white font-semibold">United International University - <span className="font-normal">Ongoing</span></p>
                    <small>BSc in Computer Science and Engineering</small>
                </div>

            </div>
        </div>
    );
};

export default EducationSection;