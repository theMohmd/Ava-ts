import ArchiveUi from "../components/archive/ArchiveUi";

const Archive = () => {
    return (
        <div className=" p-5 md:p-10">
            <h1 className="text-2xl text-right mb-5 md:mt-16 text-cgreen">
                آرشیو من
            </h1>
            <ArchiveUi />
        </div>
    );
};

export default Archive;
