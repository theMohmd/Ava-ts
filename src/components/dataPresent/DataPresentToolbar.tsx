import { CopyIcon, DownloadIcon, RefreshIcon } from "../ui/Icons";
const DataPresentToolbar = () => {
    return (
        <div className="flex flex-col justify-between text-sm md:flex-row md:items-end">
            <div className="flex gap-5 justify-center items-center border-b border-gray-400 md:border-none">
                <button className="flex gap-1 justify-center items-center py-2 px-4 m-2 mr-auto text-white rounded-full bg-cgreen">
                    <p>شروع دوباره</p>
                    <div className="size-4">
                        <RefreshIcon />
                    </div>
                </button>
                <button className="flex text-gray-400 size-4">
                    <CopyIcon />
                </button>
                <button className="flex mr-2 text-gray-400 size-4">
                    <DownloadIcon />
                </button>
            </div>
        </div>
    );
};

export default DataPresentToolbar;
