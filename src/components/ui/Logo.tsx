//logo
import { Link } from "react-router-dom";
import { LogoIcon } from "./Icons";

const Logo = () => {
    return (
        <Link
            to="/"
            className="
            flex items-center justify-center gap-3 text-white
            "
        >
            <p className="text-xl font-[700]">آوا</p>
            <div className="size-8">
                <LogoIcon />
            </div>
        </Link>
    );
};

export default Logo;
