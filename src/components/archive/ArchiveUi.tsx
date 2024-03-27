import ArchiveElement from "./ArchiveElement";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const ArchiveUi = () => {
    return (
        <>
            <div className="grid grid-cols-4 md:grid-cols-5 md:px-36 md:pr-[9.5rem] grid-rows-1 mb-2 text-sm md:text-base text-center px-6 ">
                <p className=" text-right row-start-1 col-start-4 md:col-start-5">
                    نام فایل
                </p>
                <p className=" row-start-1 col-start-2 md:col-start-3">
                    تاریخ بارگذاری
                </p>
                <p className=" row-start-1 col-start-1 md:col-start-2">
                    مدت زمان
                </p>
            </div>
            <div className="h-[70vh] p-2 overflow-auto md:px-32 flex-col flex gap-2">
                {data.map((element) => (
                    <ArchiveElement key={element} />
                ))}
            </div>
        </>
    );
};

export default ArchiveUi;
