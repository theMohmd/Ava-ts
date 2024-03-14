import { ArchiveIcon, LoginIcon, SpeechIcon } from "./Icons";
import NavButton from "./NavButton";
interface PhoneNavDropMenuProps {
    onClick: () => void;
}
const PhoneNavDropMenu = (props: PhoneNavDropMenuProps) => {
    return (
        <div
            className="flex absolute top-0 z-10 flex-col gap-2 p-2 pt-14 w-screen bg-cgreen rounded-[0_0_1rem_1rem]"
            onClick={props.onClick}
        >
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
    );
};

export default PhoneNavDropMenu;
