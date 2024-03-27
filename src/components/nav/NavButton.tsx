//button for nav bar
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
type NavButtonProp = {
    children: ReactNode;
    to: string;
};
const NavButton = ({children, to}: NavButtonProp) => {
    return (
        <NavLink
            to={to}
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? "rgba(0,0,0,0.5)" : "",
                };
            }}
            className=" flex justify-between items-center py-2 px-4 font-bold text-center text-sm text-white rounded-[10px] bg-cActiveGreen brightness-125"
        >
            {children}
        </NavLink>
    );
};

export default NavButton;
