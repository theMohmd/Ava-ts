//navigation bar for Desktop
import Logo from "../ui/Logo";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "../ui/Icons.js";
import NavButton from "./NavButton.js";
const DesktopNav = () => {
    return (
        <div className="py-5 px-2 h-full navBg rounded-[1rem_0_0_1rem]">
            <Logo />
            <div className="flex flex-col gap-2 mt-10">
                <NavButton to="/Ava-ts/login">
                    <p>ورود | ثبت‌نام</p>
                    <div className="size-8 relative ">
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
            </div>
        </div>
    );
};

export default DesktopNav;
