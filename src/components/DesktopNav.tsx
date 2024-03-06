import Logo from "./ui/Logo";
import NavButton from "./ui/NavButton";
import { ArchiveIcon, SpeechIcon } from "./ui/Icons.js";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);
const DesktopNav = () => {
    return (
        <div
            className="p-5 h-full rounded-[1rem_0_0_1rem]"
            style={{
                background: `
                url('src/assets/Alefba.svg') ,
                linear-gradient(${theme.colors.grad1}, ${theme.colors.grad2})
                `,
                backgroundSize: " 120% auto",
                backgroundPosition: "right",
            }}
        >
            <Logo />
            <div className="mt-10">
                <NavButton to="/Ava/speech">
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
