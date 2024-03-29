//navigation bar for Desktop
import Logo from "../ui/Logo";
import {
    ArchiveIcon,
    LoginIcon,
    MoonIcon,
    SpeechIcon,
    SunIcon,
} from "../ui/Icons.js";
import NavButton from "./NavButton.js";
const DesktopNav = ({
    setdark,
}: {
    setdark: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
    return (
        <div className="flex flex-col gap-2 py-5 px-2 h-full navBg rounded-[1rem_0_0_1rem]">
            <div className="mb-10">
                <Logo />
            </div>
            <NavButton to="/Ava-ts/login">
                <p>ورود | ثبت‌نام</p>
                <div className="relative size-8">
                    <LoginIcon />
                </div>
            </NavButton>
            <NavButton to="/Ava-ts/transcribe">
                <p>تبدیل گفتار</p>
                <div className="size-8">
                    <SpeechIcon />
                </div>
            </NavButton>
            <NavButton to="/Ava-ts/archive">
                <p>آرشیو</p>
                <div className="p-1 size-8">
                    <ArchiveIcon />
                </div>
            </NavButton>
            <button
                onClick={() => {
                    setdark((prev) => !prev);
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
        </div>
    );
};

export default DesktopNav;
