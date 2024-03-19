//ui of upload component for transcribe
import { useRef, useState } from "react";
import { FileChangeIcon, SendIcon, UploadIcon } from "../../ui/Icons";
import FileDrop from "../../ui/FileDrop";
import CustomButton from "../../ui/CustomButton";

const TranscribeBoxUploadUi = ({
    setfile,
}: {
    setfile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [localFile, setlocalFile] = useState<File | null>(null);

    const handleUpload = () => {
        if (!inputRef.current?.files) return;
        const file: FileList = inputRef.current?.files;
        if (file.length > 1) {
            alert("فقط یک فایل مجاز است");
        } else {
            setlocalFile(file[0]);
        }
    };
    //ui after selecting file
    if (localFile)
        return (
            <div className="flex flex-col justify-center items-center ">
                <p className="text-gray-400 text-2xl">{localFile.name}</p>
                <div className="flex gap-2 mt-5">
                    <CustomButton
                        onClick={() => {
                            setfile(localFile);
                        }}
                    >
                        <div className="size-5 rotate-180">
                            <SendIcon />
                        </div>
                        <p>ارسال فایل</p>
                    </CustomButton>
                    <CustomButton
                        onClick={() => {
                            setlocalFile(null);
                        }}
                    >
                        <div className="size-5">
                            <FileChangeIcon />
                        </div>
                        <p>تغییر فایل</p>
                    </CustomButton>
                </div>
            </div>
        );
    //initial ui before selecting any file
    return (
        <FileDrop setfile={setlocalFile}>
            <div className="size-full flex relative flex-col justify-center items-center p-2 rounded-md border-2 border-dashed border-cgreen">
                <button
                    onClick={() => {
                        inputRef.current?.click();
                    }}
                    className="p-3 pt-4 rounded-full bg-cgreen size-16"
                >
                    <UploadIcon />
                </button>
                <p dir="rtl" className=" text-sm mt-5 text-gray-400">
                    برای بارگذاری فایل گفتاری (صوتی/تصویری)، دکمه را فشار دهید
                    یا فایل را داخلی خط‌چین بکشید <br />
                    متن پیاده شده آن، در اینجا ظاهر می‌شود
                </p>
                <input
                    onChange={handleUpload}
                    accept=".wav, .mp4, .mp3"
                    ref={inputRef}
                    type="file"
                    className="hidden"
                />
            </div>
        </FileDrop>
    );
};

export default TranscribeBoxUploadUi;
