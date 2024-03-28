import { CopyIcon, DeleteIcon, DownloadIcon, WordIcon } from "../ui/Icons";
const className = "flex justify-center items-center p-2 size-10 md:size-8";
const ArchiveElementToolbar = () => {
    return (
        <div className="flex justify-start items-center pt-0 text-gray-400">
            <button className={`rounded-full hover:text-white hover:bg-cred ${className}`}>
                <DeleteIcon />
            </button>
            <button className={` hover:text-cgreen ${className}`}>
                <CopyIcon />
            </button>
            <button className={` hover:text-cgreen ${className}`}>
                <DownloadIcon />
            </button>
            <button className={` hover:text-cgreen ${className}`}>
                <WordIcon />
            </button>
        </div>
    );
};

export default ArchiveElementToolbar;
