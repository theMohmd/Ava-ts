//navigation bar for Desktop
import Logo from "../ui/Logo";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "../ui/Icons.js";
import NavButton from "./NavButton.js";
import ThemeButton from "../ui/ThemeButton.js";
import Alefba from "../../assets/svg/Alefba.svg";
import colors from "../../../colors.ts";
const DesktopNav = () => {
    return (
        <div
            style={{ backgroundImage: `url(${Alefba}) ,linear-gradient(${colors.grad1}, ${colors.grad2})`, }}

            className="alefbaBg flex flex-col gap-2 py-5 px-2 h-full rounded-[1rem_0_0_1rem]"
        >
            <div className="mb-10">
                <Logo />
            </div>
            <NavButton to="/login">
                <p>ورود | ثبت‌نام</p>
                <div className="relative size-8">
                    <LoginIcon />
                </div>
            </NavButton>
            <NavButton to="/transcribe">
                <p>تبدیل گفتار</p>
                <div className="size-8">
                    <SpeechIcon />
                </div>
            </NavButton>
            <NavButton to="/archive">
                <p>آرشیو</p>
                <div className="p-1 size-8">
                    <ArchiveIcon />
                </div>
            </NavButton>
            <ThemeButton />
        </div>
    );
};

export default DesktopNav;
