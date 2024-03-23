import {
    CopyIcon,
    DownloadIcon,
    RefreshIcon,
    TextIcon,
    TimeIcon,
} from "../ui/Icons";
type DataPresentToolbarProps = {
    presentMode: "simple" | "timed";
    setpresentMode: React.Dispatch<React.SetStateAction<"simple" | "timed">>;
};
const DataPresentToolbar = ({
    presentMode,
    setpresentMode,
}: DataPresentToolbarProps) => {
    return (
        <div className="flex md:flex-row flex-col justify-between text-sm border-b border-b-gray-400">
            <div className="flex gap-5 border-b border-gray-400 md:border-none justify-center items-center ">
                <button className="flex gap-1 justify-center items-center mr-auto py-2 px-4 m-2 text-white rounded-full bg-cgreen">
                    <p>شروع دوباره</p>
                    <div className="size-4">
                        <RefreshIcon />
                    </div>
                </button>
                <button className="flex text-gray-400 size-4">
                    <CopyIcon />
                </button>
                <button className="flex text-gray-400 size-4 mr-2">
                    <DownloadIcon />
                </button>
            </div>
            <div className="flex gap-5 justify-center items-center h-full">
                <button
                    onClick={() => {
                        setpresentMode("timed");
                    }}
                    className={`border-black gap-1 justify-center p-2 items-center mr-auto relative top-[1px]  h-full ${
                        presentMode === "timed" ? "border-b" : " null"
                    }  flex`}
                >
                    <p>متن زمان‌بندی شده</p>
                    <div className="size-4">
                        <TimeIcon />
                    </div>
                </button>
                <button
                    onClick={() => {
                        setpresentMode("simple");
                    }}
                    className={`border-black gap-1 justify-center p-2 items-center relative top-[1px]  h-full ${
                        presentMode === "simple"
                            ? "border-b border-black"
                            : " null"
                    }  flex`}
                >
                    <p>متن ساده</p>
                    <div className="size-4">
                        <TextIcon />
                    </div>
                </button>
            </div>
        </div>
    );
};

export default DataPresentToolbar;
