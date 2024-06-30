import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const SectionTitle = ({ title, buttonText }) => {
    return (
        <div className='flex justify-between items-center'>
            <div className='flex w-1/2 items-center gap-2'>
                <p className='text-3xl text-white font-medium'>
                    {title}
                </p>
                <div className='border w-full border-primary-purple'></div>
            </div>
            {
                buttonText &&
                <Link href={'/work'}>
                    <button className='font-medium text-white flex items-center gap-2'>
                        {buttonText}
                        <FaArrowRight></FaArrowRight>
                    </button>
                </Link>
            }

        </div>
    );
};

export default SectionTitle;