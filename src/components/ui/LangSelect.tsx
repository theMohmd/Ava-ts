import { useState } from "react";

type langType = "en" | "fa";
const LangSelect = () => {
    const [lang, setlang] = useState<langType>("fa");
    return (
        <div className="flex">
            <button>en</button>
            <p>/</p>
            <button>فا</button>
        </div>
    );
};

export default LangSelect;
