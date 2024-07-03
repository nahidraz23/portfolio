import Link from "next/link";
import { FaDiscord, FaLinkedin } from "react-icons/fa6";

const ContactPage = () => {
    return (
        <div>
            <div>
                <p className="text-3xl font-semibold text-white"><span className="text-primary-purple">/</span>Contacts</p>
                <p className='text-white mt-4'>Who am i?</p>
            </div>
            <div className="flex flex-col md:flex-row text-center md:text-left gap-2 md:gap-0 md:mt-12">
                <div>
                    <p className="md:w-2/3">
                        I am open to exploring new opportunities that align with my skills and interests. Please feel free to reach out if you have any questions or requests.
                    </p>
                </div>
                <div className="border-2 p-4 space-y-3">
                    <div>
                        <p className="text-white font-semibold">
                            Message here
                        </p>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaLinkedin></FaLinkedin>
                        <Link href={"https://www.linkedin.com/in/nahidraz23/"}>
                            <p className="hover:text-primary-purple">nahidraz23</p>
                        </Link>
                    </div>
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <FaDiscord></FaDiscord>
                        <p className="hover:text-primary-purple">nahidraz23</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;