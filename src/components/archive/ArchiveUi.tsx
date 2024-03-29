import { motion } from "framer-motion";
import ArchiveElement from "./ArchiveElement";

type dataType = {
    date: string;
    duration: string;
    id: number;
    request_data: { language: string; media_urls: string[] };
    request_type: string;
};
const ArchiveUi = ({ data }: { data: dataType[] }) => {
    return (
        <>
            <div
                dir="rtl"
                className="grid flex-row-reverse grid-rows-1 px-6 mb-2 text-sm text-center md:px-36 md:text-base grid-cols-[3fr_1fr_1fr] md:grid-cols-[4fr_1fr_1fr_1fr] md:pr-[9.5rem]"
            >
                <p className="text-right pr-2">نام فایل</p>
                <p className="">تاریخ بارگذاری</p>
                <p className="">مدت زمان</p>
            </div>
            <motion.div
                className="flex overflow-auto flex-col gap-2 p-2 md:px-32 h-[70vh]"
            >
                {data.map((element,index) => (
                    <ArchiveElement
                        key={element.id}
                        id={element.id}
                        localid= {index}
                        name={element.request_data.media_urls[0]}
                        duration={element.duration}
                        date={element.date}
                    />
                ))}
            </motion.div>
        </>
    );
};

export default ArchiveUi;
