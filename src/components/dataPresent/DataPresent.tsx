import { useState } from "react";
import { dataType } from "../../@types/dataType";
import DataPresentToolbar from "./DataPresentToolbar";
import DataPresentSimple from "./DataPresentSimple";
import DataPresentTimed from "./DataPresentTimed";
const DataPresent = ({ data }: { data: dataType[] }) => {
    const [presentMode, setpresentMode] = useState<"simple" | "timed">(
        "simple"
    );
    return (
        <div className=" flex-col flex">
            <DataPresentToolbar
                presentMode={presentMode}
                setpresentMode={setpresentMode}
            />
            <div dir="rtl" className="h-[40dvh] overflow-y-auto">
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
