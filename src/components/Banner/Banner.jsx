import Link from "next/link";
import nahidraz from '../../../public/images/nahidrazcover.png'
import Image from "next/image";

const Banner = () => {
    return (
        <div className="flex items-center justify-around">
            <div className="flex flex-col gap-8">
                <div>
                    <div className="font-semibold text-3xl">
                        <p>I am <span className="text-primary-purple">Nahiduzzaman Raz</span></p>
                        <p><span className="text-primary-purple">Nahid Raz</span> in short</p>
                    </div>
                </div>
                <div>
                    <p>He crafts responsive websites where technologies meet creativity</p>
                </div>
                <div>
                    <Link href={'/contacts'} className="border-2 px-2 py-1 border-primary-purple"><button>Contact-Me</button></Link>
                </div>
            </div>
            <div>
                <Image src={nahidraz} alt="Nahid Raz" className="border-b-2 border-primary-purple"></Image>
            </div>
        </div>
    );
};

export default Banner;