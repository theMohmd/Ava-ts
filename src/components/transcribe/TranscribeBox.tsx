//layout of transcribe component
import { useState } from "react";
import TranscribeBoxButton from "../ui/TranscribeBoxButton";
import TranscribeBoxRecord from "./record/TranscribeBoxRecord";
import TranscribeBoxUpload from "./upload/TranscribeBoxUpload";
import TranscribeBoxLink from "./link/TranscribeBoxLink";
import LangSelect from "../ui/LangSelect";

export type modeType = "link" | "upload" | "record";
const TranscribeBox = () => {
    const [mode, setmode] = useState<modeType>("link");
    return (
        <div className="flex flex-col w-full h-[50dvh]">
            <div className="flex gap-2 justify-start items-center">
                <div className="mr-auto ml-4">
                    <LangSelect />
                </div>
                <TranscribeBoxButton
                    onClick={setmode}
                    type="link"
                    mode={mode}
                />
                <TranscribeBoxButton
                    onClick={setmode}
                    type="upload"
                    mode={mode}
                />
                <TranscribeBoxButton
                    onClick={setmode}
                    type="record"
                    mode={mode}
                />
            </div>
            <div
                className={`grid p-5 rounded-xl border border-cgreen ${
                    mode === "record" ? "rounded-tr-none" : null
                }  grow`}
            >
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
