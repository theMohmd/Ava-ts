import { useState } from "react";
import ArchiveElementToolbar from "./ArchiveElementToolbar";
import { AnimatePresence, motion } from "framer-motion";
import ArchiveElementExpanded from "./ArchiveElementExpanded";

type ArchiveElementProps = {
    name: string;
    date: string;
    duration: string;
    id: number;
    localid: number;
};
const ArchiveElement = ({
    name,
    date,
    duration,
    id,
    localid,
}: ArchiveElementProps) => {
    const motionVariant = {
        hidden: {
            opacity:0,
        },
        visible: {
            opacity:1,
            transition: {
                delay: 0.1 * localid,
            },
        },
    };
    const [expanded, setexpanded] = useState(false);
    return (
        <motion.div
            animate="visible"
            initial="hidden"
            variants={motionVariant}
            className={` duration-500 py-2 px-4 text-sm text-center rounded-md border  ${
                expanded
                    ? "border-cgreen"
                    : "border-gray-200 dark:border-neutral-800"
            }  hover:shadow-md shrink-0`}
        >
            <div
                onClick={() => {
                    setexpanded((prev) => !prev);
                }}
                className="grid items-center cursor-pointer grid-cols-[1fr_1fr_3fr] md:grid-cols-[1fr_1fr_1fr_4fr]"
            >
                <div className="hidden md:block">
                    <ArchiveElementToolbar />
                </div>
                <div className="flex justify-center items-center font-iranSans">
                    {duration}
                </div>
                <div className="flex justify-center items-center font-iranSans">
                    {date.substring(0, 10)}
                </div>
                <p className="overflow-hidden items-center pr-6 text-right whitespace-nowrap text-ellipsis'">
                    {name}
                </p>
            </div>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100%", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <ArchiveElementExpanded id={id} />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ArchiveElement;
