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
            <motion.div className="flex overflow-auto flex-col gap-2 p-2 md:px-1 max-h-[75dvh]">
                <div className="grid items-center grid-cols-[1fr_1fr_2fr] md:grid-cols-[1fr_1fr_1fr_4fr] px-4 text-xs md:text-sm text-center shrink-0">
                    <div className="hidden md:block" />
                    <p className="">مدت زمان</p>
                    <p className="">تاریخ بارگذاری</p>
                    <p className="pr-2 text-right ">نام فایل</p>
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
