//customized button for general purpous
import { MouseEventHandler, ReactNode } from "react";

type CustomButtonProps = {
    children: ReactNode;
    onClick: MouseEventHandler;
};
const CustomButton = ({ children, onClick }: CustomButtonProps) => {
    return (
        <button
            className="flex gap-2 justify-center items-center py-2 px-4 text-white rounded-md bg-cgreen"
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default CustomButton;
