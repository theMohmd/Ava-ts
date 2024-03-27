import { useState } from "react";
import { dumbdata } from "../../api/dumbData";
import DataPresent from "../dataPresent/DataPresent";
import ArchiveElementToolbar from "./ArchiveElementToolbar";
import { AnimatePresence, motion } from "framer-motion";
const ArchiveElement = () => {
    const [expanded, setexpanded] = useState(false);
    return (
        <div
            className={` duration-500 py-2 px-4 text-sm text-center rounded-md border  ${
                expanded ? "border-cgreen" : "border-gray-200"
            }  hover:shadow-md shrink-0`}
        >
            <div
                onClick={() => {
                    setexpanded((prev) => !prev);
                }}
                className="grid grid-cols-4 md:grid-cols-5"
            >
                <div className="hidden md:block">
                    <ArchiveElementToolbar />
                </div>
                <div className="justify-center flex items-center">
                    2024-03-18
                </div>
                <div className="justify-center flex items-center">00:00:44</div>
                <div className="justify-end col-span-2 text-right flex items-center">
                    name
                </div>
            </div>
            <AnimatePresence>
                {expanded && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "100%", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                    >
                        <div className="grid col-start-1 col-end-6 row-start-2 mt-4">
                            <DataPresent toolbar={false} data={dumbdata} />
                        </div>
                        <div className="flex mt-[1px] py-2 justify-center border-gray-400 md:hidden border-t">
                            <ArchiveElementToolbar />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ArchiveElement;
