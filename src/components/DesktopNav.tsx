//navigation bar for Desktop
import Logo from "./ui/Logo";
import NavButton from "./ui/NavButton";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "./ui/Icons.js";
const DesktopNav = () => {
    return (
        <div className="py-5 px-2 h-full navBg rounded-[1rem_0_0_1rem]">
            <Logo />
            <div className="flex flex-col gap-2 mt-10">
                <NavButton to="/Ava/login">
                    <p>ورود | ثبت‌نام</p>
                    <div className="relative left-1">
                        <LoginIcon />
                    </div>
                </NavButton>
                <NavButton to="/Ava/transcribe">
                    <p>تبدیل گفتار</p>
                    <SpeechIcon />
                </NavButton>
                <NavButton to="/Ava/archive">
                    <p>آرشیو</p>
                    <ArchiveIcon />
                </NavButton>
            </div>
        </div>
    );
};

export default DesktopNav;
