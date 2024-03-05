import Logo from "./ui/Logo";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);

const DesktopNav = () => {
    return (
        <div
            className="
            h-full 
            p-5
            rounded-[1rem_0_0_1rem]
            "
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
        </div>
    );
};

export default DesktopNav;
