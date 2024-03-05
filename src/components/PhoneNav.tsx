import Logo from "./ui/Logo";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../tailwind.config.js";
const { theme } = resolveConfig(tailwindConfig);

const PhoneNav = () => {
    return (
        <div
            className="
            h-full
            grid grid-cols-3
            rounded-[0_0_1rem_1rem]
            text-black
            "
            style={{
                background: `
                url('src/assets/Alefba.svg') ,
                linear-gradient(${theme.colors.grad1}, ${theme.colors.grad2})
                `,

                backgroundSize: "25% auto",
            }}
        >
            <div></div>
            <Logo />
            <div></div>
        </div>
    );
};

export default PhoneNav;
