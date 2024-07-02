import Link from "next/link";
import SectionTitle from "../shared/SectionTitle/SectionTitle";
import { FaArrowRight } from "react-icons/fa6";

const AboutMeSection = () => {
    return (
        <div>
            <div>
                <SectionTitle title={"About-me"}></SectionTitle>
            </div>
            <div className="space-y-2 md:w-1/2">
                <p>
                    Hello, i’m Nahid Raz.
                </p>
                <p>
                    I’m a <strong>web developer</strong> based in Dhaka, Bangladesh. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                </p>
                <p>
                    Transforming my creativity and knowledge into a websites has been my passion for over a year. I always strive to learn about the newest technologies and frameworks.
                </p>
            </div>
            <div className="mt-6 ">
                <Link href={'/about'} className="">
                    <button className="text-white flex gap-2 items-center border-2 px-2 py-1 border-primary-purple ">
                        <p>Read more</p>
                        <div>
                            <FaArrowRight></FaArrowRight>
                        </div>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default AboutMeSection;