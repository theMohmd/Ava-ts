import { useContext } from "react";
import { MoonIcon, SunIcon } from "../ui/Icons.js";
import { ThemeContext } from "../../context/ThemeContext.js";
import { themeContextType } from "../../@types/theme.js";
const ThemeButton = () => {
    const { settheme } = useContext(ThemeContext) as themeContextType;
    return (
        <button
            onClick={() => {
                settheme((prev) => !prev);
            }}
            className="flex justify-evenly items-center py-2 px-4 mt-auto text-sm font-bold text-center text-white rounded-[10px] bg-cActiveGreen hover:brightness-125"
        >
            <div className="size-6">
                <SunIcon />
            </div>
            <p className="relative top-[2px]">/</p>
            <div className="size-5">
                <MoonIcon />
            </div>
        </button>
    );
};

export default ThemeButton;
