import DataPresent from "../dataPresent/DataPresent";
import { useQuerySingleArchive } from "../../api/useQuerySingleArchive";
import Loading from "../ui/Loading";
import ArchiveElementToolbar from "./ArchiveElementToolbar";
import { useAlert } from "../../hooks/useAlert";

const ArchiveElementExpanded = ({ id }: { id: number }) => {
    const { data, isLoading, error } = useQuerySingleArchive(id);
    const {setalert} = useAlert()
    if(error) setalert('مشکلی وجود دارد، کمی صبر کرده و دوباره امتحان کنید')
    if (data)
        return (
            <>
                <div className="grid col-start-1 col-end-6 row-start-2 mt-4">
                    <DataPresent
                        toolbar={false}
                        data={data}
                    />
                </div>
                <div className="flex justify-center py-2 border-t border-gray-400 md:hidden mt-[1px]">
                    <ArchiveElementToolbar />
                </div>
            </>
        );
    if (isLoading)
        return (
            <div className=" p-10 text-cgreen">
                <Loading />
            </div>
        );
};

export default ArchiveElementExpanded;
