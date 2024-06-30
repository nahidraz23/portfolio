import { FaGithub } from "react-icons/fa6";

const GitHubButton = ({name}) => {
    return (
        <button className="border-2 px-2 py-1 border-primary-purple flex items-center gap-2">
            <div>
                {
                    name
                }
            </div>
            <FaGithub></FaGithub>
        </button>
    );
};

export default GitHubButton;