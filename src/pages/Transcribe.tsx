//layout of transcribe page
import TranscribeBox from "../components/transcribe/TranscribeBox";

const Transcribe = () => {
    return (
        <div className="flex flex-col items-center text-center px-5">
            <h1 dir="rtl" className="mt-16 font-bold text-cgreen text-[28px]">
                تبدیل گفتار به متن
            </h1>
            <p dir="rtl" className="mt-2 text-sm max-w-[75ch] text-gray-400">
                آوا با استفاده از هزاران ساعت گفتار با صدای افراد مختلف، زبان
                فارسی را یاد گرفته است و می‌تواند متن صحبت‌ها را بنویسد.
            </p>

            <div className="mt-10 grid w-full md:w-1/2 ">
                <TranscribeBox />
            </div>
        </div>
    );
};

export default Transcribe;
