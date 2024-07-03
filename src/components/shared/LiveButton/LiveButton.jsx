import { FaEarthAfrica } from "react-icons/fa6";

const LiveButton = () => {
    return (
        <button className="border-2 px-2 py-1 border-primary-purple flex items-center gap-2 hover:border-white hover:scale-90 hover:text-white hover:font-semibold">
            <p>Live</p>
            <FaEarthAfrica></FaEarthAfrica>
        </button>
    );
};

export default LiveButton;