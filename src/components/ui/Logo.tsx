import { LogoIcon } from "./Icons";

const Logo = () => {
    return (
        <div
            className="
            flex items-center justify-center gap-3 text-white
            "
        >
            <p className="text-xl font-[700]">آوا</p>
            <LogoIcon />
        </div>
    );
};

export default Logo;
