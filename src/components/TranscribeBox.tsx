import { useState } from "react";
import TranscribeBoxButton from "./ui/TranscribeBoxButton";
import TranscribeBoxRecord from "./TranscribeBoxRecord";
import TranscribeBoxUpload from "./TranscribeBoxUpload";
import TranscribeBoxLink from "./TranscribeBoxLink";
import LangSelect from "./ui/LangSelect";

type modeType = "link" | "upload" | "record";
const TranscribeBox = () => {
    const [mode, setmode] = useState<modeType>("link");
    return (
        <div className="flex flex-col h-[50dvh]">
            <div className="flex">
                <TranscribeBoxButton
                    onClick={() => {
                        setmode("record");
                    }}
                    active={mode == "record"}
                >
                    record
                </TranscribeBoxButton>
                <TranscribeBoxButton
                    onClick={() => {
                        setmode("upload");
                    }}
                    active={mode == "upload"}
                >
                    upload
                </TranscribeBoxButton>
                <TranscribeBoxButton
                    onClick={() => {
                        setmode("link");
                    }}
                    active={mode == "link"}
                >
                    link
                </TranscribeBoxButton>
                <LangSelect />
            </div>
            <div className="rounded-xl border border-cgreen grow">
                {mode === "record" ? (
                    <TranscribeBoxRecord />
                ) : mode === "upload" ? (
                    <TranscribeBoxUpload />
                ) : mode === "link" ? (
                    <TranscribeBoxLink />
                ) : null}
            </div>
        </div>
    );
};

export default TranscribeBox;
