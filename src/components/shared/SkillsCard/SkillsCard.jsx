import Image from "next/image";
import { cn } from "@/lib/utils";

const SkillCard = ({
        img,
        name,
    }) => {
        return (
            <figure
                className={cn(
                    "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                    // light styles
                    "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                    // dark styles
                    "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
                )}
            >
                <div className="flex flex-row items-center justify-center gap-4">
                    <Image className="rounded-2xl" width="64" height="32" alt="" src={img} />
                    <div className="flex flex-col">
                        <figcaption className="text-lg font-medium dark:text-white">
                            {name}
                        </figcaption>
                    </div>
                </div>
            </figure>
        );
    };

export default SkillCard;