//manage data and ui for upload component
import { useState } from "react";
import TranscribeBoxUploadUi from "./TranscribeBoxUploadUi";
import Loading from "../../ui/Loading";
import { useQueryUpload } from "../../../api/useQueryUpload";

TranscribeBoxUploadUi;
const TranscribeBoxUpload = () => {
    const [file, setfile] = useState<File | null>(null);
    const { data, isLoading, error } = useQueryUpload(file, "fa");

    if (data) {
        setfile(null);
        return <div> data </div>;
    }
    if (isLoading)
        return (
            <div className="text-cgreen grid ">
                <Loading />
            </div>
        );
    if (error) console.log("مشکلی پیش آمد، لطفا دوباره امتحان کنید");
    return (
        <>
            <TranscribeBoxUploadUi setfile={setfile} />
        </>
    );
};

export default TranscribeBoxUpload;
