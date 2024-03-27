import ArchivePagination from "../components/archive/ArchivePagination";
import ArchiveUi from "../components/archive/ArchiveUi";
const Archive = () => {
    return (
        <div className="flex flex-col p-5 md:p-10">
            <h1 className="mb-5 text-2xl text-right md:mt-16 text-cgreen">
                آرشیو من
            </h1>
            <ArchiveUi />
            <div className="flex justify-center mt-auto">
                <ArchivePagination />
            </div>
        </div>
    );
};

export default Archive;
