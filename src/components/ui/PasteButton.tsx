//button to paste from clipboard
import { useContext } from "react";
import { ClipboardIcon } from "./Icons";
import { AlertContext } from "../../context/AlertContext";
import { alertType } from "../../@types/alert";

const PasteButton = ({
    setString,
}: {
    setString: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const { setalert } = useContext(AlertContext) as alertType;
    const pasteFromClipboard = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setString(clipboardText);
        } catch (error) {
            setalert("مشکلی در خواندن کلیپرود وجود دارد." );
        }
    };
    return (
        <button
            onClick={pasteFromClipboard}
            title="جایگذاری"
            className="mr-1 text-gray-400 hover:text-cgreen"
        >
            <ClipboardIcon />
        </button>
    );
};

export default PasteButton;
