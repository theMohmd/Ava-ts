import { MicIcon } from "../../ui/Icons";
import Loading from "../../ui/Loading";

const TranscribeBoxRecord = () => {
    return (
        <div className="grid text-cgreen">
            <Loading />
        </div>
    );
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <div className="p-3 pt-4 rounded-full bg-cgreen size-16">
                <MicIcon />
            </div>
            <p dir="rtl" className="mt-5 text-sm text-gray-400">
                برای شروع به صحبت، دکمه را فشار دهید
                <br />
                متن پیاده شده آن، در اینجا ظاهر می‌شود
            </p>
        </div>
    );
};

export default TranscribeBoxRecord;
