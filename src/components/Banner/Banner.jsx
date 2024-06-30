import Link from "next/link";

const Banner = () => {
    return (
        <div className="flex flex-col gap-8">
            <div>
                <div className="font-semibold text-3xl">
                    <p>I am <span className="text-purple-600">Nahiduzzaman Raz</span></p>
                    <p><span className="text-purple-600">Nahid Raz</span> in short</p>
                </div>
            </div>
            <div>
                <p>He crafts responsive websites where technologies meet creativity</p>
            </div>
            <div>
                <Link href={'/contacts'} className="border-2 px-2 py-1 border-purple-600"><button>Contact-Me</button></Link>
            </div>
        </div>
    );
};

export default Banner;