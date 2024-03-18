//link component ui
import { useState } from "react";
import { ChainIcon } from "../../ui/Icons";
import PasteButton from "../../ui/PasteButton";
const TranscribeBoxLinkUi = ({
    onClick,
}: {
    onClick: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const [input, setinput] = useState<string>("");
    return (
        <div className="flex flex-col items-center justify-center h-full">
            <div className="flex p-1 rounded-full border border-cgreen gap-1 ">
                <button
                    onClick={() => onClick(input)}
                    className="flex justify-center items-center rounded-full size-8 p-2 bg-cgreen"
                >
                    <ChainIcon />
                </button>
                <input
                    value={input}
                    type="text"
                    placeholder="example.com/sample.mp3"
                    className="  text-gray-500 outline-none grow w-1/2"
                    onChange={(e) => setinput(e.target.value)}
                />
                <PasteButton onClick={setinput} />
            </div>
            <p dir="rtl" className="mt-5 text-sm text-gray-400">
                نشانی اینترنتی فایل حاوی (صوتی / تصویری) را وارد و دکمه را فشار
                دهید
            </p>
        </div>
    );
};

export default TranscribeBoxLinkUi;
