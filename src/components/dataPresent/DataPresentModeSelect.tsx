import { TextIcon, TimeIcon } from "../ui/Icons";

type DataPresentToolbarProps = {
    presentMode: "simple" | "timed";
    setpresentMode: React.Dispatch<React.SetStateAction<"simple" | "timed">>;
};
const DataPresentModeSelect = ({
    presentMode,
    setpresentMode,
}: DataPresentToolbarProps) => {
    return (
        <div className="flex gap-5 justify-center items-center h-full">
            <button
                onClick={() => {
                    setpresentMode("timed");
                }}
                className={`border-cgreen gap-1 justify-center p-2 items-center mr-auto relative h-full
                    ${presentMode === "timed" ? "text-cgreen" : " null"} flex`}
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
                className={`border-cgreen gap-1 justify-center p-2 items-center relative h-full
                    ${presentMode === "simple" ? "text-cgreen" : " null"} flex`}
            >
                <p>متن ساده</p>
                <div className="size-4">
                    <TextIcon />
                </div>
            </button>
        </div>
    );
};

export default DataPresentModeSelect;
