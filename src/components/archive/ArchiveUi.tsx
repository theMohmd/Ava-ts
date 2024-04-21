import { motion } from "framer-motion";
import ArchiveElement from "./ArchiveElement";

type dataType = {
    date: string;
    duration: string;
    id: number;
    name: string;
};
const ArchiveUi = ({ data }: { data: dataType[] }) => {
    return (
        <div className="">
            <motion.div className="flex overflow-auto flex-col gap-2 px-2 md:px-1 max-h-[75dvh]">
                <div className="grid sticky top-0 items-center px-4 dark:bg-neutral-900 bg-gray-100 text-xs z-20 py-2 text-center md:text-sm grid-cols-[1fr_1fr_2fr] shrink-0 md:grid-cols-[1fr_1fr_1fr_4fr]">
                    <div className="hidden w-32 md:block" />
                    <p className="">مدت زمان</p>
                    <p className="">تاریخ بارگذاری</p>
                    <p className="pr-2 text-right">نام فایل</p>
                </div>
                {data.map((element, index) => (
                    <ArchiveElement
                        key={element.id}
                        id={element.id}
                        localid={index}
                        name={element.name}
                        duration={element.duration}
                        date={element.date}
                    />
                ))}
            </motion.div>
        </div>
    );
};

export default ArchiveUi;
