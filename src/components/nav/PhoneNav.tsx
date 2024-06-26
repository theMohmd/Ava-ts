//navigation bar for phone
import Logo from "../ui/Logo";
import { useState } from "react";
import PhoneNavDropMenu from "./PhoneNavDropMenu.js";
import { HamburgerIcon } from "../ui/Icons.js";
import { AnimatePresence } from "framer-motion";
const PhoneNav = () => {
    const [menu, setmenu] = useState<boolean>(false);
    const handleClick = () => {
        setmenu((current) => !current);
    };
    return (
        <>
            <div
            style={{
                backgroundSize: "30%",
                backgroundPositionY:"10%"
            }}
                className="alefbaBg grid relative z-40 grid-cols-3 h-full text-black rounded-[0_0_1rem_1rem]"
            >
                <div></div>
                <Logo />
                <div className="flex justify-end items-center pr-2 text-white">
                    <button onClick={handleClick}>
                        <HamburgerIcon />
                    </button>
                </div>
            </div>
            <AnimatePresence>
                {menu && <PhoneNavDropMenu onClick={handleClick} />}
            </AnimatePresence>
        </>
    );
};

export default PhoneNav;
