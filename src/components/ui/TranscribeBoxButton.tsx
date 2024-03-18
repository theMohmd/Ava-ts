import { ChainIcon, MicIcon, UploadIcon } from "./Icons";
import { modeType } from "../TranscribeBox";
type TranscribeBoxButtonProps = {
    onClick: (value: React.SetStateAction<modeType>) => void;
    mode: modeType;
    type: modeType;
};
const TranscribeBoxButton = ({
    onClick,
    mode,
    type,
}: TranscribeBoxButtonProps) => {
    return (
        <button
            onClick={() => onClick(type)}
            className={`
                flex justify-center items-center
                gap-2 rounded-xl   py-2
                px-2 h-full
                ${
                    mode === type
                        ? "text-white bg-cgreen text-base rounded-b-none "
                        : "text-sm  font-light text-gray-400"
                } `}
        >
            <p className={` ${mode === type ? null : "hidden"}  md:block`}>
                {type === "upload"
                    ? "بارگذاری فایل"
                    : type === "record"
                      ? "ضبط صدا"
                      : type === "link"
                        ? "لینک"
                        : null}
            </p>
            <div className="size-4 [&>*]:object-contain">
                {type === "upload" ? (
                    <UploadIcon color={mode === type ? "white" : "gray"} />
                ) : type === "record" ? (
                    <div className="size-4">
                        <MicIcon color={mode === type ? "white" : "gray"} />
                    </div>
                ) : type === "link" ? (
                    <ChainIcon color={mode === type ? "white" : "gray"} />
                ) : null}
            </div>
        </button>
    );
};

export default TranscribeBoxButton;
