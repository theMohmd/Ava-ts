import { dataType } from "../../@types/dataType";
import DataPresentTimedElement from "./DataPresentTimedElement";

const DataPresentTimed = ({ data }: { data: dataType[] }) => {
    return (
        <div className="pt-5 " >
            {data.map((item, index) => (
                <DataPresentTimedElement key={index} segment={item} />
            ))}
        </div>
    );
};

export default DataPresentTimed;
