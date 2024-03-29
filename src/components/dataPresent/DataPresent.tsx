import { useState } from "react";
import { dataType } from "../../@types/dataType";
import DataPresentToolbar from "./DataPresentToolbar";
import DataPresentSimple from "./DataPresentSimple";
import DataPresentTimed from "./DataPresentTimed";
import DataPresentModeSelect from "./DataPresentModeSelect";
const DataPresent = ({
    data,
    toolbar = true,
    reset,
}: {
    data: dataType[];
    toolbar?: boolean;
    reset?: () => void;
}) => {
    const [presentMode, setpresentMode] = useState<"simple" | "timed">(
        "simple"
    );
    return (
        <div className="flex-col flex dark:text-gray-200">
            <div className="flex border-b md:flex-row-reverse justify-between flex-col border-gray-400">
                <DataPresentModeSelect
                    presentMode={presentMode}
                    setpresentMode={setpresentMode}
                />
                {toolbar && reset && <DataPresentToolbar reset={reset} />}
            </div>
            <div
                dir="rtl"
                className="h-[25dvh] relative top-[1px] md:h-[30dvh] overflow-y-auto"
            >
                {presentMode === "simple" ? (
                    <DataPresentSimple data={data} />
                ) : (
                    <DataPresentTimed data={data} />
                )}
            </div>
        </div>
    );
};

export default DataPresent;
