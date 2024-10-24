import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SectionTitle = ({ title, buttonText }) => {
    return (
        <div className='flex justify-between items-center mt-14 md:mt-28 mb-12'>
            <div className='flex w-full md:w-1/2 items-center gap-2'>
                <p className='text-xl md:text-3xl text-white font-medium w-full md:w-1/3'>
                    {title}
                </p>
                <div className='border w-full border-primary-purple'></div>
            </div>
            <div className="hidden lg:block">
                {
                    buttonText &&
                    <Link href={'/work'}>
                        <button className='text-white text-xl flex items-center gap-2 hover:text-lg hover:font-medium'>
                            {buttonText}
                            <FaArrowRight></FaArrowRight>
                        </button>
                    </Link>
                }
            </div>
        </div>
    );
};

export default SectionTitle;