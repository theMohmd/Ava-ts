import Logo from "./ui/Logo";
import NavButton from "./ui/NavButton";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "./ui/Icons.js";
const DesktopNav = () => {
    return (
        <div className="py-5 px-2 h-full navBg rounded-[1rem_0_0_1rem]">
            <Logo />
            <div className="flex flex-col gap-2 mt-10">
                <NavButton to="/Ava/login">
                    <div className="relative right-1">
                        <LoginIcon />
                    </div>
                    <p>ورود | ثبت‌نام</p>
                </NavButton>
                <NavButton to="/Ava/transcribe">
                    <SpeechIcon />
                    <p>تبدیل گفتار</p>
                </NavButton>
                <NavButton to="/Ava/archive">
                    <ArchiveIcon />
                    <p>آرشیو</p>
                </NavButton>
            </div>
        </div>
    );
};

export default DesktopNav;
