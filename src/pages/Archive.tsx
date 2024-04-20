import { useMemo, useState } from "react";
import { useQueryArchive } from "../api/useQueryArchive";
import ArchivePagination from "../components/archive/ArchivePagination";
import ArchiveUi from "../components/archive/ArchiveUi";
import Loading from "../components/ui/Loading";
import { useAlert } from "../hooks/useAlert";
const Archive = () => {
    const [page, setpage] = useState(1);
    const { data, isLoading, error } = useQueryArchive(page);
    const chachePageCount = useMemo(() => {
        if (data) {
            return Math.ceil(data.count / 10);
        } else {
            return 0;
        }
    }, [data]);
    const { setalert } = useAlert()
    if (error) setalert("مشکلی پیش آمد، صفحه را رفرش کنید.");
    return (
        <div className="dark:text-gray-200 flex flex-col p-5 md:p-10">
            <h1 className="mb-5 text-2xl text-right md:mt-16 text-cgreen">
                آرشیو من
            </h1>

            {isLoading ? (
                <div className="grid h-full text-cgreen">
                    <Loading />
                </div>
            ) : (
                !!data && <ArchiveUi data={data.results} />
            )}
            <div className="flex justify-center mt-auto">
                <ArchivePagination count={chachePageCount} setpage={setpage} />
            </div>
        </div>
    );
};

export default Archive;
