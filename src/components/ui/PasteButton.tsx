//button to paste from clipboard
import { ClipboardIcon } from "./Icons";
import { useAlert } from "../../hooks/useAlert";

const PasteButton = ({
    setString,
}: {
    setString: React.Dispatch<React.SetStateAction<string>>;
}) => {
    const { setalert } = useAlert()
    const pasteFromClipboard = async () => {
        try {
            const clipboardText = await navigator.clipboard.readText();
            setString(clipboardText);
        } catch (error) {
            setalert("مشکلی در خواندن کلیپبورد وجود دارد" );
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
