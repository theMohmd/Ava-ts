//component for selecting transcription language
import { useContext } from "react";
import { langContextType } from "../../@types/lang";
import { LangContext } from "../../context/LangContext";
const LangSelect = () => {
    const { lang, setlang } = useContext(LangContext) as langContextType;
    return (
        <div className="flex text-gray-400">
            <button
                onClick={() => {
                    setlang("en");
                }}
                className={lang === "en" ? "text-cgreen" : ""}
            >
                en
            </button>
            <span className="flex justify-center items-center">/</span>
            <button
                onClick={() => {
                    setlang("fa");
                }}
                className={lang === "fa" ? "text-cgreen" : ""}
            >
                فا
            </button>
        </div>
    );
};

export default LangSelect;
