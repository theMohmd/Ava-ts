import { dataType } from "../../@types/dataType";
const DataPresentTimedElement = ({ segment }: { segment: dataType }) => {
    return (
        <div
            className="
              p-2
              rounded-md
              odd:bg-gray-200
              dark:odd:bg-neutral-800
              grid grid-cols-[6ch_6ch_1fr] gap-1
              "
        >
            <p className="font-iranSans">{segment.start}</p>
            <p className="font-iranSans">{segment.end}</p>
            <p className=" text-right mr-2">{segment.text}</p>
        </div>
    );
};

export default DataPresentTimedElement;
