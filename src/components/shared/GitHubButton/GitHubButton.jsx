import { FaGithub } from "react-icons/fa6";

const GitHubButton = () => {
    return (
        <button className="text-white flex items-center gap-2 border-2 px-2 py-1 border-primary-purple hover:border-white hover:scale-90 hover:text-white hover:font-semibold">
            <p>GitHub</p>
            <FaGithub className=""></FaGithub>
        </button>
    );
};

export default GitHubButton;