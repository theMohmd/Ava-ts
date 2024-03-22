import { dataType } from "../../@types/dataType";
const DataPresentSimple = ({ data }: { data: dataType[] }) => {
    return (
        <div className="pt-5 ">
            <p className="font-light text-right">{data.map((item) => item.text + " ")}</p>
        </div>
    );
};

export default DataPresentSimple;
