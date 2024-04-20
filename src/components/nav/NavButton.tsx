//button for nav bar
import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import colors from "../../../colors"
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
                    backgroundColor: isActive ? colors.cgreenDarker: "",
                };
            }}
            className="hover:brightness-125 flex justify-between items-center py-2 px-4 font-bold text-center text-sm text-white rounded-[10px] bg-cgreenDark "
        >
            {children}
        </NavLink>
    );
};

export default NavButton;
