//component for selecting transcription language
import { useState } from "react";

import { langType } from "../../@types/lang";
const LangSelect = () => {
    const [lang, setlang] = useState<langType>("fa");
    return (
        <div className="flex text-gray-400">
            <button
                onClick={() => {
                    setlang("en");
                }}
                className={lang === "en" ? "text-cgreen": ""}
            >
                en
            </button>
            <span className="flex justify-center items-center">/</span>
            <button
                onClick={() => {
                    setlang("fa");
                }}
                className={lang === "fa" ? "text-cgreen": ""}
            >
                فا
            </button>
        </div>
    );
};

export default LangSelect;
