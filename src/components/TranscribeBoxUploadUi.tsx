//ui of upload component for transcribe

import { UploadIcon } from "./ui/Icons";
const TranscribeBoxUploadUi = () => {
    return (
        <div className="flex relative flex-col justify-center items-center p-2 rounded-xl border-2 border-dashed border-cgreen">
            <input
                type="file"
                className="absolute top-0 left-0 opacity-0 size-full bg-cred"
            />
            <div className="p-3 pt-4 rounded-full bg-cgreen size-16">
                <UploadIcon />
            </div>
            <p dir="rtl" className=" text-sm mt-5 text-gray-400">
                برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید یا
                فایل را داخلی خط‌چین بکشید <br />
                متن پیاده شده آن، در اینجا ظاهر می‌شود
            </p>
        </div>
    );
};

export default TranscribeBoxUploadUi;
