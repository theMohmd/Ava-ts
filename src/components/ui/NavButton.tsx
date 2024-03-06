import { NavLink } from "react-router-dom";
import { ReactNode } from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);
type NavButtonProp = {
    children: ReactNode;
    to: string;
};
const NavButton = (props: NavButtonProp) => {
    return (
        <NavLink
            to={props.to}
            style={({ isActive }) => {
                return {
                    backgroundColor: isActive ? theme.colors.cActiveGreen : "",
                };
            }}
            className="flex justify-between hover:bg-cActiveGreen  items-center py-2 px-4 font-bold text-center text-white rounded-[10px]"
        >
            {props.children}
        </NavLink>
    );
};

export default NavButton;
