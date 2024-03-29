//ui of upload component for transcribe
import { useContext, useRef, useState } from "react";
import { FileChangeIcon, SendIcon, UploadIcon } from "../../ui/Icons";
import FileDrop from "../../ui/FileDrop";
import { AlertContext } from "../../../context/AlertContext";
import { alertType } from "../../../@types/alert";
const TranscribeBoxUploadUi = ({
    setfile,
}: {
    setfile: React.Dispatch<React.SetStateAction<File | null>>;
}) => {
    const { setalert } = useContext(AlertContext) as alertType;
    const inputRef = useRef<HTMLInputElement>(null);
    const [localFile, setlocalFile] = useState<File | null>(null);

    const handleUpload = () => {
        if (!inputRef.current?.files) return;
        const file: FileList = inputRef.current?.files;
        if (file.length > 1) {
            setalert("فقط یک فایل مجاز است");
        } else {
            setlocalFile(file[0]);
        }
    };
    //ui after selecting file
    if (localFile)
        return (
            <div className="flex flex-col justify-center items-center ">
                <p className=" border border-cgreen rounded-md py-2 px-6 w-full text-gray-400 text-2xl">{localFile.name}</p>
                <div className="flex gap-2 w-full mt-2">
                    <button
                        className="button grow"
                        onClick={() => {
                            setfile(localFile);
                        }}
                    >
                        <div className="size-5 rotate-180">
                            <SendIcon />
                        </div>
                        <p>ارسال فایل</p>
                    </button>
                    <button
                        className="button grow"
                        onClick={() => {
                            setlocalFile(null);
                        }}
                    >
                        <div className="size-5">
                            <FileChangeIcon />
                        </div>
                        <p>تغییر فایل</p>
                    </button>
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
