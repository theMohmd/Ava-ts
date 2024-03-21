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
        <div className="flex flex-col justify-center items-center h-full">
            <div className="flex gap-1 p-1 rounded-full border border-cgreen">
                <button
                    onClick={() => onClick(input)}
                    className="flex justify-center items-center p-2 rounded-full size-8 bg-cgreen"
                >
                    <ChainIcon />
                </button>
                <input
                    value={input}
                    type="text"
                    placeholder="example.com/sample.mp3"
                    className="w-1/2 text-gray-500 dark:bg-neutral-900 bg-gray-100 outline-none grow"

                    onChange={(e) => setinput(e.target.value)}
                />
                <PasteButton setString={setinput} />
            </div>
            <p dir="rtl" className="mt-5 text-sm text-gray-400">
                نشانی اینترنتی فایل حاوی (صوتی / تصویری) را وارد و دکمه را فشار
                دهید
            </p>
        </div>
    );
};

export default TranscribeBoxLinkUi;
