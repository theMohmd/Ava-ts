import { dataType } from "../../@types/dataType";
const DataPresentTimedElement = ({ segment }: { segment: dataType }) => {
    return (
        <div
            className="
              p-5
              rounded-xl
              odd:bg-gray-200
              dark:odd:bg-neutral-800
              flex gap-4
              "
        >
            <p className="font-iranSans">{segment.start}</p>
            <p className="font-iranSans">{segment.end}</p>
            <p className=" text-right mr-2">{segment.text}</p>
        </div>
    );
};

export default DataPresentTimedElement;
