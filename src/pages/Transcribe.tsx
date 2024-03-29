//layout of transcribe page
import { motion } from "framer-motion";
import TranscribeBox from "../components/transcribe/TranscribeBox";

const Transcribe = () => {
    return (
        <div className="flex flex-col items-center px-5 text-center">
            <h1 dir="rtl" className="mt-16 text-3xl font-bold text-cgreen">
                تبدیل گفتار به متن
            </h1>
            <p dir="rtl" className="mt-2 text-gray-400 max-w-[75ch]">
                آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان
                فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
            </p>

            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="grid mt-10 w-full md:w-1/2"
            >
                <TranscribeBox />
            </motion.div>
        </div>
    );
};

export default Transcribe;
