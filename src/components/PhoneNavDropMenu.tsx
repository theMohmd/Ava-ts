//drop menu of phone nav bar
import { motion } from "framer-motion";
import { ArchiveIcon, LoginIcon, SpeechIcon } from "./ui/Icons";
import NavButton from "./ui/NavButton";
interface PhoneNavDropMenuProps {
    onClick: () => void;
}
const PhoneNavDropMenu = ({onClick}: PhoneNavDropMenuProps) => {
    return (
        <motion.div
            className="flex absolute top-0 z-10 flex-col gap-2 p-2 pt-14 w-screen bg-cgreen rounded-[0_0_1rem_1rem]"
            onClick={onClick}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
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
        </motion.div>
    );
};

export default PhoneNavDropMenu;
