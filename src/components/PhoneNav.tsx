import Logo from "./ui/Logo";
import { HamburgerIcon } from "./ui/Icons.js";
import { useState } from "react";
import PhoneNavDropMenu from "./ui/PhoneNavDropMenu.js";
const PhoneNav = () => {
    const [menu, setmenu] = useState(false);
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
