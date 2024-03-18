//navigation bar for phone
import Logo from "./ui/Logo";
import { useState } from "react";
import PhoneNavDropMenu from "./PhoneNavDropMenu.js";
import HamburgerIcon from "./ui/HamburgerIcon.js";
const PhoneNav = () => {
    const [menu, setmenu] = useState<boolean>(false);
    const handleClick = () => {
        setmenu((current) => !current);
    };
    return (
        <>
            <div className="navBg grid relative z-20 grid-cols-3 h-full text-black rounded-[0_0_1rem_1rem]">
                <div></div>
                <Logo />
                <div className="flex justify-end items-center pr-2 text-white">
                    <button onClick={handleClick}>
                        <HamburgerIcon />
                    </button>
                </div>
            </div>
            {menu && <PhoneNavDropMenu onClick={handleClick} />}
        </>
    );
};

export default PhoneNav;
