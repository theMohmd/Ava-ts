import { MicIcon } from "../../ui/Icons";
import { useAlert } from "../../../hooks/useAlert";

const TranscribeBoxRecord = () => {
    const { setalert } = useAlert()
    return (
        <div className="flex flex-col justify-center items-center p-2">
            <button
                onClick={() => {
                    setalert("این بخش صرفا دمو بوده و کار نمی‌کند");
                }}
                className="p-3 pt-4 rounded-full bg-cgreen size-16"
            >
                <MicIcon />
            </button>
            <p dir="rtl" className="mt-5 text-sm text-gray-400">
                برای شروع به صحبت، دکمه را فشار دهید
                <br />
                متن پیاده شده آن، در اینجا ظاهر می‌شود
            </p>
        </div>
    );
};

export default TranscribeBoxRecord;
