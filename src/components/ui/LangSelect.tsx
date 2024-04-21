//component for selecting transcription language
import { useLang } from "../../hooks/useLang";

const LangSelect = () => {
    const {lang,setlang} = useLang()
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
