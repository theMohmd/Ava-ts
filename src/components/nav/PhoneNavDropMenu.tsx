//drop menu of phone nav bar
import { motion } from "framer-motion";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "../ui/Icons";
import NavButton from "./NavButton";
import ThemeButton from "../ui/ThemeButton";
type PhoneNavDropMenuProps = {
    onClick: () => void;
};
const PhoneNavDropMenu = ({ onClick }: PhoneNavDropMenuProps) => {
    return (
        <motion.div
            className="flex absolute top-0 z-10 flex-col gap-2 p-2 pt-14 w-screen bg-cgreen rounded-[0_0_1rem_1rem]"
            onClick={onClick}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -200 }}
        >
            <NavButton to="/login">
                <div className="size-8 relative right-1">
                    <LoginIcon />
                </div>
                <p>ورود | ثبت‌نام</p>
            </NavButton>
            <NavButton to="/transcribe">
                <div className="size-8">
                    <SpeechIcon />
                </div>
                <p>تبدیل گفتار</p>
            </NavButton>
            <NavButton to="/archive">
                <div className="p-1 size-8">
                    <ArchiveIcon />
                </div>
                <p>آرشیو</p>
            </NavButton>
            <ThemeButton />
        </motion.div>
    );
};

export default PhoneNavDropMenu;
