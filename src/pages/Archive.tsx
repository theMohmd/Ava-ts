import { useContext, useMemo, useState } from "react";
import { useQueryArchive } from "../api/useQueryArchive";
import ArchivePagination from "../components/archive/ArchivePagination";
import ArchiveUi from "../components/archive/ArchiveUi";
import Loading from "../components/ui/Loading";
import { AlertContext } from "../context/AlertContext";
import { alertType } from "../@types/alert";
const Archive = () => {
    const [page, setpage] = useState(1);
    const { data, error } = useQueryArchive(page);
    const chachePageCount = useMemo(() => {
        if (data) {
            return Math.ceil(data?.data.count / 10);
        } else {
            return 0;
        }
    }, [data]);
    const { setalert } = useContext(AlertContext) as alertType;
    if (error) setalert("مشکلی پیش آمد، صفحه را رفرش کنید.");
    return (
        <div className="flex flex-col p-5 md:p-10">
            <h1 className="mb-5 text-2xl text-right md:mt-16 text-cgreen">
                آرشیو من
            </h1>

            {data === undefined ? (
                <div className="grid h-full text-cgreen">
                    <Loading />
                </div>
            ) : (
                <>
                    <ArchiveUi data={data.data.results} />
                </>
            )}
            <div className="flex justify-center mt-auto">
                <ArchivePagination count={chachePageCount} setpage={setpage} />
            </div>
        </div>
    );
};

export default Archive;
