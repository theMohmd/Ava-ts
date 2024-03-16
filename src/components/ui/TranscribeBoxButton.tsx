import { ReactNode } from "react";

type TranscribeBoxButtonProps = {
    onClick: () => void;
    active: boolean;
    children: ReactNode;
};
const TranscribeBoxButton = ({
    onClick,
    active,
    children,
}: TranscribeBoxButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`
                flex justify-center items-center
                gap-2 rounded-[10px_10px_0_0] w-28 py-2
                ${ active
                    ? "text-white bg-cgreen text-base px-4"
                    : "text-sm font-light text-gray-400"
                }
                `}
        >
            {children}
        </button>
    );
};

export default TranscribeBoxButton;
